import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Een woningontruiming in Aalsmeer van a tot z geregeld. | UwOntruimer.nl",
  description: "Woningontruiming in Aalsmeer vakkundig uitgevoerd door ervaren ontruimers. U zoekt een professionele partner voor uw ontruiming? Wij komen graag persoonlij",
  alternates: { canonical: "https://www.uwontruimer.nl/huis-laten-ontruimen/" },
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
          <Image src="/truck-woningontruiming.png" alt="Huis laten ontruimen" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Huis laten ontruimen:<br />Wij regelen alles voor u
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Van A tot Z geregeld", "Opleveringsgarantie"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Huis laten ontruimen: voor wie en wanneer?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een huis laten ontruimen doe je niet zomaar zelf. Of het nu gaat om een erfeniswoning, een woning na een verhuizing of een pand dat bezemschoon opgeleverd moet worden: Uw Ontruimer regelt het volledig. U hoeft zelf niets te doen — wij nemen het van A tot Z uit handen.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Woningontruiming na overlijden van een familielid",
                "Woning leegmaken bij verhuizing naar kleinere woning of zorginstelling",
                "Huurwoning ontruimen bij einde huurcontract",
                "Woning verkoopklaar maken voor de makelaar",
                "Bedrijfspand, kantoor of opslagruimte leegmaken",
                "Spoedontruiming mogelijk — ook op korte termijn",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat regelt Uw Ontruimer voor u?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer verzorgt alles rondom de ontruiming: inventarisatie, taxatie, transport, opkoop of veiling van waardevolle spullen, afvoer van de resterende inboedel en een bezemschone oplevering. U heeft één aanspreekpunt en ontvangt één heldere factuur.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Inventarisatie", omschrijving: "Wij brengen de volledige inhoud van de woning in kaart — inclusief zolder, kelder en schuur." },
                { titel: "Taxatie & opkoop", omschrijving: "Waardevolle objecten worden getaxeerd en opgekocht of geveild. Opbrengst verrekend met ontruimingskosten." },
                { titel: "Afvoer & recycling", omschrijving: "Bruikbare spullen gaan naar kringloop. De rest wordt gesorteerd en duurzaam afgevoerd." },
                { titel: "Bezemschone oplevering", omschrijving: "De woning wordt opgeleverd conform uw eisen, met schriftelijke opleveringsgarantie." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Werkgebied en snelheid</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is actief in heel Noord-Holland, Zuid-Holland en Utrecht. Wij plannen de ontruiming in op het moment dat het u uitkomt — ook op korte termijn. Bij spoedontruimingen kunnen wij doorgaans binnen 24–48 uur ter plaatse zijn.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Actief in Noord-Holland, Zuid-Holland en Utrecht",
                "Spoedontruiming binnen 24–48 uur mogelijk",
                "Vaste prijs op basis van offerte — geen verrassingen",
                "Eén factuur, inclusief taxatie, transport en afvoer",
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
