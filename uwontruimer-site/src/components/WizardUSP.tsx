"use client";
import { sendGAEvent } from "@next/third-parties/google";

const steps = [
  {
    n: "01",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Vul uw adres in",
    desc: "De tool herkent het type pand en de locatie automatisch.",
  },
  {
    n: "02",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Upload foto's",
    desc: "Maak foto's van de ruimtes. De AI analyseert inhoud en omvang.",
  },
  {
    n: "03",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
      </svg>
    ),
    title: "Ontvang uw indicatie",
    desc: "Binnen 5 minuten een realistische prijsindicatie — zonder gesprek.",
  },
];

export default function WizardUSP() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: tekst */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              Uniek in Nederland
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight mb-5">
              Prijsindicatie binnen<br/>5 minuten — geen bellen
            </h2>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-md">
              Als eerste ontruimer in Nederland bieden wij een AI-analysetool. Upload foto's van uw pand en ontvang direct een realistische prijsindicatie — 24/7, zonder afspraak, zonder wachten.
            </p>
            <a
              href="https://analyse.uwontruimer.nl"
              onClick={() => sendGAEvent("event", "wizard", { method: "usp_section" })}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              Start de gratis analysetool
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
            <p className="text-xs text-slate-500 mt-3">Gratis · Geen account nodig · Resultaat in 5 min</p>
          </div>
          {/* Right: stappen */}
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-500 font-medium">{s.n}</span>
                    <span className="text-sm font-medium text-white">{s.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
