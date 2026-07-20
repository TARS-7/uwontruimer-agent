"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { getAbCtaVariant } from "@/data/ab-cta";
import AbCtaText from "@/components/AbCtaText";

const offerteIcon = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function AbHeroCta({ location = "hero" }: { location?: "hero" | "bottom" }) {
  return (
    <a
      href="https://analyse.uwontruimer.nl"
      onClick={() => sendGAEvent("event", "cta_click", { ab_cta_variant: getAbCtaVariant(), cta_location: location })}
      className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
      style={{ backgroundColor: "#d97706" }}
    >
      {offerteIcon}
      <AbCtaText slot="hero" />
    </a>
  );
}
