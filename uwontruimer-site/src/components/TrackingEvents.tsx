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

/**
 * Vuur het A/B-exposure event pas wanneer analytics-consent is gegeven.
 * Vóór consent zijn GA4-events alleen anonieme pings (gcs=G100) die nooit
 * in rapporten verschijnen — vandaar deze consent-bewuste variant.
 */
function fireExposureOnce() {
  if (window.__abExposureFired || typeof window.gtag !== "function") return;
  window.__abExposureFired = true;
  window.gtag("event", "ab_cta_exposure", { ab_cta_variant: abVariant() });
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
        link_url: href,
        page_path: location.pathname,
      };
      if (href.startsWith("tel:")) {
        window.gtag("event", "tel_click", params);
        // Google Ads-conversie: telefoonklik = lead. Rechtstreeks afvuren via de Ads-tag
        // (AW-748902533) omdat de GA4→Ads-import van tel_click niet doorkwam.
        window.gtag("event", "conversion", { send_to: "AW-748902533/GaOgCO3s-uMcEIWxjeUC" });
      } else if (href.includes("wa.me") || href.includes("whatsapp")) window.gtag("event", "whatsapp_click", params);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("uo:consent", onConsent);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
