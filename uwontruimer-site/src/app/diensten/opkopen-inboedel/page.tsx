import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inboedel opkopen - Voor een eerlijke prijs | Uwontruimer.nl",
  description: "Uw Ontruimer kan uw inboedel opkopen naar waarde ✓Actief in héél Nederland ✓ Ervaren taxateurs ✓ Een eerlijke handelsprijs voor uw inboedel!",
  alternates: { canonical: "/diensten/opkopen-inboedel/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const CtaBox = () => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
    <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Klaar voor de volgende stap?</h2>
    <p className="text-slate-500 font-light text-sm mb-6">Ontvang binnen 2 minuten een vrijblijvende prijsindicatie, of bel direct voor een afspraak.</p>
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
        Start de AI-wizard →
      </a>
      <a href="tel:0853035894" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl transition-colors text-base">
        Bel 085-303 58 94
      </a>
    </div>
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {["100% Gratis & Vrijblijvend", "Direct een prijsindicatie", "Foto's uploaden via mobiel"].map((item) => (
        <span key={item} className="text-xs text-slate-400 flex items-center gap-1">
          <svg className="w-3 h-3 text-slate-300" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/inboedel opkopen.png" alt="Inboedel opkopen" fill className="w-full h-full object-cover" style={{ objectPosition: "bottom center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Inboedel opkopen:<br />Eerlijke prijs voor uw spullen
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Ervaren taxateurs", "Eerlijke handelsprijs", "Verrekend met ontruiming"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <GoogleReviewsBar />

        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat koopt Uw Ontruimer op?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer heeft meer dan 15 jaar ervaring in de inkoop en verkoop van roerende goederen. Wij kopen waardevolle inboedel op tegen een eerlijke handelsprijs — geen vage Marktplaats-biedingen, maar een transparant bod van een erkende partij.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Antiek & curiosa", omschrijving: "Meubels, klokken, porselein, zilver en andere antieke objecten van voor 1940." },
                { titel: "Vintage design", omschrijving: "Iconische designmeubels, lampen en accessoires uit de 20e eeuw." },
                { titel: "Kunst & schilderijen", omschrijving: "Olieverf, aquarellen, grafiek en sculpturen van bekende en minder bekende kunstenaars." },
                { titel: "Sieraden & edelmetalen", omschrijving: "Goud, zilver, diamant en andere edelstenen — taxatie op basis van actuele marktwaarde." },
                { titel: "Gereedschap & machines", omschrijving: "Professioneel handgereedschap, elektrische machines en werkplaatsuitrusting." },
                { titel: "Overige waardevolle goederen", omschrijving: "Horloges, militaria, postzegels, munten en bijzondere verzamelobjecten." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen inboedel opkopen bij Uw Ontruimer</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Eerlijke handelsprijs op basis van actuele marktwaarde",
                "Geen onbekenden over de vloer zoals bij Marktplaats of Facebook",
                "Opbrengst wordt verrekend met het ontruimingsbedrag",
                "Ervaren taxateurs — erkend en onafhankelijk",
                "Wij halen de goederen zelf op — geen transport nodig",
                "Rest-inboedel wordt duurzaam verwerkt via kringloopwinkels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Inboedel opkopen én woning ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Het meest efficiënt is de combinatie: wij kopen de waardevolle inboedel op, verrekenen dit met de ontruimingsprijs en leveren de woning bezemschoon op. Zo betaalt u minder — of soms helemaal niets — voor de ontruiming. Eén aanspreekpunt, één factuur.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe werkt het?</h2>
            <ol className="space-y-4 mb-10">
              {[
                { stap: "1", titel: "Foto's insturen via de AI-wizard", tekst: "Upload foto's van uw waardevolle spullen. Wij beoordelen ze en geven u snel een eerste indicatie." },
                { stap: "2", titel: "Taxatie op locatie of op basis van foto's", tekst: "Onze ervaren taxateur bepaalt de handelsprijs per object op basis van conditie en marktwaarde." },
                { stap: "3", titel: "Bod en akkoord", tekst: "U ontvangt een helder bod. Bij akkoord plannen wij de ophaaldag in — voor u op het handigste moment." },
                { stap: "4", titel: "Verrekening met ontruiming", tekst: "De opbrengst wordt in mindering gebracht op het ontruimingsbedrag. U ontvangt één overzichtelijke factuur." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
