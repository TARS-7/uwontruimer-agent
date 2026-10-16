import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Huis ontruimen na overlijden: stappenplan, kosten en wie regelt wat",
  description: "Woning ontruimen na overlijden? Wat moet u regelen, wie is verantwoordelijk, wanneer mag u beginnen en wat kost het. Uw Ontruimer ontzorgt nabestaanden, executeurs en notarissen — discreet, met vaste prijs en opleveringsgarantie.",
  alternates: { canonical: "/huis-ontruimen-na-overlijden/" },
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
  { v: "Wie is verantwoordelijk voor het ontruimen van een huis na overlijden?", a: "De erfgenamen, of de executeur als die in het testament is benoemd. Bij een huurwoning loopt de huurovereenkomst na het overlijden door op naam van de erfgenamen; zij moeten opzeggen en de woning leeg opleveren. Bij een koopwoning moet de woning leeg zijn bij de overdracht. Een bewindvoerder of mentor stopt bij overlijden; die regelt de ontruiming niet meer." },
  { v: "Wanneer mag ik beginnen met ontruimen na een overlijden?", a: "Zodra duidelijk is wie de erfgenamen zijn en zij het eens zijn, meestal na de verklaring van erfrecht van de notaris. Heeft u de nalatenschap nog niet aanvaard of beneficiair aanvaard, overleg dan eerst met de notaris voordat u spullen verkoopt of weggooit. Persoonlijke documenten, post en administratie houden wij altijd apart." },
  { v: "Hoe snel moet een huurwoning na overlijden leeg zijn?", a: "De huur loopt door tot de woning is opgezegd en opgeleverd. De meeste corporaties hanteren één maand opzegtermijn, soms met wat coulance voor nabestaanden. Daarna moet de woning leeg en in de afgesproken staat zijn. Wij plannen de ontruiming op de opleverdatum en kunnen binnen 24 uur starten als het moet." },
  { v: "Wat kost een huis ontruimen na overlijden?", a: "Als richtlijn: een zorgkamer of studio vanaf €350, een appartement vanaf €450 en een eengezinswoning vanaf €750. Waardevolle inboedel verrekenen wij met de factuur, waardoor het bedrag vaak lager uitvalt. De kosten komen ten laste van de nalatenschap en zijn aftrekbaar voor de erfbelasting als schuld van de boedel." },
  { v: "Wat gebeurt er met de persoonlijke spullen en waardevolle stukken?", a: "Foto's, documenten, sieraden en herinneringen zetten wij apart en overhandigen wij aan de nabestaanden. Antiek, kunst en verzamelingen laten wij taxeren; wij kopen op of brengen het naar een veilinghuis en de opbrengst gaat van de factuur af. Bruikbare meubels gaan naar kringloop en goede doelen." },
  { v: "Moet ik erbij zijn tijdens de ontruiming?", a: "Nee. Veel nabestaanden wonen ver weg of willen de woning liever niet meer leeg zien. Wij regelen de sleutels, wonen de eindinspectie met de verhuurder bij en sturen een fotorapportage. U bepaalt vooraf wat bewaard moet blijven; de rest doen wij." },
  { v: "Kunnen jullie ook de oplevering met de woningcorporatie regelen?", a: "Ja. Wij zijn aanwezig bij de vooropname en de eindinspectie, voeren de punten uit het inspectierapport uit (vloeren, gaatjes, bezemschoon) en leveren op. Heeft u het rapport van de corporatie al, dan zetten wij onze prijs er post voor post naast." },
  { v: "Werken jullie samen met notarissen en executeurs?", a: "Dagelijks. Wij leveren een inventarisatie, taxatie van waardevolle stukken, een fotorapportage en een factuur op naam van de boedel, zodat de afwikkeling van de nalatenschap compleet is." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ v, a }) => ({ "@type": "Question", name: v, acceptedAnswer: { "@type": "Answer", text: a } })),
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Woningontruiming na overlijden",
  serviceType: "Woningontruiming na overlijden",
  provider: { "@type": "LocalBusiness", name: "Uw Ontruimer", telephone: "+31853035894", url: "https://www.uwontruimer.nl/" },
  areaServed: ["Noord-Holland", "Zuid-Holland", "Utrecht"],
  url: "https://www.uwontruimer.nl/huis-ontruimen-na-overlijden/",
  description: "Discrete ontruiming van de woning van een overledene, met inventarisatie, taxatie, bezemschone oplevering en afstemming met erfgenamen, executeur en notaris.",
};

