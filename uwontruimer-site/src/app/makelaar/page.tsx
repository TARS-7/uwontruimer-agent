import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hoe ziet een samenwerking eruit? | UwOntruimer.nl",
  description: "Wij brengen jou nieuwe klanten aan die een woning willen verkopen. Wij vragen hier geen courtage voor. Wij willen het verkoopproces zo voorspoedig en eenvo",
  alternates: { canonical: "/makelaar/" },
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
          <Image src="/appartement-makelaar.png" alt="Makelaar samenwerking — pand verkoopklaar" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woningontruiming voor makelaars:<br />Woning snel verkoopklaar
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Bezemschoon opgeleverd", "Opleveringsgarantie", "Korte doorlooptijd"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Woning snel leeg en verkoopklaar</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Als makelaar wilt u een pand zo snel mogelijk op de markt kunnen zetten. Uw Ontruimer ontruimt woningen professioneel en levert ze bezemschoon op — binnen de termijn die u nodig heeft. Of het nu gaat om een erfeniswoning, een huurpand na opzegging of een executieverkoop: wij zorgen dat de woning verkoopklaar is.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Volledige ontruiming van de woning, inclusief zolder, kelder en schuur",
                "Bezemschoon opgeleverd conform uw opleveringseisen",
                "Schriftelijke opleveringsgarantie — bij opmerkingen komen wij kosteloos terug",
                "Kortetermijnplanning mogelijk — ook bij spoedopdrachten",
                "Waardevolle objecten opgekocht of geveild — opbrengst verrekend",
                "Duurzame verwerking via kringloop en recycling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen voor makelaars</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer werkt structureel samen met makelaars in Noord-Holland, Zuid-Holland en Utrecht. Wij kennen de opleveringseisen en stemmen onze werkzaamheden af op uw planning. Zo heeft u altijd één betrouwbare partner die u volledig ontzorgt.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Snelle beschikbaarheid", omschrijving: "Wij plannen in overleg met u en kunnen doorgaans binnen 48 uur starten — ook bij urgente opdrachten." },
                { titel: "Geen courtage", omschrijving: "Wij vragen geen vergoeding voor doorverwezen klanten. U kunt ons aandragen zonder financiële verplichting." },
                { titel: "Eén aanspreekpunt", omschrijving: "U heeft een vaste contactpersoon bij Uw Ontruimer voor alle opdrachten. Geen wisselende gezichten." },
                { titel: "Wederkerige samenwerking", omschrijving: "Na de ontruiming koppelen wij klanten die hun woning willen verkopen terug aan u — zonder courtage." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Ontruiming voor verkoop of verhuur</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Of de woning na leegstand verkocht of opnieuw verhuurd wordt: Uw Ontruimer levert het pand op conform uw eisen. Wij verzorgen ook vloerverwijdering, kleine reparaties en een grondige schoonmaak — alles in één opdracht, één factuur.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Ontruiming voor verkoop: woning leeg en presentabel voor bezichtigingen",
                "Ontruiming voor verhuur: nieuw huurklaar conform verhuurderseisen",
                "Vloerverwijdering en kleine klusjes combineerbaar in één opdracht",
                "Foto-documentatie van voor en na de ontruiming op verzoek",
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
