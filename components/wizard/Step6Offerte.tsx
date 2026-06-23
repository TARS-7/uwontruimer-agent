'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
import Image from 'next/image'
import Button from '@/components/ui/Button'
import type { AddressData, Offerte } from '@/lib/types'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step6Input {
  address: AddressData
  ontruimingType: string | null
  woningType: string | null
  woningGrootte: string | null
  naam: string
  email: string
  telefoon: string
  fotoUrls: string[]
}

function woningGrootteToKamers(grootte: string | null): number | null {
  if (grootte === 'Studio') return 1
  if (grootte === 'Kleine woning') return 2
  if (grootte === 'Grote woning') return 4
  return null
}

interface Props {
  data: Step6Input
  initialOfferte: Offerte | null
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

export default function Step6Offerte({ data, initialOfferte, onBack }: Props) {
  const [phase, setPhase] = useState<Phase>(initialOfferte ? 'result' : 'loading')
  const [offerte, setOfferte] = useState<Offerte | null>(initialOfferte)
  const [error, setError] = useState<string | null>(null)
  const [gedaanStappen, setGedaanStappen] = useState<number[]>([])
  const [actieveStap, setActieveStap] = useState(0)
  // Retry state so the component can reset without unmounting
  const [retryKey, setRetryKey] = useState(0)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const stapRef = useRef(0)
  const apiKlaarRef = useRef(false)

  useEffect(() => {
    if (initialOfferte) return

    // Reset animation state on retry
    setGedaanStappen([])
    setActieveStap(0)
    stapRef.current = 0
    apiKlaarRef.current = false

    // Advance one step every ~700ms, pause at penultimate step until API is done
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
        const [generatedOfferte] = await Promise.all([
          fetch('/api/genereer-offerte', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              address: data.address,
              aantalKamers: woningGrootteToKamers(data.woningGrootte),
              staatWoning: null,
              opleveringsdatum: '',
              eigendomstype: null,
              inspectieWerkzaamheden: data.ontruimingType ? [data.ontruimingType] : [],
              waardevolleSpullen: [],
              woningType: data.woningType,
            }),
          }).then((r) =>
            r.ok
              ? r.json()
              : r.json().then((e: { error?: string }) => { throw new Error(e.error ?? 'Fout') })
          ),
          delay(2000),
        ])

        apiKlaarRef.current = true

        // Let animation finish remaining steps
        await delay((STAPPEN.length - 1 - stapRef.current) * 700 + 400)
        if (intervalRef.current) clearInterval(intervalRef.current)

        setOfferte(generatedOfferte)

        // Write to CRM and push dataLayer before showing ResultView
        await fetch('/api/submit-aanvraag', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            naam: data.naam,
            email: data.email,
            telefoon: data.telefoon,
            address: data.address,
            ontruimingType: data.ontruimingType,
            woningType: data.woningType,
            woningGrootte: data.woningGrootte,
            eigendomstype: null,
            opleveringsdatum: '',
            inspectieWerkzaamheden: data.ontruimingType ? [data.ontruimingType] : [],
            offerte: generatedOfferte,
            fotoUrls: data.fotoUrls,
            fotosWaardevollUrls: [],
          }),
        }).catch((err) => {
          console.error('[Step6Offerte] CRM submit fout:', err)
        })

        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'wizard_voltooid',
          offerte_min: generatedOfferte.totaalMin,
          offerte_max: generatedOfferte.totaalMax,
          ontruiming_type: data.ontruimingType,
          woning_grootte: data.woningGrootte,
        })

        fetch('https://event-service-1012181768627.europe-west4.run.app/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ entiteit: 'klant', data: { type: 'particulier', bron: 'wizard' } })
        }).catch(() => {})

        setPhase('result')
      } catch (err) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setError(err instanceof Error ? err.message : 'Er is iets misgegaan.')
        setPhase('error')
      }
    })()

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retryKey])

  function handleRetry() {
    setPhase('loading')
    setError(null)
    setRetryKey((k) => k + 1)
  }

  if (phase === 'loading') return <LoadingView gedaanStappen={gedaanStappen} actieveStap={actieveStap} />
  if (phase === 'error') return <ErrorView error={error} onRetry={handleRetry} onBack={onBack} />
  if (phase === 'result' && offerte) return <ResultView offerte={offerte} naam={data.naam} />
  return null
}

// ─── Loading ──────────────────────────────────────────────────────────────────

function LoadingView({ gedaanStappen, actieveStap }: { gedaanStappen: number[]; actieveStap: number }) {
  return (
    <div className="flex flex-col items-center gap-8 py-6 text-center">
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
          Claude AI berekent de prijzen op basis van uw woninggegevens.
        </p>
      </div>

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

// ─── Result (= bevestigingsscherm) ────────────────────────────────────────────

function ResultView({ offerte, naam }: { offerte: Offerte; naam: string }) {
  const pmPosten = offerte.onderdelen.filter((o) => o.isPM)
  const berekendePosten = offerte.onderdelen.filter((o) => !o.isPM)

  return (
    <div className="flex flex-col gap-6">
      {/* Confirmation header */}
      <div className="flex flex-col items-center gap-4 py-2 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
          <svg className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Bedankt{naam ? `, ${naam.split(' ')[0]}` : ''}!
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Uw aanvraag is ontvangen. Een medewerker neemt binnen{' '}
            <span className="font-medium text-slate-700">1 werkdag</span> contact op.
          </p>
        </div>
      </div>

      {/* Offerte table */}
      <div className="overflow-hidden rounded-xl border border-slate-100">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Indicatieve offerte</span>
          <span className="font-mono text-xs font-medium text-slate-500">{offerte.referentie}</span>
        </div>

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
            De definitieve prijs wordt bevestigd na verificatie door onze medewerkers.
          </p>
        </div>
      </div>

      {/* Wat gebeurt er nu? */}
      <div className="rounded-xl border border-slate-100 bg-white p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Wat gebeurt er nu?</p>
        <ol className="flex flex-col gap-3">
          {[
            'Onze medewerker belt u binnen 1 werkdag',
            "We checken uw gegevens en foto's — zo nodig plannen we een inspectie op locatie",
            'U ontvangt de definitieve offerte',
          ].map((stap, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
                {i + 1}
              </span>
              <span className="text-sm text-slate-600">{stap}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Takaros upsell — altijd zichtbaar na succesvolle aanvraag */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="relative w-full max-h-48">
          <Image
            src="/images/waardevolle.spullen.png"
            alt="Waardevolle spullen"
            width={800}
            height={192}
            className="w-full max-h-48 object-cover rounded-lg"
          />
        </div>
        <div className="p-5">
        <p className="text-sm font-semibold text-slate-700">Heeft u ook waardevolle spullen?</p>
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">
          Ontdek vrijblijvend wat ze waard zijn via Takaros — onafhankelijk en kosteloos.
        </p>
        <a
          href={`https://www.takaros.com/?source=uwontruimer&aanvraag=${encodeURIComponent(offerte.referentie)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0F2942' }}
        >
          Ontdek de waarde
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        </div>
      </div>

      {/* CTA — contact */}
      <div className="flex flex-col items-center gap-3">
        <a
          href="tel:0853035894"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Plan een gratis bevestiging in
        </a>
        <p className="text-xs text-slate-400">
          Of bel direct:{' '}
          <a href="tel:0853035894" className="font-medium text-blue-600 hover:underline">
            085-303 58 94
          </a>
        </p>
      </div>
    </div>
  )
}
