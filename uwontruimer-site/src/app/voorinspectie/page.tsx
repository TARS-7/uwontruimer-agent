import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import VoorinspectieForm from "@/components/VoorinspectieForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Voorinspectie huurwoning — wij regelen de oplevering met de woningbouw",
  description:
    "Huurwoning opleveren? Wij wonen de voorinspectie bij, stemmen af met de woningcorporatie en zetten de herstellijst om in één vaste prijs. €150, wordt verrekend met de ontruiming. U hoeft er niet bij te zijn.",
  alternates: { canonical: "/voorinspectie/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const faqItems = [
  {
    vraag: "Wat kost de voorinspectie?",
    antwoord:
      "€150 inclusief btw. Boekt u daarna de ontruiming bij ons, dan wordt dit bedrag in mindering gebracht op de offerte. Kiest u voor een andere partij, dan blijft het bij die €150 en bent u nergens aan gebonden.",
  },
  {
    vraag: "Moet ik er zelf bij zijn?",
    antwoord:
      "Nee. Woningcorporaties geven meestal een tijdslot van twee tot vier uur waarin de opzichter langskomt. Wij zijn er namens u aanwezig, leggen de woning vooraf fotografisch vast en zorgen dat de opname klopt. U hoeft geen vrij te nemen of over te komen.",
  },
  {
    vraag: "Wij wonen niet in de buurt — kan dat?",
    antwoord:
      "Juist dan is dit bedoeld. Veel nabestaanden wonen elders in het land of in het buitenland. Wij regelen de afstemming met de corporatie, u hoort van ons wat er moet gebeuren en wat het kost.",
  },
  {
    vraag: "Wat gebeurt er na de voorinspectie?",
    antwoord:
      "U ontvangt één heldere offerte waarin de ontruiming en de herstelpunten van de opzichter samen zijn verwerkt. Geen losse posten die later alsnog opduiken, en geen verrassingen bij de eindinspectie.",
  },
  {
    vraag: "Is het herstelwerk bij de €150 inbegrepen?",
    antwoord:
      "Nee. De €150 dekt de begeleiding: de voorinspectie bijwonen, de afstemming met de corporatie en het omzetten van de herstellijst in een vaste prijs. Het herstelwerk zelf staat apart in de offerte, zodat u precies ziet waarvoor u betaalt.",
  },
  {
    vraag: "Waarom is dit goedkoper dan de woningbouw het laten doen?",
    antwoord:
      "Laat u de woning niet op orde brengen, dan voert de corporatie het herstel zelf uit en belast dat door tegen haar eigen tarieven. In de praktijk ligt dat bedrag vrijwel altijd hoger dan wanneer wij het uitvoeren. Bij de voorinspectie vragen wij op wat de corporatie zou doorbelasten, zodat u beide bedragen naast elkaar heeft.",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
          <Image
            src="/hero-handdruk-oplevering.jpg"
            alt="Oplevering van een huurwoning aan de woningcorporatie"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            priority
          />
          <div className="absolute inset-0 bg-slate-900/45" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Wij regelen de oplevering<br />met de woningbouw
              </h1>
              <p className="text-white/85 font-light mt-3 text-base sm:text-lg">
                U hoeft er niet bij te zijn.
              </p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "15+ jaar ervaring met corporaties",
              "Schriftelijke opleveringsgarantie",
              "Eén vaste prijs na de inspectie",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <GoogleReviewsBar />

        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Voorinspectie huurwoning</p>

            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Bij het opleveren van een huurwoning komt een opzichter van de woningcorporatie langs voor de voorinspectie.
              Hij bepaalt wat er hersteld moet worden voordat u de sleutels kunt inleveren. Dat gesprek bepaalt uw rekening —
              en het wordt meestal gevoerd door iemand die zo&apos;n inspectie één keer in zijn leven meemaakt, tegenover iemand
              die het elke week doet.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Wij staan er wekelijks. Wij wonen de voorinspectie namens u bij, leggen de woning vooraf fotografisch vast,
              stemmen af met de corporatie en zetten de herstellijst om in één vaste prijs.
            </p>

            {/* Prijsblok + formulier */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-7 mb-12" style={{ backgroundColor: "#f8fafc" }}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-3xl font-semibold text-slate-900 tracking-tight">€150</span>
                <span className="text-sm text-slate-500 font-light">inclusief btw</span>
              </div>
              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                Boekt u de ontruiming bij ons, dan wordt dit bedrag in mindering gebracht op de offerte.
                Kiest u voor een andere partij, dan bent u nergens aan gebonden.
              </p>
              <VoorinspectieForm />
            </div>

            <div className="rounded-xl border border-slate-200 p-5 mb-10 bg-white">
              <p className="font-medium text-slate-800 mb-2">Is de vooropname al geweest?</p>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-3">
                Heeft u het rapport van de vooropname al binnen, met de bedragen die de woningbouw rekent?
                Dan hoeft u dit niet af te nemen. Stuur ons die vooropname, dan rekenen wij dezelfde
                werkzaamheden door tegen onze prijs — gratis en vrijblijvend.
              </p>
              <a href="/vooropname-uploaden/?van=voorinspectie" className="text-blue-600 font-medium text-sm hover:underline">
                Vooropname uploaden voor een goedkoper aanbod →
              </a>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat wij voor u doen</h2>
            <ul className="space-y-3 mb-10">
              {[
                "Wij zijn aanwezig tijdens het tijdslot dat de corporatie opgeeft — vaak twee tot vier uur",
                "De woning wordt vóór aanvang fotografisch vastgelegd, zodat de staat aantoonbaar is",
                "Wij voeren het gesprek met de opzichter en tekenen de opnamestaat voor gezien",
                "Wij vragen op wat de corporatie zelf zou doorbelasten, zodat u kunt vergelijken",
                "U ontvangt één offerte waarin ontruiming en herstelpunten samen zijn verwerkt",
                "Bij de eindinspectie zijn wij er opnieuw bij en dragen de sleutels over",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Zo gaat het in zijn werk</h2>
            <ol className="space-y-4 mb-12">
              {[
                { stap: "1", titel: "U vraagt de voorinspectie aan", tekst: "Via het formulier hierboven of telefonisch op 085-303 58 94. Wij nemen binnen één werkdag contact op." },
                { stap: "2", titel: "Wij plannen af met de corporatie", tekst: "Wij stemmen het inspectiemoment rechtstreeks met de opzichter af. U hoeft geen vrij te nemen." },
                { stap: "3", titel: "Voorinspectie en opname", tekst: "Wij zijn erbij, leggen de woning vast en nemen de herstellijst door met de opzichter." },
                { stap: "4", titel: "Eén offerte, één vaste prijs", tekst: "U ontvangt de ontruiming en de herstelpunten in één offerte, met de €150 er alvast van afgetrokken." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">{titel}</p>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight">Veelgestelde vragen</h2>
            <div className="space-y-4 mb-12">
              {faqItems.map(({ vraag, antwoord }) => (
                <div key={vraag} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-2">{vraag}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{antwoord}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 sm:p-7" style={{ backgroundColor: "#f8fafc" }}>
              <h2 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Voorinspectie aanvragen</h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-5">
                Laat uw gegevens achter, dan nemen wij binnen één werkdag contact op om de inspectie in te plannen.
                Liever direct iemand spreken? Bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a>.
              </p>
              <VoorinspectieForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
