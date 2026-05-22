import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Werkwijze | Zo brengen wij uw ontruiming tot een succes | UwOntruimer.nl",
  description: "Hoe werkt UwOntruimer? Van gratis offerte tot schone oplevering. Transparant, betrouwbaar en met opleveringsgarantie.",
  alternates: { canonical: "/werkwijze/" },
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

const stappen = [
  "De meubels, huisraad en overige inboedel die geschikt zijn voor hergebruik worden door Uw Ontruimer uit de woning verwijderd en krijgen een nieuwe bestemming.",
  "Wilt u afstand doen van spullen of goederen van hoge waarde, dan kunt u ervoor kiezen gebruik te maken van onze ervaren taxateur.",
  "Eventuele inbouwkasten en andere constructies worden professioneel gedemonteerd en verwijderd.",
  "Vloeren worden professioneel verwijderd en afgevoerd.",
  "Lampen, spiegels, schilderijen en andere aangebrachte aanhangsels op muren en plafonds worden professioneel verwijderd.",
  "Schroeven, spijkers, pluggen en overige bevestigingsmaterialen worden verwijderd en de gaatjes worden netjes gedicht.",
  "Op loshangende draden van elektrapunten worden kroonsteentjes gemonteerd.",
  "Kluswerkzaamheden die gedaan moeten worden voor de oplevering van de woning, zoals muren witten, stucwerk, deuren terugzetten en tuinwerkzaamheden.",
  "De woning wordt netjes en schoon opgeleverd.",
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/Ontruimers.png" alt="Werkwijze Uw Ontruimer — van offerte tot oplevering" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Onze werkwijze: Transparant van offerte tot oplevering
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Geen verborgen kosten", "Vaste contactpersoon", "Schriftelijke opleveringsgarantie"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkwijze</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Van het eerste contact tot de schone oplevering</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Wij begeleiden u door het gehele ontruimingsproces. Geen verrassingen, geen verborgen kosten. Uw vaste contactpersoon houdt u op de hoogte van elke stap — van de gratis inventarisatie tot de definitieve oplevering.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Stap voor stap door het ontruimingsproces</h2>
            <ol className="space-y-5 mb-12">
              {stappen.map((stap, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-slate-500 font-light leading-relaxed pt-1">{stap}</p>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat u van ons mag verwachten</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer werkt altijd met een vaste werkwijze die transparantie en kwaliteit centraal stelt. U weet vooraf wat wij gaan doen, wat het kost en wanneer het klaar is.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Gratis inventarisatie", omschrijving: "Wij komen vrijblijvend langs om de situatie op te nemen. Op basis hiervan stellen wij een heldere offerte op." },
                { titel: "Vaste contactpersoon", omschrijving: "U heeft één aanspreekpunt gedurende het hele traject. Geen wisselende gezichten, altijd dezelfde lijn." },
                { titel: "Opleveringsgarantie", omschrijving: "Zijn er opmerkingen na oplevering? Dan komen wij kosteloos terug om dit te herstellen — schriftelijk vastgelegd." },
                { titel: "Duurzame verwerking", omschrijving: "Wij hergebruiken zoveel mogelijk van de inboedel via kringloop. Zo min mogelijk restafval, zo veel mogelijk waarde." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor woning ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Start direct met de AI-wizard voor een vrijblijvende prijsindicatie, of neem contact op via telefoon. Wij plannen in overleg — ook spoedontruimingen zijn mogelijk.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Gratis prijsindicatie via onze AI-wizard in 2 minuten",
                "Snelle reactietijd — u hoort binnen 24 uur van ons",
                "Ook spoedontruimingen mogelijk — bel direct voor beschikbaarheid",
                "Actief in Noord-Holland, Zuid-Holland en Utrecht",
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
