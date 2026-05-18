"use client";
import { sendGAEvent } from "@next/third-parties/google";

export default function HeroTunnels() {
  return (
    <div className="fade-4 flex flex-col gap-3 mb-12">
      <a
        href="https://analyse.uwontruimer.nl"
        onClick={() => sendGAEvent("event", "wizard", { method: "hero" })}
        className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 rounded-xl px-5 py-4 transition-colors group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Offerte aanvragen</div>
            <div className="text-xs text-white/70 mt-0.5">Prijsindicatie binnen 5 minuten · geen gesprek nodig</div>
          </div>
        </div>
        <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
      </a>
      <a
        href="tel:0853035894"
        onClick={() => sendGAEvent("event", "bellen", { method: "hero" })}
        className="flex items-center justify-between bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-600 rounded-xl px-5 py-4 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">Liever direct bellen?</div>
            <div className="text-xs text-slate-400 mt-0.5">085-303 58 94 · ma-za 8:00–18:00</div>
          </div>
        </div>
        <div className="w-7 h-7 bg-slate-200 group-hover:bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
          <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
      </a>
    </div>
  );
}
