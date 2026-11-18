import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";

// BSW, Boedel Sorteer Waardering. Nieuw begrip, bewust zonder zoekwoord: er
// wordt niet op gezocht (Zoekwoordplanner 18 nov 2026). De pagina is voor
// bezoekers die al op de site zijn (menu Diensten, Aanvullende services op de
// stadspagina's, na overlijden, opkoop, executeur). Altijd "indicatie, geen
// taxatie". Zie uwontruimer-agent/docs/voorstel-bsw-boedel-sorteer-waardering.md.

export const metadata: Metadata = {
  title: "BSW, Boedel Sorteer Waardering: de hele inboedel uitgezocht op waarde",
  description:
    "Wij zoeken de hele inboedel met u uit op wat nog waarde heeft en leveren een overzicht met foto, richtprijs en advies per stuk. € 75 per uur per medewerker, verrekend als wij de inboedel kopen.",
  alternates: { canonical: "/bsw/" },
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
    vraag: "Wat kost een BSW?",
    antwoord:
      "€ 75 per uur per medewerker, exclusief btw. Wij komen met twee medewerkers en rekenen minimaal twee uur. Een gewone woning kost twee tot vier manuur, dus € 300 tot € 600. Vooraf krijgt u een schatting van het aantal uren.",
  },
  {
    vraag: "Wordt het bedrag verrekend?",
    antwoord:
      "Ja, als wij de inboedel kopen. Neemt u binnen drie maanden ons bod op de inboedel aan, dan trekken wij het volledige bedrag van de BSW van dat bod af; de uren die wij in het uitzoeken hebben gestoken, zitten dan in de koop. U ziet beide bedragen apart. Een ontruiming is een aparte dienst waarvoor u gewoon betaalt; daar wordt de BSW niet mee verrekend. Doet u niets met ons, dan betaalt u alleen de BSW en houdt u het overzicht.",
  },
  {
    vraag: "Is dit een taxatie?",
    antwoord:
      "Nee. De BSW is een waarde-indicatie op basis van actuele marktprijzen, bedoeld om te beslissen wat u houdt, laat veilen, verkoopt of verrekent. Voor de aangifte erfbelasting of een verzekering heeft u een beëdigd taxateur nodig. Wij verwijzen u desgewenst door.",
  },
  {
    vraag: "Waarom een uurtarief en geen vaste prijs?",
    antwoord:
      "Omdat wij dan verdienen aan zorgvuldigheid en niet aan een lage inschatting. Bij een bod op de inboedel heeft de koper belang bij een laag bedrag; bij de BSW heeft u ons ingehuurd om te vinden wat er is. Een uurtarief is ook eerlijker: een kleine flat kost minder tijd dan een volle eengezinswoning.",
  },
  {
    vraag: "Wat gebeurt er met wat wij vinden?",
    antwoord:
      "Niets zonder uw akkoord. Per stuk staat in het overzicht wat wij adviseren: houden, laten veilen via een gespecialiseerd veilinghuis, verkopen aan een afnemer, of aan ons verkopen. Geld, documenten, medicijnen en gegevensdragers zetten wij apart en overhandigen wij aan u; die worden nooit verrekend.",
  },
  {
    vraag: "Mag een BSW al vóór de verklaring van erfrecht?",
    antwoord:
      "Uitzoeken en vastleggen mag altijd; er gaat niets de deur uit. Verkopen of verrekenen doen wij pas als de opdrachtgever heeft verklaard bevoegd te zijn over de inboedel te beschikken, als erfgenaam, executeur of gemachtigde.",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BSW, Boedel Sorteer Waardering",
  serviceType: "Inboedel uitzoeken op waarde",
  provider: { "@type": "LocalBusiness", name: "Uw Ontruimer", telephone: "+31853035894", url: "https://www.uwontruimer.nl" },
  areaServed: "Nederland",
  description:
    "De hele inboedel uitgezocht op wat nog waarde heeft, met een overzicht per stuk (foto, richtprijs, advies). € 75 per uur per medewerker, verrekend als wij de inboedel kopen.",
  offers: { "@type": "Offer", price: "75", priceCurrency: "EUR", description: "Per uur per medewerker, twee medewerkers, minimaal twee uur. Verrekend als wij de inboedel kopen." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
          <Image
            src="/hero-handdruk-oplevering.jpg"
            alt="Medewerker van Uw Ontruimer neemt de inboedel door met de opdrachtgever"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
            priority
          />
          <div className="absolute inset-0 bg-slate-900/45" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <p className="text-white/85 font-medium text-sm uppercase tracking-widest mb-2">BSW, Boedel Sorteer Waardering</p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Eerst uitzoeken wat waarde heeft,<br />dan pas beslissen
              </h1>
              <p className="text-white/85 font-light mt-3 text-base sm:text-lg">
                De hele inboedel doorgenomen, per stuk een foto, richtprijs en advies.
              </p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "Uurtarief, dus geen belang bij een laag bod",
              "Verrekend als wij de inboedel kopen",
              "Overzicht met foto per stuk",
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Wat is een BSW?</p>

            <p className="text-slate-500 font-light leading-relaxed mb-8">
              In bijna elke inboedel zitten drie tot vijf stukken die los meer opbrengen dan de rest bij elkaar: een gouden ketting
              in een naaidoos, een designstoel op zolder, een verzameling in een kast, gereedschap in de schuur. Wie de woning snel
              leeg wil, ziet dat over het hoofd. Wie een bod op de hele inboedel vraagt, krijgt van de koper geen lijst van wat er
              precies in zat.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Bij een BSW, Boedel Sorteer Waardering, nemen wij de hele inboedel met u door aan de hand van onze lijst met spullen
              die nog waarde hebben: sieraden en edelmetaal, design en antiek, verzamelingen, boeken, audio, gereedschap, kleding en
              wat men meestal vergeet. U krijgt een overzicht met per stuk een foto, een richtprijs en een advies: houden, laten
              veilen, verkopen of aan ons verkopen. Daarna beslist u.
            </p>

            {/* Prijsblok */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-7 mb-12" style={{ backgroundColor: "#f8fafc" }}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-3xl font-semibold text-slate-900 tracking-tight">€ 75</span>
                <span className="text-sm text-slate-500 font-light">per uur per medewerker, exclusief btw</span>
              </div>
              <p className="text-slate-600 font-light text-sm leading-relaxed mb-2">
                Twee medewerkers, minimaal twee uur. Een gewone woning kost twee tot vier manuur. Vooraf krijgt u een schatting.
              </p>
              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                Neemt u binnen drie maanden ons bod op de inboedel aan, dan trekken wij het volledige bedrag van dat bod af.
                U ziet beide bedragen apart. Een ontruiming is een aparte dienst en wordt niet verrekend.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0853035894"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Bel 085-303 58 94 voor een BSW
                </a>
                <Link
                  href="/offerte/?van=bsw"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  Offerte aanvragen en de BSW erbij noemen
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat wij voor u doen</h2>
            <ul className="space-y-3 mb-10">
              {[
                "Wij lopen elke ruimte door in een vaste volgorde, ook zolder, kelder, schuur en de naaidoos",
                "Alles wat waarde kan hebben zetten wij apart en fotograferen wij",
                "Per stuk noteren wij een richtprijs op basis van actuele markt- en veilingprijzen",
                "U krijgt per stuk een advies: houden, laten veilen, verkopen aan een afnemer, of aan ons verkopen",
                "Geld, documenten, medicijnen en gegevensdragers gaan apart en worden aan u overhandigd",
                "Het overzicht ontvangt u per e-mail, bruikbaar voor de erfgenamen of de boedelbeschrijving",
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
                { stap: "1", titel: "U vraagt de BSW aan", tekst: "Telefonisch of via de offerteaanvraag. Wij schatten vooraf het aantal uren aan de hand van de grootte van de woning." },
                { stap: "2", titel: "Wij komen met twee medewerkers", tekst: "Op een moment dat u, of iemand namens u, erbij kunt zijn. Er gaat die dag niets de deur uit." },
                { stap: "3", titel: "U ontvangt het overzicht", tekst: "Binnen twee werkdagen, met foto, richtprijs en advies per stuk, en de gewerkte uren." },
                { stap: "4", titel: "U beslist", tekst: "Houden, laten veilen, verkopen of aan ons verkopen. Neemt u ons bod op de inboedel aan, dan gaat de BSW van dat bod af." },
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Voor wie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Voor nabestaanden die zeker willen weten dat er niets weggaat wat geld waard is, voordat zij over een{" "}
              <Link href="/huis-ontruimen-na-overlijden/" className="text-blue-600 hover:underline">ontruiming na overlijden</Link> beslissen.
              Voor <Link href="/executeur/" className="text-blue-600 hover:underline">executeurs en bewindvoerders</Link> die moeten kunnen
              verantwoorden wat er was. En voor wie twijfelt of hij de inboedel in één keer wil{" "}
              <Link href="/diensten/opkopen-inboedel/" className="text-blue-600 hover:underline">laten opkopen</Link>.
            </p>

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
              <h2 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">BSW aanvragen</h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-5">
                Bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a>, ook in het weekend, of
                vraag een offerte aan en noem daarbij de BSW. Wij nemen binnen één werkdag contact op.
              </p>
              <Link
                href="/offerte/?van=bsw"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
