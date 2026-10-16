"use client";

import { useEffect, useState } from "react";
import { leesAttributie, leesHerkomst } from "@/lib/attributie";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function VoorinspectieForm() {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [corporatie, setCorporatie] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [betaalUrl, setBetaalUrl] = useState<string | null>(null);
  // Welke ingang heeft de bezoeker gebruikt (wizard, stadspagina, menu, ...)
  // en bij welke wizard-aanvraag hoort dit. Via window.location i.p.v.
  // useSearchParams, zodat de pagina statisch gegenereerd kan blijven.
  const [van, setVan] = useState("");
  const [aanvraag, setAanvraag] = useState("");

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      setVan(q.get("van") ?? "");
      // Terug van een afgebroken Stripe-betaling: de lead staat al binnen,
      // dus geen foutmelding — alleen een neutrale toelichting bovenaan.
      if (q.get("betaling") === "afgebroken" && typeof window.gtag === "function") {
        window.gtag("event", "voorinspectie_betaling_afgebroken", {});
      }
      setAanvraag(q.get("aanvraag") ?? "");
    } catch {
      // geen URL-parameters beschikbaar; niet erg, beide blijven leeg
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/voorinspectie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam, telefoon, email, postcode, corporatie, van, aanvraag,
          ...leesAttributie(),
          herkomst: leesHerkomst(),
        }),
      });
      if (res.ok) {
        const data = (await res.json().catch(() => ({}))) as { betaalUrl?: string | null };
        setBetaalUrl(data.betaalUrl ?? null);
        setStatus("success");
        if (typeof window.gtag === "function") {
          // Losse gebeurtenis: kwam er een betaallink terug? Blijft dit event
          // structureel op "nee" staan, dan staat iDEAL uit in Moneybird.
          window.gtag(
            "event",
            data.betaalUrl ? "voorinspectie_betaallink_getoond" : "voorinspectie_geen_betaallink",
            { ingang: van || "direct" }
          );
          window.gtag("event", "voorinspectie_aanvraag", {
            ingang: van || "direct",
            uit_wizard: Boolean(aanvraag),
            corporatie_ingevuld: Boolean(corporatie.trim()),
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    // Betaallink beschikbaar: de klant legt de afspraak vast door te betalen.
    // Geen automatische redirect — hij moet zien waarvoor hij betaalt.
    if (betaalUrl) {
      return (
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="font-medium text-slate-900 mb-1">Bijna klaar — leg uw afspraak vast</p>
          <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
            Uw aanvraag is bij ons binnen. Met de betaling van €150 zetten wij de voorinspectie definitief in de planning. U betaalt veilig via iDEAL. Boekt u daarna de ontruiming bij ons, dan wordt dit bedrag
            in mindering gebracht op de offerte.
          </p>
          <a
            href={betaalUrl}
            onClick={() => {
              if (typeof window.gtag === "function") {
                window.gtag("event", "voorinspectie_betaal_klik", {
                  ingang: van || "direct",
                  uit_wizard: Boolean(aanvraag),
                });
              }
            }}
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
            style={{ backgroundColor: "#d97706" }}
          >
            Betaal €150 en plan de inspectie in →
          </a>
          <p className="text-xs text-slate-400 mt-3">
            Liever eerst overleggen? Bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a> —
            wij nemen sowieso binnen één werkdag contact op.
          </p>
        </div>
      );
    }
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <p className="font-medium text-green-800 mb-1">Aanvraag ontvangen</p>
        <p className="text-sm text-green-700 font-light leading-relaxed">
          Wij nemen binnen één werkdag contact met u op om de voorinspectie in te plannen. U hoeft verder niets te doen.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Uw naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Telefoonnummer"
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="email"
          placeholder="E-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Postcode van de woning"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Woningcorporatie (indien bekend)"
          value={corporatie}
          onChange={(e) => setCorporatie(e.target.value)}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md transition-opacity hover:opacity-90 disabled:opacity-60 text-base"
        style={{ backgroundColor: "#d97706" }}
      >
        {status === "loading" ? "Versturen…" : "Voorinspectie aanvragen →"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Er ging iets mis. Belt u ons gerust op 085-303 58 94.
        </p>
      )}
      <p className="text-xs text-slate-400">
        Geen verplichtingen vooraf · U ontvangt een betaalverzoek van €150 zodra de inspectie wordt ingepland
      </p>
    </form>
  );
}
