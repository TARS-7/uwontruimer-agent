import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inboedel veilen - Meer dan 10 jaar ervaring!",
  description: "Inboedel of waardevolle objecten veilen Uw Ontruimer werkt met gerenommeerde veilinghuizen en taxateurs Van A tot Z Geregeld",
  alternates: { canonical: "/diensten/inboedel-veilen/" },
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
          <Image src="/waardevolle.spullen.png" alt="Inboedel veilen" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Inboedel veilen:<br />Maximale opbrengst voor uw boedel
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Gerenommeerde veilinghuizen", "Van A tot Z geregeld", "Opbrengst verrekend met ontruiming"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Waarom uw inboedel veilen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Veilen levert vaak meer op dan direct verkopen — zeker bij antiek, kunst en design. Veilinghuizen beschikken over een opgebouwd netwerk van verzamelaars, antiquairs en liefhebbers die bereid zijn de werkelijke marktwaarde te betalen. Uw Ontruimer regelt het hele traject: van taxatie en inname tot transport en uitbetaling.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Hogere opbrengst dan directe opkoop bij zeldzame of waardevolle objecten",
                "Toegang tot netwerk van gerenommeerde veilinghuizen",
                "Transparant: u ontvangt een inbrenglijst met getaxeerde waarden",
                "Na afloop bericht over opbrengst en directe uitbetaling",
                "Combineerbaar met woningontruiming — opbrengst verrekend",
                "Wij verzorgen het transport naar het veilinghuis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Welke objecten worden geveild?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Antiek & meubels", omschrijving: "Kasten, stoelen, tafels en decoratieve objecten van voor 1940 met veilingwaarde." },
                { titel: "Kunst & schilderijen", omschrijving: "Werken van erkende en minder bekende kunstenaars — taxatie bepaalt veilinggeschiktheid." },
                { titel: "Zilver & sieraden", omschrijving: "Zilveren bestek, kandelaars, sieraden en edelstenen voor gespecialiseerde veilingen." },
                { titel: "Design & verzamelobjecten", omschrijving: "Iconische designstukken, horloges, postzegels, munten en bijzondere curiosa." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe verloopt het veilproces?</h2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Taxatie op locatie of via foto's", tekst: "Onze adviseur beoordeelt de objecten en bepaalt welke geschikt zijn voor veiling en bij welk veilinghuis." },
                { stap: "2", titel: "Inbrenglijst en akkoord", tekst: "U ontvangt een inbrenglijst met alle objecten en getaxeerde startprijzen. Na uw akkoord regelen wij de rest." },
                { stap: "3", titel: "Transport naar het veilinghuis", tekst: "Uw Ontruimer verzorgt het transport — veilig verpakt en verzekerd." },
                { stap: "4", titel: "Veiling en uitbetaling", tekst: "Na de veiling ontvangt u een overzicht van de opbrengst. Het bedrag wordt uitbetaald of verrekend met uw ontruimingsfactuur." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Veilen of direct verkopen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Veilen is ideaal voor objecten met een duidelijke verzamelaarswaarde. Bij grote hoeveelheden gemengde inboedel is directe opkoop door Uw Ontruimer vaak sneller en praktischer. Twijfelt u? Wij adviseren u kosteloos welke route het meeste oplevert.
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: "#2563eb" }}>
              <h2 className="text-xl font-semibold text-white mb-2">Uw inboedel laten veilen?</h2>
              <p className="text-blue-100 font-light text-sm mb-6 max-w-xl">
                Doe een vrijblijvende aanvraag via Takaros — ons zusterplatform dat u koppelt aan gespecialiseerde veilinghuizen. Gratis waardeoordeel, zonder verplichtingen.
              </p>
              <a href="https://takaros.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl shadow-md transition-colors text-base">
                Aanvraag indienen via Takaros →
              </a>
            </div>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
