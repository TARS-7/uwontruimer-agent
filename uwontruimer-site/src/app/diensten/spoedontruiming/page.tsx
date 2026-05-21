import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spoedontruiming woning bij u in de buurt",
  description: "Moet een ontruiming binnen 24 geregeld zijn? Wij staan direct voor u klaar! Bel naar 085-303 58 94 of vul het contactformulier in.",
  alternates: { canonical: "/diensten/spoedontruiming/" },
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
    <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Spoed? Bel direct of start de wizard</h2>
    <p className="text-slate-500 font-light text-sm mb-6">Bij spoedontruiming telt elke minuut. Bel 085-303 58 94 of gebruik de AI-wizard voor een directe prijsindicatie.</p>
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
          <Image src="/Ontruimers.png" alt="Spoedontruiming binnen 24 uur" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Spoedontruiming nodig?<br />Binnen 24 uur ter plaatse
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Schriftelijke opleveringsgarantie", "Binnen 24 uur beschikbaar"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wanneer heeft u een spoedontruiming nodig?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Soms is er geen tijd voor een regulier ontruimingsproces. Denk aan ontruiming na overlijden waarbij een zorginstelling de kamer binnen 24–72 uur leeg wil hebben, een deurwaarder die op korte termijn toegang eist, of een verhuurder die het pand direct nodig heeft. Uw Ontruimer staat bij spoedgevallen binnen 24 uur klaar.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Overlijden: zorgkamer of woning binnen 24–72 uur ontruimen",
                "Gerechtelijke ontruiming op last van rechter of deurwaarder",
                "Faillissement: bedrijfspand direct ontruimen en opleveren",
                "Verhuurder die woning direct nodig heeft na vertrek huurder",
                "Calamiteiten: brand- of waterscade waarbij pand snel leeg moet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Spoedontruiming zorgkamer of verpleeghuis</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Volgens de richtlijnen van het LOC en ActiZ moet een zorgkamer na overlijden soms al binnen 24 uur leeg zijn — midden in het rouwproces. Uw Ontruimer begrijpt hoe zwaar dit is. Wij werken discreet en respectvol, nemen alle logistiek uit handen en zorgen dat de kamer tijdig en bezemschoon wordt opgeleverd aan de instelling.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Bedrijfsruimte met spoed ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij faillissement of gedwongen vertrek moet een bedrijfspand soms razendsnel leeg. Uw Ontruimer verzorgt ook spoedontruimingen van kantoren, winkels en magazijnen — inclusief aanvullende diensten zoals vloerverwijdering, archiefvernietiging en sleuteloverdracht.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe werkt een spoedontruiming?</h2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Direct contact", tekst: "Bel 085-303 58 94 of start de AI-wizard. Wij beoordelen de situatie meteen en plannen zo snel mogelijk in." },
                { stap: "2", titel: "Offerte binnen het uur", tekst: "U ontvangt een vaste-prijs offerte op basis van de opgegeven informatie of foto's. Geen inspectie ter plaatse nodig." },
                { stap: "3", titel: "Uitvoering binnen 24 uur", tekst: "Ons team staat op de afgesproken dag en tijd klaar. Waardevolle spullen worden apart gehouden voor latere sortering." },
                { stap: "4", titel: "Bezemschone oplevering", tekst: "De ruimte wordt volledig leeggemaakt en bezemschoon opgeleverd, inclusief foto-rapportage." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom Uw Ontruimer bij spoed?</h2>
            <ul className="space-y-3 mb-10">
              {[
                "15+ jaar ervaring in spoed- en reguliere ontruimingen",
                "Vaste prijs — geen meerkosten achteraf",
                "Discreet en respectvol, ook in emotionele situaties",
                "Actief in Noord-Holland, Zuid-Holland en Utrecht",
                "Waardevolle spullen worden apart gezet voor u",
                "Bezemschone oplevering inclusief foto-rapportage",
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
