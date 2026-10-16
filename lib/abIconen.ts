import { meet } from '@/lib/meet'

/**
 * A/B-test stap 1: emoji's (A, huidige situatie) tegen strakke lijn-iconen (B).
 * 50/50 geloot per browser en vastgehouden in localStorage, zodat dezelfde
 * bezoeker bij terugkomst dezelfde variant ziet. localStorage kan geblokkeerd
 * zijn (privemodus); dan valt de loting terug op sessie-niveau.
 */
export type IconVariant = 'emoji' | 'iconen'

const SLEUTEL = 'uo_ab_iconen'

export function bepaalIconVariant(): IconVariant {
  if (typeof window === 'undefined') return 'emoji'
  try {
    const bewaard = window.localStorage.getItem(SLEUTEL)
    if (bewaard === 'emoji' || bewaard === 'iconen') return bewaard
    const variant: IconVariant = Math.random() < 0.5 ? 'emoji' : 'iconen'
    window.localStorage.setItem(SLEUTEL, variant)
    return variant
  } catch {
    return Math.random() < 0.5 ? 'emoji' : 'iconen'
  }
}

/** Exposure-event zodat GA4 per variant kan vergelijken (start -> voltooid). */
export function meetIconExposure(variant: IconVariant) {
  meet('ab_iconen_exposure', { ab_iconen_variant: variant })
}
