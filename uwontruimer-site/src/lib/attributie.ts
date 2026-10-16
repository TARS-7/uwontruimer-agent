// Closed-loop marketing-attributie (Laag 2, Stap 1).
//
// Bij de landing legt een klein head-script (zie layout.tsx) de Google-klik-ID's
// (gclid/gbraid/wbraid) en UTM-parameters vast in de first-party cookie `uo_attr`
// op het parent-domein `.uwontruimer.nl`. Daardoor reist de attributie mee van de
// marketingsite (www.uwontruimer.nl) naar de wizard (analyse.uwontruimer.nl) en
// blijft ze 90 dagen bewaard. Bij conversie leest `leesAttributie()` de cookie en
// stuurt de velden mee naar het dashboard, dat ze op de Opdracht opslaat.
//
// Last-click-attributie: het head-script overschrijft alleen wanneer een nieuwe
// klik binnenkomt met klik-ID of utm-parameters, zodat de laatste betaalde klik
// wint (Google Ads' eigen model) en organisch verkeer een eerdere klik niet wist.

export type Attributie = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingsPagina?: string;
  klikVastgelegdOp?: string;
  /** Had de bezoeker marketing-consent (cookiebanner) op het conversiemoment?
   *  Bepaalt of de conversie naar Google Ads geëxporteerd mag worden. */
  marketingConsent?: boolean;
};

/** Leest de marketing-categorie uit de cc_cookie (vanilla-cookieconsent op
 *  .uwontruimer.nl). true = bezoeker accepteerde marketingcookies. */
function heeftMarketingConsent(): boolean | undefined {
  if (typeof document === "undefined") return undefined;
  try {
    const m = document.cookie.match(/(?:^|;\s*)cc_cookie=([^;]+)/);
    // Geen cc_cookie = banner nooit beantwoord; dat is iets anders dan "geweigerd".
    if (!m) return undefined;
    const cats = JSON.parse(decodeURIComponent(m[1])).categories || [];
    return Array.isArray(cats) && cats.indexOf("marketing") > -1;
  } catch {
    return undefined;
  }
}

/** Leest de `uo_attr`-cookie en geeft de velden terug in dashboard-vorm.
 *  Geeft een leeg object terug wanneer er geen (geldige) cookie is. */
export function leesAttributie(): Attributie {
  if (typeof document === "undefined") return {};
  try {
    const m = document.cookie.match(/(?:^|;\s*)uo_attr=([^;]+)/);
    if (!m) return {};
    const raw = JSON.parse(decodeURIComponent(m[1])) as Record<string, string>;
    const out: Attributie = {};
    if (raw.gclid) out.gclid = raw.gclid;
    if (raw.gbraid) out.gbraid = raw.gbraid;
    if (raw.wbraid) out.wbraid = raw.wbraid;
    if (raw.utm_source) out.utmSource = raw.utm_source;
    if (raw.utm_medium) out.utmMedium = raw.utm_medium;
    if (raw.utm_campaign) out.utmCampaign = raw.utm_campaign;
    if (raw.utm_term) out.utmTerm = raw.utm_term;
    if (raw.utm_content) out.utmContent = raw.utm_content;
    if (raw.landing) out.landingsPagina = raw.landing;
    if (raw.ts) out.klikVastgelegdOp = raw.ts;
    // Consent op het conversiemoment (niet op het landingsmoment): actueler.
    const consent = heeftMarketingConsent();
    if (consent !== undefined) out.marketingConsent = consent;
    return out;
  } catch {
    return {};
  }
}

/** Herkomst van het állereerste bezoek (first-touch), uit de cookie `uo_bron`.
 *  Complementair aan uo_attr: ook gevuld bij organisch/direct verkeer. */
export type Herkomst = {
  verwijzer?: string;
  eersteLanding?: string;
  eersteBezoekOp?: string;
};

export function leesHerkomst(): Herkomst {
  if (typeof document === "undefined") return {};
  try {
    const m = document.cookie.match(/(?:^|;\s*)uo_bron=([^;]+)/);
    if (!m) return {};
    const raw = JSON.parse(decodeURIComponent(m[1])) as Record<string, string>;
    const out: Herkomst = {};
    if (raw.ref) out.verwijzer = raw.ref;
    if (raw.landing) out.eersteLanding = raw.landing;
    if (raw.ts) out.eersteBezoekOp = raw.ts;
    return out;
  } catch {
    return {};
  }
}
