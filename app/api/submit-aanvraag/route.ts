import { NextRequest } from 'next/server'
import { createSign } from 'crypto'
import type { Offerte, AddressData } from '@/lib/types'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubmitInput {
  naam: string
  email: string
  telefoon: string
  address: AddressData
  eigendomstype: 'huur' | 'koop' | null
  opleveringsdatum: string
  inspectieWerkzaamheden: string[]
  offerte: Offerte
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

// ─── Google Sheets auth (service account JWT) ─────────────────────────────────

function b64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function makeJWT(email: string, privateKey: string): string {
  const now = Math.floor(Date.now() / 1000)
  const header  = b64url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })))
  const payload = b64url(Buffer.from(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })))
  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const sig = b64url(sign.sign(privateKey))
  return `${header}.${payload}.${sig}`
}

async function getAccessToken(email: string, privateKey: string): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: makeJWT(email, privateKey),
    }),
  })
  const data = await res.json()
  if (!data.access_token) throw new Error(`Google auth mislukt: ${data.error_description ?? data.error}`)
  return data.access_token
}

// ─── Google Sheets append ─────────────────────────────────────────────────────

async function appendToSheets(sheetId: string, token: string, row: string[]): Promise<void> {
  const tab   = process.env.GOOGLE_SHEETS_TAB ?? 'Aanvragen'
  const range = encodeURIComponent(`${tab}!A:Q`)
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

// ─── Firestore fallback (REST API) ────────────────────────────────────────────

async function saveToFirestore(data: Record<string, string>): Promise<void> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  const apiKey    = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  if (!projectId || !apiKey) throw new Error('Firebase project niet geconfigureerd')

  const fields: Record<string, { stringValue: string }> = {}
  for (const [k, v] of Object.entries({ ...data, aangemaaktOp: new Date().toISOString() })) {
    fields[k] = { stringValue: v }
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)

  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/aanvragen?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
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

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: SubmitInput
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  const { naam, email, telefoon, address, eigendomstype, opleveringsdatum, offerte } = body

  // Build the CRM row
  const adres       = formatAdres(address)
  const prijsMin    = formatBedrag(offerte.totaalMin)
  const prijsMax    = formatBedrag(offerte.totaalMax)
  const bedragRange = `${prijsMin} - ${prijsMax}`
  const vandaag     = datumVandaag()
  const plusDrie    = new Date(Date.now() + 3 * 86400000)
    .toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' })

  // A=naam, B=email, C="Particulier", D="01 - Nieuw", E="", F=opleveringsdatum,
  // G=vandaag, H=vandaag, I=+3dagen, J="Analyse tool", K=bedragMinMax,
  // L="", M=referentie, N="", O=volledigAdres, P="", Q=telefoon
  const row: string[] = [
    naam, email, 'Particulier', '01 - Nieuw', '', opleveringsdatum,
    vandaag, vandaag, plusDrie, 'Analyse tool', bedragRange,
    '', offerte.referentie, '', adres, '', telefoon,
  ]
  const firestoreData: Record<string, string> = {
    naam, email, telefoon, adres, opleveringsdatum,
    bedragRange, referentie: offerte.referentie,
    datumAanvraag: vandaag, fase: '01 - Nieuw',
  }

  const sheetId    = process.env.GOOGLE_SHEETS_ID
  const saEmail    = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const saKey      = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n')

  const sheetsConfigured = !!(sheetId && saEmail && saKey)
  let sheetsOk = false
  let firestoreOk = false
  const errors: string[] = []

  // 1 — Try Google Sheets
  if (sheetsConfigured) {
    try {
      const token = await getAccessToken(saEmail!, saKey!)
      await appendToSheets(sheetId!, token, row)
      sheetsOk = true
    } catch (err) {
      console.error('[submit-aanvraag] Sheets fout:', err)
      errors.push('Google Sheets: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  // 2 — Firestore fallback (always try when Sheets failed or not configured)
  if (!sheetsOk) {
    try {
      await saveToFirestore(firestoreData)
      firestoreOk = true
    } catch (err) {
      console.error('[submit-aanvraag] Firestore fout:', err)
      errors.push('Firestore: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  if (!sheetsOk && !firestoreOk) {
    return Response.json({ error: 'Opslaan mislukt. Probeer opnieuw.', details: errors }, { status: 500 })
  }

  return Response.json({
    ok: true,
    opgeslagenIn: sheetsOk ? 'sheets' : 'firestore',
  })
}
