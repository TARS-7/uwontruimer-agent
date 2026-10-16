'use client'

import { useState } from 'react'
import type { IconVariant } from '@/lib/abIconen'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepOntruimingTypeResult {
  ontruimingType: string
}

interface Props {
  initialData: { ontruimingType: string | null }
  onComplete: (result: StepOntruimingTypeResult) => void
  /** A/B-test: 'emoji' = huidige situatie (A), 'iconen' = strakke lijn-iconen (B). */
  iconVariant?: IconVariant
}

// ─── Opties ───────────────────────────────────────────────────────────────────

// Lijn-iconen (variant B): zelfde stijl als het logo — 24px, stroke 2, blauw.
const ICOON_PADS: Record<string, string> = {
  'Hele woning':      'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  'Deel van woning':  'M4 21h16M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M14.5 12h.01',
  'Kelder of zolder': 'M4 8h16M4 8l2-4h12l2 4M4 8v11a1 1 0 001 1h14a1 1 0 001-1V8M10 12h4',
  'Spoedontruiming':  'M13 3L4 14h6l-1 7 9-11h-6l1-7z',
}

const OPTIES = [
  { label: 'Hele woning',     emoji: '🏠' },
  { label: 'Deel van woning', emoji: '🚪' },
  { label: 'Kelder of zolder', emoji: '📦' },
  { label: 'Spoedontruiming', emoji: '⚡' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepOntruimingType({ initialData, onComplete, iconVariant = 'emoji' }: Props) {
  const [selected, setSelected] = useState<string | null>(initialData.ontruimingType)

  function handleSelect(label: string) {
    setSelected(label)
    setTimeout(() => onComplete({ ontruimingType: label }), 200)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Wat moet er ontruimd worden?</h2>
        <p className="mt-1 text-sm text-slate-500">
          Kies de situatie die het beste bij u past.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {OPTIES.map(({ label, emoji }) => {
          const isSelected = selected === label
          return (
            <button
              key={label}
              type="button"
              onClick={() => handleSelect(label)}
              className={`
                relative flex flex-col items-center gap-3 rounded-2xl border-2 px-3 py-6
                text-center transition-all duration-150
                ${isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/30'
                }
              `}
            >
              {isSelected && (
                <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
              {iconVariant === 'iconen' ? (
                <svg className="h-9 w-9 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ICOON_PADS[label]} />
                </svg>
              ) : (
                <span className="text-4xl leading-none" role="img" aria-hidden="true">{emoji}</span>
              )}
              <span className="text-sm font-medium leading-snug">{label}</span>
            </button>
          )
        })}
      </div>

      <p className="text-center text-xs text-slate-400">
        Gratis &amp; vrijblijvend · Prijsindicatie binnen 2 minuten
      </p>
    </div>
  )
}
