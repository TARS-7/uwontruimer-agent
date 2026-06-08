'use client'

import { useState, useCallback, useId } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import type { AddressData } from '@/lib/types'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepAdresContactResult {
  address: AddressData
  naam: string
  email: string
  telefoon: string
}

interface Props {
  initialData: {
    address: AddressData | null
    naam: string
    email: string
    telefoon: string
  }
  onComplete: (result: StepAdresContactResult) => void
  onBack: () => void
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPostcode(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  const letters = value.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase()
  if (digits.length === 4 && letters.length > 0) return `${digits} ${letters}`
  return digits + letters
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepAdresContact({ initialData, onComplete, onBack }: Props) {
  const formId = useId()

  // Address state
  const [postcode, setPostcode] = useState('')
  const [huisnummer, setHuisnummer] = useState('')
  const [toevoeging, setToevoeging] = useState('')
  const [adresErrors, setAdresErrors] = useState<Record<string, string>>({})
  const [adresLoading, setAdresLoading] = useState(false)
  const [adresApiError, setAdresApiError] = useState<string | null>(null)
  const [gevondenAdres, setGevondenAdres] = useState<AddressData | null>(initialData.address)

  // Contact state
  const [naam, setNaam] = useState(initialData.naam)
  const [email, setEmail] = useState(initialData.email)
  const [telefoon, setTelefoon] = useState(initialData.telefoon)
  const [privacy, setPrivacy] = useState(false)
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({})

  // ─── Address handlers ───────────────────────────────────────────────────────

  const validateAdres = useCallback((): boolean => {
    const e: Record<string, string> = {}
    const pc = postcode.replace(/\s/g, '')
    if (!/^\d{4}[A-Z]{2}$/i.test(pc)) e.postcode = 'Voer een geldige postcode in (bijv. 1234 AB)'
    if (!huisnummer || isNaN(Number(huisnummer))) e.huisnummer = 'Voer een geldig huisnummer in'
    setAdresErrors(e)
    return Object.keys(e).length === 0
  }, [postcode, huisnummer])

  const handleSearch = useCallback(async () => {
    if (!validateAdres()) return
    setAdresLoading(true)
    setAdresApiError(null)
    setGevondenAdres(null)

    const params = new URLSearchParams({
      postcode,
      huisnummer,
      ...(toevoeging ? { toevoeging } : {}),
    })

    try {
      const res = await fetch(`/api/bag?${params}`)
      const data = await res.json()
      if (!res.ok) {
        setAdresApiError(data.error ?? 'Er is iets misgegaan. Probeer opnieuw.')
        return
      }
      setGevondenAdres(data as AddressData)
    } catch {
      setAdresApiError('Verbinding mislukt. Controleer uw internetverbinding.')
    } finally {
      setAdresLoading(false)
    }
  }, [postcode, huisnummer, toevoeging, validateAdres])

  // ─── Submit ─────────────────────────────────────────────────────────────────

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!gevondenAdres) {
      setAdresApiError('Zoek eerst een adres op.')
      return
    }
    const errs: Record<string, string> = {}
    if (!naam.trim()) errs.naam = 'Vul uw naam in'
    if (!email.trim()) {
      errs.email = 'Vul uw e-mailadres in'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Vul een geldig e-mailadres in'
    }
    if (!telefoon.trim()) {
      errs.telefoon = 'Vul uw telefoonnummer in'
    } else if (!/^[0-9+\s\-().]{7,}$/.test(telefoon.trim())) {
      errs.telefoon = 'Vul een geldig telefoonnummer in'
    }
    if (!privacy) errs.privacy = 'U dient akkoord te gaan met het privacybeleid'

    if (Object.keys(errs).length > 0) {
      setContactErrors(errs)
      return
    }

    onComplete({
      address: gevondenAdres,
      naam: naam.trim(),
      email: email.trim(),
      telefoon: telefoon.trim(),
    })
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Adres &amp; contactgegevens</h2>
        <p className="mt-1 text-sm text-slate-500">
          Bijna klaar — vul het adres in zodat we een nauwkeurige offerte kunnen berekenen.
        </p>
      </div>

      {/* ── Adres ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-slate-700">Adres van de woning</p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_120px_100px]">
          <Input
            label="Postcode"
            placeholder="1234 AB"
            value={postcode}
            error={adresErrors.postcode}
            className="col-span-2 sm:col-span-1"
            onChange={(e) => setPostcode(formatPostcode(e.target.value))}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
            maxLength={7}
            autoComplete="postal-code"
          />
          <Input
            label="Huisnummer"
            placeholder="42"
            value={huisnummer}
            error={adresErrors.huisnummer}
            inputMode="numeric"
            onChange={(e) => setHuisnummer(e.target.value.replace(/\D/g, ''))}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
            maxLength={5}
          />
          <Input
            label="Toevoeging"
            placeholder="A, bis..."
            value={toevoeging}
            hint="Optioneel"
            onChange={(e) => setToevoeging(e.target.value.slice(0, 6))}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
          />
        </div>

        <Button size="lg" loading={adresLoading} onClick={handleSearch} className="self-start">
          {adresLoading ? 'Adres opzoeken...' : 'Adres opzoeken'}
          {!adresLoading && (
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          )}
        </Button>

        {adresApiError && (
          <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
            <svg className="h-5 w-5 text-red-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-red-700">{adresApiError}</p>
          </div>
        )}

        {gevondenAdres && (
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {gevondenAdres.straat} {gevondenAdres.huisnummer}{gevondenAdres.huisletter}
                    {gevondenAdres.toevoeging ? ` ${gevondenAdres.toevoeging}` : ''}
                  </p>
                  <p className="text-sm text-slate-600">
                    {gevondenAdres.postcode} {gevondenAdres.woonplaats}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <DataCard label="Oppervlakte" value={gevondenAdres.oppervlakte ? `${gevondenAdres.oppervlakte} m²` : null} />
              <DataCard label="Bouwjaar" value={gevondenAdres.bouwjaar ? String(gevondenAdres.bouwjaar) : null} />
              <DataCard label="Type woning" value={gevondenAdres.woningtype ? capitalize(gevondenAdres.woningtype) : null} />
              <DataCard label="Gebruiksdoel" value={gevondenAdres.gebruiksdoel ? capitalize(gevondenAdres.gebruiksdoel) : null} />
            </div>

            <p className="text-xs text-slate-400">
              Bron: BAG (Kadaster) via PDOK.
            </p>
          </div>
        )}
      </div>

      {/* ── Contact — alleen zichtbaar na adresbevestiging ─────────────────── */}
      {gevondenAdres && (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 border-t border-slate-100 pt-4">
          <p className="text-sm font-semibold text-slate-700">Uw contactgegevens</p>

          <Input
            id={`${formId}-naam`}
            label="Naam"
            placeholder="Jan de Vries"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            error={contactErrors.naam}
            autoComplete="name"
          />
          <Input
            id={`${formId}-email`}
            label="E-mailadres"
            type="email"
            placeholder="jan@example.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={contactErrors.email}
            autoComplete="email"
          />
          <Input
            id={`${formId}-telefoon`}
            label="Telefoonnummer"
            type="tel"
            placeholder="06 12 34 56 78"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value.replace(/[^0-9+\s\-().]/g, ''))}
            error={contactErrors.telefoon}
            autoComplete="tel"
          />

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
            {contactErrors.privacy && (
              <p className="ml-7 text-xs text-red-500">{contactErrors.privacy}</p>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
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
      )}

      {/* Terug-knop als adres nog niet bevestigd is */}
      {!gevondenAdres && (
        <div className="border-t border-slate-100 pt-4">
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
        </div>
      )}
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DataCard({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
      <p className="text-xs text-slate-500 font-medium">{label}</p>
      <p className={`mt-0.5 text-sm font-semibold ${value ? 'text-slate-900' : 'text-slate-400'}`}>
        {value ?? 'Onbekend'}
      </p>
    </div>
  )
}
