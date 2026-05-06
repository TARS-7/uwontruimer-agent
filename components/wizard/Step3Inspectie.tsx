'use client'

import { useState, useRef, useCallback } from 'react'
import Button from '@/components/ui/Button'

export interface Step3Result {
  inspectierapportNaam: string
  inspectieWerkzaamheden: string[]
}

interface Step3Props {
  initialData: { inspectierapportNaam: string | null; inspectieWerkzaamheden: string[] }
  onComplete: (result: Step3Result) => void
  onBack: () => void
}

type Phase = 'upload' | 'analysing' | 'results'

export default function Step3Inspectie({ initialData, onComplete, onBack }: Step3Props) {
  const [phase, setPhase] = useState<Phase>(
    initialData.inspectieWerkzaamheden.length > 0 ? 'results' : 'upload'
  )
  const [dragOver, setDragOver] = useState(false)
  const [bestandNaam, setBestandNaam] = useState(initialData.inspectierapportNaam ?? '')
  const [werkzaamheden, setWerkzaamheden] = useState<string[]>(initialData.inspectieWerkzaamheden)
  const [apiError, setApiError] = useState<string | null>(null)
  const [nieuwItem, setNieuwItem] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const addInputRef = useRef<HTMLInputElement>(null)

  const analyseFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      setApiError('Alleen PDF-bestanden zijn toegestaan.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setApiError('Bestand is te groot (max 10 MB).')
      return
    }

    setBestandNaam(file.name)
    setApiError(null)
    setPhase('analysing')

    const fd = new FormData()
    fd.append('rapport', file)

    try {
      const res = await fetch('/api/analyse-inspectie', { method: 'POST', body: fd })
      const data = await res.json()

      if (!res.ok) {
        setApiError(data.error ?? 'Analyse mislukt. Probeer opnieuw.')
        setPhase('upload')
        return
      }

      setWerkzaamheden(data.werkzaamheden)
      setPhase('results')
    } catch {
      setApiError('Verbinding mislukt. Controleer uw internetverbinding.')
      setPhase('upload')
    }
  }, [])

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) analyseFile(file)
    e.target.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) analyseFile(file)
  }

  function removeItem(index: number) {
    setWerkzaamheden((prev) => prev.filter((_, i) => i !== index))
  }

  function addItem() {
    const trimmed = nieuwItem.trim()
    if (!trimmed) return
    setWerkzaamheden((prev) => [...prev, trimmed])
    setNieuwItem('')
    addInputRef.current?.focus()
  }

  function updateItem(index: number, value: string) {
    setWerkzaamheden((prev) => prev.map((item, i) => (i === index ? value : item)))
  }

  function handleSubmit() {
    const valid = werkzaamheden.filter((w) => w.trim().length > 0)
    if (valid.length === 0) {
      setSubmitError('Voeg minimaal één werkzaamheid toe voordat je verder gaat.')
      return
    }
    setSubmitError(null)
    onComplete({ inspectierapportNaam: bestandNaam, inspectieWerkzaamheden: valid })
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Inspectie rapport uploaden</h2>
        <p className="mt-1 text-sm text-slate-500">
          Upload het inspectie rapport van de verhuurder. Onze AI leest het rapport en
          extraheert automatisch alle benodigde werkzaamheden.
        </p>
      </div>

      {/* Upload zone */}
      {(phase === 'upload' || phase === 'analysing') && (
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => phase === 'upload' && inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); if (phase === 'upload') setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={phase === 'upload' ? handleDrop : undefined}
            disabled={phase === 'analysing'}
            className={`
              relative flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed
              px-6 py-12 text-center transition-all duration-150
              ${phase === 'analysing'
                ? 'border-blue-200 bg-blue-50 cursor-default'
                : dragOver
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/40 cursor-pointer'
              }
            `}
          >
            {phase === 'analysing' ? (
              <>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <svg className="h-8 w-8 animate-spin text-blue-500" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Gemini analyseert het rapport…</p>
                  <p className="mt-1 text-sm text-blue-600">{bestandNaam}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
                  <span>Werkzaamheden worden geëxtraheerd</span>
                </div>
              </>
            ) : (
              <>
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${dragOver ? 'bg-blue-100' : 'bg-white border border-slate-200'}`}>
                  <svg className={`h-8 w-8 ${dragOver ? 'text-blue-500' : 'text-slate-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">
                    {dragOver ? 'Laat los om te uploaden' : 'Sleep PDF hier of klik om te uploaden'}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Alleen PDF · max. 10 MB</p>
                </div>
              </>
            )}
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={handleFilePick}
            tabIndex={-1}
          />

          {apiError && (
            <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
              <svg className="h-5 w-5 shrink-0 text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-red-700">{apiError}</p>
                <button
                  className="mt-1.5 text-xs font-medium text-red-600 underline underline-offset-2"
                  onClick={() => inputRef.current?.click()}
                >
                  Opnieuw proberen
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {phase === 'results' && (
        <div className="flex flex-col gap-5">
          {/* Bestand badge */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{bestandNaam}</p>
                <p className="text-xs text-slate-500">Geanalyseerd door Gemini AI</p>
              </div>
            </div>
            <button
              onClick={() => { setPhase('upload'); setWerkzaamheden([]); setBestandNaam('') }}
              className="text-xs text-slate-500 underline underline-offset-2 hover:text-slate-700 transition-colors"
            >
              Ander bestand
            </button>
          </div>

          {/* Werkzaamheden lijst */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                Gevonden werkzaamheden
                <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  {werkzaamheden.length}
                </span>
              </h3>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <p className="text-xs text-slate-500">
              Controleer de lijst en pas aan waar nodig. Je kunt items bewerken, verwijderen of toevoegen.
            </p>

            <ul className="flex flex-col gap-2">
              {werkzaamheden.map((item, index) => (
                <li key={index} className="flex items-center gap-2 group">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                    {index + 1}
                  </div>
                  <input
                    value={item}
                    onChange={(e) => updateItem(index, e.target.value)}
                    className="
                      flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      hover:border-slate-300 transition-colors
                    "
                  />
                  <button
                    onClick={() => removeItem(index)}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 transition-all"
                    title="Verwijder"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            {/* Toevoegen */}
            <div className="flex items-center gap-2 pt-1">
              <input
                ref={addInputRef}
                value={nieuwItem}
                onChange={(e) => setNieuwItem(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem()}
                placeholder="Werkzaamheid toevoegen…"
                className="
                  flex-1 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-sm
                  placeholder:text-slate-400 text-slate-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white
                  transition-colors
                "
              />
              <button
                onClick={addItem}
                disabled={!nieuwItem.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                title="Toevoegen"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {submitError && (
            <p className="text-sm text-red-500">{submitError}</p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <Button variant="ghost" onClick={onBack}>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Terug
        </Button>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onComplete({ inspectierapportNaam: '', inspectieWerkzaamheden: [] })}
          >
            Ik heb geen inspectierapport
          </Button>
        {phase === 'results' && (
          <Button size="lg" onClick={handleSubmit}>
            Volgende stap
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        )}
        </div>
      </div>
    </div>
  )
}
