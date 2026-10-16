// A/B-test hero-foto op de stad-/regiopagina's (src/app/[stad]/page.tsx).
// Getest wordt: de huidige verhuisbus-foto (A) vs. de handdruk-foto die ook
// op de homepage staat (B). De variant wordt toegewezen in het inline
// head-script in layout.tsx (cookie "ab_hero", 50/50, 1 jaar) en gezet als
// data-ab-hero op <html>. Zichtbaarheid regelt globals.css (.ab-hero-a / .ab-hero-b).

export const AB_HERO_COOKIE = "ab_hero";

export const AB_HERO_VARIANTS = {
  A: { src: "/hero-verhuisdozen-bus.jpg" },   // huidige regio-foto
  B: { src: "/hero-handdruk-oplevering.jpg" }, // homepage-foto (handdruk)
} as const;

export type AbHeroVariant = keyof typeof AB_HERO_VARIANTS;

// Toegewezen variant uitlezen in de browser (fallback A vóór toewijzing/SSR).
export function getAbHeroVariant(): AbHeroVariant {
  if (typeof document !== "undefined" && document.documentElement.getAttribute("data-ab-hero") === "B") {
    return "B";
  }
  return "A";
}
