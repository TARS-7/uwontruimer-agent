import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zonnescherm verwijderen | Screens & luifels demonteren - Uw Ontruimer",
  description: "Zonnescherm laten verwijderen? ✓ Uitvalschermen, screens & terrasoverkappingen vakkundig gedemonteerd ✓ Veilig op hoogte ✓ Combineerbaar met woningontruiming.",
  alternates: { canonical: "/diensten/zonnescherm-verwijderen/" },
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
          <Image src="/Ontruimers.png" alt="Zonnescherm verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Zonnescherm verwijderen:<br />Veilig gedemonteerd van gevel of terras
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Veilig op hoogte", "Motorisering ontkoppeld"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke zonneschermen verwijderen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Zonneschermen zijn er in tientallen uitvoeringen: uitvalschermen voor balkons, screens voor raamkozijnen, terrasoverkappingen en grote luifels op commerciële gevels. Elk type vraagt een eigen aanpak. Uw Ontruimer beschikt over het materieel en de kennis om al deze systemen vakkundig te demonteren — ook op hoogte of met gemotoriseerde aandrijving.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Uitvalschermen (balkon & terras)", omschrijving: "Klassieke uitvalschermen aan de gevel of op het balkon worden inclusief de bevestigingscassette en wandbeugels demonteerd." },
                { titel: "Screens & rolluiken", omschrijving: "Externe zonwering- en privacyscreens inclusief geleiderails, onderbalk en kastjes aan het kozijn of de gevel." },
                { titel: "Terrasluifels & overkappingen", omschrijving: "Vrijstaande en gemonteerde terrasoverkappingen inclusief staanders, beugels en afdakconstructie vakkundig gesloopt." },
                { titel: "Pergola's met zonwering", omschrijving: "Aluminium en houten pergola's met lamellenof doekzonwering volledig gedemonteerd en gesorteerd afgevoerd." },
                { titel: "Gemotoriseerde systemen", omschrijving: "Elektrische zonneschermen met buismotor of buitenmotor worden veilig ontkoppeld voordat demontage plaatsvindt." },
                { titel: "Commerciële zonwering", omschrijving: "Grote luifels, markiezen en winkelzonwering op bedrijfspanden of appartementsgebouwen — op hoogte met steiger of hoogwerker." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom professionele demontage?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Zonneschermen zijn zwaar en hangen vaak op flinke hoogte. Een fout bij de demontage kan leiden tot een vallende cassette, beschadigde gevel of erger. Gemotoriseerde schermen moeten bovendien elektronisch worden ontkoppeld voordat ze losgemaakt kunnen worden. Onze vakmensen werken met ladders, steigers en harnassen waar nodig, en kennen de bevestigingstechnieken van alle gangbare merken zoals Renson, Harol, Sattler en Brustor.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Veilig werken op hoogte met steiger of hoogwerker",
                "Motorisering correct ontkoppeld vóór demontage",
                "Geen schade aan gevel, balustrade of kozijn",
                "Alle gangbare merken en systemen bekend",
                "Materiaal gesorteerd afgevoerd: aluminium, doek en elektra gescheiden",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Combineren met woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Staat u voor een complete ontruiming van een woning of bedrijfspand? Wij nemen het zonnescherm mee in het totaalpakket. Via onze <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a> zorgen we ervoor dat het pand volledig leeg, schoon en zonder losse onderdelen wordt opgeleverd. Zo hoeft u maar één opdracht te geven voor alles wat er af moet.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost een zonnescherm laten verwijderen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs is afhankelijk van het type scherm, de hoogte en of er gemotoriseerde onderdelen zijn. Een enkelvoudig balkonscherm is snel klaar; grote terrasoverkappingen of commerciële installaties vragen meer tijd en materieel.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Enkelvoudig uitvalscherm", prijs: "vanaf €150,–" },
                { type: "Screen of rolluik per raam", prijs: "vanaf €100,–" },
                { type: "Terrasluifel of overkapping", prijs: "vanaf €350,–" },
                { type: "Groot / commercieel scherm", prijs: "op maat" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Zo werkt de aanvraag</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Vraag via de AI-wizard een indicatie aan of bel ons direct. Stuur foto's van het scherm en de bevestiging mee — dan kunnen wij al op afstand een scherpe indicatie geven. Wij plannen een afspraak in, controleren ter plekke en geven een vaste prijs. Op de uitvoeringsdag demonteren onze vakmensen het scherm veilig en volledig, voeren al het materiaal af en leveren de locatie netjes op.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
