"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const provincies = [
  {
    naam: "Noord-Holland",
    slug: "noord-holland",
    steden: [
      { slug: "aalsmeer",           name: "Aalsmeer" },
      { slug: "aerdenhout",         name: "Aerdenhout" },
      { slug: "alkmaar",            name: "Alkmaar" },
      { slug: "amstelveen",         name: "Amstelveen" },
      { slug: "amsterdam",          name: "Amsterdam" },
      { slug: "bergen",             name: "Bergen" },
      { slug: "beverwijk",          name: "Beverwijk" },
      { slug: "blaricum",           name: "Blaricum" },
      { slug: "bloemendaal",        name: "Bloemendaal" },
      { slug: "bussum",             name: "Bussum" },
      { slug: "castricum",          name: "Castricum" },
      { slug: "den-helder",         name: "Den Helder" },
      { slug: "diemen",             name: "Diemen" },
      { slug: "drechterland",       name: "Drechterland" },
      { slug: "edam-volendam",      name: "Edam-Volendam" },
      { slug: "enkhuizen",          name: "Enkhuizen" },
      { slug: "gooise-meren",       name: "Gooise Meren" },
      { slug: "gooi-en-vechtstreek",name: "Gooi- en Vechtstreek" },
      { slug: "graft-de-rijp",      name: "Graft-De Rijp" },
      { slug: "haarlem",            name: "Haarlem" },
      { slug: "haarlemmerliede",    name: "Haarlemmerliede" },
      { slug: "haarlemmermeer",     name: "Haarlemmermeer" },
      { slug: "heemskerk",          name: "Heemskerk" },
      { slug: "heemstede",          name: "Heemstede" },
      { slug: "heiloo",             name: "Heiloo" },
      { slug: "hilversum",          name: "Hilversum" },
      { slug: "hollands-kroon",     name: "Hollands Kroon" },
      { slug: "hoofddorp",          name: "Hoofddorp" },
      { slug: "hoorn",              name: "Hoorn" },
      { slug: "huizen",             name: "Huizen" },
      { slug: "landsmeer",          name: "Landsmeer" },
      { slug: "laren",              name: "Laren" },
      { slug: "purmerend",          name: "Purmerend" },
      { slug: "schagen",            name: "Schagen" },
      { slug: "uithoorn",           name: "Uithoorn" },
      { slug: "zaanstad",           name: "Zaanstad" },
    ],
  },
  {
    naam: "Zuid-Holland",
    slug: "zuid-holland",
    steden: [
      { slug: "alphen-aan-den-rijn",    name: "Alphen aan den Rijn" },
      { slug: "barendrecht",            name: "Barendrecht" },
      { slug: "bodegraven",             name: "Bodegraven" },
      { slug: "capelle-aan-den-ijssel", name: "Capelle aan den IJssel" },
      { slug: "delft",                  name: "Delft" },
      { slug: "den-haag",               name: "Den Haag" },
      { slug: "gouda",                  name: "Gouda" },
      { slug: "hillegom",               name: "Hillegom" },
      { slug: "katwijk",                name: "Katwijk" },
      { slug: "leiden",                 name: "Leiden" },
      { slug: "leiderdorp",             name: "Leiderdorp" },
      { slug: "lisse",                  name: "Lisse" },
      { slug: "maassluis",              name: "Maassluis" },
      { slug: "noordwijk",              name: "Noordwijk" },
      { slug: "oegstgeest",             name: "Oegstgeest" },
      { slug: "ridderkerk",             name: "Ridderkerk" },
      { slug: "rotterdam",              name: "Rotterdam" },
      { slug: "schiedam",               name: "Schiedam" },
      { slug: "vlaardingen",            name: "Vlaardingen" },
      { slug: "voorschoten",            name: "Voorschoten" },
      { slug: "wassenaar",              name: "Wassenaar" },
      { slug: "zoetermeer",             name: "Zoetermeer" },
    ],
  },
  {
    naam: "Utrecht",
    slug: "utrecht",
    steden: [
      { slug: "amersfoort",      name: "Amersfoort" },
      { slug: "baarn",           name: "Baarn" },
      { slug: "bunnik",          name: "Bunnik" },
      { slug: "eemnes",          name: "Eemnes" },
      { slug: "houten",          name: "Houten" },
      { slug: "ijsselstein",     name: "IJsselstein" },
      { slug: "leusden",         name: "Leusden" },
      { slug: "nieuwegein",      name: "Nieuwegein" },
      { slug: "stichtse-vecht",  name: "Stichtse Vecht" },
      { slug: "veenendaal",      name: "Veenendaal" },
      { slug: "vijfheerenlanden",name: "Vijfheerenlanden" },
      { slug: "soest",           name: "Soest" },
      { slug: "utrecht",         name: "Utrecht" },
      { slug: "vianen",          name: "Vianen" },
      { slug: "woerden",         name: "Woerden" },
      { slug: "zeist",           name: "Zeist" },
    ],
  },
];

// Flat list voor zoekfunctionaliteit
const alleSteden = provincies.flatMap((p) => p.steden);

export default function WerkgebiedSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return alleSteden.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      {/* Intro */}
      <p className="text-slate-500 font-light leading-relaxed mb-6 max-w-2xl">
        UwOntruimer.nl is actief in heel Nederland en met name in provincies Noord-Holland, Zuid-Holland en Utrecht. Hieronder vindt u enkele plaatsen waar wij vaak ontruimen en samenwerken met lokale kringloopwinkels.
      </p>

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

      {/* Zoekresultaten */}
      {filtered !== null ? (
        filtered.length > 0 ? (
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
        )
      ) : (
        /* Provincie-indeling */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 divide-y divide-slate-100 md:divide-y-0">
          {provincies.map((provincie) => (
            <div key={provincie.slug} className="pt-6 first:pt-0 md:pt-0">
              <Link
                href={`/woningontruiming-${provincie.slug}`}
                className="inline-flex items-center gap-1.5 text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-4"
              >
                {provincie.naam}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1.5">
                {provincie.steden.map((stad) => (
                  <li key={stad.slug}>
                    <Link
                      href={`/woningontruiming-${stad.slug}`}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      Woningontruiming {stad.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
