"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __abExposureFired?: boolean;
  }
}

/** Leest de vanilla-cookieconsent cookie uit (zelfde aanpak als MetaPixel in de wizard). */
function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const raw = document.cookie.split(";").find((c) => c.trim().startsWith("cc_cookie="));
    if (!raw) return false;
    const data = JSON.parse(decodeURIComponent(raw.trim().replace(/^cc_cookie=/, "")));
    return Array.isArray(data.categories) && data.categories.includes("analytics");
  } catch {
    return false;
  }
}

function abVariant(): string {
  return document.documentElement.getAttribute("data-ab-cta") ?? "A";
}

function abWaVariant(): string {
  return document.documentElement.getAttribute("data-ab-wa") ?? "A";
}

function abHeroVariant(): string {
  return document.documentElement.getAttribute("data-ab-hero") ?? "A";
}

function abLisaVariant(): string {
  return document.documentElement.getAttribute("data-ab-lisa") ?? "A";
}

/**
 * Vuur het A/B-exposure event pas wanneer analytics-consent is gegeven.
 * Vóór consent zijn GA4-events alleen anonieme pings (gcs=G100) die nooit
 * in rapporten verschijnen — vandaar deze consent-bewuste variant.
 */
function fireExposureOnce() {
  if (window.__abExposureFired || typeof window.gtag !== "function") return;
  window.__abExposureFired = true;
  window.gtag("event", "ab_cta_exposure", { ab_cta_variant: abVariant() });
  window.gtag("event", "ab_wa_exposure", { ab_wa_variant: abWaVariant() });
  window.gtag("event", "ab_hero_exposure", { ab_hero_variant: abHeroVariant() });
  window.gtag("event", "ab_lisa_exposure", { ab_lisa_variant: abLisaVariant() });
}

export default function TrackingEvents() {
  useEffect(() => {
    if (hasAnalyticsConsent()) fireExposureOnce();
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics?: boolean }>).detail;
      if (detail?.analytics) fireExposureOnce();
    };
    window.addEventListener("uo:consent", onConsent);

    // Site-brede klik-tracking op tel:- en WhatsApp-links (capture-fase,
    // werkt dus ook voor knoppen die later in de DOM verschijnen).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || typeof window.gtag !== "function") return;
      const href = a.getAttribute("href") ?? "";
      const params = {
        ab_cta_variant: abVariant(),
        ab_wa_variant: abWaVariant(),
        ab_hero_variant: abHeroVariant(),
        ab_lisa_variant: abLisaVariant(),
        link_url: href,
        page_path: location.pathname,
      };
      if (href.startsWith("tel:")) {
        window.gtag("event", "tel_click", params);
        // Google Ads-conversie: telefoonklik = lead. Rechtstreeks afvuren via de Ads-tag
        // (AW-748902533) omdat de GA4→Ads-import van tel_click niet doorkwam.
        window.gtag("event", "conversion", { send_to: "AW-748902533/GaOgCO3s-uMcEIWxjeUC" });
      } else if (href.includes("wa.me") || href.includes("whatsapp")) window.gtag("event", "whatsapp_click", params);
      else if (href.startsWith("/offerte")) window.gtag("event", "wizard_click", params);
      else if (href.includes("/vooropname-uploaden")) window.gtag("event", "vooropname_click", params);
      else if (href.includes("/voorinspectie")) window.gtag("event", "voorinspectie_click", params);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("uo:consent", onConsent);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
