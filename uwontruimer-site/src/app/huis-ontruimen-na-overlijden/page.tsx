import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discreet een huis laten ontruimen na een overlijden | UwOntruimer.nl",
  description: "Wilt u een huis laten ontruimen na een overlijden? Laat dit dan over aan het professionele en toegewijde team van Uw Ontruimer! Wij zijn betrouwbaar, desku",
  alternates: { canonical: "/huis-ontruimen-na-overlijden/" },
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
          <Image src="/appartement-leeg.png" alt="Huis ontruimen na overlijden" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Huis ontruimen na overlijden:<br />Respectvol en volledig ontzorgd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Discreet & respectvol", "Schriftelijke opleveringsgarantie"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Een huis ontruimen na overlijden: wat komt erbij kijken?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na het overlijden van een dierbare is er naast het verdriet ook veel praktisch te regelen. De woning moet worden leeggemaakt, de inboedel verdeeld of afgevoerd, en het huis bezemschoon opgeleverd aan verhuurder of erfgenamen. Uw Ontruimer neemt dit volledig uit handen — discreet, snel en met oog voor de emotionele situatie.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Volledige ontruiming van de woning, inclusief zolder, kelder en schuur",
                "Inventarisatie en documentatie van de inboedel",
                "Waardevolle objecten getaxeerd door erkende taxateurs",
                "Spullen naar erfgenamen, kringloop, veiling of opkoop",
                "Woning bezemschoon opgeleverd met schriftelijke garantie",
                "Eén vast aanspreekpunt gedurende het hele traject",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Respectvolle omgang met de nalatenschap</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij begrijpen dat het leeghalen van een ouderlijk huis of de woning van een partner meer is dan een praktische klus. Ons team werkt altijd respectvol, gedegen en op uw tempo. U bepaalt wat er met de spullen gebeurt — wij voeren het uit. Persoonlijke herinneringen worden nooit zomaar afgevoerd.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waardevolle spullen: taxatie, veiling of opkoop</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Heeft de overledene waardevolle objecten nagelaten? Uw Ontruimer taxeert antiek, kunst, sieraden en andere waardevolle goederen door erkende taxateurs. Waardevolle spullen kopen wij op of brengen wij naar een veilinghuis. De opbrengst wordt verrekend met de ontruimingskosten — zodat u netto minder betaalt.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Taxatie door erkende taxateurs (Federatie TMV)",
                "Opkoop door Uw Ontruimer: snel en eerlijke prijs",
                "Veiling via gerenommeerd veilinghuis: maximale opbrengst",
                "Donatie aan kringloop of goed doel op verzoek",
                "Persoonlijke bezittingen bewaard en overhandigd aan nabestaanden",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe verloopt de ontruiming?</h2>
            <ol className="space-y-4 mb-10">
              {[
                { stap: "1", titel: "Vrijblijvende prijsindicatie", tekst: "Via de AI-wizard of een kort telefoongesprek geeft u de situatie door. Wij sturen een heldere offerte." },
                { stap: "2", titel: "Afstemming met nabestaanden", tekst: "In overleg bepalen we wat meegaat naar erfgenamen, wat verkocht wordt en wat wordt afgevoerd." },
                { stap: "3", titel: "Ontruiming en verwerking", tekst: "Ons team werkt efficiënt en respectvol. Waardevolle spullen worden apart gehouden en verwerkt." },
                { stap: "4", titel: "Bezemschone oplevering", tekst: "De woning wordt bezemschoon opgeleverd. U ontvangt een schriftelijk opleveringsrapport." },
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
