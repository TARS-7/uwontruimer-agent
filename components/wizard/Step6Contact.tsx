'use client'

import { useState, useId } from 'react'
import type { WizardState } from '@/lib/types'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step6Result {
  naam: string
  email: string
  telefoon: string
}

interface Props {
  state: WizardState
  onComplete: (result: Step6Result) => void
  onBack: () => void
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = new Intl.NumberFormat('nl-NL', {
  style: 'currency', currency: 'EUR',
  minimumFractionDigits: 0, maximumFractionDigits: 0,
})
const formatBedrag = (n: number) => fmt.format(n)

// ─── Component ────────────────────────────────────────────────────────────────

export default function Step6Contact({ state, onComplete, onBack }: Props) {
  const id = useId()

  const [naam, setNaam] = useState(state.naam)
  const [email, setEmail] = useState(state.email)
  const [telefoon, setTelefoon] = useState(state.telefoon)
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<'form' | 'submitting' | 'bevestigd'>('form')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const offerte = state.offerte

  // ─── Validate ──────────────────────────────────────────────────────────────

  function validate() {
    const e: Record<string, string> = {}
    if (!naam.trim()) e.naam = 'Vul uw naam in'
    if (!email.trim()) {
      e.email = 'Vul uw e-mailadres in'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = 'Vul een geldig e-mailadres in'
    }
    if (!telefoon.trim()) {
      e.telefoon = 'Vul uw telefoonnummer in'
    } else if (!/^[0-9+\s\-().]{7,}$/.test(telefoon.trim())) {
      e.telefoon = 'Vul een geldig telefoonnummer in'
    }
    if (!privacy) e.privacy = 'U dient akkoord te gaan met het privacybeleid'
    return e
  }

  // ─── Submit ────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setPhase('submitting')
    setSubmitError(null)

    try {
      const res = await fetch('/api/submit-aanvraag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: naam.trim(),
          email: email.trim(),
          telefoon: telefoon.trim(),
          address: state.address,
          eigendomstype: state.eigendomstype,
          opleveringsdatum: state.opleveringsdatum,
          inspectieWerkzaamheden: state.inspectieWerkzaamheden,
          offerte: state.offerte,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? `Server fout (${res.status})`)
      }

      setPhase('bevestigd')
      onComplete({ naam: naam.trim(), email: email.trim(), telefoon: telefoon.trim() })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Er is iets misgegaan. Probeer opnieuw.')
      setPhase('form')
    }
  }

  // ─── Phone auto-format ─────────────────────────────────────────────────────

  function handleTelefoonChange(value: string) {
    // Allow digits, spaces, +, -, (, )
    setTelefoon(value.replace(/[^0-9+\s\-().]/g, ''))
  }

  // ─── Bevestigingsscherm ────────────────────────────────────────────────────

  if (phase === 'bevestigd') {
    return (
      <div className="flex flex-col items-center gap-6 py-4 text-center">
        {/* Green checkmark */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
          <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-slate-900">Aanvraag ontvangen!</h2>
          <p className="text-slate-500">
            Bedankt! Een medewerker neemt binnen{' '}
            <span className="font-medium text-slate-700">1 werkdag</span>{' '}
            contact met u op.
          </p>
        </div>

        {/* Price summary */}
        {offerte && (
          <div className="w-full rounded-xl border border-slate-100 bg-slate-50 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Uw indicatieve offerte
            </p>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-slate-600">Referentienummer</span>
              <span className="font-mono text-sm font-medium text-slate-800">{offerte.referentie}</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-2">
              <span className="text-sm text-slate-600">Indicatieve prijs</span>
              <span className="text-lg font-semibold text-slate-900">
                {formatBedrag(offerte.totaalMin)}{' '}
                <span className="text-base font-normal text-slate-500">–</span>{' '}
                {formatBedrag(offerte.totaalMax)}
              </span>
            </div>
            {offerte.geldigTot && (
              <div className="mt-2 flex items-baseline justify-between gap-2">
                <span className="text-sm text-slate-600">Geldig tot</span>
                <span className="text-sm text-slate-700">
                  {new Date(offerte.geldigTot).toLocaleDateString('nl-NL', {
                    day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </span>
              </div>
            )}
          </div>
        )}

        {/* What happens next */}
        <div className="w-full rounded-xl border border-slate-100 bg-white p-5 text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Wat gebeurt er nu?
          </p>
          <ol className="flex flex-col gap-3">
            {[
              'Onze medewerker belt u binnen 1 werkdag',
              'We plannen een gratis inspectie op locatie in',
              'U ontvangt een definitieve offerte na de inspectie',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-xs text-slate-400">
          Vragen? Bel ons op{' '}
          <a href="tel:+31202442400" className="text-blue-600 hover:underline">
            020 - 244 2400
          </a>
        </p>
      </div>
    )
  }

  // ─── Form ──────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Uw contactgegevens</h2>
        <p className="mt-1 text-sm text-slate-500">
          Vul uw gegevens in en we nemen binnen 1 werkdag contact met u op.
        </p>
      </div>

      {/* Offerte summary card */}
      {offerte && (
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                Indicatieve offerte
              </p>
              <p className="mt-0.5 text-2xl font-semibold text-slate-900">
                {formatBedrag(offerte.totaalMin)}{' '}
                <span className="text-lg font-normal text-slate-400">–</span>{' '}
                {formatBedrag(offerte.totaalMax)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Referentie</p>
              <p className="font-mono text-sm font-medium text-slate-700">{offerte.referentie}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <Input
          id={`${id}-naam`}
          label="Naam"
          placeholder="Jan de Vries"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          error={errors.naam}
          autoComplete="name"
          disabled={phase === 'submitting'}
        />

        <Input
          id={`${id}-email`}
          label="E-mailadres"
          type="email"
          placeholder="jan@example.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
          disabled={phase === 'submitting'}
        />

        <Input
          id={`${id}-telefoon`}
          label="Telefoonnummer"
          type="tel"
          placeholder="06 12 34 56 78"
          value={telefoon}
          onChange={(e) => handleTelefoonChange(e.target.value)}
          error={errors.telefoon}
          autoComplete="tel"
          disabled={phase === 'submitting'}
        />

        {/* Privacy checkbox */}
        <div className="flex flex-col gap-1">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              disabled={phase === 'submitting'}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 text-blue-600 accent-blue-600"
            />
            <span className="text-sm text-slate-600 leading-snug">
              Ik ga akkoord met het{' '}
              <a
                href="https://uwontruimer.nl/privacybeleid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                privacybeleid
              </a>{' '}
              van Uw Ontruimer. Uw gegevens worden alleen gebruikt voor het verwerken van uw aanvraag.
            </span>
          </label>
          {errors.privacy && (
            <p className="ml-7 text-xs text-red-500">{errors.privacy}</p>
          )}
        </div>

        {/* Submit error */}
        {submitError && (
          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onBack}
            disabled={phase === 'submitting'}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-40"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Terug
          </button>

          <Button
            type="submit"
            loading={phase === 'submitting'}
            disabled={phase === 'submitting'}
          >
            {phase === 'submitting' ? 'Aanvraag verzenden…' : 'Aanvraag verzenden'}
          </Button>
        </div>
      </form>
    </div>
  )
}
