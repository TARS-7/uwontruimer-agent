import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import VooropnameForm from "@/components/VooropnameForm";

export const metadata: Metadata = {
  title: "Vooropname of opnamestaat uploaden — goedkoper uw huurwoning opleveren",
  description:
    "Huurwoning opleveren en geschrokken van het bedrag op de opnamestaat? Upload uw vooropname, opnamestaat of eindinspectierapport en ontvang binnen één werkdag een goedkoper aanbod. Gratis en vrijblijvend.",
  alternates: { canonical: "/vooropname-uploaden/" },
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
    vraag: "Wat kost het om een aanbod te krijgen?",
    antwoord:
      "Niets. U uploadt uw vooropname en ontvangt binnen één werkdag onze prijs voor dezelfde werkzaamheden. U zit nergens aan vast en kunt altijd alsnog voor de woningcorporatie kiezen.",
  },
  {
    vraag: "Waarom is de woningbouw duurder?",
    antwoord:
      "De woningbouw rekent met vaste interne tarieven en besteedt het werk uit aan aannemers, met opslag. Wij voeren het zelf uit en kunnen daardoor vrijwel altijd onder dat bedrag zitten — zeker als er ook ontruimd moet worden.",
  },
  {
    vraag: "Mag ik het door een ander laten doen?",
    antwoord:
      "Ja. U bent als huurder verplicht de woning in de afgesproken staat op te leveren, maar niet om dat door de woningbouw te laten doen. U mag zelf een partij kiezen, zolang het werk vóór de eindinspectie klaar is.",
  },
  {
    vraag: "Ik heb alleen foto's van de vooropname, is dat genoeg?",
    antwoord:
      "Ja. Foto's van de pagina's met de punten en de bedragen zijn voldoende. U kunt meerdere foto's tegelijk uploaden.",
  },
  {
    vraag: "Ik ben het niet eens met de eindinspectie. Kunt u helpen?",
    antwoord:
      "Vaak wel. U bent verplicht de woning in de afgesproken staat op te leveren, maar niet om het herstel door de woningbouw te laten uitvoeren — en evenmin om hun tarief te accepteren. Stuur ons het rapport, dan zetten wij onze prijs ernaast. Dat geeft u een onderbouwd alternatief in plaats van alleen bezwaar.",
  },
  {
    vraag: "Heet het bij mijn woningbouw ook een vooropname?",
    antwoord:
      "Niet altijd. Corporaties gebruiken verschillende namen voor hetzelfde document: vooropname, voorinspectie, rapport voorinspectie of opnamestaat. Herkent u een overzicht per ruimte met een taak en een bedrag erachter, en onderaan een geschat totaal? Dan is dat het document dat wij nodig hebben.",
  },
  {
    vraag: "Wat als er ook nog een inboedel staat?",
    antwoord:
      "Dan nemen wij de ontruiming mee in hetzelfde aanbod. Juist die combinatie maakt het verschil groot: wij voeren de inboedel af én doen de punten uit de vooropname, in één keer en voor één prijs.",
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
        <div className="py-14 px-6" style={{ backgroundColor: "#0F2942" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#93b4d6" }}>
              Vooropname uploaden
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug mb-4">
              Huurwoning opleveren?<br />Wij doen het goedkoper dan de woningbouw.
            </h1>
            <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
              Upload uw vooropname, opnamestaat of eindinspectierapport met de bedragen van de woningbouw.
              Binnen één werkdag hoort u wat wij voor dezelfde werkzaamheden rekenen — gratis en vrijblijvend.
            </p>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Antwoord binnen 1 werkdag", "Gratis en vrijblijvend", "Herstel én ontruiming in één prijs"].map((item) => (
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
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Als u uw huurwoning gaat opleveren, komt er eerst een opzichter langs. Die loopt de woning
              door en noteert per ruimte welke werkzaamheden er nog moeten gebeuren — en wat de woningbouw
              daarvoor rekent als zij het bij de eindinspectie zelf moet uitvoeren. U krijgt dat rapport
              thuisgestuurd, met onderaan een geschat totaalbedrag. Afhankelijk van uw corporatie heet dat
              een <strong>vooropname</strong>, een <strong>opnamestaat</strong>, een voorinspectierapport
              of een eindinspectieformulier — het gaat om hetzelfde document.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Die bedragen vallen vaak hoger uit dan mensen verwachten, omdat er met vaste interne tarieven
              wordt gerekend. Vloerbedekking verwijderen loopt zo al snel in de honderden euro&apos;s per kamer,
              en het afvoeren van de inboedel wordt per kubieke meter berekend — daar lopen de bedragen het
              hardst op.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              U bent niet verplicht het door de woningbouw te laten doen. Stuur ons uw vooropname, dan rekenen
              wij dezelfde werkzaamheden door tegen onze prijs. Staat er ook nog een inboedel? Dan nemen wij
              die mee in hetzelfde aanbod — en juist daar zit het grootste verschil.
            </p>

            <div className="rounded-2xl border border-slate-200 p-6 sm:p-7 mb-12" style={{ backgroundColor: "#f8fafc" }}>
              <h2 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">Upload uw vooropname</h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-5">
                Uw naam en contactgegevens, en de vooropname erbij. Adres, woningbouw en bedragen halen wij uit het rapport zelf.
              </p>
              <VooropnameForm />
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
              Een voorbeeld uit de praktijk
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een rijtjeswoning waarvan de huur werd opgezegd: vloerbedekking in vier ruimtes en op de trap,
              een woning vol inboedel, en een lijst kleine punten. Zo zag de vooropname eruit — en zo lopen
              de bedragen op.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 mb-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left font-medium text-slate-700 px-4 py-3">Post uit de vooropname</th>
                    <th className="text-right font-medium text-slate-700 px-4 py-3 whitespace-nowrap">Woningbouw</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { taak: "Inboedel en huisvuil afvoeren", prijs: "€ 690,45 per m³" },
                    { taak: "Vloerbedekking woonkamer", prijs: "€ 498,90" },
                    { taak: "Vloerbedekking trap", prijs: "€ 502,74" },
                    { taak: "Vloerbedekking slaapkamer 1", prijs: "€ 399,12" },
                    { taak: "Vloerbedekking slaapkamer 2", prijs: "€ 266,08" },
                    { taak: "Vloerbedekking hal en gang", prijs: "€ 266,08" },
                    { taak: "Laminaatvloer verwijderen", prijs: "€ 91,38" },
                    { taak: "Bezemschoon opleveren", prijs: "€ 108,92" },
                    { taak: "Raambekleding en rails verwijderen", prijs: "€ 86,16" },
                    { taak: "Badkamer schoonmaken", prijs: "€ 86,25" },
                    { taak: "Lamp verwijderen", prijs: "€ 79,31" },
                    { taak: "Lichtpunt aanbrengen", prijs: "€ 73,64" },
                    { taak: "Spijkers, schroeven en pluggen", prijs: "€ 69,00" },
                    { taak: "Ventilatierooster schoonmaken", prijs: "€ 10,37" },
                  ].map(({ taak, prijs }) => (
                    <tr key={taak} className="border-b border-slate-100">
                      <td className="px-4 py-2.5 text-slate-600 font-light">{taak}</td>
                      <td className="px-4 py-2.5 text-right text-slate-700 whitespace-nowrap">{prijs}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">Geschat totaal woningbouw</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-900 whitespace-nowrap">€ 3.228,40</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Bedragen uit een vooropname van augustus 2026, zonder gegevens van de bewoner. Tarieven
              verschillen per woningbouw, per woning en per jaar.
            </p>

            <div className="rounded-xl border-2 p-5 sm:p-6 mb-12" style={{ borderColor: "#d97706", backgroundColor: "#fffbeb" }}>
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#b45309" }}>
                Wat wij ervoor rekenen
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
                25 tot wel 50% goedkoper
              </p>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Wij doen dezelfde werkzaamheden in één vaste prijs, met schriftelijke opleveringsgarantie:
                alle vloerbedekking eruit, de complete inboedel afgevoerd, de kleine punten afgewerkt en de
                woning bezemschoon opgeleverd. Het verschil is het grootst bij woningen die nog vol staan —
                daar telt de kubieke-meterprijs van de woningbouw het hardst aan.
              </p>
              <p className="text-slate-600 font-light text-sm leading-relaxed mt-3">
                Wat het voor úw woning wordt, hangt af van de omvang en de punten in uw eigen vooropname.
                Upload het rapport, dan rekenen wij het post voor post door en hoort u het binnen één werkdag.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 mb-12">
              <p className="font-medium text-slate-800 mb-2">Waar het hard oploopt</p>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Let vooral op de post voor het afvoeren van de inboedel: die wordt per kubieke meter gerekend.
                Een gemiddelde woning bevat al gauw twintig tot vijfentwintig kubieke meter — bij zo&apos;n
                tarief loopt alleen die post in de duizenden euro&apos;s. Wij voeren een complete woning af
                voor één vaste prijs.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Zo werkt het</h2>
            <ol className="space-y-4 mb-10">
              {[
                { stap: "1", titel: "U uploadt uw vooropname", tekst: "De vooropname is al geweest en u heeft het rapport van de woningbouw ontvangen — vaak een PDF met per ruimte een taak en een bedrag. Foto's van de pagina's mogen ook." },
                { stap: "2", titel: "Wij rekenen het door", tekst: "Wij lopen de punten na en zetten er onze prijs naast — post voor post, zodat u precies kunt vergelijken." },
                { stap: "3", titel: "U hoort het binnen één werkdag", tekst: "U ontvangt ons aanbod en beslist zelf. Geen verplichtingen; u kunt altijd alsnog voor de corporatie kiezen." },
                { stap: "4", titel: "Wij voeren het uit vóór de eindinspectie", tekst: "Wij zorgen dat het werk klaar is voordat de opzichter terugkomt, en kunnen desgewenst bij die eindinspectie aanwezig zijn." },
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat wij voor u kunnen doen</h2>
            <ul className="space-y-3 mb-10">
              {[
                "Gaatjes dichten, spackwerk en sauswerk",
                "Vloerbedekking, laminaat en lijmresten verwijderen",
                "Keuken, badkamer of sanitair terugbrengen in oorspronkelijke staat",
                "Zelf aangebrachte voorzieningen en constructies verwijderen",
                "Tuin opschonen en bijwerken",
                "Volledige ontruiming van de inboedel, bezemschoon opgeleverd",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqItems.map(({ vraag, antwoord }) => (
                <div key={vraag} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-2">{vraag}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{antwoord}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
