import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";
import { PRIJSJAAR } from "@/data/prijzen";

export const metadata: Metadata = {
  title: "Woning ontruimen als executeur: boedelbeschrijving, zuivere aanvaarding en oplevering",
  description: "Bent u executeur of erfgenaam en moet de woning leeg? Wat mag u vóór de verklaring van erfrecht, hoe voorkomt u zuivere aanvaarding, en wat wij voor de boedel vastleggen: foto-inventarisatie, overdrachtsbewijs, één bod op de inboedel, factuur op naam van de nalatenschap.",
  alternates: { canonical: "/executeur/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 tracking-tight">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-500 font-light leading-relaxed mb-5">{children}</p>
);
const Lijst = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-3 mb-6">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
    ))}
  </ul>
);

const FAQ = [
  { v: "Mag ik als executeur de woning laten ontruimen vóór de verklaring van erfrecht?", a: "U mag de nalatenschap beheren: de woning afsluiten, verzekeren, bederfelijke zaken weghalen en een inventarisatie laten maken. Wacht met verkopen, weggeven of afvoeren van de inboedel tot de verklaring van erfrecht er is en de erfgenamen hun keuze hebben gemaakt. Dringt de verhuurder of de koper aan, overleg dan met de notaris; wij kunnen dan binnen 24 uur starten." },
  { v: "Kan ik door het leeghalen van de woning de erfenis zuiver aanvaarden?", a: "Sinds de Wet bescherming erfgenamen tegen schulden (2016) leidt alleen een handeling die schuldeisers benadeelt tot zuivere aanvaarding: inboedel verkopen, weggeven of voor uzelf houden. Gewoon beheer, zoals afsluiten, verzekeren, inventariseren en waardeloze zaken afvoeren, telt niet. Bij twijfel over schulden: eerst beneficiair aanvaarden, dan ontruimen." },
  { v: "Wat heeft een executeur nodig voor de boedelbeschrijving?", a: "Een overzicht van wat er in de woning staat met een eerlijke waarde. Wij maken vóór de ontruiming een foto-inventarisatie per ruimte en leggen ons bod op de complete inboedel schriftelijk vast. Dat document kunt u direct gebruiken voor de boedelbeschrijving en de aangifte erfbelasting." },
  { v: "Wie betaalt de ontruiming?", a: "De nalatenschap. Wij factureren op naam van de boedel, ter attentie van de executeur of de notaris, zodat de kosten als schuld van de nalatenschap worden meegenomen. Is er een bod op de inboedel, dan verrekenen wij dat op dezelfde factuur." },
  { v: "Wat gebeurt er met documenten, sieraden en persoonlijke zaken?", a: "Die zetten wij apart en dragen wij over aan de executeur tegen een getekend overdrachtsbewijs met foto's. Administratie, post en bankpassen gaan nooit in de afvoer. U bepaalt vooraf wat bewaard moet blijven; twijfelen wij, dan bewaren wij het." },
  { v: "Hoe snel kan de woning leeg zijn?", a: "Een gemiddelde woning doen wij in één dag. Bij een opleverdatum van de corporatie of een overdracht bij de notaris plannen wij de ontruiming in de week ervoor; bij spoed starten wij binnen 24 uur. U hoeft er niet bij te zijn; wij regelen de sleutels en de eindinspectie." },
  { v: "Werken jullie ook voor een vereffenaar of de gemeente?", a: "Ja. Bij een beneficiair aanvaarde of verworpen nalatenschap werken wij in opdracht van de vereffenaar, de notaris of de gemeente, met dezelfde vastlegging en factuur op naam van de boedel." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ v, a }) => ({ "@type": "Question", name: v, acceptedAnswer: { "@type": "Answer", text: a } })),
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Woningontruiming voor executeurs",
  serviceType: "Woningontruiming nalatenschap",
  provider: { "@type": "LocalBusiness", name: "Uw Ontruimer", telephone: "+31853035894", url: "https://www.uwontruimer.nl/" },
  areaServed: ["Noord-Holland", "Zuid-Holland", "Utrecht", "Flevoland"],
  url: "https://www.uwontruimer.nl/executeur/",
  description: "Ontruiming van de woning uit een nalatenschap in opdracht van de executeur, erfgenamen, vereffenaar of notaris: foto-inventarisatie, overdrachtsbewijs persoonlijke zaken, één bod op de inboedel, factuur op naam van de boedel, bezemschone oplevering met fotorapportage.",
};
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uwontruimer.nl/" },
  { "@type": "ListItem", position: 2, name: "Huis ontruimen na overlijden", item: "https://www.uwontruimer.nl/huis-ontruimen-na-overlijden/" },
  { "@type": "ListItem", position: 3, name: "Voor executeurs", item: "https://www.uwontruimer.nl/executeur/" },
] };

