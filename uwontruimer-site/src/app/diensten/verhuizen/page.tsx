import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Verhuizen van groot naar klein of seniorenverhuizing | UwOntruimer.nl",
  description: "Bij een seniorenverhuizing kunnen meestal niet alle spullen mee naar de nieuwe locatie of woning. Wij kunnen dan de gewenste goederen naar de nieuwe bestem",
  alternates: { canonical: "/diensten/verhuizen/" },
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
          <Image src="/Verhuizen.jpg" alt="Verhuizen van groot naar klein" fill className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Verhuizen:<br />Volledig ontzorgd van A tot Z
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Eigen verhuislift", "Persoonlijke begeleiding senioren"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Voor wie is onze verhuisservice?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer specialiseert zich in verhuizingen waarbij meer nodig is dan alleen dozen sjouwen. Denk aan senioren die van een grote woning naar een appartement of verzorgingstehuis gaan, of situaties waarbij een deel van de inboedel mee moet en de rest geruimd of verkocht wordt.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Seniorenverhuizing van groot naar klein, met persoonlijke begeleiding",
                "Verhuizing naar verzorgingstehuis of zorgwoning",
                "Verhuizing gecombineerd met woningontruiming van resterende inboedel",
                "Bedrijfsverhuizing inclusief demontage en opbouw kantoormeubilair",
                "Spoedverhuizing bij calamiteiten of acute situaties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Seniorenverhuizing met persoonlijke begeleiding</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Voor ouderen is een verhuizing ingrijpender dan een standaard move. Uw Ontruimer wijst u een vast aanspreekpunt toe dat u gedurende het hele proces begeleidt. Samen bepaalt u welke meubels en spullen meegaan, wat naar familie of goede doelen gaat, en wat uit de woning wordt verwijderd. Zo verloopt de overgang zo rustig en soepel mogelijk.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Één vast aanspreekpunt gedurende het hele traject",
                "Hulp bij het selecteren van mee te nemen meubels",
                "Resterende inboedel naar kringloop, familie of veiling",
                "Woning bezemschoon opgeleverd na vertrek",
                "Ook inpakservice en uitpakservice op nieuwe locatie beschikbaar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Eigen verhuislift voor hogere verdiepingen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Woont u op de derde verdieping of hoger? Uw Ontruimer beschikt over een eigen verhuislift. Meubels worden veilig naar buiten geheven — geen trapschade, geen beschadigde muren en aanzienlijk minder manuren. Dit maakt de verhuizing niet alleen veiliger, maar ook goedkoper.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Verhuizen gecombineerd met ontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              In veel gevallen gaat een verhuizing hand in hand met een ontruiming. De spullen die niet meegaan worden gesorteerd: waardevolle objecten gaan naar opkoop of veiling, bruikbare spullen naar kringloopwinkels en de rest wordt verantwoord afgevoerd. Zo is de woning na afloop direct leeg en bezemschoon.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Duurzame verwerking van achtergelaten spullen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Spullen die niet meegaan of worden opgekocht stellen wij beschikbaar aan kringlooporganisaties en goede doelen in de regio. Zo krijgt uw inboedel een tweede leven en wordt zo min mogelijk weggegooid. Hergebruik en recycling staan bij Uw Ontruimer altijd voorop.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
