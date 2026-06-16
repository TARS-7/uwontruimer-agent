"use client";

import { useState } from "react";

export default function TerugbelForm({
  gemeente = "",
  collapsibleOnMobile = false,
}: {
  gemeente?: string;
  collapsibleOnMobile?: boolean;
}) {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/terugbel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, telefoon, gemeente }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-5 flex items-center gap-2 text-sm text-green-700 font-medium">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Wij bellen u zo snel mogelijk terug.
      </div>
    );
  }

  const formBody = (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Uw naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          required
          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="tel"
          placeholder="Telefoonnummer"
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          required
          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="terugbel-glow whitespace-nowrap text-sm font-medium px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Bezig…" : "Bel mij terug"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-500 mt-1.5">Er ging iets mis. Probeer het opnieuw of bel ons direct.</p>
      )}
    </>
  );

  if (collapsibleOnMobile) {
    return (
      <div className="mt-5">
        {/* Mobile: toggle link */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-xs text-white/70 hover:text-white underline underline-offset-2 transition-colors mb-2.5"
        >
          Liever teruggebeld worden?
        </button>
        {/* Desktop: static label */}
        <p className="hidden md:block text-xs text-slate-400 mb-2.5">Liever teruggebeld worden?</p>
        {/* Form: collapsed on mobile unless open, always visible on desktop */}
        <div className={`${mobileOpen ? "block" : "hidden"} md:block`}>
          {formBody}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <p className="text-xs text-slate-400 mb-2.5">Liever teruggebeld worden?</p>
      {formBody}
    </div>
  );
}
