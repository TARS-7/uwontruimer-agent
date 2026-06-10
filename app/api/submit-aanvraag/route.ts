import { NextRequest } from 'next/server'
import { createSign } from 'crypto'
import { Client } from 'pg'
import type { Offerte, AddressData } from '@/lib/types'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubmitInput {
  naam: string
  email: string
  telefoon?: string
  address: AddressData
  eigendomstype: 'huur' | 'koop' | null
  opleveringsdatum?: string
  inspectieWerkzaamheden: string[]
  offerte: Offerte
  fotoUrls: string[]
  fotosWaardevollUrls: string[]
  ontruimingType?: string
  woningType?: string
  woningGrootte?: string
  waardevol?: string
}

// ─── Rate limiting (in-memory, per serverless instance) ───────────────────────

const MAX_REQUESTS_PER_HOUR = 5
const WINDOW_MS = 60 * 60 * 1000

const rateLimitMap = new Map<string, number[]>()

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (timestamps.length >= MAX_REQUESTS_PER_HOUR) {
    return { allowed: false, remaining: 0 }
  }
  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR - timestamps.length }
}

// ─── Input validation ─────────────────────────────────────────────────────────

function validateBody(body: unknown): string | null {
  if (!body || typeof body !== 'object') return 'Ongeldig verzoek'
  const b = body as Record<string, unknown>

  if (!b.naam || typeof b.naam !== 'string' || !b.naam.trim())
    return 'Naam is verplicht'
  if (!b.email || typeof b.email !== 'string' || !b.email.includes('@'))
    return 'Geldig e-mailadres is verplicht'
  if (!b.address || typeof b.address !== 'object')
    return 'Adresgegevens zijn verplicht'

  const addr = b.address as Record<string, unknown>
  if (!addr.straat || !addr.huisnummer || !addr.postcode || !addr.woonplaats)
    return 'Adresgegevens zijn onvolledig'

  if (!b.offerte || typeof b.offerte !== 'object')
    return 'Offertegegevens zijn verplicht'

  const off = b.offerte as Record<string, unknown>
  if (!off.referentie || typeof off.referentie !== 'string')
    return 'Offertereferentie is verplicht'
  if (typeof off.totaalMin !== 'number' || typeof off.totaalMax !== 'number')
    return 'Offertebedragen zijn verplicht'

  return null
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = new Intl.NumberFormat('nl-NL', {
  style: 'currency', currency: 'EUR',
  minimumFractionDigits: 0, maximumFractionDigits: 0,
})
const formatBedrag = (n: number) => fmt.format(n)

function formatAdres(a: AddressData): string {
  const nr = `${a.huisnummer}${a.huisletter ?? ''}${a.toevoeging ? ' ' + a.toevoeging : ''}`
  return `${a.straat} ${nr}, ${a.postcode} ${a.woonplaats}`
}

function datumVandaag(): string {
  return new Date().toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

// ─── Google service account JWT ───────────────────────────────────────────────

function b64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function makeJWT(email: string, privateKey: string, scope: string): string {
  const now = Math.floor(Date.now() / 1000)
  const header  = b64url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })))
  const payload = b64url(Buffer.from(JSON.stringify({
    iss: email, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  })))
  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  return `${header}.${payload}.${b64url(sign.sign(privateKey))}`
}

async function getAccessToken(email: string, privateKey: string, scope: string): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: makeJWT(email, privateKey, scope),
    }),
  })
  const data = await res.json()
  if (!data.access_token) throw new Error(`Google auth mislukt: ${data.error_description ?? data.error}`)
  return data.access_token
}

// ─── Google Sheets append ─────────────────────────────────────────────────────

