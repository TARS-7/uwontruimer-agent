'use client'

import { useState, useRef } from 'react'
import Button from '@/components/ui/Button'
import { uploadFotos, generateUploadId } from '@/lib/firebase-upload'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FotoItem { id: string; file: File; url: string }

export interface Step4Result {
  fotos: File[]
  fotoUrls: string[]
}

interface Props {
  initialData: { fotos: File[] }
  onComplete: (result: Step4Result) => void
  onBack: () => void
}

const ACCEPTED_TYPES = 'image/jpeg,image/png,image/webp,image/gif'

function uid() { return Math.random().toString(36).slice(2, 10) }

// ─── Component ────────────────────────────────────────────────────────────────

export default function Step4Fotos({ initialData, onComplete, onBack }: Props) {
  const [fotos, setFotos]       = useState<FotoItem[]>(() =>
    initialData.fotos.map((f) => ({ id: uid(), file: f, url: URL.createObjectURL(f) }))
  )
  const [dragOver, setDragOver] = useState(false)
  const [error, setError]       = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const inputRef    = useRef<HTMLInputElement>(null)
  const uploadIdRef = useRef(generateUploadId())

  function addFiles(files: FileList | null) {
    if (!files) return
    const nieuw = Array.from(files)
      .filter((f) => f.type.startsWith('image/'))
      .map((f) => ({ id: uid(), file: f, url: URL.createObjectURL(f) }))
    setFotos((prev) => [...prev, ...nieuw])
    setError(null)
  }

  async function handleSubmit() {
    if (fotos.length === 0) {
      setError("Upload minimaal één foto voordat je verdergaat. Je mag ook overslaan als je geen foto's hebt.")
      return
    }
    setUploading(true)
    setError(null)
    try {
      const files  = fotos.map((f) => f.file)
      const subpad = `aanvragen/${uploadIdRef.current}`
      const fotoUrls = await uploadFotos(files, subpad)
      onComplete({ fotos: files, fotoUrls })
    } catch {
      setError('Upload mislukt. Controleer je verbinding en probeer opnieuw.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Foto&apos;s van de woning</h2>
        <p className="mt-1 text-sm text-slate-500">
          Upload foto&apos;s van de te ontruimen ruimtes. Hoe meer foto&apos;s, hoe nauwkeuriger de offerte.
        </p>
      </div>

      {/* Drop zone */}
      <button
        type="button"
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files) }}
        onClick={() => inputRef.current?.click()}
        className={`
          flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-10
          transition-all duration-150
          ${dragOver
            ? 'border-blue-400 bg-blue-50'
            : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/30'
          }
        `}
      >
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${dragOver ? 'bg-blue-100' : 'bg-white border border-slate-200'}`}>
          <svg className={`h-7 w-7 ${dragOver ? 'text-blue-500' : 'text-slate-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-slate-700">
            {dragOver ? 'Laat los om te uploaden' : "Sleep foto\u2019s hier of klik om te uploaden"}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">JPEG, PNG, WebP · meerdere tegelijk mogelijk</p>
        </div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES}
        multiple
        className="sr-only"
        onChange={(e) => { addFiles(e.target.files); (e.target as HTMLInputElement).value = '' }}
      />

      {/* Thumbnail grid */}
      {fotos.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {fotos.length} {fotos.length === 1 ? "foto" : "foto\u2019s"} geselecteerd
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Meer toevoegen
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {fotos.map((foto) => (
              <div key={foto.id} className="group relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={foto.url} alt="" className="h-full w-full object-cover" />
                <button
                  onClick={() => setFotos((prev) => prev.filter((f) => f.id !== foto.id))}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <Button variant="ghost" onClick={onBack}>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Terug
        </Button>

        <div className="flex items-center gap-2">
          {fotos.length === 0 && (
            <button
              type="button"
              onClick={() => onComplete({ fotos: [], fotoUrls: [] })}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 transition-colors"
            >
              Overslaan
            </button>
          )}
          <Button size="lg" onClick={handleSubmit} disabled={uploading}>
            {uploading ? 'Uploaden…' : 'Volgende stap'}
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
