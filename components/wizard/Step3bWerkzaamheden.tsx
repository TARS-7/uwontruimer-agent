'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step3bResult {
  geselecteerdeWerkzaamheden: string[]
}

interface Props {
  initialData: { geselecteerdeWerkzaamheden: string[] }
  onComplete: (result: Step3bResult) => void
  onBack: () => void
}

// ─── Opties ───────────────────────────────────────────────────────────────────

const OPTIES = [
  { label: 'Schilderen',               emoji: '🖌️' },
  { label: 'Behang verwijderen',        emoji: '🪣' },
  { label: 'Vloer verwijderen (los)',   emoji: '🪵' },
  { label: 'Vloer verwijderen (gelijmd)', emoji: '🔨' },
  { label: 'Tuin opruimen',            emoji: '🌿' },
  { label: 'Kelder/zolder ruimen',     emoji: '📦' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Step3bWerkzaamheden({ initialData, onComplete, onBack }: Props) {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(initialData.geselecteerdeWerkzaamheden.filter((w) =>
      OPTIES.some((o) => o.label === w)
    ))
  )
  const [overige, setOverige] = useState(() => {
    const bekendeLabels = new Set(OPTIES.map((o) => o.label))
    return initialData.geselecteerdeWerkzaamheden
      .filter((w) => !bekendeLabels.has(w))
      .join(', ')
  })

  function toggle(label: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
  }

  function handleComplete() {
    const lijst = [
      ...Array.from(selected),
      ...overige
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    ]
    onComplete({ geselecteerdeWerkzaamheden: lijst })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Welke werkzaamheden zijn nodig?</h2>
        <p className="mt-1 text-sm text-slate-500">
          Selecteer alles wat van toepassing is op de woning. U kunt meerdere opties kiezen.
        </p>
      </div>

      {/* Toggle-kaarten */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {OPTIES.map(({ label, emoji }) => {
          const isSelected = selected.has(label)
          return (
            <button
              key={label}
              type="button"
              onClick={() => toggle(label)}
              className={`
                relative flex flex-col items-center gap-2.5 rounded-2xl border-2 px-3 py-5
                text-center transition-all duration-150
                ${isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/30'
                }
              `}
            >
              {/* Checkmark */}
              {isSelected && (
                <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}

              <span className="text-3xl leading-none" role="img" aria-hidden="true">{emoji}</span>
              <span className="text-sm font-medium leading-snug">{label}</span>
            </button>
          )
        })}
      </div>

      {/* Overige werkzaamheden */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Overige werkzaamheden
          <span className="ml-1 text-xs font-normal text-slate-400">(optioneel)</span>
        </label>
        <textarea
          value={overige}
          onChange={(e) => setOverige(e.target.value)}
          placeholder="Bijv. kozijnen schilderen, dakgoot reinigen…"
          rows={2}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Navigation */}
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

        <Button size="lg" onClick={handleComplete}>
          Volgende stap
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
