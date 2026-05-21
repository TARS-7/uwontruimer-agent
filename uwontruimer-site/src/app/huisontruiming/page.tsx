import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Professionele huisontruiming: laat uw huis ontruimen door experts | UwOntruimer.nl",
  description: "Huis ontruiming nodig? Uw Ontruimer is dé specialist op het gebied van huis ontruimen. We staan klaar voor bedrijven en particulieren zoals senioren. Of he",
  alternates: { canonical: "/huisontruiming/" },
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
          <Image src="/hero-truck.png" alt="Huisontruiming door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Huisontruiming:<br />Vakkundig en bezemschoon opgeleverd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Eigen verhuislift", "Bezemschoon opgeleverd"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Professionele huisontruiming voor particulieren en bedrijven</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is specialist in huisontruiming. Of u nu een woning na overlijden wilt leeghalen, een huurwoning moet opleveren of als woningcorporatie een leegstaand pand snel opnieuw wilt verhuren: wij leveren altijd vakkundig en bezemschoon op. Met meer dan 15 jaar ervaring kent ons team alle soorten situaties.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Particuliere woningontruiming na overlijden, verhuizing of scheiding",
                "Seniorenontruiming bij verhuizing naar kleiner appartement of zorgwoning",
                "Huurwoning leegmaken bij einde huurcontract",
                "Bedrijfspand of kantoor ontruimen",
                "Spoedontruiming mogelijk — ook op korte termijn",
                "Vervuilde of verwaarloosde woning ontruimen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Onze werkwijze bij een huisontruiming</h2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Gratis prijsindicatie via AI-wizard", tekst: "Upload foto's van de woning. Wij geven u binnen 2 minuten een duidelijke indicatie van de kosten." },
                { stap: "2", titel: "Taxatie van waardevolle spullen", tekst: "Onze taxateur bepaalt welke objecten waarde hebben. Opbrengst wordt verrekend met de ontruimingskosten." },
                { stap: "3", titel: "Ontruiming en duurzame verwerking", tekst: "Ons team werkt efficiënt. Bruikbare spullen gaan naar kringloop, waardevolle objecten naar veiling of opkoop." },
                { stap: "4", titel: "Bezemschone oplevering", tekst: "Woning bezemschoon en conform uw eisen opgeleverd. Schriftelijke opleveringsgarantie inbegrepen." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Eigen verhuislift en professioneel materieel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer beschikt over een eigen verhuislift voor hogere verdiepingen — geen trapschade, geen beschadigde muren en minder manuren. Dit maakt de ontruiming veiliger én goedkoper. Wij beschikken ook over grote vrachtwagens voor efficiënt transport in één rit.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Eigen verhuislift voor appartementen op hogere verdiepingen",
                "Grote voertuigen voor efficiënt transport in één rit",
                "Professioneel gereedschap voor demontage van ingebouwde meubels",
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
