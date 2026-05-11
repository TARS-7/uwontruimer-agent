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

// ─── Firebase Storage upload ──────────────────────────────────────────────────

async function uploadPhotos(fotos: File[], referentie: string): Promise<string[]> {
  const bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  if (!bucket || !apiKey || fotos.length === 0) return []

  const urls: string[] = []

  for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i]
    const ext  = foto.type === 'image/png' ? 'png' : foto.type === 'image/webp' ? 'webp' : 'jpg'
    const path = `aanvragen/${referentie}/foto-${i}.${ext}`
    const fileBuffer = Buffer.from(await foto.arrayBuffer())

    try {
      const res = await fetch(
        `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucket)}/o?uploadType=media&name=${encodeURIComponent(path)}&key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': foto.type },
          body: fileBuffer,
        }
      )
      if (res.ok) {
        const data = await res.json() as { downloadTokens?: string; name?: string }
        const downloadToken = data.downloadTokens
        if (downloadToken) {
          urls.push(
            `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucket)}/o/${encodeURIComponent(path)}?alt=media&token=${downloadToken}`
          )
        }
      } else {
        console.error(`[submit-aanvraag] Storage upload foto ${i} mislukt:`, res.status, await res.text())
      }
    } catch (err) {
      console.error(`[submit-aanvraag] Storage upload foto ${i} exception:`, err)
    }
  }

  return urls
}

// ─── Google Sheets append ─────────────────────────────────────────────────────

async function appendToSheets(sheetId: string, token: string, row: string[]): Promise<void> {
  const tab   = process.env.GOOGLE_SHEETS_TAB ?? 'Aanvragen'
  const range = encodeURIComponent(`${tab}!A:R`)
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
  // Parse multipart FormData (contains JSON `data` field + optional `foto-N` files)
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  let body: SubmitInput
  try {
    body = JSON.parse(formData.get('data') as string)
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  // Collect uploaded photos
  const fotos: File[] = []
  for (let i = 0; ; i++) {
    const f = formData.get(`foto-${i}`)
    if (!f || !(f instanceof File)) break
    fotos.push(f)
  }

  const { naam, email, telefoon, address, eigendomstype, opleveringsdatum, offerte } = body

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
  let sheetsOk    = false
  let firestoreOk = false
  const errors: string[] = []

  // 1 — Try Google Sheets (+ Storage upload)
  if (sheetsConfigured) {
    try {
      const token = await getAccessToken(
        saEmail!,
        saKey!,
        'https://www.googleapis.com/auth/spreadsheets',
      )

      // Upload photos to Firebase Storage (API key auth, no OAuth needed)
      const fotoUrls = await uploadPhotos(fotos, offerte.referentie)

      // A=naam, B=email, C="Particulier", D="01 - Nieuw", E="", F=opleveringsdatum,
      // G=vandaag, H=vandaag, I=+3dagen, J="Analyse tool", K=bedragMinMax,
      // L="", M=referentie, N="", O=volledigAdres, P="", Q=telefoon, R=fotoUrls
      const row: string[] = [
        naam, email, 'Particulier', '01 - Nieuw', '', opleveringsdatum,
        vandaag, vandaag, plusDrie, 'Analyse tool', bedragRange,
        '', offerte.referentie, '', adres, '', telefoon,
        fotoUrls.join('\n'),
      ]

      await appendToSheets(sheetId!, token, row)
      sheetsOk = true
    } catch (err) {
      console.error('[submit-aanvraag] Sheets fout:', err)
      errors.push('Google Sheets: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  // 2 — Firestore fallback
  if (!sheetsOk) {
    try {
      await saveToFirestore({
        naam, email, telefoon, adres, opleveringsdatum,
        bedragRange, referentie: offerte.referentie,
        datumAanvraag: vandaag, fase: '01 - Nieuw',
      })
      firestoreOk = true
    } catch (err) {
      console.error('[submit-aanvraag] Firestore fout:', err)
      errors.push('Firestore: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  if (!sheetsOk && !firestoreOk) {
    return Response.json({ error: 'Opslaan mislukt. Probeer opnieuw.', details: errors }, { status: 500 })
  }

  return Response.json({ ok: true, opgeslagenIn: sheetsOk ? 'sheets' : 'firestore' })
}
