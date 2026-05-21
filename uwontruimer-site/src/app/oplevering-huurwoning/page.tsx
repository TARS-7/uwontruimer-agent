import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stap 1. Alle abonnementen moeten worden opgezegd. | UwOntruimer.nl",
  description: "Hoe moet je als huurder je oude huurwoning opleveren? Op deze pagina kunt u informatie, tips en adviezen lezen over het opleveren van een huurwoning.",
  alternates: { canonical: "/oplevering-huurwoning/" },
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
          <Image src="/appartement-makelaar.png" alt="Oplevering huurwoning" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Oplevering huurwoning:<br />Voldoe aan alle eisen van uw verhuurder
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Conform opleveringseisen", "Schriftelijke garantie", "Borg terug"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat zijn de eisen bij oplevering van een huurwoning?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij het einde van een huurcontract moet u de woning opleveren in de staat zoals vastgelegd bij aanvang van de huur. Dat betekent in de praktijk: leeg, schoon en zonder beschadigingen die niet als normaal gebruik gelden. Uw Ontruimer helpt u om aan al deze eisen te voldoen — zodat u uw borg terugkrijgt.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Woning volledig leeg inclusief zolder, kelder en berging",
                "Bezemschoon opgeleverd conform de inspectie-eisen",
                "Kleine gebreken hersteld: gaatjes in de muur, beschadigde kozijnen",
                "Vloerbedekking verwijderd indien gewenst",
                "Abonnementen en nutsvoorzieningen tijdig doorgeven aan verhuurder",
                "Schriftelijke opleveringsgarantie — bij opmerkingen komen wij kosteloos terug",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Checklist oplevering huurwoning</h2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Zeg abonnementen op", tekst: "Gas, water, elektra, internet en eventuele verzekeringen tijdig opzeggen of doorgeven aan de nieuwe bewoner." },
                { stap: "2", titel: "Maak de woning leeg", tekst: "Alle meubels, dozen en persoonlijke spullen moeten uit de woning — inclusief zolder, kelder en berging." },
                { stap: "3", titel: "Herstel gebreken", tekst: "Gaatjes vullen, beschadigingen herstellen die buiten normale slijtage vallen. Vraag twijfelgevallen na bij verhuurder." },
                { stap: "4", titel: "Grondige schoonmaak", tekst: "Keuken, badkamer, ramen en vloeren grondig schoonmaken. Bij voorkeur professionele eindschoonmaak." },
                { stap: "5", titel: "Eindinspectie", tekst: "Loop de woning samen met de verhuurder of zijn vertegenwoordiger door. Zorg voor een schriftelijk inspectierapport." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Uw Ontruimer helpt bij de oplevering</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij kennen de standaard opleveringseisen en kunnen de woning volledig voor u klaarmaken. Ontruiming, vloerverwijdering, kleine herstelwerkzaamheden en schoonmaak: alles in één opdracht, één factuur. Zo weet u zeker dat de woning voldoet — en krijgt u uw borg terug.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Ontruiming én eindschoonmaak in één opdracht",
                "Vloerverwijdering indien vereist door verhuurder",
                "Kleine reparaties en schilderwerk op aanvraag",
                "Schriftelijke opleveringsgarantie — bij opmerkingen kosteloos terug",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
