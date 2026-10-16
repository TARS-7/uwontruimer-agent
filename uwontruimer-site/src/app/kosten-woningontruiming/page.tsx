import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Link from "next/link";

// Prijspagina (18 sep 2026). Doel: landingspagina voor de kosten-zoekopdrachten
// uit Google Ads ("wat kost woningontruiming", "kosten huis ontruimen" — 60-75%
// CTR, 0 conversies) en organisch ranken op dezelfde termen.
//
// Opbouw is bewust: het ANTWOORD (de bandbreedtes) staat boven de vouw voor de
// advertentieklikker; de diepgang eronder is voor Google. De wizard blijft
// ongewijzigd — deze pagina stuurt er alleen beter voorbereide bezoekers heen.

export const metadata: Metadata = {
  title: "Wat kost een woningontruiming? Prijzen per woningtype (2026)",
  description:
    "Direct duidelijkheid: een woningontruiming kost tussen € 350 en € 4.000, afhankelijk van woningtype en inboedel. Bekijk de bandbreedtes per woning en bereken gratis uw eigen prijs.",
  alternates: { canonical: "/kosten-woningontruiming/" },
};

const prijzen = [
  { type: "Studio of kleine woning", detail: "1–2 kamers", van: 350, tot: 750 },
  { type: "Appartement", detail: "2–3 kamers", van: 600, tot: 1400 },
  { type: "Rijtjeshuis of tussenwoning", detail: "3–4 kamers", van: 900, tot: 2000 },
  { type: "Vrijstaande woning of villa", detail: "4+ kamers", van: 1500, tot: 4000 },
];

const inbegrepen = [
  "Arbeidskosten van het volledige ontruimingsteam",
  "Transport naar erkende verwerkers en stortplaatsen",
  "Standaard stortkosten voor regulier huishoudelijk afval",
  "Basisschoonmaak van de leeggemaakte ruimtes (bezemschoon)",
  "Sortering van herbruikbare spullen voor kringloop en recycling",
  "Schriftelijke opleveringsgarantie",
];

const nietInbegrepen = [
  "Diepe schoonmaak of reiniging bij ernstige vervuiling",
  "Verwijderen van vloerbedekking, laminaat of tegels",
  "Sloop- en herstelwerkzaamheden",
  "Afvoer van asbesthoudend materiaal",
];

const factoren = [
  { titel: "Hoeveelheid inboedel", tekst: "De belangrijkste factor. Een volgestouwde woning kost meer tijd en meer ritten dan een half lege." },
  { titel: "Bereikbaarheid", tekst: "Een lift of een parkeerplek voor de deur scheelt uren. Een derde verdieping zonder lift met een smalle trap juist niet." },
  { titel: "Verdieping en woningtype", tekst: "Vierkante meters en het aantal kamers bepalen mede hoeveel mankracht er nodig is." },
  { titel: "Waardevolle spullen", tekst: "Antiek, design, sieraden of elektronica kopen wij op of veilen wij — dat wordt verrekend en verlaagt uw eindbedrag." },
  { titel: "Spoed", tekst: "Binnen 24 uur ontruimen kan altijd, maar brengt een toeslag met zich mee. Vroeg plannen is goedkoper." },
  { titel: "Extra werkzaamheden", tekst: "Vloeren eruit, muren herstellen of een diepe schoonmaak worden apart geoffreerd." },
];

const faqItems = [
  {
    vraag: "Wat kost een woningontruiming gemiddeld?",
    antwoord:
      "Reken op € 350 tot € 750 voor een studio, € 600 tot € 1.400 voor een appartement, € 900 tot € 2.000 voor een rijtjeshuis en € 1.500 tot € 4.000 voor een vrijstaande woning. De uiteindelijke prijs hangt af van de hoeveelheid inboedel, de bereikbaarheid en eventuele extra werkzaamheden.",
  },
  {
    vraag: "Krijg ik een vaste prijs of een uurtarief?",
    antwoord:
      "U krijgt altijd vooraf een vaste prijs op basis van een inspectie, met schriftelijke opleveringsgarantie. Geen uurtarief en geen verrassingen achteraf.",
  },
  {
    vraag: "Kan een woningontruiming gratis zijn?",
    antwoord:
      "Zelden. Alleen als de inboedel genoeg waarde vertegenwoordigt om de kosten te dekken, kan de rekening naar nul. Wij taxeren waardevolle spullen en verrekenen die met de ontruimingskosten, waardoor het eindbedrag flink lager kan uitvallen.",
  },
  {
    vraag: "Wie betaalt de ontruiming bij een overlijden?",
    antwoord:
      "Bij een nalatenschap komen de kosten in principe ten laste van de erfgenamen of de boedel. Sommige woningcorporaties dragen bij als de huurder de kosten niet kan dragen. Bespreek dit vooraf met de verhuurder of de notaris.",
  },
  {
    vraag: "Hoe snel weet ik wat het bij mij kost?",
    antwoord:
      "Via onze gratis online AI-analyse ontvangt u binnen twee minuten een prijsindicatie voor uw eigen situatie, zonder verplichtingen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.vraag,
    acceptedAnswer: { "@type": "Answer", text: f.antwoord },
  })),
};