const CtaBox = () => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
    <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Een nalatenschap met een woning die leeg moet?</h2>
    <p className="text-slate-500 font-light text-sm mb-6">Stuur foto's via de wizard voor een vaste prijs met opleveringsgarantie, of bel voor een kort overleg over de termijnen.</p>
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>Start de AI-wizard →</a>
      <a href="tel:0853035894" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl transition-colors text-base">Bel 085-303 58 94</a>
    </div>
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {["Vaste prijs, factuur op naam van de boedel", "Foto-inventarisatie vooraf", "Binnen 24 uur mogelijk"].map((item) => (
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/hero-handdruk-oplevering.jpg" alt="Woning ontruimen als executeur" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woning ontruimen als executeur:<br />wat u mag, wat u moet vastleggen en wat wij regelen
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Factuur op naam van de boedel", "Foto-inventarisatie en overdrachtsbewijs", "Vaste prijs, opleveringsgarantie", "Dagelijks voor notarissen en executeurs"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Voor executeurs en erfgenamen</p>

            <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
              Als executeur beheert u de nalatenschap en moet u de woning leeg opleveren aan de verhuurder of de koper. Uw Ontruimer werkt daarbij als verlengstuk van de executeur: wij leggen vóór de ontruiming vast wat er staat, dragen persoonlijke zaken over tegen bewijs, doen één schriftelijk bod op de inboedel en factureren op naam van de boedel. Vaste prijs, schriftelijke opleveringsgarantie, in Noord-Holland, Zuid-Holland, Utrecht en Flevoland.
            </p>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>Vaste prijs aanvragen →</a>
              <p className="text-xs text-slate-400 mt-2">Foto's uploaden, prijs binnen 2 minuten · Geen verplichtingen</p>
            </div>

            <H2>Wat mag u doen vóór de verklaring van erfrecht?</H2>
            <P>
              Direct na het overlijden mag u de nalatenschap beheren: de woning afsluiten, de verzekering doorgeven, bederfelijke zaken weghalen, de post veiligstellen en een inventarisatie laten maken. Dat zijn beheershandelingen en die brengen niemand in de problemen. Wacht met verkopen, weggeven of afvoeren van de inboedel tot de notaris de verklaring van erfrecht heeft afgegeven en de erfgenamen hebben gekozen hoe zij aanvaarden.
            </P>
            <Lijst items={[
              <><b>Wel:</b> afsluiten, verzekeren, inventariseren met foto's, waardeloze of bederfelijke zaken afvoeren, huur en abonnementen opzeggen.</>,
              <><b>Nog niet:</b> inboedel verkopen, weggeven aan familie of spullen voor uzelf meenemen. Dat zijn beschikkingshandelingen.</>,
              <><b>Bij spoed</b> (oplevertermijn van de corporatie, overdracht bij de notaris): overleg met de notaris; wij kunnen binnen 24 uur starten zodra er groen licht is.</>,
            ]} />

            <H2>Zuivere aanvaarding: wat u door het leeghalen kunt veroorzaken</H2>
            <P>
              Een erfgenaam die zuiver aanvaardt, wordt met zijn eigen vermogen aansprakelijk voor de schulden van de overledene. Vroeger kon dat al gebeuren door spullen uit de woning te halen. Sinds de Wet bescherming erfgenamen tegen schulden van 2016 geldt dat alleen nog voor handelingen die schuldeisers benadelen: de inboedel verkopen, wegschenken of zelf houden. Gewoon beheer, zoals opruimen en waardeloze zaken afvoeren, leidt niet tot zuivere aanvaarding.
            </P>
            <P>
              Zijn er mogelijk schulden, dan is de veilige volgorde: eerst beneficiair aanvaarden bij de rechtbank, dan de inboedel laten beoordelen en pas daarna ontruimen. Blijkt na een zuivere aanvaarding alsnog een onverwachte schuld, dan kunt u binnen drie maanden de kantonrechter vragen om alsnog beneficiair te mogen aanvaarden. Wij houden hier rekening mee: ons bod op de inboedel is schriftelijk en wordt pas uitgevoerd na akkoord van de executeur of alle erfgenamen.
            </P>

            <H2>Stappenplan voor de executeur bij een woning</H2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Woning veiligstellen", tekst: "Sleutels verzamelen, afsluiten, verzekeraar en verhuurder informeren, post omleiden. Noteer wie welke sleutel heeft." },
                { stap: "2", titel: "Inventarisatie en boedelbeschrijving", tekst: "Als executeur bent u verplicht een boedelbeschrijving te maken. Wij leveren daarvoor een foto-inventarisatie per ruimte en een schriftelijk bod op de complete inboedel." },
                { stap: "3", titel: "Verklaring van erfrecht en keuze van de erfgenamen", tekst: "De notaris stelt vast wie erft en of u bevoegd bent. Erfgenamen kiezen: zuiver aanvaarden, beneficiair aanvaarden of verwerpen." },
                { stap: "4", titel: "Persoonlijke zaken en verdeling", tekst: "Documenten, sieraden, foto's en herinneringen gaan naar de executeur tegen getekend overdrachtsbewijs. Spreek af wie wat uit de inboedel krijgt." },
                { stap: "5", titel: "Huur opzeggen of verkoop voorbereiden", tekst: "Bij een huurwoning loopt de huur door tot de oplevering; bij verkoop moet de woning leeg zijn bij de overdracht. Wij plannen de ontruiming op die datum." },
                { stap: "6", titel: "Ontruiming, oplevering en factuur", tekst: "Wij halen leeg, leveren bezemschoon op met fotorapportage, wonen de eindinspectie bij en factureren op naam van de boedel, met het bod op de inboedel verrekend." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <H2>Wat wij voor de boedel vastleggen</H2>
            <P>Een executeur moet achteraf kunnen laten zien wat er was, wat ermee is gebeurd en wat het heeft opgeleverd. Daarom leveren wij bij elke nalatenschap:</P>
            <Lijst items={[
              <><b>Foto-inventarisatie vooraf</b> per ruimte, bruikbaar voor de boedelbeschrijving en de aangifte erfbelasting.</>,
              <><b>Eén schriftelijk bod op de complete inboedel</b>, verrekend met de ontruimingsprijs. Is het bod hoger dan de kosten, dan betalen wij het verschil uit aan de boedel.</>,
              <><b>Overdrachtsbewijs</b> voor documenten, sieraden, administratie en persoonlijke zaken, getekend en met foto's.</>,
              <><b>Factuur op naam van de nalatenschap</b>, ter attentie van de executeur of het notariskantoor, zodat de kosten als schuld van de boedel meelopen.</>,
              <><b>Fotorapportage van de oplevering</b> en aanwezigheid bij de vooropname en eindinspectie van de verhuurder; u hoeft er niet bij te zijn.</>,
              <><b>Sleutelbeheer</b> via de notaris, de verhuurder of de makelaar.</>,
            ]} />
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 mb-10">
              <p className="text-slate-700 font-light leading-relaxed">
                Staat er een volledige inboedel in de woning? Wij doen één bod op het geheel en leveren leeg op; bij een waardevolle inboedel betalen wij de boedel uit. <Link href="/diensten/opkopen-inboedel/" className="text-blue-600 hover:underline">Zo werkt inboedel opkopen bij Uw Ontruimer →</Link>
              </p>
            </div>

            <H2>Wat kost het, en wie betaalt?</H2>
            <P>
              Een woning uit een nalatenschap ontruimen kost in {PRIJSJAAR} meestal tussen € 600 en € 2.000, afhankelijk van grootte en inboedel. De kosten komen ten laste van de nalatenschap; de factuur staat op naam van de boedel. Het bod op de inboedel gaat ervan af. De richtprijzen per woningtype staan op de pagina <Link href="/huis-ontruimen-na-overlijden/" className="text-blue-600 hover:underline">huis ontruimen na overlijden</Link>.
            </P>

            <H2>Samenwerking met notariskantoren en vereffenaars</H2>
            <P>
              Wikkelt u als notaris, professioneel executeur of vereffenaar regelmatig nalatenschappen af, dan krijgt u bij ons een vast aanspreekpunt, dezelfde vastlegging bij elke woning en planning op de termijnen van de corporatie of de overdracht. Lees ook de pagina <Link href="/notaris/" className="text-blue-600 hover:underline">voor notarissen</Link> en <Link href="/bewindvoerder/" className="text-blue-600 hover:underline">voor bewindvoerders</Link>.
            </P>
            <P>
              Lees verder: <Link href="/blog/inboedel-verkopen-na-overlijden/" className="text-blue-600 hover:underline">inboedel verkopen na overlijden, wat erfgenamen vooraf moeten weten</Link>.
            </P>

            <H2>Veelgestelde vragen van executeurs</H2>
            <div className="divide-y divide-slate-100 mb-10">
              {FAQ.map(({ v, a }) => (
                <details key={v} data-faq className="group py-3">
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
