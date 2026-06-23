'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import type { AddressData, Offerte } from '@/lib/types'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step5Input {
  address: AddressData
  aantalKamers: number | null
  staatWoning: 'goed' | 'redelijk' | 'slecht' | null
  opleveringsdatum: string
  eigendomstype: 'huur' | 'koop' | null
  inspectieWerkzaamheden: string[]
  waardevolleSpullen: Array<{ categorie: string; waardeRange: string; beschrijving: string }>
}

interface Step5Props {
  data: Step5Input
  initialOfferte: Offerte | null
  onComplete: (offerte: Offerte) => void
  onBack: () => void
}

type Phase = 'loading' | 'result' | 'error'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = new Intl.NumberFormat('nl-NL', {
  style: 'currency', currency: 'EUR',
  minimumFractionDigits: 0, maximumFractionDigits: 0,
})

function formatBedrag(n: number) { return fmt.format(n) }

function formatRange(min: number, max: number): string {
  if (min === max) return formatBedrag(min)
  return `${formatBedrag(min)} – ${formatBedrag(max)}`
}

function delay(ms: number) { return new Promise<void>((r) => setTimeout(r, ms)) }

// ─── Loading steps ────────────────────────────────────────────────────────────

const STAPPEN = [
  'Woninggegevens analyseren',
  'Werkzaamheden verwerken',
  'Volume en vrachtwagens berekenen',
  'Prijsberekening uitvoeren',
  'Offerte samenstellen',
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Step5Analyse({ data, initialOfferte, onComplete, onBack }: Step5Props) {
  const [phase, setPhase] = useState<Phase>(initialOfferte ? 'result' : 'loading')
  const [offerte, setOfferte] = useState<Offerte | null>(initialOfferte)
  const [error, setError] = useState<string | null>(null)
  const [gedaanStappen, setGedaanStappen] = useState<number[]>([])
  const [actieveStap, setActieveStap] = useState(0)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const stapRef = useRef(0)
  const apiKlaarRef = useRef(false)

  useEffect(() => {
    if (initialOfferte) return

    // Advance one step every ~700ms, pause at last step until API is done
    intervalRef.current = setInterval(() => {
      const cur = stapRef.current
      const isLastBeforeEnd = cur >= STAPPEN.length - 2
      if (isLastBeforeEnd && !apiKlaarRef.current) return

      setGedaanStappen((prev) => [...prev, cur])
      const next = cur + 1
      stapRef.current = next
      setActieveStap(next)

      if (next >= STAPPEN.length && intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }, 700)

    ;(async () => {
      try {
        const [json] = await Promise.all([
          fetch('/api/genereer-offerte', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              address: data.address,
              aantalKamers: data.aantalKamers,
              staatWoning: data.staatWoning,
              opleveringsdatum: data.opleveringsdatum,
              eigendomstype: data.eigendomstype,
              inspectieWerkzaamheden: data.inspectieWerkzaamheden,
              waardevolleSpullen: data.waardevolleSpullen.map(
                ({ categorie, waardeRange, beschrijving }) => ({ categorie, waardeRange, beschrijving })
              ),
            }),
          }).then((r) => r.ok ? r.json() : r.json().then((e: { error?: string }) => { throw new Error(e.error ?? 'Fout') })),
          delay(2000), // minimum 2 seconds
        ])

        apiKlaarRef.current = true

        // Let animation finish the remaining steps
        await delay((STAPPEN.length - 1 - stapRef.current) * 700 + 400)

        if (intervalRef.current) clearInterval(intervalRef.current)
        setOfferte(json)
        setPhase('result')
      } catch (err) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setError(err instanceof Error ? err.message : 'Er is iets misgegaan.')
        setPhase('error')
      }
    })()

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'loading') return <LoadingView gedaanStappen={gedaanStappen} actieveStap={actieveStap} />
  if (phase === 'error') return (
    <ErrorView
      error={error}
      onBack={onBack}
      onRetry={() => {
        setPhase('loading')
        setGedaanStappen([])
        setActieveStap(0)
        stapRef.current = 0
        apiKlaarRef.current = false
      }}
    />
  )
  if (phase === 'result' && offerte) return <ResultView offerte={offerte} onComplete={() => onComplete(offerte)} onBack={onBack} />
  return null
}

// ─── Loading ──────────────────────────────────────────────────────────────────

