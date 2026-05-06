'use client'

import { useState, useCallback } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import type { AddressData } from '@/lib/types'

interface Step1AddressProps {
  onComplete: (address: AddressData) => void
}

interface FormState {
  postcode: string
  huisnummer: string
  toevoeging: string
}

interface FieldErrors {
  postcode?: string
  huisnummer?: string
}

function formatPostcode(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  const letters = value.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase()
  if (digits.length === 4 && letters.length > 0) return `${digits} ${letters}`
  return digits + letters
}

export default function Step1Address({ onComplete }: Step1AddressProps) {
  const [form, setForm] = useState<FormState>({ postcode: '', huisnummer: '', toevoeging: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const [found, setFound] = useState<AddressData | null>(null)

  const validate = useCallback((): boolean => {
    const newErrors: FieldErrors = {}
    const postcode = form.postcode.replace(/\s/g, '')
    if (!/^\d{4}[A-Z]{2}$/i.test(postcode)) {
      newErrors.postcode = 'Voer een geldige postcode in (bijv. 1234 AB)'
    }
    if (!form.huisnummer || isNaN(Number(form.huisnummer))) {
      newErrors.huisnummer = 'Voer een geldig huisnummer in'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [form])

  const handleSearch = useCallback(async () => {
    if (!validate()) return
    setLoading(true)
    setApiError(null)
    setFound(null)

    const params = new URLSearchParams({
      postcode: form.postcode,
      huisnummer: form.huisnummer,
      ...(form.toevoeging ? { toevoeging: form.toevoeging } : {}),
    })

    try {
      const res = await fetch(`/api/bag?${params}`)
      const data = await res.json()

      if (!res.ok) {
        setApiError(data.error ?? 'Er is iets misgegaan. Probeer opnieuw.')
        return
      }

      setFound(data as AddressData)
    } catch {
      setApiError('Verbinding mislukt. Controleer uw internetverbinding.')
    } finally {
      setLoading(false)
    }
  }, [form, validate])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Wat is het adres van de woning?</h2>
        <p className="mt-1 text-sm text-slate-500">
          We zoeken automatisch de woninggegevens op via de BAG-registratie.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_120px_100px]">
          <Input
            label="Postcode"
            placeholder="1234 AB"
            value={form.postcode}
            error={errors.postcode}
            className="col-span-2 sm:col-span-1"
            onChange={(e) =>
              setForm((f) => ({ ...f, postcode: formatPostcode(e.target.value) }))
            }
            onKeyDown={handleKeyDown}
            maxLength={7}
            autoComplete="postal-code"
          />
          <Input
            label="Huisnummer"
            placeholder="42"
            value={form.huisnummer}
            error={errors.huisnummer}
            inputMode="numeric"
            onChange={(e) =>
              setForm((f) => ({ ...f, huisnummer: e.target.value.replace(/\D/g, '') }))
            }
            onKeyDown={handleKeyDown}
            maxLength={5}
          />
          <Input
            label="Toevoeging"
            placeholder="A, bis..."
            value={form.toevoeging}
            hint="Optioneel"
            onChange={(e) =>
              setForm((f) => ({ ...f, toevoeging: e.target.value.slice(0, 6) }))
            }
            onKeyDown={handleKeyDown}
          />
        </div>

        <Button
          size="lg"
          loading={loading}
          onClick={handleSearch}
          className="self-start"
        >
          {loading ? 'Adres opzoeken...' : 'Adres opzoeken'}
          {!loading && (
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          )}
        </Button>
      </div>

      {/* Error */}
      {apiError && (
        <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
          <svg className="h-5 w-5 text-red-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-red-700">{apiError}</p>
        </div>
      )}

      {/* Found address */}
      {found && (
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {found.straat} {found.huisnummer}{found.huisletter}{found.toevoeging ? ` ${found.toevoeging}` : ''}
                </p>
                <p className="text-sm text-slate-600">
                  {found.postcode} {found.woonplaats}
                </p>
              </div>
            </div>
          </div>

          {/* Property data grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <DataCard
              label="Oppervlakte"
              value={found.oppervlakte ? `${found.oppervlakte} m²` : null}
              fallback="Onbekend"
            />
            <DataCard
              label="Bouwjaar"
              value={found.bouwjaar ? String(found.bouwjaar) : null}
              fallback="Onbekend"
            />
            <DataCard
              label="Type woning"
              value={found.woningtype ? capitalize(found.woningtype) : null}
              fallback="Onbekend"
            />
            <DataCard
              label="Gebruiksdoel"
              value={found.gebruiksdoel ? capitalize(found.gebruiksdoel) : null}
              fallback="Onbekend"
            />
          </div>

          <p className="text-xs text-slate-400">
            Bron: BAG (Kadaster) via PDOK. Gegevens worden in de volgende stap bevestigd.
          </p>

          <div className="flex justify-end pt-2">
            <Button size="lg" onClick={() => onComplete(found)}>
              Dit klopt, verder
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function DataCard({ label, value, fallback }: { label: string; value: string | null; fallback: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
      <p className="text-xs text-slate-500 font-medium">{label}</p>
      <p className={`mt-0.5 text-sm font-semibold ${value ? 'text-slate-900' : 'text-slate-400'}`}>
        {value ?? fallback}
      </p>
    </div>
  )
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
