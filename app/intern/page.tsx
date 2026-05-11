import { getGoogleAccessToken } from '@/lib/google-auth'
import FotoViewer from '@/components/intern/FotoViewer'
import LogoutButton from '@/components/intern/LogoutButton'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Aanvraag {
  naam: string
  email: string
  fase: string
  opleveringsdatum: string
  datumAanvraag: string
  bedragRange: string
  referentie: string
  adres: string
  telefoon: string
  fotoUrls: string[]
}

// ─── Data fetching ────────────────────────────────────────────────────────────

async function fetchAanvragen(): Promise<Aanvraag[]> {
  const sheetId = process.env.GOOGLE_SHEETS_ID!
  const tab     = process.env.GOOGLE_SHEETS_TAB ?? 'CRM Pipeline'
  const token   = await getGoogleAccessToken('https://www.googleapis.com/auth/spreadsheets.readonly')

  const range = encodeURIComponent(`${tab}!A:R`)
  const res   = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`,
    { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' },
  )

  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Sheets (${res.status}): ${txt.slice(0, 200)}`)
  }

  const data = await res.json()
  const rows: string[][] = data.values ?? []

  return rows
    // Skip header rijen (eerste cel = 'Naam' of leeg)
    .filter((row) => row[0] && row[0] !== 'Naam' && row[0] !== 'naam')
    .map((row) => ({
      naam:             row[0]  ?? '',
      email:            row[1]  ?? '',
      fase:             row[3]  ?? '',
      opleveringsdatum: row[5]  ?? '',
      datumAanvraag:    row[6]  ?? '',
      bedragRange:      row[10] ?? '',
      referentie:       row[12] ?? '',
      adres:            row[14] ?? '',
      telefoon:         row[16] ?? '',
      fotoUrls:         row[17] ? row[17].split('\n').filter(Boolean) : [],
    }))
    .reverse() // Nieuwste bovenaan
}

// ─── Fase badge ───────────────────────────────────────────────────────────────

const FASE_KLEUR: Record<string, { bg: string; kleur: string }> = {
  '01': { bg: '#FEF3C7', kleur: '#92400E' },
  '02': { bg: '#DBEAFE', kleur: '#1E40AF' },
  '03': { bg: '#D1FAE5', kleur: '#065F46' },
  '04': { bg: '#D1FAE5', kleur: '#065F46' },
  '05': { bg: '#FEE2E2', kleur: '#991B1B' },
}

function FaseBadge({ fase }: { fase: string }) {
  const prefix = fase.slice(0, 2)
  const stijl  = FASE_KLEUR[prefix] ?? { bg: '#F1F5F9', kleur: '#475569' }
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={{ backgroundColor: stijl.bg, color: stijl.kleur }}
    >
      {fase || 'Onbekend'}
    </span>
  )
}

// ─── Kaart ────────────────────────────────────────────────────────────────────

function AanvraagKaart({ a }: { a: Aanvraag }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

      {/* Topbalk */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
        <FaseBadge fase={a.fase} />
        <span className="font-mono text-xs text-slate-400">{a.referentie}</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">

        {/* Naam + bedrag */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold leading-tight text-slate-900">{a.naam}</h2>
          {a.bedragRange && (
            <span className="shrink-0 text-base font-bold" style={{ color: '#f4a01c' }}>
              {a.bedragRange}
            </span>
          )}
        </div>

        {/* Contact & adres */}
        <dl className="flex flex-col gap-2 text-sm">
          {a.adres && (
            <div className="flex items-start gap-2 text-slate-600">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{a.adres}</span>
            </div>
          )}
          {a.telefoon && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a
                href={`tel:${a.telefoon.replace(/\s/g, '')}`}
                className="text-slate-600 transition hover:underline"
                style={{ color: '#003d63' }}
              >
                {a.telefoon}
              </a>
            </div>
          )}
          {a.email && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href={`mailto:${a.email}`}
                className="break-all text-slate-600 transition hover:underline"
                style={{ color: '#003d63' }}
              >
                {a.email}
              </a>
            </div>
          )}
        </dl>

        {/* Datums */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-400">
          {a.datumAanvraag && (
            <span>Aanvraag: <span className="font-medium text-slate-600">{a.datumAanvraag}</span></span>
          )}
          {a.opleveringsdatum && (
            <span>Oplevering: <span className="font-medium text-slate-600">{a.opleveringsdatum}</span></span>
          )}
        </div>

        {/* Foto's */}
        {a.fotoUrls.length > 0 && (
          <div className="mt-auto pt-1">
            <FotoViewer urls={a.fotoUrls} naam={a.naam} />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function InternPage() {
  let aanvragen: Aanvraag[] = []
  let fout: string | null = null

  try {
    aanvragen = await fetchAanvragen()
  } catch (err) {
    fout = err instanceof Error ? err.message : 'Onbekende fout'
  }

  const nieuw = aanvragen.filter((a) => a.fase.startsWith('01')).length

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f4f8' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#003d63' }}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Uw Ontruimer</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white/60">Intern</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 text-sm text-white/60 sm:flex">
              <span>{aanvragen.length} aanvragen</span>
              {nieuw > 0 && (
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#f4a01c' }} />
                  {nieuw} nieuw
                </span>
              )}
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {fout ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">Fout bij laden</p>
            <p className="mt-1 text-sm text-red-600">{fout}</p>
          </div>
        ) : aanvragen.length === 0 ? (
          <div className="rounded-xl bg-white p-12 text-center text-slate-400 shadow-sm">
            Nog geen aanvragen gevonden.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {aanvragen.map((a, i) => (
              <AanvraagKaart key={i} a={a} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