function LoadingView({ gedaanStappen, actieveStap }: { gedaanStappen: number[]; actieveStap: number }) {
  return (
    <div className="flex flex-col items-center gap-8 py-6 text-center">
      {/* Animated ring */}
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-[3px] border-slate-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-blue-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900">Offerte wordt gegenereerd</h2>
        <p className="mt-1 text-sm text-slate-500">
          Uw offerte wordt berekend op basis van uw woninggegevens.
        </p>
      </div>

      {/* Step list */}
      <ul className="flex w-full max-w-xs flex-col gap-3 text-left">
        {STAPPEN.map((stap, i) => {
          const done = gedaanStappen.includes(i)
          const active = actieveStap === i && !done
          return (
            <li key={i} className="flex items-center gap-3">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300
                ${done ? 'bg-emerald-500' : active ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-100'}`}>
                {done ? (
                  <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : active ? (
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-slate-300" />
                )}
              </span>
              <span className={`text-sm transition-colors ${done ? 'text-slate-400 line-through' : active ? 'font-medium text-blue-700' : 'text-slate-400'}`}>
                {stap}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// ─── Error ────────────────────────────────────────────────────────────────────

function ErrorView({ error, onRetry, onBack }: { error: string | null; onRetry: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 py-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <svg className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Generatie mislukt</h2>
        <p className="mt-1 text-sm text-slate-500">{error ?? 'Onbekende fout.'}</p>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack}>Terug</Button>
        <Button onClick={onRetry}>Opnieuw proberen</Button>
      </div>
    </div>
  )
}

// ─── Result ───────────────────────────────────────────────────────────────────

function ResultView({ offerte, onComplete, onBack }: { offerte: Offerte; onComplete: () => void; onBack: () => void }) {
  const pmPosten = offerte.onderdelen.filter((o) => o.isPM)
  const berekendePosten = offerte.onderdelen.filter((o) => !o.isPM)

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Indicatieve offerte</h2>
          <p className="mt-1 text-sm text-slate-500">
            Gegenereerd op basis van uw woninggegevens.
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xs text-slate-400">Referentie</p>
          <p className="text-sm font-semibold text-slate-700">{offerte.referentie}</p>
        </div>
      </div>

      {/* Line items */}
      <div className="overflow-hidden rounded-xl border border-slate-100">
        {/* Header row */}
        <div className="flex justify-between gap-4 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Omschrijving</span>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Prijs (indicatief)</span>
        </div>

        {/* Calculated rows */}
        {berekendePosten.map((item, i) => (
          <div key={i} className={`flex items-start justify-between gap-4 px-4 py-3.5 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">{item.naam}</p>
              {item.beschrijving && (
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{item.beschrijving}</p>
              )}
            </div>
            <p className="shrink-0 text-sm font-semibold text-slate-900 tabular-nums">
              {formatRange(item.bedragMin, item.bedragMax)}
            </p>
          </div>
        ))}

        {/* PM rows */}
        {pmPosten.map((item, i) => (
          <div key={`pm-${i}`} className="flex items-start justify-between gap-4 border-t border-dashed border-slate-100 bg-white px-4 py-3.5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-slate-900">{item.naam}</p>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-500">PM</span>
              </div>
              {item.beschrijving && (
                <p className="mt-0.5 text-xs text-slate-500">{item.beschrijving}</p>
              )}
            </div>
            <p className="shrink-0 text-sm text-slate-400 italic">Prijs op aanvraag</p>
          </div>
        ))}

        {/* Total row */}
        <div className="flex items-center justify-between border-t-2 border-slate-200 bg-slate-50 px-4 py-4">
          <div>
            <p className="text-sm font-bold text-slate-900">Totaal indicatief</p>
            {pmPosten.length > 0 && (
              <p className="text-xs text-slate-500 mt-0.5">excl. PM-posten</p>
            )}
          </div>
          <p className="text-xl font-bold text-blue-700 tabular-nums">
            {formatRange(offerte.totaalMin, offerte.totaalMax)}
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <svg className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-amber-800">Indicatieve prijs</p>
          <p className="mt-0.5 text-sm text-amber-700">
            Een medewerker neemt contact op om de exacte prijs te bevestigen. De definitieve prijs kan afwijken op basis van een fysieke inspectie.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <Button variant="ghost" onClick={onBack}>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Terug
        </Button>
        <Button size="lg" onClick={onComplete}>
          Gegevens invullen
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
