import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";
import { stadContent } from "@/data/stad-content";

export const metadata: Metadata = {
  title: "Woningontruiming: vaste prijs, bezemschoon opgeleverd",
  description: "Woningontruiming door een erkend ontruimingsbedrijf. Vaste prijs vooraf, schriftelijke opleveringsgarantie, binnen 24 uur beschikbaar. 15+ jaar ervaring, 2.500+ families geholpen.",
  alternates: { canonical: "/diensten/woningontruiming/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-semibold text-slate-900 mt-12 mb-4 tracking-tight">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-500 font-light leading-relaxed mb-5">{children}</p>
);
const Lijst = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mb-6">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
    ))}
  </ul>
);

const FAQ = [
  { v: "Wat kost een woningontruiming?", a: "Een woningontruiming kost gemiddeld tussen de €450 (appartement) en €1.500 (eengezinswoning), afhankelijk van de grootte van de woning, de hoeveelheid inboedel en de bereikbaarheid. Waardevolle spullen verrekenen wij met de prijs. U ontvangt altijd vooraf een vaste prijs; die staat ook na afloop vast." },
  { v: "Hoe snel kan een woningontruiming plaatsvinden?", a: "Na akkoord op de offerte plannen wij de ontruiming meestal binnen 3 tot 5 werkdagen in. Bij spoed, bijvoorbeeld een opleverdatum van de verhuurder of een sleuteloverdracht bij de notaris, kunnen wij binnen 24 uur starten." },
  { v: "Wat gebeurt er met de inboedel?", a: "Waardevolle spullen zoals antiek, kunst, sieraden en gereedschap worden apart gehouden en opgekocht of geveild; de opbrengst gaat van de factuur af. Bruikbare meubels gaan naar kringloop en goede doelen. Wat niet herbruikbaar is, wordt gescheiden en verantwoord afgevoerd." },
  { v: "Moet ik zelf aanwezig zijn bij de ontruiming?", a: "Nee. Veel opdrachtgevers wonen verder weg of hebben er emotioneel geen behoefte aan. Wij regelen de sleuteloverdracht met u, de verhuurder of de notaris en sturen na afloop een fotorapportage van de bezemschone woning." },
  { v: "Wat betekent bezemschoon opleveren?", a: "De woning is volledig leeg, de vloeren zijn geveegd of gezogen en losse vervuiling is verwijderd. Dat is de standaard die verhuurders, woningcorporaties en notarissen bij een oplevering verwachten. Wilt u ook schoonmaak, dieptereiniging of kleine herstelwerkzaamheden, dan nemen wij dat op in de offerte." },
  { v: "Kan ik een huurwoning laten ontruimen vóór de opleverdatum?", a: "Ja, dat is juist de meest voorkomende situatie. Wij stemmen de ontruiming af op de opleverdatum en de eisen van de verhuurder, zodat de eindinspectie in één keer goed gaat. Op verzoek verwijderen wij ook vloeren, gordijnrails, lampen en andere zaken die de verhuurder niet overneemt." },
  { v: "Wat is het verschil tussen een woningontruiming en een verhuizing?", a: "Bij een verhuizing gaat de inboedel mee naar een nieuw adres. Bij een woningontruiming blijft er niets achter: de inboedel wordt verdeeld, verkocht, hergebruikt of afgevoerd en de woning wordt leeg opgeleverd. Een combinatie is mogelijk, bijvoorbeeld een deel verhuizen naar een zorgwoning en de rest ontruimen." },
  { v: "Werken jullie ook voor notarissen, makelaars en woningcorporaties?", a: "Ja. Wij werken dagelijks voor notarissen, executeurs, bewindvoerders, makelaars en woningcorporaties in Noord-Holland, Zuid-Holland en Utrecht, met een vast aanspreekpunt, een fotorapportage en een factuur die direct op de boedel of het dossier kan worden gezet." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ v, a }) => ({ "@type": "Question", name: v, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Woningontruiming",
  serviceType: "Woningontruiming",
  provider: { "@type": "LocalBusiness", name: "Uw Ontruimer", telephone: "+31853035894", url: "https://www.uwontruimer.nl/" },
  areaServed: ["Noord-Holland", "Zuid-Holland", "Utrecht"],
  url: "https://www.uwontruimer.nl/diensten/woningontruiming/",
  description: "Complete woningontruiming met vaste prijs, schriftelijke opleveringsgarantie en bezemschone oplevering.",
};

const stadsNaam = (slug: string) =>
  slug.split("-").map((d) => (["aan", "den", "de", "en", "bij", "op", "het"].includes(d) ? d : d.charAt(0).toUpperCase() + d.slice(1))).join(" ")
    .replace("Den Bosch", "Den Bosch").replace("Ijssel", "IJssel").replace("Ijsselstein", "IJsselstein");

const uitgelicht = ["amsterdam", "amstelveen", "haarlem", "hoofddorp", "zaandam", "purmerend", "den-haag", "leiden", "utrecht", "rotterdam", "alkmaar", "hilversum"];

const breadcrumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.uwontruimer.nl/"}, {"@type": "ListItem", "position": 2, "name": "Woningontruiming", "item": "https://www.uwontruimer.nl/diensten/woningontruiming/"}]};

export default function Page() {
  const alleSteden = Object.keys(stadContent).filter((s) => !uitgelicht.includes(s) && !["noord-holland", "zuid-holland"].includes(s)).sort();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/hero-verhuisdozen-bus.jpg" alt="Woningontruiming door Uw Ontruimer" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woningontruiming:<br />vaste prijs, bezemschoon opgeleverd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "2.500+ families geholpen", "Schriftelijke opleveringsgarantie", "Binnen 24 uur beschikbaar"].map((item) => (
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

            <P>
              Een woning ontruimen is zelden alleen een praktische klus. Vaak komt het na een overlijden, bij een verhuizing naar een zorgwoning of omdat een huurwoning op een vaste datum leeg moet zijn. Uw Ontruimer neemt het hele traject uit handen: van een vaste prijs vooraf tot een bezemschone woning en de sleuteloverdracht. Discreet, snel en met een schriftelijke opleveringsgarantie.
            </P>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <H2>Wat is een woningontruiming?</H2>
            <P>
              Bij een woningontruiming wordt een woning volledig leeggehaald en bezemschoon opgeleverd. Alles wat erin staat — meubels, huisraad, kleding, apparatuur, de inhoud van kelder, zolder, schuur en tuin — wordt gesorteerd, verkocht, hergebruikt of afgevoerd. Of u het nu een huisontruiming, een huis leegmaken of een huis laten ontruimen noemt: het resultaat is een lege woning die klaar is voor oplevering, verkoop of een nieuwe bewoner.
            </P>
            <P>
              Het verschil met een verhuizing is simpel: bij een verhuizing gaat de inboedel mee, bij een ontruiming blijft er niets achter. Vaak combineren we beide — een paar dierbare stukken naar een zorgwoning of naar familie, de rest ontruimen.
            </P>

            <H2>Wanneer laat u een woning ontruimen?</H2>
            <Lijst items={[
              "Na het overlijden van een ouder, partner of familielid — de nalatenschap moet worden afgewikkeld en de woning leeg opgeleverd",
              "Bij verhuizing naar een verzorgingshuis, zorgwoning of kleinere woning",
              "Bij het opleveren van een huurwoning aan de verhuurder of woningcorporatie",
              "Bij verkoop van een koopwoning die leeg moet zijn vóór de overdracht bij de notaris",
              "Bij een vervuilde of verwaarloosde woning waar u zelf niet aan begint",
              "Bij een gedwongen ontruiming via deurwaarder, bewindvoerder of curator",
              "Als notaris, executeur, makelaar of bewindvoerder die een woning moet laten leegmaken",
            ]} />

            <H2>Zo verloopt een woningontruiming bij Uw Ontruimer</H2>
            <P>Wij werken volgens een vast stappenplan, zodat u van tevoren precies weet wat u kunt verwachten en wat het kost.</P>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Prijsindicatie via de AI-wizard of telefonisch", tekst: "Upload een paar foto's in onze gratis AI-wizard en u ontvangt binnen 2 minuten een prijsindicatie. Liever persoonlijk? Bel 085-303 58 94 of plan een vrijblijvende opname aan huis." },
                { stap: "2", titel: "Vaste offerte met opleveringsgarantie", tekst: "U ontvangt een duidelijke offerte met één vaste prijs. Daarin staat schriftelijk dat de woning bezemschoon wordt opgeleverd. Geen nacalculatie, geen verrassingen." },
                { stap: "3", titel: "Waardevolle inboedel apart", tekst: "Antiek, kunst, sieraden, verzamelingen en gereedschap worden geïnventariseerd. Wij kopen op of brengen het naar een veilinghuis; de opbrengst gaat van uw factuur af." },
                { stap: "4", titel: "Ontruiming op de afgesproken dag", tekst: "Ons eigen team komt met eigen bussen, verhuislift en materieel. Een gemiddelde woning is in één dag leeg. Discreet, zonder onnodig verkeer voor de buren." },
                { stap: "5", titel: "Bezemschone oplevering en rapportage", tekst: "De woning wordt bezemschoon opgeleverd. U ontvangt een fotorapportage, en als u wilt regelen wij de sleuteloverdracht met de verhuurder of notaris." },
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

            <H2 id="kosten">Wat kost een woningontruiming?</H2>
            <P>
              De kosten van een woningontruiming hangen af van drie dingen: de grootte van de woning, de hoeveelheid inboedel en de bereikbaarheid (verdieping, lift, parkeren). Als richtlijn:
            </P>
            <ul className="space-y-2 mb-6 text-sm">
              {[
                { type: "Zorgkamer of studio", prijs: "vanaf €350" },
                { type: "Appartement (1–2 slaapkamers)", prijs: "vanaf €450" },
                { type: "Eengezinswoning (3–4 slaapkamers)", prijs: "vanaf €750" },
                { type: "Vrijstaande woning of villa", prijs: "op maat, na opname" },
                { type: "Spoedontruiming binnen 24 uur", prijs: "toeslag van toepassing" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>
            <P>
              Waardevolle spullen verlagen de prijs: wat wij opkopen of veilen, verrekenen we met de factuur. Zo kan een ontruiming met een goed gevulde inboedel aanzienlijk goedkoper uitvallen dan de richtprijs. Alles over tarieven, voorbeelden en wat u zelf kunt doen om de kosten te drukken leest u op <Link href="/kosten-woningontruiming/" className="text-blue-600 hover:underline">kosten woningontruiming</Link>.
            </P>

            <H2>Woningontruiming na overlijden</H2>
            <P>
              De meeste ontruimingen die wij doen, zijn na een overlijden. Dan komt er veel tegelijk op nabestaanden af: de nalatenschap, de notaris, een opleverdatum en een huis vol herinneringen. Wij werken daarom met rust en respect, houden persoonlijke documenten, foto's en waardevolle stukken apart en stemmen af met de executeur of notaris. Lees meer over <Link href="/huis-ontruimen-na-overlijden/" className="text-blue-600 hover:underline">een huis ontruimen na overlijden</Link>: wie is verantwoordelijk, wat mag u weggooien en hoe gaat het met de nalatenschap.
            </P>

            <H2>Huurwoning opleveren aan verhuurder of corporatie</H2>
            <P>
              Een huurwoning moet op een vaste datum leeg en in de afgesproken staat worden opgeleverd. Wij kennen de eisen van woningcorporaties en particuliere verhuurders: vloeren eruit of juist laten liggen, gordijnrails, lampen, behang, gaatjes dichten. Wij ontruimen de woning en voeren op verzoek de kleine herstelwerkzaamheden uit, zodat de eindinspectie in één keer goed gaat. Zie ook <Link href="/oplevering-huurwoning/" className="text-blue-600 hover:underline">oplevering huurwoning</Link>.
            </P>

            <H2>Spoedontruiming binnen 24 uur</H2>
            <P>
              Soms is er geen tijd: de sleutels moeten morgen worden ingeleverd, de overdracht bij de notaris staat gepland of de verhuurder heeft een deadline gesteld. Dan starten wij binnen 24 uur. Onze <Link href="/diensten/spoedontruiming/" className="text-blue-600 hover:underline">spoedontruiming</Link> werkt met hetzelfde team, dezelfde garantie en dezelfde vaste prijs — alleen sneller.
            </P>

            <H2>Vervuilde of verwaarloosde woning</H2>
            <P>
              Een woning die jaren niet is bijgehouden, een hoarding-situatie of vervuiling na een overlijden vraagt om een andere aanpak: beschermingsmiddelen, gescheiden afvoer, reiniging en waar nodig desinfectie. Wij doen ontruiming en schoonmaak in één hand, zonder oordeel. Lees meer over <Link href="/vervuilde-woning-ontruimen/" className="text-blue-600 hover:underline">een vervuilde woning ontruimen</Link>.
            </P>

            <H2>Zelf een huis leegmaken of laten ontruimen?</H2>
            <P>
              Zelf een woning leegmaken kan, maar kost gemiddeld meerdere weekenden, een gehuurde bus, meerdere ritten naar de milieustraat en veel tillen. Grote stukken, een kelder of zolder vol en een deadline maken het snel onhaalbaar. Vaak is laten ontruimen per saldo niet duurder: wij verrekenen waardevolle inboedel, voeren in één keer af en u heeft geen stortkosten en geen vrije dagen nodig. In <Link href="/blog/zelf-woning-ontruimen-of-uitbesteden/" className="text-blue-600 hover:underline">zelf ontruimen of uitbesteden</Link> zetten we beide opties eerlijk naast elkaar.
            </P>

            <H2>Eigen team, eigen materieel</H2>
            <P>
              Wij werken niet met losse onderaannemers. Ons eigen team komt met eigen bussen, een verhuislift voor hogere verdiepingen zonder lift, steekwagens, dekens en gereedschap om keukens, vloeren en kasten te demonteren. Dat maakt ons snel, voorspelbaar en zorgvuldig met het pand en het trappenhuis.
            </P>

            <H2>Waarom Uw Ontruimer</H2>
            <Lijst items={[
              "Meer dan 15 jaar ervaring en 2.500+ families geholpen",
              "Vaste prijs vooraf en een schriftelijke opleveringsgarantie",
              "Waardevolle inboedel wordt verrekend met de factuur",
              "Binnen 24 uur beschikbaar voor spoed",
              "Discreet en respectvol, ook na overlijden en bij vervuilde woningen",
              "Duurzaam: hergebruik via kringloop en goede doelen, gescheiden afvoer",
              "Vast aanspreekpunt voor notarissen, makelaars, bewindvoerders en corporaties",
            ]} />

            <H2>Woningontruiming in uw regio</H2>
            <P>
              Uw Ontruimer werkt vanuit Amsterdam in heel Noord-Holland, Zuid-Holland en Utrecht. Bekijk de pagina van uw gemeente voor lokale informatie:
            </P>
            <div className="flex flex-wrap gap-2 mb-4">
              {uitgelicht.map((slug) => (
                <Link key={slug} href={`/woningontruiming-${slug}/`} className="inline-flex items-center bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Woningontruiming {stadsNaam(slug)}
                </Link>
              ))}
            </div>
            <details className="mb-8">
              <summary className="cursor-pointer text-sm text-blue-600 hover:underline">Alle gemeenten in ons werkgebied</summary>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {alleSteden.map((slug) => (
                  <Link key={slug} href={`/woningontruiming-${slug}/`} className="text-sm text-slate-500 hover:text-blue-700 hover:underline">{stadsNaam(slug)}</Link>
                ))}
              </div>
            </details>

            <H2>Veelgestelde vragen over woningontruiming</H2>
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Klaar voor de volgende stap?</h2>
              <p className="text-slate-500 font-light text-sm mb-6">Ontvang binnen 2 minuten een vrijblijvende prijsindicatie via onze AI-wizard, of bel direct voor een afspraak.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>Start de AI-wizard →</a>
                <a href="tel:0853035894" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl transition-colors text-base">Bel 085-303 58 94</a>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
