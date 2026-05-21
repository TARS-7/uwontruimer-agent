import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Taxatie - Kom achter de waarde van uw inboedel  Uw Ontruimer",
  description: "Benieuwd naar de waarde van uw inboedel Uw Ontruimer helpt u ✓ Ervaren en erkende taxateurs ✓ Professioneel Discreet ✓ Actief in héél Nederland",
  alternates: { canonical: "/diensten/taxatie/" },
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
          <Image src="/waardevolle.spullen.png" alt="Taxatie van waardevolle spullen" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Taxatie inboedel:<br />Onafhankelijke waardebepaling
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Erkende taxateurs", "Onafhankelijk & discreet", "Verrekend met ontruiming"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wanneer heeft u een taxatie nodig?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij erfenisafwikkeling, boedelscheiding, verzekeringsschade of een aanstaande ontruiming wilt u precies weten wat uw inboedel waard is. Een onafhankelijke taxatie geeft u zekerheid — over de waarde, de verkoopmogelijkheden en de juiste vervolgstap.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Erfenisafwikkeling: inboedel taxeren voor boedelscheiding",
                "Verzekeringsschade: aantonen van de waarde bij verlies",
                "Voorafgaand aan verkoop, opkoop of veiling",
                "Onderbouwing voor aangifte successierecht",
                "Als u wilt weten of ontruiming of veiling meer oplevert",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat taxeren wij?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Antiek & kunst", omschrijving: "Meubels, schilderijen, sculpturen, zilver, porselein en curiosa — gewaardeerd door erkende experts." },
                { titel: "Sieraden & edelmetalen", omschrijving: "Goud, zilver, diamanten en edelstenen op basis van actuele beurs- en marktwaarde." },
                { titel: "Design & vintage", omschrijving: "Iconische designstukken en verzamelobjecten uit de 20e en 21e eeuw." },
                { titel: "Complete inboedel", omschrijving: "Volledige waardebepaling van een woning of bedrijfspand, inclusief inventarislijst." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Erkende en onafhankelijke taxateurs</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer werkt uitsluitend met ervaren en erkende taxateurs die werken volgens de richtlijnen van de Federatie TMV. U ontvangt een gedegen taxatierapport met objectomschrijving, conditiebeoordeling en marktwaarde — geldig voor verzekering, erfenis en juridische doeleinden.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Taxatie gecombineerd met opkoop of veiling</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na de taxatie kunt u direct kiezen: verkopen aan Uw Ontruimer (opkoop), onderbrengen bij een veilinghuis, of zelf houden. In alle gevallen regelen wij het transport en de afhandeling. De opbrengst wordt verrekend met eventuele ontruimingskosten — zodat u netto zo min mogelijk betaalt.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Taxatie → opkoop door Uw Ontruimer: snelste oplossing",
                "Taxatie → veiling via gerenommeerd veilinghuis: maximale opbrengst",
                "Taxatie → bewaren of verdelen: duidelijke onderbouwing voor erfgenamen",
                "Resterende inboedel wordt duurzaam verwerkt",
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
