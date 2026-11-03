"use client";
import { useEffect } from "react";
import { leesAttributie, leesHerkomst } from "@/lib/attributie";

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
  // Opkoop-pagina (2 nov 2026): paginaweergave apart meten, alleen na consent.
  if (location.pathname.startsWith(OPKOOP_PAD)) window.gtag("event", "opkoop_pagina_bekeken", { page_path: location.pathname });
}

const OPKOOP_PAD = "/diensten/opkopen-inboedel";

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
      // Opkoop-pagina: eigen events naast de site-brede, zodat de pagina apart te beoordelen is.
      if (location.pathname.startsWith(OPKOOP_PAD)) {
        if (href.startsWith("tel:")) window.gtag("event", "opkoop_bel_klik", params);
        else if (href.includes("analyse.uwontruimer.nl")) window.gtag("event", "opkoop_wizard_klik", params);
        else if (href.includes("wa.me")) window.gtag("event", "opkoop_whatsapp_klik", params);
      }
      if (href.startsWith("tel:")) {
        window.gtag("event", "tel_click", params);
        // Telefoonklik mét herkomst naar het dashboard (3 nov 2026): wordt daar
        // op tijd gekoppeld aan het Voys-gesprek en aan de opdracht. Geen
        // persoonsgegevens; keepalive zodat het verzoek de paginawissel overleeft.
        try {
          const attr = leesAttributie();
          const herkomst = leesHerkomst();
          fetch("/api/telefoonklik", {
            method: "POST",
            keepalive: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pagina: location.pathname,
              gclid: attr.gclid, gbraid: attr.gbraid, wbraid: attr.wbraid,
              utmSource: attr.utmSource, utmMedium: attr.utmMedium, utmCampaign: attr.utmCampaign,
              utmTerm: attr.utmTerm, utmContent: attr.utmContent,
              landingsPagina: attr.landingsPagina, klikVastgelegdOp: attr.klikVastgelegdOp,
              verwijzer: herkomst.verwijzer, eersteLanding: herkomst.eersteLanding,
              betaald: document.documentElement.hasAttribute("data-betaald"),
              abVarianten: `cta=${abVariant()};wa=${abWaVariant()};hero=${abHeroVariant()};lisa=${abLisaVariant()}`,
              apparaat: /Mobi|Android/i.test(navigator.userAgent) ? "mobiel" : "desktop",
            }),
          }).catch(() => {});
        } catch { /* meting mag de klik nooit hinderen */ }
        // Google Ads-conversie: telefoonklik = lead. Rechtstreeks afvuren via de Ads-tag
        // (AW-748902533) omdat de GA4→Ads-import van tel_click niet doorkwam.
        window.gtag("event", "conversion", { send_to: "AW-748902533/GaOgCO3s-uMcEIWxjeUC" });
      } else if (href.includes("wa.me") || href.includes("whatsapp")) window.gtag("event", "whatsapp_click", params);
      else if (href.startsWith("/offerte")) window.gtag("event", "wizard_click", params);
      else if (href.includes("/vooropname-uploaden")) window.gtag("event", "vooropname_click", params);
      else if (href.includes("/voorinspectie")) window.gtag("event", "voorinspectie_click", params);
      // M1 (20-10-2026): klikken op "Werken bij" in menu en footer (de links die
      // bij betaald verkeer verborgen zijn). betaald=ja zou niet mogen voorkomen
      // en is daarmee meteen de controle dat het verbergen werkt.
      else if (href.startsWith("/werken-bij") && a.closest(".verberg-betaald")) {
        window.gtag("event", "nav_werken_bij_klik", {
          betaald: document.documentElement.hasAttribute("data-betaald") ? "ja" : "nee",
          link_url: href,
          page_path: location.pathname,
        });
      }
    };
    document.addEventListener("click", onClick, true);

    // Opkoop-pagina: openen van een veelgestelde vraag.
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement | null;
      if (!d || !d.open || typeof window.gtag !== "function") return;
      const vraag = d.querySelector("summary")?.textContent?.trim().replace(/\+$/, "").trim() ?? "";
      if (d.hasAttribute?.("data-opkoop-faq")) window.gtag("event", "opkoop_faq_open", { vraag, page_path: location.pathname });
      // Generiek (2 nov 2026): elke <details data-faq> op de site, o.a. /woningontruimer-kiezen/.
      else if (d.hasAttribute?.("data-faq")) window.gtag("event", "faq_open", { vraag, page_path: location.pathname });
    };
    document.addEventListener("toggle", onToggle, true);

    return () => {
      window.removeEventListener("uo:consent", onConsent);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);

  return null;
}
