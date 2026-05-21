import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Woningontruiming nodig als bewindvoerder? Kom in contact",
  description: "Heeft u de taak om een ontruiming te regelen voor uw cliënt? Bij Uw Ontruimer bent u aan het juiste adres. Het kan spoedig en duurzaam. 15+ jaar ervaring",
  alternates: { canonical: "/bewindvoerder/" },
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
          <Image src="/Ontruimers.png" alt="Woningontruiming voor bewindvoerders" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woningontruiming voor bewindvoerders:<br />Compleet ontzorgd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Gedocumenteerde oplevering", "Discreet & respectvol"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Ontruiming bij bewind: volledig geregeld</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Als bewindvoerder krijgt u te maken met situaties waarbij een cliënt de woning moet verlaten en de inboedel geregeld dient te worden. Uw Ontruimer neemt dit volledig uit handen. Wij handelen discreet, respectvol en efficiënt — en leveren de woning gedocumenteerd op conform uw eisen.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Volledige ontruiming van woning, berging, zolder en kelder",
                "Inventarisatie en documentatie van alle aangetroffen goederen",
                "Taxatie van waardevolle objecten door erkende taxateurs",
                "Opbrengst waardevolle spullen gestort op rekening van de cliënt of boedel",
                "Woning bezemschoon opgeleverd met schriftelijk opleveringsrapport",
                "Discrete werkwijze — ook bij gevoelige situaties of vervuilde woningen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Inboedelbeheer en waardebepaling</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij inventariseren de volledige inboedel en documenteren elk object. Zo houdt u als bewindvoerder volledig overzicht over de boedel. Waardevolle goederen kunnen wij taxeren, opkopen of onderbrengen bij een veilinghuis. De opbrengst wordt verrekend met de ontruimingskosten of direct uitbetaald.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Inboedelbeheer", omschrijving: "Volledige inventarisatie met foto-documentatie — bruikbaar als bijlage bij bewindrapportages." },
                { titel: "Taxatie", omschrijving: "Erkende taxateurs bepalen de waarde van antiek, kunst, sieraden en andere waardevolle objecten." },
                { titel: "Opkoop of veiling", omschrijving: "Waardevolle spullen worden opgekocht of geveild. Opbrengst direct uitbetaald of verrekend." },
                { titel: "Duurzame verwerking", omschrijving: "Rest-inboedel gaat naar kringlooporganisaties. Zo min mogelijk afval, zo veel mogelijk hergebruik." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Woning verhuur- of verkoopklaar opleveren</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na de ontruiming levert Uw Ontruimer de woning op conform de eisen van de verhuurder of makelaar — bezemschoon en gedocumenteerd. U ontvangt een schriftelijk opleveringsrapport dat u kunt opnemen in uw bewinddossier. Zo kunt u aantonen dat de woning correct is opgeleverd.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Oplevering conform eisen verhuurder of woningcorporatie",
                "Schriftelijk opleveringsrapport als bijlage voor uw dossier",
                "Snelle doorlooptijd — ook bij urgente opdrachten",
                "Vaste contactpersoon gedurende het hele traject",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
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
