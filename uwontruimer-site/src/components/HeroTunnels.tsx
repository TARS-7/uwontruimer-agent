"use client";
import { sendGAEvent } from "@next/third-parties/google";

export default function HeroTunnels() {
  return (
    <div className="fade-4 flex flex-col gap-4 mb-12">
      <a
        href="https://analyse.uwontruimer.nl"
        onClick={() => sendGAEvent("event", "wizard", { method: "hero" })}
        className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-5 transition-colors text-center"
      >
        <span className="flex items-center gap-2 text-base font-semibold text-white">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"/></svg>
          Gratis AI-prijsindicatie
        </span>
        <span className="text-xs text-white/70 mt-1">Binnen 5 minuten · geen gesprek nodig</span>
      </a>
      <a
        href="tel:0853035894"
        onClick={() => sendGAEvent("event", "bellen", { method: "hero" })}
        className="text-sm text-slate-500 hover:text-slate-700 transition-colors text-center"
      >
        Liever direct bellen? <span className="font-medium">085-303 58 94</span>
      </a>
    </div>
  );
}
