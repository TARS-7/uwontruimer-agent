import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons - Maak kennis met Uw Ontruimer",
  description: "Met meer dan 15 jaar ervaring is Uw Ontruimer gespecialiseerd in diverse ontruimingsdiensten. Lees meer over onze belangen en werkwijze.",
  alternates: { canonical: "/over-ons/" },
};


// Entiteitsgegevens voor zoekmachines en AI-assistenten (2 nov 2026): wie zit er achter
// de handelsnaam, waar, sinds wanneer, en welke externe profielen horen bij dit bedrijf.
// sameAs aanvullen zodra de profielen op Sirelo, Trustpilot en Trustoo bestaan.
const organisatieSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://www.uwontruimer.nl/over-ons/",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://www.uwontruimer.nl/#organisatie",
    name: "Uw Ontruimer",
    legalName: "Inboedels B.V.",
    alternateName: "UwOntruimer.nl",
    url: "https://www.uwontruimer.nl",
    telephone: "+31853035894",
    foundingDate: "2010",
    taxID: "NL863451159B01",
    identifier: { "@type": "PropertyValue", propertyID: "KVK", value: "84981393" },
    address: { "@type": "PostalAddress", streetAddress: "Welnastraat 175", postalCode: "1096GJ", addressLocality: "Amsterdam", addressCountry: "NL" },
    areaServed: ["Amsterdam", "Amstelveen", "Haarlem", "Hoofddorp", "Utrecht", "Den Haag", "Leiden"].map((n) => ({ "@type": "City", name: n })),
    sameAs: ["https://www.google.com/maps?cid=2439916917779067451", "https://nl.trustpilot.com/review/uwontruimer.nl"],
    knowsAbout: ["Woningontruiming", "Ontruiming na overlijden", "Spoedontruiming", "Bezemschoon opleveren", "Inboedel opkopen", "Bedrijfsontruiming"],
  },
};

const BEDRIJFSGEGEVENS = [
  ["Handelsnaam", "Uw Ontruimer"],
  ["Rechtspersoon", "Inboedels B.V."],
  ["KVK-nummer", "84981393"],
  ["Btw-nummer", "NL863451159B01"],
  ["Vestigingsadres", "Welnastraat 175, 1096 GJ Amsterdam"],
  ["Telefoon", "085-303 58 94"],
  ["Actief sinds", "2010"],
  ["Werkgebied", "Amsterdam, Amstelveen, Haarlem, Hoofddorp, Utrecht, Den Haag, Leiden en omgeving"],
];

