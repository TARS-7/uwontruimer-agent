'use client'

import { useState, useId } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step5ContactResult {
  naam: string
  email: string
  telefoon: string
}

interface Props {
  initialData: { naam: string; email: string; telefoon: string }
  onComplete: (result: Step5ContactResult) => void
  onBack: () => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Step5Contact({ initialData, onComplete, onBack }: Props) {
  const id = useId()

  const [naam, setNaam] = useState(initialData.naam)
  const [email, setEmail] = useState(initialData.email)
  const [telefoon, setTelefoon] = useState(initialData.telefoon)
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    onComplete({ naam: naam.trim(), email: email.trim(), telefoon: telefoon.trim() })
  }

  function handleTelefoonChange(value: string) {
    setTelefoon(value.replace(/[^0-9+\s\-().]/g, ''))
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Uw contactgegevens</h2>
        <p className="mt-1 text-sm text-slate-500">
          Vul uw gegevens in zodat wij de offerte kunnen toesturen en contact kunnen opnemen.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <Input
          id={`${id}-naam`}
          label="Naam"
          placeholder="Jan de Vries"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          error={errors.naam}
          autoComplete="name"
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
        />

        {/* Privacy checkbox */}
        <div className="flex flex-col gap-1">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-blue-600"
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

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Terug
          </button>

          <Button type="submit" size="lg">
            Offerte berekenen
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </form>
    </div>
  )
}
