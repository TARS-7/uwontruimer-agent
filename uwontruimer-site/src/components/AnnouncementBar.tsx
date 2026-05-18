"use client";
import { sendGAEvent } from "@next/third-parties/google";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-[#2563eb] flex items-center justify-center px-4">
      <div className="flex items-center gap-3 text-white text-xs">
        <span className="hidden sm:inline">⚡ Nieuw: ontvang binnen 5 minuten een AI-prijsindicatie — gratis en zonder bellen.</span>
        <span className="sm:hidden">⚡ AI-prijsindicatie in 5 min — gratis.</span>
        <a
          href="https://analyse.uwontruimer.nl"
          onClick={() => sendGAEvent("event", "announcement_wizard", { method: "announcement_bar" })}
          className="flex items-center gap-1 font-medium underline underline-offset-2 hover:no-underline transition-all whitespace-nowrap"
        >
          Probeer nu →
        </a>
      </div>
    </div>
  );
}
