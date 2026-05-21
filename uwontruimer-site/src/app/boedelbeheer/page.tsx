import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Boedelbeheer - Uw partner voor boedelbeheer",
  description: "De betrouwbare partner op het gebied van boedelbeheer. Al meer dan 10 jaar ervaring. Neem contact op voor de mogelijkheden",
  alternates: { canonical: "/boedelbeheer/" },
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
          <Image src="/waardevolle.spullen.png" alt="Boedelbeheer nalatenschap" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Boedelbeheer:<br />Professioneel beheer van uw nalatenschap
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Volledige inventarisatie", "Erkende taxateurs", "Discreet & gedocumenteerd"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat is boedelbeheer?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Boedelbeheer is het professioneel inventariseren, taxeren en beheren van een nalatenschap of boedel — doorgaans na overlijden, bij erfenisafwikkeling of in het kader van bewind. Uw Ontruimer biedt een compleet boedelbeheertraject: van de eerste inventarisatie tot de uiteindelijke oplevering van de woning.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Volledige inventarisatie van de inboedel met foto-documentatie",
                "Taxatie door erkende taxateurs (Federatie TMV)",
                "Boedelbeschrijving bruikbaar voor notaris, erfgenamen of rechtbank",
                "Verdeling van de boedel in overleg met erfgenamen of bewindvoerder",
                "Waardevolle objecten opgekocht of geveild",
                "Resterende inboedel duurzaam verwerkt via kringloop en recycling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voor wie is boedelbeheer bedoeld?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Nabestaanden", omschrijving: "Na overlijden van een familielid helpen wij bij het inventariseren en verdelen van de inboedel." },
                { titel: "Notarissen", omschrijving: "Boedelbeschrijving als bijlage bij de akte van erfrecht of voor aangifte successierecht." },
                { titel: "Bewindvoerders", omschrijving: "Volledig overzicht van de boedel van een cliënt — inclusief taxatie en verdere afwikkeling." },
                { titel: "Erfgenamen onderling", omschrijving: "Neutrale inventarisatie en taxatie bij boedelscheiding tussen meerdere erfgenamen." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Van boedelbeheer naar ontruiming en oplevering</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Boedelbeheer is bij Uw Ontruimer meer dan een administratieve dienst. Na de inventarisatie en taxatie regelen wij ook de verdere afwikkeling: spullen naar erfgenamen, waardevolle objecten naar veiling of opkoop, bruikbare goederen naar kringloop en de rest duurzaam afgevoerd. De woning wordt bezemschoon opgeleverd.
            </p>
            <ol className="space-y-4 mb-10">
              {[
                { stap: "1", titel: "Inventarisatie en taxatie", tekst: "Wij brengen de volledige boedel in kaart. Waardevolle objecten worden getaxeerd door erkende experts." },
                { stap: "2", titel: "Boedelbeschrijving", tekst: "U ontvangt een gedegen boedelbeschrijving met foto-documentatie en getaxeerde waarden per object." },
                { stap: "3", titel: "Verdeling en afwikkeling", tekst: "In overleg met erfgenamen of uw notaris bepalen wij de vervolgstap voor elk onderdeel van de boedel." },
                { stap: "4", titel: "Ontruiming en oplevering", tekst: "Wij ontruimen de woning, verwerken de boedel duurzaam en leveren bezemschoon op met garantie." },
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
