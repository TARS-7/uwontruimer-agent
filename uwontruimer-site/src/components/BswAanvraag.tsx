"use client";

import { useEffect, useState } from "react";
import { leesAttributie, leesHerkomst } from "@/lib/attributie";

// Knop plus pop-up voor een BSW-aanvraag (Boedel Sorteer Waardering). Geen
// doorverwijzing naar de wizard: de bezoeker laat hier zijn gegevens achter en
// de aanvraag landt direct in het dashboard via /api/bsw. Meting: pop-up
// geopend, aanvraag verstuurd, aanvraag mislukt.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function meet(naam: string, params: Record<string, unknown> = {}) {
  if (typeof window.gtag === "function") window.gtag("event", naam, params);
}

type Props = {
  label: string;
  variant?: "primair" | "secundair";
  plek: string; // waar op de pagina de knop staat, voor de meting
};

export default function BswAanvraag({ label, variant = "primair", plek }: Props) {
  const [open, setOpen] = useState(false);
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [toelichting, setToelichting] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [van, setVan] = useState("");

  useEffect(() => {
    try {
      setVan(new URLSearchParams(window.location.search).get("van") ?? "");
    } catch {
      // geen URL-parameters; niet erg
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const sluit = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", sluit);
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", sluit);
      document.body.style.overflow = vorige;
    };
  }, [open]);

  function openen() {
    setOpen(true);
    meet("bsw_aanvraag_geopend", { plek, ingang: van || "direct" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/bsw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam, telefoon, email, postcode, toelichting, van,
          ...leesAttributie(),
          herkomst: leesHerkomst(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        meet("bsw_aanvraag", { plek, ingang: van || "direct", toelichting_ingevuld: Boolean(toelichting.trim()) });
      } else {
        setStatus("error");
        meet("bsw_aanvraag_fout", { plek, status: res.status });
      }
    } catch {
      setStatus("error");
      meet("bsw_aanvraag_fout", { plek, status: "netwerk" });
    }
  }

  const knopClass =
    variant === "primair"
      ? "inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      : "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-colors";

  const inputClass =
    "w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <>
      <button type="button" onClick={openen} className={knopClass}>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-0 sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="bsw-dialog-titel"
        >
          <div
            className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6 sm:p-7 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <h2 id="bsw-dialog-titel" className="text-lg font-semibold text-slate-900 tracking-tight">BSW aanvragen</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Sluiten"
                className="text-slate-400 hover:text-slate-600 text-xl leading-none px-1"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="mt-3">
                <p className="font-medium text-slate-900 mb-1">Aanvraag ontvangen</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-5">
                  Wij nemen binnen één werkdag contact met u op om de BSW in te plannen en een schatting van de uren te geven.
                  Liever direct iemand spreken? Bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a>.
                </p>
                <button type="button" onClick={() => setOpen(false)} className={knopClass}>Sluiten</button>
              </div>
            ) : (
              <>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                  Laat uw gegevens achter, dan bellen wij u binnen één werkdag om de BSW in te plannen. € 75 per uur per
                  medewerker, minimaal twee uur; verrekend als wij de inboedel kopen.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Uw naam" value={naam} onChange={(e) => setNaam(e.target.value)} required className={inputClass} />
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="tel" placeholder="Telefoonnummer" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} required className={inputClass} />
                    <input type="email" placeholder="E-mailadres" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} />
                  </div>
                  <input type="text" placeholder="Postcode van de woning (optioneel)" value={postcode} onChange={(e) => setPostcode(e.target.value)} className={inputClass} />
                  <textarea
                    placeholder="Korte toelichting: soort woning, waar u aan denkt (optioneel)"
                    value={toelichting}
                    onChange={(e) => setToelichting(e.target.value)}
                    rows={3}
                    maxLength={600}
                    className={inputClass}
                  />
                  {status === "error" && (
                    <p className="text-sm text-slate-600">
                      Verzenden is niet gelukt. Probeer het opnieuw of bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a>.
                    </p>
                  )}
                  <button type="submit" disabled={status === "loading"} className={`${knopClass} w-full disabled:opacity-60`}>
                    {status === "loading" ? "Versturen…" : "Verstuur aanvraag"}
                  </button>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Geen verplichtingen. Wij gebruiken uw gegevens alleen om contact op te nemen over deze aanvraag.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
