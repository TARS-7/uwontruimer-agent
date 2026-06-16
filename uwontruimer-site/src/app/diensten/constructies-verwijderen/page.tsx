import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Constructies verwijderen | Scheidingswanden & vaste inrichting slopen - Uw Ontruimer",
  description: "Vaste constructies laten verwijderen? ✓ Scheidingswanden, stellingen, verhogingen & inbouwkasten gesloopt ✓ Puin afgevoerd ✓ Combineerbaar met woningontruiming.",
  alternates: { canonical: "/diensten/constructies-verwijderen/" },
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
          <Image src="/Ontruimers.png" alt="Constructies verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Constructies verwijderen:<br />Van scheidingswand tot vaste inrichting
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Constructief advies", "Puin & afval afgevoerd"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke constructies verwijderen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              In woningen en bedrijfspanden zitten talloze vaste constructies die bij ontruiming, renovatie of herinrichting moeten verdwijnen. Denk aan gipsplaten scheidingswanden, ingebouwde kasten, verhoogde vloeren, stellingkastenwanden of zelfs kleine aanbouwen. Uw Ontruimer sloopt en verwijdert al deze constructies vakkundig — met oog voor wat draagconstructies zijn en wat niet.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Gipsplaten scheidingswanden", omschrijving: "Niet-dragende binnenwanden van gipsplaat, hout of steenstrips worden vakkundig gesloopt en inclusief het staalstudskelet verwijderd." },
                { titel: "Ingebouwde kasten & kledingkasten", omschrijving: "Volledig ingebouwde kledingkasten, garderobekasten en maatwerkkasten worden gedemonteerd inclusief de omtimmering." },
                { titel: "Verhoogde vloeren & podiums", omschrijving: "Houten vloerpodiums, verhoogde platforms en systeemvloeren in kantoor- of winkelpanden worden gesloopt en afgevoerd." },
                { titel: "Stellingkasten & vaste wandmeubels", omschrijving: "Vaste boekenkasten, stellingwanden en ingebouwde tv-meubels inclusief alle bevestigingspunten en wandankers." },
                { titel: "Badkamer- & toiletinrichting", omschrijving: "Betegelde douche-opstanden, gemetselde badkuipen, douchewanden en vaste betegeling in douche of bad." },
                { titel: "Tuinbouwen & schuurtjes", omschrijving: "Kleine aanbouwsels, afdaken, tuinkastjes en garages die gesloopt moeten worden ter voorbereiding op verkoop of verbouwing." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Dragende versus niet-dragende constructies</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Niet elke wand mag zomaar gesloopt worden. Dragende constructies zijn onderdeel van de statische opbouw van het gebouw — ze verwijderen zonder vervangende steunconstructie kan leiden tot instabiliteit. Onze vakmensen beoordelen ter plekke welke constructies vrij te slopen zijn en waar een constructeur bij betrokken moet worden. Zo voorkomt u onverwachte schade of gevaarlijke situaties. Wij werken in lijn met de bouwkundige werkelijkheid en adviseren u eerlijk over wat kan en wat niet.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Beoordeling dragende vs. niet-dragende constructies op locatie",
                "Veilig slopen inclusief stof- en geluidsbescherming",
                "Puin en afvalmateriaal gesorteerd afgevoerd",
                "Resterende gaten, ankerpunten en uitsparingen schoon achtergelaten",
                "Combineerbaar met vloerverwijdering en woningontruiming",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Constructies verwijderen als onderdeel van woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij een volledige <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a> horen vaste constructies er ook bij. Verhuurders en makelaars willen een pand dat leeg is — niet alleen van meubels, maar ook van ingebouwde kastenwanden of zelfgebouwde scheidingen. Uw Ontruimer neemt dit standaard mee in de opdracht en levert het pand op conform de afgesproken staat. Wij combineren de sloping desgewenst met vloerverwijdering, behangstrippen en schoonmaakwerkzaamheden.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost het verwijderen van constructies?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs hangt af van het type constructie, het volume aan afvoermateriaal en de complexiteit van de situatie. Kleine klussen zoals één scheidingswand zijn snel geprijsd; uitgebreidere sloopwerkzaamheden in meerdere ruimten worden op maat gekwoteerd.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Kleine gipsplaten wand (per m²)", prijs: "vanaf €15,–" },
                { type: "Kleine klus (1–2 wanden of kasten)", prijs: "vanaf €350,–" },
                { type: "Ingebouwde kast demonteren", prijs: "vanaf €150,–" },
                { type: "Uitgebreide sloopwerkzaamheden", prijs: "op maat" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Werkwijze</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              U neemt contact op via de AI-wizard of telefoon. Wij plannen een inspectie en beoordelen welke constructies vrij te slopen zijn, hoe omvangrijk de klus is en hoe het afval afgevoerd wordt. U ontvangt een vaste prijs. Op de uitvoeringsdag werken onze mensen snel en ordelijk: stofbescherming aangebracht, constructie gesloopt, puin afgevoerd, ruimte schoongeveegd. Betaling achteraf op factuur.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