const CtaBox = () => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
    <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Hulp nodig bij de ontruiming?</h2>
    <p className="text-slate-500 font-light text-sm mb-6">Ontvang binnen 2 minuten een vrijblijvende prijsindicatie, of bel voor een rustig gesprek over wat er nodig is.</p>
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
);

const breadcrumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.uwontruimer.nl/"}, {"@type": "ListItem", "position": 2, "name": "Woningontruiming", "item": "https://www.uwontruimer.nl/diensten/woningontruiming/"}, {"@type": "ListItem", "position": 3, "name": "Huis ontruimen na overlijden", "item": "https://www.uwontruimer.nl/huis-ontruimen-na-overlijden/"}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/appartement-leeg.jpg" alt="Huis ontruimen na overlijden" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Huis ontruimen na overlijden:<br />stap voor stap, met rust en respect
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "2.500+ families geholpen", "Discreet en respectvol", "Schriftelijke opleveringsgarantie"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming na overlijden</p>

            <P>
              Na het overlijden van een ouder, partner of familielid komt er veel tegelijk op u af. Naast het verdriet moet de woning worden leeggemaakt, de inboedel verdeeld en het huis opgeleverd aan de verhuurder of klaargemaakt voor verkoop. Vaak met een opleverdatum die niet wacht. Op deze pagina leest u wat u moet regelen, wie waarvoor verantwoordelijk is, wanneer u mag beginnen en wat het kost. En hoe Uw Ontruimer het u uit handen neemt: discreet, met een vaste prijs en een schriftelijke opleveringsgarantie.
            </P>

            <div className="mb-10">
              <a href="https://analyse.uwontruimer.nl" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>Start de AI-wizard →</a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <H2>Wat moet u regelen na een overlijden?</H2>
            <P>Een praktisch overzicht van de zaken die met de woning te maken hebben. De uitvaart, de bank en de verzekeringen laten we hier buiten beschouwing.</P>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Verklaring van erfrecht aanvragen", tekst: "De notaris stelt vast wie de erfgenamen zijn en of er een executeur is. Veel instanties, waaronder verhuurders en banken, vragen hiernaar voordat zij iets voor u doen." },
                { stap: "2", titel: "Huur opzeggen of verkoop voorbereiden", tekst: "Bij een huurwoning zegt u als erfgenaam de huur op; de huur loopt door tot de oplevering. Bij een koopwoning bepaalt u samen met de erfgenamen en de makelaar wanneer de woning leeg moet zijn." },
                { stap: "3", titel: "Persoonlijke zaken veiligstellen", tekst: "Documenten, administratie, post, sieraden, foto's en herinneringen. Zet dit apart vóór de ontruiming, of laat het ons doen: wij inventariseren eerst en voeren pas daarna af." },
                { stap: "4", titel: "Inboedel verdelen en waardevolle stukken laten taxeren", tekst: "Spreek met de erfgenamen af wie wat krijgt. Antiek, kunst, verzamelingen en sieraden laat u taxeren; de opbrengst komt ten goede aan de nalatenschap." },
                { stap: "5", titel: "De woning laten ontruimen en opleveren", tekst: "Wij halen de woning leeg, voeren af, leveren bezemschoon op en regelen op verzoek de eindinspectie met de verhuurder of de sleuteloverdracht bij de notaris." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <H2>Wie is verantwoordelijk voor het ontruimen?</H2>
            <P>
              De erfgenamen zijn samen verantwoordelijk voor de nalatenschap, en dus ook voor het leeghalen en opleveren van de woning. Is er in het testament een executeur benoemd, dan regelt die het namens de erfgenamen. Een bewindvoerder, mentor of curator heeft na het overlijden geen rol meer; die taak eindigt op de dag van overlijden.
            </P>
            <Lijst items={[
              <><b>Huurwoning:</b> de huurovereenkomst gaat over op de erfgenamen. Zij zeggen op en leveren leeg op. Tot die tijd loopt de huur door.</>,
              <><b>Koopwoning:</b> de woning moet leeg zijn bij de overdracht aan de koper. De notaris plant de overdracht; wij plannen de ontruiming ervoor.</>,
              <><b>Geen erfgenamen of nalatenschap verworpen:</b> dan wordt de afwikkeling meestal via de notaris of de gemeente geregeld. Ook dan kunnen wij de ontruiming uitvoeren in opdracht van de afwikkelaar.</>,
              <><b>Zorgwoning of verpleeghuis:</b> de instelling hanteert vaak een korte termijn (enkele dagen tot twee weken) om de kamer leeg te maken. Wij kunnen binnen 24 uur.</>,
            ]} />

            <H2>Wanneer mag u beginnen met ontruimen?</H2>
            <P>
              Wacht in elk geval tot duidelijk is wie de erfgenamen zijn en dat zij het eens zijn over de aanpak. Heeft u de nalatenschap nog niet aanvaard, of beneficiair aanvaard omdat er mogelijk schulden zijn, overleg dan eerst met de notaris voordat u spullen van waarde verkoopt of weggooit. Spullen veiligstellen, de woning leegmaken omdat de verhuurder dat eist en de inboedel laten inventariseren kan vrijwel altijd. Wij maken altijd eerst een inventarisatie met foto's, zodat achteraf duidelijk is wat er was en waar het naartoe is gegaan.
            </P>

            <H2>Huurwoning opleveren na overlijden</H2>
            <P>
              Was de woning gehuurd? Dan komt er na het leeghalen nog een stap: de oplevering aan de woningcorporatie of verhuurder. De huur loopt door zolang de woning niet is opgeleverd; de meeste corporaties hanteren één maand opzegtermijn en verwachten de woning dan leeg en in de afgesproken staat. Daar zit tijdsdruk op, precies in een periode waarin u dat er niet bij kunt hebben.
            </P>
            <P>
              Bij de vooropname loopt een opzichter de woning door en noteert wat er nog moet gebeuren — vloerbedekking eruit, gaatjes dichten, bezemschoon opleveren — met de bedragen die de corporatie rekent als zij het zelf uitvoert. Die bedragen vallen vaak hoger uit dan nabestaanden verwachten.
            </P>
            <Lijst items={[
              "Wij wonen de vooropname en de eindinspectie namens u bij — u hoeft er niet bij te zijn",
              "Ook als u in een andere provincie of in het buitenland woont",
              "Wij voeren de inboedel af én werken de punten uit het rapport af, in één vaste prijs",
              "Heeft u het rapport al binnen? Dan zetten wij onze prijs ernaast, post voor post",
            ]} />
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="/voorinspectie/?van=na-overlijden" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">Wij regelen de oplevering met de woningbouw →</a>
              <a href="/vooropname-uploaden/?van=na-overlijden" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">Rapport al binnen? Upload het voor een goedkoper aanbod →</a>
            </div>

            <H2>Koopwoning leeg opleveren vóór de overdracht</H2>
            <P>
              Wordt de woning verkocht, dan moet die leeg en bezemschoon zijn op de dag van de overdracht bij de notaris. Wij plannen de ontruiming in de week ervoor, zodat er ruimte is voor een laatste controle. Wilt u de woning eerst leeg laten zien aan kopers, dan ontruimen wij eerder en leveren wij de sleutels aan de makelaar. Notarissen en makelaars ontvangen van ons een fotorapportage van de lege woning.
            </P>

            <H2>Wat gebeurt er met de spullen?</H2>
            <P>
              Het leeghalen van een ouderlijk huis is meer dan een praktische klus. U bepaalt wat bewaard blijft; wij voeren het uit, op uw tempo en zonder dat er iets zomaar verdwijnt.
            </P>
            <Lijst items={[
              "Persoonlijke documenten, foto's, post en herinneringen worden apart gezet en aan u overhandigd",
              "Antiek, kunst, sieraden en verzamelingen laten wij taxeren door erkende taxateurs",
              "Waardevolle stukken kopen wij op of brengen wij naar een veilinghuis — de opbrengst gaat van de factuur af",
              "Bruikbare meubels, kleding en apparaten gaan naar kringloop en goede doelen",
              "Wat niet herbruikbaar is, wordt gescheiden en verantwoord afgevoerd",
            ]} />
            <P>
              Lees ook: <Link href="/blog/waardevolle-spullen-nalatenschap/" className="text-blue-600 hover:underline">wat te doen met waardevolle spullen uit een nalatenschap</Link>.
            </P>

            <H2>Wat kost een huis ontruimen na overlijden?</H2>
            <P>De kosten hangen af van de grootte van de woning, de hoeveelheid inboedel en de bereikbaarheid. Als richtlijn:</P>
            <ul className="space-y-2 mb-6 text-sm">
              {[
                { type: "Zorgkamer of studio", prijs: "vanaf €350" },
                { type: "Appartement (1–2 slaapkamers)", prijs: "vanaf €450" },
                { type: "Eengezinswoning (3–4 slaapkamers)", prijs: "vanaf €750" },
                { type: "Vrijstaande woning of villa", prijs: "op maat, na opname" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>
            <P>
              Waardevolle inboedel verrekenen wij met de factuur; daardoor valt het bedrag vaak lager uit. De kosten van de ontruiming komen ten laste van de nalatenschap en gelden als schuld van de boedel bij de erfbelasting. Meer over tarieven en wie betaalt leest u in <Link href="/blog/ontruiming-na-overlijden-kosten/" className="text-blue-600 hover:underline">ontruiming na overlijden: kosten en wie betaalt</Link>.
            </P>

            <H2>Zo verloopt de ontruiming bij Uw Ontruimer</H2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Rustig eerste contact", tekst: "Via de AI-wizard met een paar foto's, of telefonisch. U vertelt de situatie; wij sturen een vaste prijs met schriftelijke opleveringsgarantie." },
                { stap: "2", titel: "Afstemming met de nabestaanden", tekst: "We spreken af wat naar familie gaat, wat getaxeerd en verkocht wordt en wat afgevoerd mag worden. Twijfelt u, dan bewaren we het." },
                { stap: "3", titel: "Inventarisatie en ontruiming", tekst: "Ons eigen team maakt eerst een foto-inventarisatie, zet persoonlijke zaken apart en haalt daarna de woning leeg. Meestal in één dag, discreet voor de buurt." },
                { stap: "4", titel: "Bezemschone oplevering", tekst: "Wij leveren op aan verhuurder, corporatie, makelaar of notaris, inclusief fotorapportage. U hoeft er niet bij te zijn." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <H2>Voor notarissen, executeurs en bewindvoerders</H2>
            <P>
              Wikkelt u een nalatenschap af, dan heeft u behoefte aan een partij die zelfstandig werkt en alles vastlegt. Wij leveren een foto-inventarisatie, taxatie van waardevolle stukken, een fotorapportage van de opgeleverde woning en een factuur op naam van de boedel. Eén aanspreekpunt, vaste prijs, en wij regelen de sleutels. Meer over onze samenwerking leest u op de pagina voor <Link href="/notaris/" className="text-blue-600 hover:underline">notarissen</Link>.
            </P>

            <H2>Waarom nabestaanden voor Uw Ontruimer kiezen</H2>
            <Lijst items={[
              "Meer dan 15 jaar ervaring, 2.500+ families geholpen",
              "Discreet en respectvol, in uw tempo",
              "Vaste prijs vooraf en schriftelijke opleveringsgarantie",
              "Persoonlijke zaken apart, waardevolle stukken verrekend",
              "Oplevering aan corporatie, verhuurder of notaris geregeld",
              "Ook als u ver weg of in het buitenland woont",
            ]} />
            <P>
              Alles over onze aanpak bij elke soort ontruiming leest u op de pagina <Link href="/diensten/woningontruiming/" className="text-blue-600 hover:underline">woningontruiming</Link>.
            </P>

            <H2>Veelgestelde vragen</H2>
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
