import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Opleveringsgarantie | UwOntruimer.nl",
  description: "Uw Ontruimer is sinds 2010 een vooraanstaand dienstverlener van het leeghalen van woningen en bedrijfspanden. Het streven van de onderneming is het ontzorg",
  alternates: { canonical: "/opleveringsgarantie/" },
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
          <Image src="/Uw-Ontruimer.jpg" alt="Opleveringsgarantie Uw Ontruimer" fill className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Opleveringsgarantie:<br />Schriftelijk vastgelegd, altijd nagekomen
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Schriftelijk vastgelegd", "Kosteloos nawerk", "Actief since 2010"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat houdt de opleveringsgarantie in?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer levert elke woning op conform de vooraf afgesproken eisen — bezemschoon en leeg. Na afronding ontvangt u een schriftelijk opleveringsrapport. Heeft de verhuurder of makelaar toch op- of aanmerkingen? Dan komen wij kosteloos terug om dit te herstellen. Dit is bij ons geen uitzondering, maar standaard beleid.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Woning bezemschoon opgeleverd conform afgesproken eisen",
                "Schriftelijk opleveringsrapport na iedere ontruiming",
                "Bij op- of aanmerkingen: kosteloos nawerk zonder discussie",
                "Geldig voor huurders, woningcorporaties, makelaars en notarissen",
                "Tot op heden is nawerk nog nooit noodzakelijk gebleken",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom een schriftelijke opleveringsgarantie?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              In de ontruimingsbranche zijn mondelinge afspraken de norm. Uw Ontruimer gaat verder: u krijgt altijd een schriftelijk opleveringsrapport met foto-documentatie. Dit geeft u zekerheid en bescherming — of u nu particulier bent, notaris, bewindvoerder of woningcorporatie.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Voor huurders", omschrijving: "Bewijs dat de woning conform eisen is opgeleverd — helpt bij het terugkrijgen van de borg." },
                { titel: "Voor makelaars", omschrijving: "Schriftelijke bevestiging dat de woning leeg en verkoopklaar is — direct inzetbaar bij het dossier." },
                { titel: "Voor notarissen", omschrijving: "Opleveringsrapport bruikbaar als bijlage bij boedelafwikkeling of nalatenschapsdossier." },
                { titel: "Voor woningcorporaties", omschrijving: "Documentatie per ontruiming — overzichtelijk voor uw administratie en verhuurproces." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Meer dan 15 jaar ervaring in ontruiming en oplevering</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is actief since 2010 en heeft sindsdien duizenden woningen en bedrijfspanden ontruimd en opgeleverd. In al die jaren is er nooit een klacht over de oplevering geweest. Dat is geen toeval — het is het resultaat van een vaste werkwijze, ervaren medewerkers en een duidelijke garantie.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Actief since 2010 — meer dan 15 jaar ervaring",
                "Duizenden woningen en bedrijfspanden opgeleverd",
                "Vaste werkwijze met eindcontrole voor oplevering",
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