const euro = (n: number) => `€ ${n.toLocaleString("nl-NL")}`;

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const kruisIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-slate-400" viewBox="0 0 12 12" fill="none">
      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

const WizardCta = ({ label = "Bereken uw eigen prijs (2 min)" }: { label?: string }) => (
  <div>
    <a
      href="https://analyse.uwontruimer.nl"
      className="inline-flex items-center justify-center gap-2 text-white font-semibold px-5 sm:px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-sm sm:text-base whitespace-nowrap"
      style={{ backgroundColor: "#d97706" }}
    >
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {label}
    </a>
    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
      {["100% gratis & vrijblijvend", "Direct een prijsindicatie", "Foto's uploaden via mobiel"].map((item) => (
        <span key={item} className="inline-flex items-center gap-1 text-xs text-slate-400">
          <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main className="mt-16">
        {/* Antwoord boven de vouw — geen hero-foto: de prijsvrager wil meteen het bedrag */}
        <div className="bg-white pt-12 pb-10 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Tarieven</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
              Wat kost een woningontruiming?
            </h1>
            <p className="text-lg text-slate-500 font-light mb-8">
              Een complete woningontruiming kost in 2026 doorgaans tussen de <strong className="font-medium text-slate-700">€ 350 en € 4.000</strong>, afhankelijk van het type woning en de hoeveelheid inboedel. Hieronder ziet u per woningtype wat u ongeveer kunt verwachten.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-6">
              <table className="w-full text-left">
                <thead style={{ backgroundColor: "#f8fafc" }}>
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Woning</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 text-right whitespace-nowrap">Indicatie</th>
                  </tr>
                </thead>
                <tbody>
                  {prijzen.map(({ type, detail, van, tot }) => (
                    <tr key={type} className="border-t border-slate-100">
                      <td className="px-5 py-4">
                        <span className="block font-medium text-slate-800">{type}</span>
                        <span className="block text-sm text-slate-400 font-light">{detail}</span>
                      </td>
                      <td className="px-5 py-4 text-right font-medium text-slate-800 whitespace-nowrap">
                        {euro(van)} – {euro(tot)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-100">
                    <td className="px-5 py-4">
                      <span className="block font-medium text-slate-800">Bedrijfspand of winkel</span>
                      <span className="block text-sm text-slate-400 font-light">kantoor, magazijn, horeca</span>
                    </td>
                    <td className="px-5 py-4 text-right font-medium text-slate-500 whitespace-nowrap">Offerte op maat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-400 font-light mb-8">
              Bedragen zijn inclusief btw en bedoeld als richtlijn. Uw definitieve prijs staat vast na een vrijblijvende inspectie — met schriftelijke opleveringsgarantie, zodat u achteraf niet voor verrassingen komt te staan.
            </p>

            <WizardCta />
          </div>
        </div>

        <GoogleReviewsBar />

        {/* Diepgang — voor Google en voor de twijfelaar */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat zit er bij de prijs inbegrepen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij Uw Ontruimer krijgt u een vaste prijs vooraf. In dat bedrag zit standaard:
            </p>
            <ul className="space-y-3 mb-8">
              {inbegrepen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Deze werkzaamheden worden apart geoffreerd, zodat u nooit voor iets betaalt dat u niet nodig heeft:
            </p>
            <ul className="space-y-3 mb-10">
              {nietInbegrepen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {kruisIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat bepaalt uw prijs?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {factoren.map(({ titel, tekst }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Zo houdt u de kosten laag</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Drie dingen maken in de praktijk het meeste verschil. Leg waardevolle spullen apart: antiek, design, sieraden en goede elektronica kopen wij op of veilen wij voor u, en dat bedrag gaat van de rekening af. Plan daarnaast op tijd — spoed kan altijd, maar kost een toeslag. En bepaal vooraf welke extra&apos;s u echt nodig heeft: moet de vloer er werkelijk uit, of volstaat bezemschoon?
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Meer lezen? In onze kennisbank staan{" "}
              <Link href="/blog/kosten-woningontruiming-verminderen/" className="text-blue-600 hover:underline font-medium">
                praktische manieren om de kosten te verminderen
              </Link>{" "}
              en een uitgebreid artikel over{" "}
              <Link href="/blog/welke-factoren-bepalen-de-prijs-en-duur/" className="text-blue-600 hover:underline font-medium">
                welke factoren de prijs en duur bepalen
              </Link>
              . Gaat het om een nalatenschap, kijk dan bij{" "}
              <Link href="/blog/ontruiming-na-overlijden-kosten/" className="text-blue-600 hover:underline font-medium">
                kosten van een ontruiming na overlijden
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Veelgestelde vragen over de kosten</h2>
            <div className="space-y-5 mb-10">
              {faqItems.map(({ vraag, antwoord }) => (
                <div key={vraag}>
                  <h3 className="text-base font-semibold text-slate-800 mb-1">{vraag}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{antwoord}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Benieuwd wat het bij u kost?</h2>
              <p className="text-slate-500 font-light text-sm mb-6">
                Upload een paar foto&apos;s en ontvang binnen twee minuten een prijsindicatie voor uw eigen woning. Gratis en vrijblijvend — of bel ons gerust op 085-303 58 94.
              </p>
              <WizardCta label="Ontvang direct uw prijsindicatie" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
