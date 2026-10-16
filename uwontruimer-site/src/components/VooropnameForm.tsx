"use client";

import { useEffect, useState } from "react";
import { leesAttributie, leesHerkomst } from "@/lib/attributie";

const MAX_BYTES = 8 * 1024 * 1024;

export default function VooropnameForm() {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [bestanden, setBestanden] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fout, setFout] = useState("");
  const [van, setVan] = useState("");

  useEffect(() => {
    try {
      setVan(new URLSearchParams(window.location.search).get("van") ?? "");
    } catch {
      // geen parameters beschikbaar
    }
  }, []);

  const totaal = bestanden.reduce((n, f) => n + f.size, 0);
  const teGroot = totaal > MAX_BYTES;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bestanden.length) { setFout("Voeg uw vooropname toe."); return; }
    if (teGroot) {
      setFout("De bestanden zijn samen te groot (max 8 MB).");
      if (typeof window.gtag === "function") {
        window.gtag("event", "vooropname_upload_mislukt", { reden: "te_groot", mb: Math.round(totaal / 1024 / 1024) });
      }
      return;
    }
    setFout("");
    setStatus("loading");

    try {
      const fd = new FormData();
      fd.append("naam", naam);
      fd.append("telefoon", telefoon);
      fd.append("email", email);
      fd.append("van", van);
      fd.append("attributie", JSON.stringify(leesAttributie()));
      fd.append("herkomst", JSON.stringify(leesHerkomst()));
      bestanden.forEach((f) => fd.append("bestanden", f));

      const res = await fetch("/api/vooropname-uploaden", { method: "POST", body: fd });
      if (res.ok) {
        setStatus("success");
        if (typeof window.gtag === "function") {
          window.gtag("event", "vooropname_upload", {
            ingang: van || "direct",
            aantal_bestanden: bestanden.length,
          });
        }
      } else {
        setStatus("error");
        setFout("Verzenden mislukt. Belt u ons gerust op 085-303 58 94.");
        if (typeof window.gtag === "function") {
          window.gtag("event", "vooropname_upload_mislukt", { reden: "server" });
        }
      }
    } catch {
      setStatus("error");
      setFout("Verzenden mislukt. Belt u ons gerust op 085-303 58 94.");
      if (typeof window.gtag === "function") {
        window.gtag("event", "vooropname_upload_mislukt", { reden: "netwerk" });
      }
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <p className="font-medium text-green-800 mb-1">Vooropname ontvangen</p>
        <p className="text-sm text-green-700 font-light leading-relaxed">
          Wij bekijken de punten en de bedragen van uw woningbouw, en nemen binnen één
          werkdag contact op met een aanbod. Zonder verplichtingen.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-3 gap-3">
        <input type="text" placeholder="Uw naam" value={naam} onChange={(e) => setNaam(e.target.value)} required className={inputClass} />
        <input type="tel" placeholder="Telefoonnummer" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} required className={inputClass} />
        <input type="email" placeholder="E-mailadres" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} />
      </div>

      <label className="block cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-white px-4 py-6 text-center hover:border-blue-400 transition-colors">
        <input
          type="file"
          accept=".pdf,image/*"
          multiple
          className="hidden"
          onChange={(e) => setBestanden(Array.from(e.target.files ?? []))}
        />
        {bestanden.length === 0 ? (
          <>
            <p className="text-sm font-medium text-slate-700">Vooropname toevoegen</p>
            <p className="text-xs text-slate-400 mt-1">PDF of foto&apos;s van uw vooropname · klik om te kiezen · max 8 MB</p>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-slate-700">
              {bestanden.length} bestand{bestanden.length > 1 ? "en" : ""} gekozen
            </p>
            <p className={`text-xs mt-1 ${teGroot ? "text-red-600" : "text-slate-400"}`}>
              {(totaal / 1024 / 1024).toFixed(1)} MB{teGroot ? " — te groot, max 8 MB" : " · klik om te wijzigen"}
            </p>
          </>
        )}
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md transition-opacity hover:opacity-90 disabled:opacity-60 text-base"
        style={{ backgroundColor: "#d97706" }}
      >
        {status === "loading" ? "Versturen…" : "Vraag een goedkoper aanbod →"}
      </button>

      {fout && <p className="text-sm text-red-600">{fout}</p>}
      <p className="text-xs text-slate-400">
        Gratis en zonder verplichtingen · U hoort binnen één werkdag wat wij ervoor rekenen
      </p>
    </form>
  );
}
