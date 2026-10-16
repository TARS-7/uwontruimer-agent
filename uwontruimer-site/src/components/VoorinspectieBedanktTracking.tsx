"use client";

import { useEffect } from "react";

/**
 * Meldt in GA4 dat een voorinspectie daadwerkelijk is betaald. Dit is het
 * sluitstuk van de trechter: click -> aanvraag -> betaal_klik -> betaald.
 */
export default function VoorinspectieBedanktTracking() {
  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "voorinspectie_betaald", { waarde: 150, currency: "EUR" });
  }, []);
  return null;
}
