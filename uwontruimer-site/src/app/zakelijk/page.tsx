import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Uitgebreide zakelijke dienstverlening van Uw Ontruimer | UwOntruimer.nl",
  description: "Uw Ontruimer is een professionele partner op het gebied van ontruimen. Wij hebben namelijk al ruim 10 jaar ervaring in deze branche en een uitgebreide dien",
  alternates: { canonical: "/zakelijk/" },
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
          <Image src="/Dienst_Bedrijfsontruiming.jpg" alt="Zakelijke ontruiming — betrouwbare partner voor professionals" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Zakelijke ontruiming: Betrouwbare partner voor professionals
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Opleveringsgarantie", "Compleet ontzorgd"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Uw vaste partner voor professionele ontruimingen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is een professionele partner op het gebied van ontruimen met ruim 15 jaar ervaring. Wij bieden een uitgebreide zakelijke dienstverlening: van woningontruiming en bedrijfsontruiming tot spoedontruiming, vloerverwijdering en boedelbeheer. Alle werkzaamheden worden bezemschoon en gedocumenteerd opgeleverd — met schriftelijke opleveringsgarantie.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Volledige ontruiming van woning, berging, zolder en kelder",
                "Bedrijfsontruiming inclusief kantoorinventaris en archief",
                "Archiefvernietiging van vertrouwelijke dossiers en digitale data",
                "Inboedel opkopen — opbrengst verrekend met de factuur",
                "Waardevolle objecten naar veilinghuis — wij regelen het hele traject",
                "Boedelbeheer en taxatie voor notaris of bewindvoerder",
                "Schriftelijke opleveringsgarantie op alle werkzaamheden",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Onze zakelijke partners</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij werken structureel samen met professionals die regelmatig te maken hebben met ontruimingen. Onze zakelijke partners weten dat wij discreet, betrouwbaar en snel handelen — en dat wij altijd de afgesproken kwaliteit leveren.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Makelaar", omschrijving: "Woning snel verkoopklaar. Wij leveren bezemschoon op binnen uw termijn — en verwijzen klanten terug zonder courtage." },
                { titel: "Notaris & bewindvoerder", omschrijving: "Inventarisatie, taxatie en gedocumenteerde oplevering. Wij stellen een boedellijst op die direct bruikbaar is als bijlage." },
                { titel: "Woningbouwvereniging", omschrijving: "Huurwoningen snel verhuurklaar. Wij kennen de opleveringseisen en zorgen voor een snelle doorlooptijd." },
                { titel: "Zorgcentrum & uitvaart", omschrijving: "Discrete en respectvolle werkwijze bij gevoelige situaties. Altijd één aanspreekpunt gedurende het hele traject." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">De voordelen van onze zakelijke dienstverlening</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij ontzorgen u volledig. Van de eerste offerte tot de definitieve oplevering heeft u één aanspreekpunt en weet u precies wat u kunt verwachten.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Duurzaam: maximaal hergebruik van de inboedel via kringloop en goede doelen",
                "Discreet: respectvolle omgang met persoonlijke spullen en gevoelige situaties",
                "Snel: ook spoedontruimingen binnen 48 uur mogelijk",
                "Transparant: vaste prijs, geen verborgen kosten, schriftelijk vastgelegd",
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
