'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepWoningGrootteResult {
  woningGrootte: string
}

interface Props {
  initialData: { woningGrootte: string | null }
  onComplete: (result: StepWoningGrootteResult) => void
  onBack: () => void
}

// ─── Opties ───────────────────────────────────────────────────────────────────

const OPTIES = [
  { label: 'Studio',        sublabel: '1 kamer',      emoji: '🛏️' },
  { label: 'Kleine woning', sublabel: '2–3 kamers',   emoji: '🏡' },
  { label: 'Grote woning',  sublabel: '4+ kamers',    emoji: '🏘️' },
  { label: 'Weet ik niet',  sublabel: '',              emoji: '🤷' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepWoningGrootte({ initialData, onComplete, onBack }: Props) {
  const [selected, setSelected] = useState<string | null>(initialData.woningGrootte)

  function handleSelect(label: string) {
    setSelected(label)
    setTimeout(() => onComplete({ woningGrootte: label }), 200)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Hoe groot is de woning?</h2>
        <p className="mt-1 text-sm text-slate-500">
          Een globale schatting is voldoende.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {OPTIES.map(({ label, sublabel, emoji }) => {
          const isSelected = selected === label
          return (
            <button
              key={label}
              type="button"
              onClick={() => handleSelect(label)}
              className={`
                relative flex flex-col items-center gap-2.5 rounded-2xl border-2 px-3 py-6
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
              <div>
                <p className="text-sm font-medium leading-snug">{label}</p>
                {sublabel && <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>}
              </div>
            </button>
          )
        })}
      </div>

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
    </div>
  )
}
