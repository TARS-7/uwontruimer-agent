import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notaris - Meer dan alleen een ontruiming",
  description: "Uw Ontruimer is een professionele en integere partner. Wij zijn namelijk al meer dan 10 jaar actief in het afhandelen van inboedels en nalatenschappen. Onz",
  alternates: { canonical: "/notaris/" },
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
          <Image src="/appartement-leeg.png" alt="Woningontruiming voor notarissen" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woningontruiming voor notarissen:<br />Betrouwbaar en gedocumenteerd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Schriftelijke opleveringsgarantie", "Discreet & gedocumenteerd"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Samenwerking</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Boedelontruiming na overlijden: snel en respectvol</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Als notaris bent u bij uitstek betrokken bij de afwikkeling van nalatenschappen. Uw Ontruimer is al meer dan 15 jaar een vaste partner voor notariskantoren die een woning professioneel willen laten ontruimen. Wij begrijpen de juridische en emotionele context en handelen altijd discreet en gedocumenteerd.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boedelontruiming na overlijden — discreet en met respect voor nabestaanden",
                "Volledige inventarisatie en documentatie van de inboedel",
                "Taxatie van waardevolle objecten door erkende taxateurs",
                "Waardevolle spullen verkocht, geveild of overgedragen aan erfgenamen",
                "Resterende inboedel duurzaam verwerkt via kringloop en recycling",
                "Woning bezemschoon opgeleverd met schriftelijke opleveringsgarantie",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Schriftelijke opleveringsgarantie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer levert de woning op conform de opleveringseisen van verhuurder of makelaar. U ontvangt een schriftelijke bevestiging van de werkzaamheden en de opleveringsstatus — bruikbaar als bijlage bij notariële stukken. Mochten er na oplevering opmerkingen zijn, komen wij kosteloos terug. Dat is tot op heden nog nooit voorgekomen.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Vaste samenwerkingspartner voor notariskantoren</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Verschillende notariskantoren werken structureel samen met Uw Ontruimer. Wij kennen de eisen en termijnen die bij boedelafwikkeling komen kijken en stemmen onze planning daarop af. Bij acute situaties kunnen wij doorgaans binnen 24–48 uur ter plaatse zijn.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Vaste contactpersoon per notariskantoor",
                "Snelle inzet — ook bij spoedopdrachten",
                "Eén factuur, duidelijke nacalculatie",
                "Opbrengst waardevolle objecten verrekend met ontruimingskosten",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat Uw Ontruimer voor u regelt</h2>
            <ol className="space-y-4 mb-10">
              {[
                { stap: "1", titel: "Inventarisatie en taxatie", tekst: "Wij brengen de volledige inboedel in kaart. Waardevolle objecten worden getaxeerd door erkende taxateurs." },
                { stap: "2", titel: "Afstemming met erfgenamen", tekst: "In overleg met erfgenamen of uw kantoor bepalen wij wat meegaat, wordt verkocht of wordt afgevoerd." },
                { stap: "3", titel: "Ontruiming en afvoer", tekst: "Wij voeren de ontruiming uit en verwerken de inboedel duurzaam — via kringloop, veiling of recycling." },
                { stap: "4", titel: "Oplevering en documentatie", tekst: "De woning wordt bezemschoon opgeleverd. U ontvangt een schriftelijk opleveringsrapport." },
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