const usps = ["Discreet", "Duurzaam", "Opleveringsgarantie", "15+ jaar ervaring", "Ontzorgt"];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisatieSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">
              Uw Ontruimer — dé specialist in professionele ontruimingsdiensten
            </h1>

            {/* Teamfoto */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
              <Image
                src="/Ontruimers.jpg"
                alt="Het team van UwOntruimer met de bedrijfsbussen tijdens een woningontruiming"
                fill
                className="object-cover"
                style={{ objectPosition: "center 72%" }}
                priority
              />
            </div>

            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Met ons ervaren en toegewijde team bieden wij hoogwaardige oplossingen voor diverse ontruimingsbehoeften in Nederland. Betrouwbaarheid, deskundigheid en klantgerichtheid vormen de kern van onze dienstverlening.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wij begrijpen dat ontruimingen vaak complex en emotioneel beladen zijn. Of het nu gaat om een woningontruiming na een overlijden, een bedrijfsontruiming of een verhuizing, wij staan voor u klaar om het proces soepel te laten verlopen en u te ontzorgen.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Bij Uw Ontruimer streven we naar maximale klanttevredenheid. Wij luisteren naar uw wensen en passen onze diensten daarop aan. Ons doel is om elke ontruiming vlekkeloos te laten verlopen, waarbij we efficiëntie, kwaliteit en oog voor detail combineren. Het pand wordt achtergelaten zoals u dat wenst, volgens de afgesproken specificaties.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {usps.map((usp) => (
                <span key={usp} className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  {usp}
                </span>
              ))}
            </div>

            {/* Achtergrond */}
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Achtergrond</h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Opgericht vanuit maatschappelijk oogpunt</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is ruim 8 jaar werkzaam geweest voor diverse stichtingen en kringlooporganisaties en heeft daar veel ervaring opgedaan in het taxeren van roerende goederen en het ontruimen van woningen.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5 italic border-l-4 border-blue-100 pl-4">
              "Tijdens mijn werk voor diverse stichtingen, die zich richten op ontruimingen en verhuizingen, merkte ik dat er een behoefte is aan een betrouwbare en professionele organisatie die u daarbij kan helpen."
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Dankzij die jaren in de handel in gebruikte inboedels weten wij wat een inboedel waard is. Daarom kunnen wij één bod doen op de complete inboedel en dat verrekenen met de ontruiming, of u uitbetalen als de inboedel meer waard is dan het werk kost.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-3">Duurzaam</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Wij zijn een duurzaam bedrijf dat zoveel mogelijk hergebruikt. Bij een ontruiming blijven vaak nog een heleboel bruikbare goederen over. Daarom werken we samen met diverse kringlooporganisaties en andere goede doelen om nog veel meer mensen gelukkig te maken met uw restboedel.
            </p>

            {/* Opleveringsgarantie */}
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Opleveringsgarantie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is sinds 2010 een vooraanstaand dienstverlener van het leeghalen van woningen en bedrijfspanden. Het streven van de onderneming is het ontzorgen en opleveren van panden voor haar klanten. Kwaliteit in de vorm van hoogstaande serviceverlening en zekerheid voor een oplevering van de specifieke eisen die gesteld worden — dat blijkt wel uit het feit dat u oplevergarantie krijgt bij deze dienst.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              De onderneming beschikt over eigen, goed opgeleide en ervaren ontruimers en professioneel materieel zoals vrachtwagens en verhuisliften. Uw Ontruimer is gevestigd aan de Welnastraat 175, 1096GJ Amsterdam en bedient hiermee de gehele regio Noord- en Zuid-Holland. De adviseurs komen altijd kosteloos bij u langs om een vrijblijvende offerte te maken.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              De onderneming is actief in de particuliere én de zakelijke markt. Voor zowel huur- als koopwoningen. Bovendien is het belangrijk om met een solide bedrijf in zee te gaan voordat u de sleutels van de woning overhandigt — Uw Ontruimer is dat bedrijf.
            </p>

            {/* Team preview */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Ons team</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-10">
                Achter elke ontruiming staat een team van betrokken vakmensen die discreet en zorgvuldig te werk gaan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                {[
                  { naam: "Peter Visser", functie: "Bedrijfsleider",            foto: "/team-Peter.jpg", bio: "Al meer dan 15 jaar zorgt Peter persoonlijk voor een zorgvuldige en discrete uitvoering van elke ontruiming." },
                  { naam: "Lisa Vermeer", functie: "Planning & Klantenservice", foto: "/team-Lisa.jpg",  bio: "Lisa is het eerste aanspreekpunt voor klanten en zorgt voor een vlekkeloze planning." },
                  { naam: "Carlos",       functie: "Senior Uitvoerder",         foto: "/team-Carlos.jpg",bio: "Carlos heeft jarenlange ervaring met grote en complexe ontruimingen in de regio Amsterdam." },
                  { naam: "Boris",        functie: "Uitvoerder",                foto: "/team-Boris.jpg", bio: "Boris staat bekend om zijn snelheid en zorgvuldigheid op de werkvloer." },
                  { naam: "Hector",       functie: "Teamhond & Moraalbooster",  foto: "/team-Hector.jpg",bio: "Hector is de vaste favoriet op kantoor en verwelkomt elke klant die langskomt met een kwispelende staart." },
                ].map((lid) => (
                  <div key={lid.naam} className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-100 mb-5 flex-shrink-0">
                      <Image src={lid.foto} alt={lid.naam} width={160} height={160} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-lg font-semibold text-slate-900 mb-0.5">{lid.naam}</p>
                    <p className="text-sm text-slate-400 mb-3">{lid.functie}</p>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{lid.bio}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/over-ons/team/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
              >
                Maak kennis met ons hele team
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Bedrijfsgegevens: controleerbare feiten voor klanten, zoekmachines en AI-assistenten */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Bedrijfsgegevens</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                Controleer ons gerust bij de Kamer van Koophandel voordat u de sleutels overhandigt. Waar u verder op let bij het kiezen van een ontruimer leest u op de pagina{" "}
                <Link href="/woningontruimer-kiezen/" className="text-blue-600 underline underline-offset-2">een goede woningontruimer kiezen</Link>.
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-slate-50 border border-slate-100 rounded-xl p-6">
                {BEDRIJFSGEGEVENS.map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <dt className="text-xs text-slate-400 uppercase tracking-wide">{k}</dt>
                    <dd className="text-sm text-slate-800">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: "1.200+", label: "Families geholpen" },
                { stat: "15+", label: "Jaar ervaring" },
                { stat: "4,8 ★", label: "Google beoordeling" },
                { stat: "100%", label: "Opleveringsgarantie" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900 mb-1">{s.stat}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
