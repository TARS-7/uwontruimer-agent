/**
 * Stuurt een event naar GA4 (G-FK7P241P9Z, geconfigureerd in app/layout.tsx).
 * Puur meting — verandert niets aan de wizard-flow. Consent Mode in de layout
 * bepaalt of het event met of zonder cookies wordt verwerkt.
 */
export function meet(event: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  if (typeof gtag === 'function') gtag('event', event, params)
}

/**
 * Google Ads-conversie "AI Wizard Voltooid" (rechtstreeks via de Ads-tag,
 * net als tel_click op de site — de GA4-import bleek onbetrouwbaar).
 * Vuurt bij het bereiken van stap 5 (offerte getoond).
 */
export function meetAdsWizardVoltooid() {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', { send_to: 'AW-748902533/mnrDCP7Ll4EdEIWxjeUC' })
  }
}

/** Leesbare namen voor de vijf stappen, zodat het trechterrapport in GA4 te lezen is. */
export const STAPNAMEN: Record<number, string> = {
  1: 'ontruimingstype',
  2: 'woning',
  3: 'fotos',
  4: 'adres_contact',
  5: 'offerte',
}
