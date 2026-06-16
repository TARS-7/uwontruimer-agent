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
        <span className="text-base font-semibold text-white">Gratis AI-prijsindicatie</span>
        <span className="text-xs text-white/70 mt-1">Binnen 5 minuten · geen gesprek nodig</span>
      </a>
      <a
        href="tel:0853035894"
        onClick={() => sendGAEvent("event", "bellen", { method: "hero" })}
        className="text-sm text-white/70 hover:text-white md:text-slate-500 md:hover:text-slate-700 transition-colors text-center"
      >
        Liever direct bellen? <span className="font-medium">085-303 58 94</span>
      </a>
    </div>
  );
}
