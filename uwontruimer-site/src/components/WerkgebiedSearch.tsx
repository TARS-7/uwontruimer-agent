"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const steden = [
  { slug: "amsterdam", name: "Amsterdam" },
  { slug: "amstelveen", name: "Amstelveen" },
  { slug: "haarlem", name: "Haarlem" },
  { slug: "rotterdam", name: "Rotterdam" },
  { slug: "utrecht", name: "Utrecht" },
  { slug: "den-haag", name: "Den Haag" },
  { slug: "leiden", name: "Leiden" },
  { slug: "hoofddorp", name: "Hoofddorp" },
  { slug: "zaandam", name: "Zaandam" },
  { slug: "purmerend", name: "Purmerend" },
  { slug: "alkmaar", name: "Alkmaar" },
  { slug: "hoorn", name: "Hoorn" },
  { slug: "hilversum", name: "Hilversum" },
  { slug: "amersfoort", name: "Amersfoort" },
  { slug: "zoetermeer", name: "Zoetermeer" },
  { slug: "delft", name: "Delft" },
  { slug: "gouda", name: "Gouda" },
  { slug: "schiedam", name: "Schiedam" },
  { slug: "vlaardingen", name: "Vlaardingen" },
  { slug: "capelle-aan-den-ijssel", name: "Capelle aan den IJssel" },
  { slug: "aalsmeer", name: "Aalsmeer" },
  { slug: "aerdenhout", name: "Aerdenhout" },
  { slug: "alphen-aan-den-rijn", name: "Alphen aan den Rijn" },
  { slug: "baarn", name: "Baarn" },
  { slug: "badhoevedorp", name: "Badhoevedorp" },
  { slug: "barendrecht", name: "Barendrecht" },
  { slug: "bergen", name: "Bergen" },
  { slug: "beverwijk", name: "Beverwijk" },
  { slug: "blaricum", name: "Blaricum" },
  { slug: "bloemendaal", name: "Bloemendaal" },
  { slug: "bodegraven", name: "Bodegraven" },
  { slug: "bunnik", name: "Bunnik" },
  { slug: "bussum", name: "Bussum" },
  { slug: "castricum", name: "Castricum" },
  { slug: "culemborg", name: "Culemborg" },
  { slug: "den-helder", name: "Den Helder" },
  { slug: "diemen", name: "Diemen" },
  { slug: "drechterland", name: "Drechterland" },
  { slug: "edam-volendam", name: "Edam-Volendam" },
  { slug: "eemnes", name: "Eemnes" },
  { slug: "enkhuizen", name: "Enkhuizen" },
  { slug: "gooi-en-vechtstreek", name: "Gooi- en Vechtstreek" },
  { slug: "gooise-meren", name: "Gooise Meren" },
  { slug: "graft-de-rijp", name: "Graft-De Rijp" },
  { slug: "haarlemmerliede", name: "Haarlemmerliede" },
  { slug: "haarlemmermeer", name: "Haarlemmermeer" },
  { slug: "heemskerk", name: "Heemskerk" },
  { slug: "heemstede", name: "Heemstede" },
  { slug: "heiloo", name: "Heiloo" },
  { slug: "hillegom", name: "Hillegom" },
  { slug: "hollands-kroon", name: "Hollands Kroon" },
  { slug: "houten", name: "Houten" },
  { slug: "huizen", name: "Huizen" },
  { slug: "ijsselstein", name: "IJsselstein" },
  { slug: "katwijk", name: "Katwijk" },
  { slug: "landsmeer", name: "Landsmeer" },
  { slug: "laren", name: "Laren" },
  { slug: "leiderdorp", name: "Leiderdorp" },
  { slug: "leidschendam", name: "Leidschendam" },
  { slug: "leusden", name: "Leusden" },
  { slug: "lisse", name: "Lisse" },
  { slug: "maassluis", name: "Maassluis" },
  { slug: "naarden", name: "Naarden" },
  { slug: "nieuw-vennep", name: "Nieuw-Vennep" },
  { slug: "nieuwegein", name: "Nieuwegein" },
  { slug: "noord-holland", name: "Noord-Holland" },
  { slug: "noordwijk", name: "Noordwijk" },
  { slug: "nootdorp", name: "Nootdorp" },
  { slug: "oegstgeest", name: "Oegstgeest" },
  { slug: "pijnacker", name: "Pijnacker" },
  { slug: "ridderkerk", name: "Ridderkerk" },
  { slug: "roelofarendsveen", name: "Roelofarendsveen" },
  { slug: "schagen", name: "Schagen" },
  { slug: "soest", name: "Soest" },
  { slug: "stichtse-vecht", name: "Stichtse Vecht" },
  { slug: "uithoorn", name: "Uithoorn" },
  { slug: "veenendaal", name: "Veenendaal" },
  { slug: "vianen", name: "Vianen" },
  { slug: "vijfheerenlanden", name: "Vijfheerenlanden" },
  { slug: "voorburg", name: "Voorburg" },
  { slug: "voorschoten", name: "Voorschoten" },
  { slug: "wassenaar", name: "Wassenaar" },
  { slug: "woerden", name: "Woerden" },
  { slug: "zaanstad", name: "Zaanstad" },
  { slug: "zeist", name: "Zeist" },
  { slug: "zuid-holland", name: "Zuid-Holland" },
];

export default function WerkgebiedSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return steden;
    return steden.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      {/* Zoekbalk */}
      <div className="relative mb-8 max-w-sm">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek uw stad…"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Wis zoekopdracht"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {/* Resultaten */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filtered.map((stad) => (
            <Link
              key={stad.slug}
              href={`/woningontruiming-${stad.slug}`}
              className="group flex items-center justify-between bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">Woningontruiming {stad.name}</span>
              <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-10 text-center text-slate-400 text-sm">
          Geen steden gevonden voor &ldquo;{query}&rdquo;
        </div>
      )}

      {/* Teller */}
      <p className="mt-4 text-xs text-slate-400">
        {filtered.length} van {steden.length} steden
      </p>
    </div>
  );
}
