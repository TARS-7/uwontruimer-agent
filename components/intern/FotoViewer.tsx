'use client'

import { useState } from 'react'

interface Props {
  urls: string[]
  naam: string
}

export default function FotoViewer({ urls, naam }: Props) {
  const [open, setOpen]   = useState(false)
  const [index, setIndex] = useState(0)

  if (urls.length === 0) return null

  function prev() { setIndex((i) => (i - 1 + urls.length) % urls.length) }
  function next() { setIndex((i) => (i + 1) % urls.length) }

  return (
    <>
      <button
        onClick={() => { setIndex(0); setOpen(true) }}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#003d63' }}
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        {urls.length === 1 ? '1 foto' : `${urls.length} foto\u2019s`}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-white">{naam}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/50">
                  {index + 1} / {urls.length}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center gap-3">
              {urls.length > 1 && (
                <button
                  onClick={prev}
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              )}

              <div className="flex-1 overflow-hidden rounded-xl bg-black/50 max-h-[75vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={urls[index]}
                  src={urls[index]}
                  alt={`Foto ${index + 1} van ${naam}`}
                  className="block h-full w-full object-contain"
                />
              </div>

              {urls.length > 1 && (
                <button
                  onClick={next}
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dot indicators */}
            {urls.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {urls.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === index ? '1.5rem' : '0.375rem',
                      backgroundColor: i === index ? '#f4a01c' : 'rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
