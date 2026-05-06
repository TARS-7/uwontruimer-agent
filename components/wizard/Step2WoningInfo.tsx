'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import type { AddressData, WizardState } from '@/lib/types'

export interface Step2Result {
  address: AddressData
  aantalKamers: number
  staatWoning: 'goed' | 'redelijk' | 'slecht'
  opleveringsdatum: string
  eigendomstype: 'huur' | 'koop'
}

interface Step2Props {
  address: AddressData
  initialData: Pick<WizardState, 'aantalKamers' | 'staatWoning' | 'opleveringsdatum' | 'eigendomstype'>
  onComplete: (result: Step2Result) => void
  onBack: () => void
}

// Minimum date = today + 3 days
function getMinDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 3)
  return d.toISOString().split('T')[0]
}

interface FieldErrors {
  straat?: string
  huisnummer?: string
  woonplaats?: string
  oppervlakte?: string
  bouwjaar?: string
  aantalKamers?: string
  staatWoning?: string
  opleveringsdatum?: string
  eigendomstype?: string
}

export default function Step2WoningInfo({ address, initialData, onComplete, onBack }: Step2Props) {
  const minDate = getMinDate()

  // Editable address copy
  const [straat, setStraat] = useState(address.straat)
  const [huisnummer, setHuisnummer] = useState(
    address.huisnummer + (address.huisletter ?? '') + (address.toevoeging ? ` ${address.toevoeging}` : '')
  )
  const [woonplaats, setWoonplaats] = useState(address.woonplaats)

  // BAG fields (editable)
  const [oppervlakte, setOppervlakte] = useState(address.oppervlakte ? String(address.oppervlakte) : '')
  const [bouwjaar, setBouwjaar] = useState(address.bouwjaar ? String(address.bouwjaar) : '')

  // Step-2-specific fields
  const [aantalKamers, setAantalKamers] = useState(
    initialData.aantalKamers ? String(initialData.aantalKamers) : ''
  )
  const [staatWoning, setStaatWoning] = useState<'goed' | 'redelijk' | 'slecht' | ''>(
    initialData.staatWoning ?? ''
  )
  const [opleveringsdatum, setOpleveringsdatum] = useState(initialData.opleveringsdatum ?? '')
  const [eigendomstype, setEigendomstype] = useState<'huur' | 'koop' | null>(
    initialData.eigendomstype ?? null
  )

  const [errors, setErrors] = useState<FieldErrors>({})

  function validate(): boolean {
    const e: FieldErrors = {}

    if (!straat.trim()) e.straat = 'Vul een straatnaam in'
    if (!huisnummer.trim()) e.huisnummer = 'Vul een huisnummer in'
    if (!woonplaats.trim()) e.woonplaats = 'Vul een woonplaats in'

    if (oppervlakte) {
      const v = Number(oppervlakte)
      if (isNaN(v) || v <= 0) e.oppervlakte = 'Voer een geldige oppervlakte in'
    }
    if (bouwjaar) {
      const v = Number(bouwjaar)
      const year = new Date().getFullYear()
      if (isNaN(v) || v < 1500 || v > year) e.bouwjaar = `Voer een geldig bouwjaar in (1500–${year})`
    }

    if (!aantalKamers) e.aantalKamers = 'Kies het aantal kamers'
    if (!staatWoning) e.staatWoning = 'Kies de staat van de woning'

    if (!opleveringsdatum) {
      e.opleveringsdatum = 'Kies een opleveringsdatum'
    } else if (opleveringsdatum < minDate) {
      e.opleveringsdatum = 'Datum moet minimaal 3 dagen in de toekomst liggen'
    }

    if (!eigendomstype) e.eigendomstype = 'Kies huur of koop'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit() {
    if (!validate()) return

    onComplete({
      address: {
        ...address,
        straat: straat.trim(),
        huisnummer: huisnummer.trim(),
        woonplaats: woonplaats.trim(),
        oppervlakte: oppervlakte ? Number(oppervlakte) : null,
        bouwjaar: bouwjaar ? Number(bouwjaar) : null,
      },
      aantalKamers: Number(aantalKamers),
      staatWoning: staatWoning as 'goed' | 'redelijk' | 'slecht',
      opleveringsdatum,
      eigendomstype: eigendomstype!,
    })
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Woninggegevens bevestigen</h2>
        <p className="mt-1 text-sm text-slate-500">
          Controleer de opgehaalde gegevens en vul aan waar nodig.
        </p>
      </div>

      {/* Section: Adresgegevens */}
      <Section title="Adresgegevens">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]">
          <Input
            label="Straat"
            value={straat}
            error={errors.straat}
            onChange={(e) => setStraat(e.target.value)}
          />
          <Input
            label="Huisnummer"
            value={huisnummer}
            error={errors.huisnummer}
            onChange={(e) => setHuisnummer(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Woonplaats"
            value={woonplaats}
            error={errors.woonplaats}
            onChange={(e) => setWoonplaats(e.target.value)}
          />
          <Input
            label="Postcode"
            value={address.postcode}
            disabled
            hint="Afkomstig uit BAG-registratie"
          />
        </div>
      </Section>

      {/* Section: Woningkenmerken */}
      <Section title="Woningkenmerken">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Input
            label="Oppervlakte (m²)"
            value={oppervlakte}
            error={errors.oppervlakte}
            inputMode="numeric"
            placeholder={address.oppervlakte ? String(address.oppervlakte) : 'bijv. 85'}
            onChange={(e) => setOppervlakte(e.target.value.replace(/[^\d]/g, ''))}
          />
          <Input
            label="Bouwjaar"
            value={bouwjaar}
            error={errors.bouwjaar}
            inputMode="numeric"
            placeholder={address.bouwjaar ? String(address.bouwjaar) : 'bijv. 1978'}
            onChange={(e) => setBouwjaar(e.target.value.replace(/[^\d]/g, '').slice(0, 4))}
            maxLength={4}
          />
          <Select
            label="Aantal kamers"
            value={aantalKamers}
            error={errors.aantalKamers}
            placeholder="Kies..."
            onChange={(e) => setAantalKamers(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'kamer' : 'kamers'}
              </option>
            ))}
          </Select>
          <Select
            label="Staat van de woning"
            value={staatWoning}
            error={errors.staatWoning}
            placeholder="Kies..."
            onChange={(e) => setStaatWoning(e.target.value as 'goed' | 'redelijk' | 'slecht')}
          >
            <option value="goed">Goed</option>
            <option value="redelijk">Redelijk</option>
            <option value="slecht">Slecht</option>
          </Select>
        </div>
      </Section>

      {/* Section: Oplevering */}
      <Section title="Gewenste opleveringsdatum">
        <div className="max-w-xs">
          <DateInput
            value={opleveringsdatum}
            min={minDate}
            error={errors.opleveringsdatum}
            onChange={(v) => setOpleveringsdatum(v)}
          />
          <p className="mt-1.5 text-xs text-slate-500">Minimaal 3 dagen vanaf vandaag</p>
        </div>
      </Section>

      {/* Section: Eigendomstype */}
      <Section title="Type woning" error={errors.eigendomstype}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <EigendomCard
            type="huur"
            selected={eigendomstype === 'huur'}
            onClick={() => setEigendomstype('huur')}
          />
          <EigendomCard
            type="koop"
            selected={eigendomstype === 'koop'}
            onClick={() => setEigendomstype('koop')}
          />
        </div>
      </Section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <Button variant="ghost" onClick={onBack}>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Terug
        </Button>
        <Button size="lg" onClick={handleSubmit}>
          Volgende stap
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Section({
  title,
  error,
  children,
}: {
  title: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h3 className="text-sm font-semibold text-slate-700 whitespace-nowrap">{title}</h3>
        <div className="h-px flex-1 bg-slate-100" />
      </div>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

function DateInput({
  value,
  min,
  error,
  onChange,
}: {
  value: string
  min: string
  error?: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className={`
          h-10 w-full rounded-xl border bg-white px-3 text-sm text-slate-900
          transition-colors duration-150
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? 'border-red-400' : 'border-slate-200 hover:border-slate-300'}
        `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

function EigendomCard({
  type,
  selected,
  onClick,
}: {
  type: 'huur' | 'koop'
  selected: boolean
  onClick: () => void
}) {
  const isHuur = type === 'huur'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex flex-col items-start gap-3 rounded-xl border-2 p-5 text-left
        transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        ${selected
          ? 'border-blue-500 bg-blue-50'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
        }
      `}
    >
      {/* Selected indicator */}
      <span
        className={`
          absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2
          transition-all duration-150
          ${selected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'}
        `}
      >
        {selected && (
          <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        )}
      </span>

      {/* Icon */}
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${selected ? 'bg-blue-100' : 'bg-slate-100'}`}>
        {isHuur ? (
          <svg className={`h-5 w-5 ${selected ? 'text-blue-600' : 'text-slate-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        ) : (
          <svg className={`h-5 w-5 ${selected ? 'text-blue-600' : 'text-slate-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )}
      </div>

      {/* Label */}
      <div>
        <p className={`font-semibold text-sm ${selected ? 'text-blue-900' : 'text-slate-900'}`}>
          {isHuur ? 'Huurwoning' : 'Koopwoning'}
        </p>
        <p className={`text-xs mt-0.5 ${selected ? 'text-blue-700' : 'text-slate-500'}`}>
          {isHuur
            ? 'Woning wordt gehuurd van een verhuurder'
            : 'Woning is eigendom van de bewoner'}
        </p>
      </div>
    </button>
  )
}
