'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepOntruimingTypeResult {
  ontruimingType: string
}

interface Props {
  initialData: { ontruimingType: string | null }
  onComplete: (result: StepOntruimingTypeResult) => void
}

// ─── Opties ───────────────────────────────────────────────────────────────────

const OPTIES = [
  { label: 'Hele woning',     emoji: '🏠' },
  { label: 'Deel van woning', emoji: '🚪' },
  { label: 'Kelder of zolder', emoji: '📦' },
  { label: 'Spoedontruiming', emoji: '⚡' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepOntruimingType({ initialData, onComplete }: Props) {
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

      <div className="grid grid-cols-2 gap-3">
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
              <span className="text-4xl leading-none" role="img" aria-hidden="true">{emoji}</span>
              <span className="text-sm font-medium leading-snug">{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