async function appendToSheets(sheetId: string, token: string, row: string[]): Promise<void> {
  const tab   = process.env.GOOGLE_SHEETS_TAB ?? 'Aanvragen'
  const range = encodeURIComponent(`${tab}!A:S`)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [row] }),
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Sheets API (${res.status}): ${txt.slice(0, 200)}`)
  }
}

// ─── Firestore (REST API) ─────────────────────────────────────────────────────

type FirestoreValue =
  | { stringValue: string }
  | { integerValue: string }
  | { arrayValue: { values: { stringValue: string }[] } }

interface FirestoreDoc {
  naam: string
  email: string
  telefoon: string
  adres: string
  eigendomstype: string
  opleveringsdatum: string
  referentie: string
  bedragMin: number
  bedragMax: number
  fotoUrls: string[]
  fotosWaardevollUrls: string[]
  werkzaamheden: string[]
  aanvraagDatum: string
}


function toFirestoreFields(doc: FirestoreDoc): Record<string, FirestoreValue> {
  function str(v: string): { stringValue: string }        { return { stringValue: v } }
  function int(v: number): { integerValue: string }        { return { integerValue: String(Math.round(v)) } }
  function arr(v: string[]): { arrayValue: { values: { stringValue: string }[] } } {
    return { arrayValue: { values: v.map((s) => ({ stringValue: s })) } }
  }

  return {
    naam:                str(doc.naam),
    email:               str(doc.email),
    telefoon:            str(doc.telefoon),
    adres:               str(doc.adres),
    eigendomstype:       str(doc.eigendomstype ?? ''),
    opleveringsdatum:    str(doc.opleveringsdatum),
    referentie:          str(doc.referentie),
    bedragMin:           int(doc.bedragMin),
    bedragMax:           int(doc.bedragMax),
    fotoUrls:            arr(doc.fotoUrls),
    fotosWaardevollUrls: arr(doc.fotosWaardevollUrls),
    werkzaamheden:       arr(doc.werkzaamheden),
    aanvraagDatum:       str(doc.aanvraagDatum),
    fase:                str('01 - Nieuw'),
    bron:                str('Analyse tool'),
    aangemaaktOp:        str(new Date().toISOString()),
  }
}

async function saveToFirestore(doc: FirestoreDoc): Promise<void> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  const apiKey    = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  if (!projectId || !apiKey) throw new Error('Firebase project niet geconfigureerd')

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)

  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/aanvragen?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: toFirestoreFields(doc) }),
        signal: controller.signal,
      }
    )
    if (!res.ok) {
      const txt = await res.text()
      throw new Error(`Firestore REST (${res.status}): ${txt.slice(0, 200)}`)
    }
  } finally {
    clearTimeout(timer)
  }
}

// ─── Apps Script webhook ──────────────────────────────────────────────────────

async function notifyAppsScript(payload: {
  naam: string
  email: string
  telefoon: string
  adres: string
  notitie: string
}): Promise<void> {
  const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL
  if (!webhookUrl) return

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const responseText = await res.text()
  console.log('[webhook] status:', res.status)
  console.log('[webhook] body:', responseText.slice(0, 500))
  if (!res.ok) {
    throw new Error(`Apps Script webhook (${res.status}): ${responseText.slice(0, 200)}`)
  }
}

// ─── Dashboard webhook ────────────────────────────────────────────────────────

async function notifyDashboard(data: {
  naam: string
  email: string
  telefoon: string
  adres: string
  postcode?: string
  gemeente?: string
  notitie?: string
  fotoUrls?: string[]
  fotosWaardevollUrls?: string[]
  ontruimingType?: string
  woningType?: string
  woningGrootte?: string
  waardevol?: string
  bedragMin?: number
  bedragMax?: number
}): Promise<void> {
  const dashboardUrl = 'https://app.uwontruimer.nl/api/webhooks/wizard'
  const secret = process.env.WEBHOOK_SECRET ?? ''
  console.log('[debug-dashboard] URL:', dashboardUrl)
  console.log('[debug-dashboard] secret prefix:', secret.slice(0, 8) || '(leeg!)')
  let res: Response
  try {
    res = await fetch(dashboardUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': secret,
      },
      body: JSON.stringify({
        naam: data.naam,
        email: data.email,
        telefoon: data.telefoon,
        adres: data.adres,
        postcode: data.postcode || '',
        gemeente: data.gemeente || '',
        type: data.ontruimingType || 'woning',
        opmerking: data.notitie || '',
        bron: 'wizard',
        aiAnalyse: '',
        fotoUrls: data.fotoUrls ?? [],
        fotosWaardevollUrls: data.fotosWaardevollUrls ?? [],
        ontruimingType: data.ontruimingType || '',
        woningType: data.woningType || '',
        woningGrootte: data.woningGrootte || '',
        waardevol: data.waardevol || '',
        bedragMin: data.bedragMin ?? null,
        bedragMax: data.bedragMax ?? null,
      }),
    })
  } catch (err) {
    console.error('[dashboard-webhook] Fetch mislukt:', err instanceof Error ? err.message : err)
    throw err
  }

  const responseBody = await res.text().catch(() => '')
  console.log('[debug-dashboard] response status:', res.status, res.statusText)
  console.log('[debug-dashboard] response body:', responseBody.slice(0, 200))

  if (!res.ok) {
    console.error(`[dashboard-webhook] Non-200 response: ${res.status} ${res.statusText} — ${responseBody.slice(0, 200)}`)
    throw new Error(`Dashboard webhook ${res.status}`)
  }

  console.log('[dashboard-webhook] OK:', res.status)
}

// ─── Atlas Postgres ───────────────────────────────────────────────────────────

async function saveToAtlas(naam: string, bron: string): Promise<void> {
  const client = new Client({
    host: process.env.ATLAS_DB_HOST,
    user: process.env.ATLAS_DB_USER,
    password: process.env.ATLAS_DB_PASSWORD,
    database: process.env.ATLAS_DB_NAME,
    ssl: { rejectUnauthorized: false }
  })
  await client.connect()
  await client.query(
    `SET app.actor = 'wizard'`
  )
  await client.query(
    `INSERT INTO klant (type, bron) VALUES ($1, $2)`,
    ['particulier', bron]
  )
  await client.end()
}

// ─── Atlas event ─────────────────────────────────────────────────────────────

async function stuurAtlasEvent(type: string, bron: string): Promise<void> {
  await fetch('https://event-service-1012181768627.europe-west4.run.app/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Atlas-Token': 'pqqrb8btWQZjU_sHZgQOvfiRxGZLsqVrOj_JqPvW2Kk'
    },
    body: JSON.stringify({ entiteit: 'klant', data: { type, bron } })
  })
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // 1 — Rate limit
  const ip = getClientIp(request)
  const { allowed, remaining } = checkRateLimit(ip)
  if (!allowed) {
    return Response.json(
      { error: 'Te veel aanvragen. Probeer het over een uur opnieuw.' },
      { status: 429, headers: { 'Retry-After': '3600', 'X-RateLimit-Remaining': '0' } },
    )
  }

  // 2 — Parse JSON body
  let body: SubmitInput
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  // 3 — Validate required fields
  const validationError = validateBody(body)
  if (validationError) {
    console.error('[submit-aanvraag] Validatie mislukt:', validationError, JSON.stringify(body).slice(0, 500))
    return Response.json({ error: validationError }, { status: 422 })
  }

  const { naam, email, address, eigendomstype, offerte } = body
  const telefoon = body.telefoon ?? ''
  const opleveringsdatum = body.opleveringsdatum ?? ''
  const fotoUrls           = Array.isArray(body.fotoUrls)           ? body.fotoUrls           : []
  const fotosWaardevollUrls = Array.isArray(body.fotosWaardevollUrls) ? body.fotosWaardevollUrls : []

  const adres       = formatAdres(address)
  const prijsMin    = formatBedrag(offerte.totaalMin)
  const prijsMax    = formatBedrag(offerte.totaalMax)
  const bedragRange = `${prijsMin} - ${prijsMax}`
  const vandaag     = datumVandaag()
  const plusDrie    = new Date(Date.now() + 3 * 86400000)
    .toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' })

  const sheetId = process.env.GOOGLE_SHEETS_ID
  const saEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const saKey   = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n')

  const sheetsConfigured = !!(sheetId && saEmail && saKey)

  // Firestore document — altijd aangemaakt
  const firestoreDoc: FirestoreDoc = {
    naam, email, telefoon,
    adres,
    eigendomstype:       eigendomstype ?? '',
    opleveringsdatum,
    referentie:          offerte.referentie,
    bedragMin:           offerte.totaalMin,
    bedragMax:           offerte.totaalMax,
    fotoUrls,
    fotosWaardevollUrls,
    werkzaamheden:       body.inspectieWerkzaamheden ?? [],
    aanvraagDatum:       vandaag,
  }

  // Sheets rij
  async function doSheets(): Promise<void> {
    const token = await getAccessToken(saEmail!, saKey!, 'https://www.googleapis.com/auth/spreadsheets')
    // A=naam, B=email, C="Particulier", D="01 - Nieuw", E="", F=opleveringsdatum,
    // G=vandaag, H=vandaag, I=+3dagen, J="Analyse tool", K=bedragMinMax,
    // L="", M=referentie, N="", O=volledigAdres, P="", Q=telefoon,
    // R=fotoUrls, S=fotosWaardevollUrls
    const row: string[] = [
      naam, email, 'Particulier', '01 - Nieuw', '', opleveringsdatum,
      vandaag, vandaag, plusDrie, 'Analyse tool', bedragRange,
      '', offerte.referentie, '', adres, '', telefoon,
      fotoUrls.join('\n'),
      fotosWaardevollUrls.join('\n'),
    ]
    await appendToSheets(sheetId!, token, row)
  }

  const notitieOnderdelen = [
    `${offerte.referentie} | ${bedragRange}`,
    body.ontruimingType,
    body.woningType && body.woningGrootte ? `${body.woningType} · ${body.woningGrootte}` : body.woningType,
    body.waardevol ? `waardevol: ${body.waardevol}` : null,
  ].filter(Boolean).join(' | ')

  const webhookPayload = {
    naam,
    email,
    telefoon,
    adres,
    notitie: notitieOnderdelen,
  }

  // Run all in parallel — dashboard webhook mee in allSettled zodat fouten gelogd worden
  const [sheetsResult, firestoreResult, webhookResult, atlasResult, atlasDbResult, dashboardResult] = await Promise.allSettled([
    sheetsConfigured ? doSheets() : Promise.reject(new Error('Sheets niet geconfigureerd')),
    saveToFirestore(firestoreDoc),
    notifyAppsScript(webhookPayload),
    stuurAtlasEvent('particulier', 'wizard'),
    saveToAtlas(naam, 'wizard'),
    notifyDashboard({
      naam,
      email,
      telefoon,
      adres,
      postcode: address.postcode,
      gemeente: address.woonplaats,
      notitie: webhookPayload.notitie,
      fotoUrls,
      fotosWaardevollUrls,
      ontruimingType: body.ontruimingType,
      woningType: body.woningType,
      woningGrootte: body.woningGrootte,
      waardevol: body.waardevol,
      bedragMin: offerte.totaalMin,
      bedragMax: offerte.totaalMax,
    }),
  ])

  const sheetsOk    = sheetsResult.status === 'fulfilled'
  const firestoreOk = firestoreResult.status === 'fulfilled'
  const webhookOk   = webhookResult.status === 'fulfilled'

  if (!sheetsOk) {
    const msg = sheetsResult.status === 'rejected'
      ? (sheetsResult.reason instanceof Error ? sheetsResult.reason.message : String(sheetsResult.reason))
      : ''
    console.error('[submit-aanvraag] Sheets fout:', msg)
  }
  if (!firestoreOk) {
    const msg = firestoreResult.status === 'rejected'
      ? (firestoreResult.reason instanceof Error ? firestoreResult.reason.message : String(firestoreResult.reason))
      : ''
    console.error('[submit-aanvraag] Firestore fout:', msg)
  }
  if (!webhookOk) {
    const msg = webhookResult.status === 'rejected'
      ? (webhookResult.reason instanceof Error ? webhookResult.reason.message : String(webhookResult.reason))
      : ''
    console.error('[submit-aanvraag] Apps Script webhook fout:', msg)
  }

  if (dashboardResult.status === 'rejected') {
    const msg = dashboardResult.reason instanceof Error ? dashboardResult.reason.message : String(dashboardResult.reason)
    console.error('[submit-aanvraag] Dashboard webhook fout:', msg)
  } else {
    console.log('[submit-aanvraag] Dashboard webhook geslaagd')
  }

  if (!sheetsOk && !firestoreOk) {
    return Response.json({ error: 'Opslaan mislukt. Probeer opnieuw.' }, { status: 500 })
  }

  const dashboardOk = dashboardResult.status === 'fulfilled'
  const opgeslagenIn = [sheetsOk && 'sheets', firestoreOk && 'firestore', webhookOk && 'webhook', dashboardOk && 'dashboard'].filter(Boolean)
  return Response.json({ ok: true, opgeslagenIn })
}
