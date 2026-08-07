"use client";
import { useEffect } from "react";

// Microsoft Clarity (heatmaps + sessie-opnames). Project-ID uit het Clarity-dashboard.
// Werd voorheen via de oude GTM-container GTM-W8ZW2GRM geladen; na de unificatie naar
// GTM-MKHKSZP5 kwam die tag niet mee. Daarom nu direct in de code — Consent-gated.
const CLARITY_PROJECT_ID = "x8dmz48ub7";

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityFn;
    __clarityLoaded?: boolean;
  }
}

/** Analytics-consent uit de vanilla-cookieconsent cookie (zelfde aanpak als TrackingEvents). */
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

/**
 * Laadt Clarity pas ná analytics-consent (Clarity maakt sessie-opnames → AVG-gevoelig).
 * Officiële Clarity-bootstrap: stub-functie met queue, dan het async tag-script.
 */
function loadClarity() {
  if (typeof window === "undefined" || window.__clarityLoaded) return;
  window.__clarityLoaded = true;
  if (!window.clarity) {
    const fn = ((...args: unknown[]) => {
      (fn.q = fn.q || []).push(args);
    }) as ClarityFn;
    window.clarity = fn;
  }
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.clarity.ms/tag/" + CLARITY_PROJECT_ID;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(s, first);
}

export default function MicrosoftClarity() {
  useEffect(() => {
    if (hasAnalyticsConsent()) loadClarity();
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics?: boolean }>).detail;
      if (detail?.analytics) loadClarity();
    };
    window.addEventListener("uo:consent", onConsent);
    return () => window.removeEventListener("uo:consent", onConsent);
  }, []);
  return null;
}
