// A/B-test voor CTA-teksten (menubalk + hero-knop stadspagina's).
// De variant wordt toegewezen in het inline head-script in layout.tsx
// (cookie "ab_cta", 50/50, 1 jaar) en gezet als data-ab-cta op <html>.
// Zichtbaarheid wordt geregeld in globals.css (.ab-cta-a / .ab-cta-b).

export const AB_CTA_COOKIE = "ab_cta";

export const AB_CTA_VARIANTS = {
  A: {
    menu: "Gratis AI-analyse",
    hero: "Ontvang direct uw AI-offerte (2 min)",
  },
  B: {
    menu: "Gratis offerte",
    hero: "Ontvang direct uw offerte (2 min)",
  },
} as const;

export type AbCtaVariant = keyof typeof AB_CTA_VARIANTS;
export type AbCtaSlot = keyof (typeof AB_CTA_VARIANTS)["A"];

// Toegewezen variant uitlezen in de browser (fallback A vóór toewijzing/SSR).
export function getAbCtaVariant(): AbCtaVariant {
  if (typeof document !== "undefined" && document.documentElement.getAttribute("data-ab-cta") === "B") {
    return "B";
  }
  return "A";
}
