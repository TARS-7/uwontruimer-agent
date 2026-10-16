import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spoedontruiming: binnen 24 uur leeg en bezemschoon",
  description: "Spoedontruiming nodig? Uw Ontruimer start binnen 24 uur: woning, zorgkamer of bedrijfspand leeg en bezemschoon opgeleverd. Vaste prijs, offerte binnen het uur, 15+ jaar ervaring. Bel 085-303 58 94.",
  alternates: { canonical: "/diensten/spoedontruiming/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const FAQ = [
  { v: "Hoe snel kan een spoedontruiming starten?", a: "Binnen 24 uur na uw akkoord, in de regio Amsterdam, Haarlem, Den Haag, Leiden en Utrecht vaak nog dezelfde dag. Bel 085-303 58 94; wij beoordelen de situatie direct en sturen binnen het uur een vaste prijs." },
  { v: "Wat kost een spoedontruiming?", a: "Dezelfde richtprijzen als een reguliere ontruiming (zorgkamer vanaf €350, appartement vanaf €450, eengezinswoning vanaf €750) plus een spoedtoeslag voor inzet buiten de planning. U krijgt vooraf één vaste prijs; die staat ook achteraf vast." },
  { v: "Is een inspectie ter plaatse nodig?", a: "Nee. Op basis van foto's via de AI-wizard of een korte beschrijving aan de telefoon maken wij direct een vaste offerte. Zo verliezen we geen dag aan een bezoek vooraf." },
  { v: "Kunnen jullie een zorgkamer binnen 24 uur leeghalen?", a: "Ja. Zorginstellingen hanteren na een overlijden vaak een termijn van 24 tot 72 uur. Wij halen de kamer leeg, zetten persoonlijke spullen apart voor de familie en leveren bezemschoon op aan de instelling." },
  { v: "Werken jullie ook voor deurwaarders, verhuurders en curatoren?", a: "Ja. Bij gerechtelijke ontruimingen, faillissementen en opleveringen met een harde deadline werken wij met een vast aanspreekpunt, fotorapportage en opslag van inboedel als dat vereist is." },
  { v: "Wat gebeurt er met waardevolle spullen bij spoed?", a: "Ook bij spoed sorteren wij eerst: waardevolle stukken en persoonlijke documenten gaan apart en worden na afloop met u afgestemd. De opbrengst van wat wij opkopen of veilen gaat van de factuur af." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ v, a }) => ({ "@type": "Question", name: v, acceptedAnswer: { "@type": "Answer", text: a } })),
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spoedontruiming",
  serviceType: "Spoedontruiming",
  provider: { "@type": "LocalBusiness", name: "Uw Ontruimer", telephone: "+31853035894", url: "https://www.uwontruimer.nl/" },
  areaServed: ["Noord-Holland", "Zuid-Holland", "Utrecht"],
  url: "https://www.uwontruimer.nl/diensten/spoedontruiming/",
  description: "Ontruiming van woning, zorgkamer of bedrijfspand binnen 24 uur, met vaste prijs en bezemschone oplevering.",
};

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

const breadcrumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.uwontruimer.nl/"}, {"@type": "ListItem", "position": 2, "name": "Woningontruiming", "item": "https://www.uwontruimer.nl/diensten/woningontruiming/"}, {"@type": "ListItem", "position": 3, "name": "Spoedontruiming", "item": "https://www.uwontruimer.nl/diensten/spoedontruiming/"}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/hero-verhuisdozen-bus.jpg" alt="Spoedontruiming binnen 24 uur" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Spoedontruiming:<br />binnen 24 uur leeg en bezemschoon
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
                "Calamiteiten: brand- of waterschade waarbij pand snel leeg moet",
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

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost een spoedontruiming?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een spoedontruiming kost de reguliere prijs van de ontruiming plus een spoedtoeslag voor inzet buiten de planning. Als richtlijn: zorgkamer vanaf €350, appartement vanaf €450, eengezinswoning vanaf €750, exclusief toeslag. Waardevolle inboedel verrekenen wij ook bij spoed met de factuur. U ontvangt vooraf één vaste prijs. Alles over onze reguliere aanpak en tarieven leest u op <Link href="/diensten/woningontruiming/" className="text-blue-600 hover:underline">woningontruiming</Link>; gaat het om een overlijden, lees dan <Link href="/huis-ontruimen-na-overlijden/" className="text-blue-600 hover:underline">huis ontruimen na overlijden</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Veelgestelde vragen over spoedontruiming</h2>
            <div className="divide-y divide-slate-100 mb-10">
              {FAQ.map(({ v, a }) => (
                <details key={v} className="group py-3">
                  <summary className="cursor-pointer font-medium text-slate-800 list-none flex justify-between items-center gap-4">
                    {v}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-slate-500 font-light leading-relaxed mt-2 text-sm">{a}</p>
                </details>
              ))}
            </div>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
