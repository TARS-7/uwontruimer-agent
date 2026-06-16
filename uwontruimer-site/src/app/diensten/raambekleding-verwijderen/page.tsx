import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Raambekleding verwijderen | Gordijnen & rolgordijnen weg laten halen - Uw Ontruimer",
  description: "Raambekleding laten verwijderen? ✓ Gordijnen, vitrages, rolgordijnen en jaloezieën vakkundig demonteren ✓ Snel & netjes ✓ Combineerbaar met woningontruiming.",
  alternates: { canonical: "/diensten/raambekleding-verwijderen/" },
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
          <Image src="/Ontruimers.png" alt="Raambekleding verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Raambekleding verwijderen:<br />Vakkundig en snel weg
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Alle soorten raambekleding", "Duurzame afvoer"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke raambekleding verwijderen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Raambekleding is in de loop der jaren op tientallen manieren gemonteerd: van eenvoudige gordijnrails tot complexe systemen met verduistering, motoren en speciaal hang- en sluitwerk. Uw Ontruimer kent alle systemen en demonteert vakkundig — zonder schade aan kozijnen, muren of plafonds.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Gordijnen & vitrages", omschrijving: "Losse gordijnen, plooigordijnen en vitrages inclusief de rails, roedes en bevestigingsmateriaal van wand of plafond." },
                { titel: "Rolgordijnen & duo-rolgordijnen", omschrijving: "Veer- of kettingbediende rolgordijnen, inclusief cassettes en muurbeugels, zonder beschadiging van het kozijn." },
                { titel: "Jaloezieën (horizontaal & verticaal)", omschrijving: "Aluminium en houten jaloezieën, lamelgordijnen en verticale jaloezieën compleet gedemonteerd en netjes ingepakt." },
                { titel: "Horren & vliegengordijnen", omschrijving: "Vaste en oprolbare horren, magneethorren en vliegengordijnen in de kozijnen vakkundig verwijderd." },
                { titel: "Plisségordijnen & vouwgordijnen", omschrijving: "Alle plissé- en vouwgordijnen, ook dakraam-varianten van merken als Velux, inclusief het railsysteem." },
                { titel: "Gemotoriseerde systemen", omschrijving: "Elektrische rolgordijnen en zonweringsystemen met motor worden veilig ontkoppeld en volledig gedemonteerd." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom niet zelf doen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Raambekleding verwijderen lijkt eenvoudig, maar heeft zo zijn haken en ogen. Zware gordijnrails van gipsplaat trekken de wand mee als ze verkeerd losgemaakt worden. Gemotoriseerde systemen moeten eerst elektronisch ontkoppeld worden voordat demontage veilig is. En op hoogte werken — zeker bij hoge plafonds of dakramen — vraagt om de juiste ladders en steigers. Onze vakmensen hebben zowel de kennis als het materieel om elk type raambekleding snel en schadevrij te verwijderen.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Geen schade aan kozijnen, muren of plafonds",
                "Veilig werken op hoogte met professioneel materieel",
                "Alle soorten bevestigingssystemen bekend",
                "Gemotoriseerde systemen correct ontkoppeld",
                "Materiaal gesorteerd: hergebruik of verantwoorde afvoer",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Raambekleding verwijderen in combinatie met woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij een volledige <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a> is het verwijderen van raambekleding standaard inbegrepen. Maar ook als u alleen de ramen wilt laten kaalstroken — voor een renovatie, een overdracht aan de nieuwe eigenaar of een oplevering aan de verhuurder — staan wij voor u klaar. We combineren de klus graag met andere werkzaamheden zoals <a href="/diensten/vloerverwijdering" className="text-blue-600 hover:underline">vloerverwijdering</a> of het verwijderen van behang, zodat u in één afspraak klaar bent.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost het verwijderen van raambekleding?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs is afhankelijk van het type raambekleding, het aantal ramen en de hoogte waarop gewerkt moet worden. Voor kleine klussen zoals één of twee kamers rekenen wij een starttarief; grotere projecten worden op maat geprijsd.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Gordijnen per kamer (incl. rail)", prijs: "vanaf €75,–" },
                { type: "Kleine klus (1–5 ramen)", prijs: "vanaf €150,–" },
                { type: "Middel klus (6–15 ramen)", prijs: "vanaf €250,–" },
                { type: "Grote klus / heel pand", prijs: "vanaf €350,–" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe werkt het?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              U vraagt een offerte aan via de AI-wizard of belt ons direct. Wij plannen een bezoek in, beoordelen de situatie ter plekke en geven u een vaste prijs. Op de afgesproken dag werken onze vakmensen snel en netjes: raambekleding gedemonteerd, bevestigingsmateriaal verwijderd en alles afgevoerd. U ontvangt de ruimte bezemschoon terug. Betaling achteraf op factuur.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
