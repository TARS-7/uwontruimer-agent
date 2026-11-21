import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Link from "next/link";
import DuurzaamFilm from "@/components/DuurzaamFilm";
import Film from "@/components/Film";

export const metadata: Metadata = {
  title: "Werkwijze: zo gaat een woningontruiming in zijn werk, stap voor stap",
  description: "Van het eerste telefoontje tot de sleuteloverdracht: gratis opname, offerte met vaste prijs, de klusdag en een bezemschone oplevering met garantie. Zo gaat een woningontruiming bij Uw Ontruimer in zijn werk.",
  alternates: { canonical: "/werkwijze/" },
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

type Stap = { titel: string; intro: string; u: string; wij: string; kosten: string; duurzaam?: string; href?: string; knop?: string; film?: boolean };

const stappen: Stap[] = [
  {
    titel: "U neemt contact op",
    intro: "U belt ons, of u vult de AI-wizard in met een paar foto's van de woning. Wij bellen u terug.",
    u: "Vertellen om welke woning het gaat, wanneer die leeg moet en of er een verhuurder, makelaar of notaris bij betrokken is.",
    wij: "Wij stellen de vragen die nodig zijn voor een goede prijs en spreken af hoe we de woning bekijken.",
    kosten: "Gratis.",
    href: "/offerte/?van=werkwijze",
    knop: "Vraag een offerte aan",
  },
  {
    titel: "Wij bekijken de woning",
    intro: "Dat kan op twee manieren: u stuurt foto's via de AI-analyse of WhatsApp, of wij komen langs voor een opname aan huis van ongeveer een kwartier.",
    u: "Foto's maken van elke ruimte, inclusief zolder, kelder, schuur en tuin. Of de deur openen voor de opname.",
    wij: "Wij kijken wat er weg moet, wat er gedemonteerd moet worden (keuken, vloer, kasten) en wat nog waarde heeft.",
    kosten: "Gratis en vrijblijvend.",
  },
  {
    titel: "U krijgt een offerte met vaste prijs",
    intro: "U ontvangt per mail een gespecificeerde offerte. Heeft de inboedel waarde, dan staat ons bod erop en gaat dat van de prijs af.",
    u: "De offerte lezen en met één klik akkoord geven. Vragen kunt u altijd telefonisch stellen.",
    wij: "Alles staat erin: leeghalen, afvoeren, demontage, bezemschoon opleveren. Wat niet in de offerte staat, rekenen wij niet.",
    kosten: "De offerteprijs is het bedrag. Geen uren of toeslagen achteraf.",
    href: "/diensten/opkopen-inboedel/",
    knop: "Zo werkt het bod op de inboedel",
  },
  {
    titel: "Wij plannen de klusdag",
    intro: "Na uw akkoord krijgt u een bevestiging met de datum en de starttijd. De dag ervoor sturen wij een korte checklist.",
    u: "Persoonlijke documenten, sieraden en spullen die u wilt houden apart leggen. Sleutels verzamelen, ook van schuur en garage.",
    wij: "Wij regelen het team, de bus, de afvoer en een parkeerplek bij de ingang.",
    kosten: "Inbegrepen.",
  },
  {
    titel: "De ontruiming",
    intro: "Op de klusdag staat het team op de afgesproken tijd voor de deur. Een gewone woning is in één, soms twee dagen leeg. U hoeft er niet bij te zijn.",
    u: "Niets. Als u wilt, bent u er bij de start om nog iets aan te wijzen.",
    wij: "Wij halen ruimte voor ruimte leeg en zetten persoonlijke papieren en foto's apart. Wij demonteren wat vast zit en laden gescheiden: bruikbaar apart van hout, metaal en rest.",
    kosten: "Vaste prijs uit de offerte.",
    duurzaam: "Bruikbare meubels, kleding en huisraad gaan naar de kringloop en goede doelen. Hout, metaal en papier worden apart verwerkt. Zo gaat er zo weinig mogelijk naar de verbrandingsoven.",
    href: "/duurzaam/",
    knop: "Meer over onze duurzame aanpak",
    film: true,
  },
  {
    titel: "Oplevering en sleuteloverdracht",
    intro: "De woning gaat bezemschoon terug, inclusief keuken en buitenruimtes. Wij leggen de oplevering vast met foto's en zijn bij de eindinspectie als u dat wilt.",
    u: "De fotorapportage bekijken. Is er een opmerking van de verhuurder of makelaar, dan belt u ons.",
    wij: "Wij dragen de sleutels over en komen kosteloos terug als er iets niet in orde is.",
    kosten: "Inbegrepen. De opleveringsgarantie staat schriftelijk in de offerte.",
    href: "/opleveringsgarantie/",
    knop: "Lees de opleveringsgarantie",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Header: de BSW-film (liggend) over de volle breedte, tekst eroverheen */}
        <div className="relative w-full overflow-hidden bg-slate-900" style={{ height: "420px" }}>
          <Film
            naam="bsw"
            src="/bsw-breed.mp4"
            poster="/bsw-breed-poster.jpg"
            plek="werkwijze-hero"
            className="absolute inset-0 w-full h-full object-cover"
            label="Medewerker van Uw Ontruimer neemt een inboedel door"
          />
          <div className="absolute inset-0 bg-slate-900/45" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <p className="text-white/85 font-medium text-sm uppercase tracking-widest mb-2">Werkwijze</p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Zo gaat een woningontruiming in zijn werk
              </h1>
              <p className="text-white/85 font-light mt-3 text-base sm:text-lg">
                Van het eerste telefoontje tot de sleuteloverdracht, stap voor stap.
              </p>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Vaste prijs vooraf", "Schriftelijke opleveringsgarantie", "Zo weinig mogelijk naar de verbrandingsoven"].map((item) => (
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
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkwijze</p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Zo verloopt het, stap voor stap</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Of de woning leeg moet na een overlijden, een verhuizing naar een zorginstelling of een verkoop: zo gaat het bij ons altijd.
              De opname en de offerte kosten u niets. Daarna betaalt u alleen de vaste prijs uit de offerte.
            </p>
            <ol className="space-y-5 mb-12">
              {stappen.map((stap, i) => (
                <li key={stap.titel} className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{stap.titel}</h3>
                      <p className="text-slate-500 font-light text-sm leading-relaxed mt-1">{stap.intro}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">U doet</p>
                      <p className="text-slate-600 font-light leading-relaxed">{stap.u}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Wij doen</p>
                      <p className="text-slate-600 font-light leading-relaxed">{stap.wij}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Kosten</p>
                      <p className="text-slate-600 font-light leading-relaxed">{stap.kosten}</p>
                    </div>
                  </div>
                  {stap.duurzaam && (
                    <p className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 font-light leading-relaxed">
                      <span className="font-medium text-slate-700">Duurzaam: </span>{stap.duurzaam}
                    </p>
                  )}
                  {stap.film && (
                    <div className="relative overflow-hidden rounded-xl mt-4 aspect-video bg-slate-100">
                      <DuurzaamFilm plek="werkwijze" className="absolute inset-0 w-full h-full object-cover" bijschrift="Hergebruik via kringloop, de rest verantwoord afgevoerd" />
                    </div>
                  )}
                  {stap.href && (
                    <p className="mt-4">
                      <Link href={stap.href} className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:underline">{stap.knop} →</Link>
                    </p>
                  )}
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">Extra, alleen op uw verzoek</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Deze diensten horen niet bij de standaard ontruiming. U betaalt ze alleen als u er zelf om vraagt.
              De opname, de AI-analyse en de offerte blijven altijd gratis.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  titel: "BSW, Boedel Sorteer Waardering",
                  tekst: "Wilt u eerst precies weten wat er staat? Wij zoeken de hele inboedel uit op waarde, met per stuk een foto, richtprijs en advies.",
                  prijs: "€ 75 per uur per medewerker. Gaat van ons bod af als wij de inboedel kopen.",
                  href: "/bsw/?van=werkwijze",
                  knop: "Meer over de BSW",
                },
                {
                  titel: "Voorinspectie huurwoning",
                  tekst: "Wij wonen de voorinspectie van de corporatie bij, zodat de herstellijst meteen in de offerte voor de ontruiming staat.",
                  prijs: "€ 150, verrekend met de ontruiming.",
                  href: "/voorinspectie/?van=werkwijze",
                  knop: "Meer over de voorinspectie",
                },
              ].map((e) => (
                <div key={e.titel} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Extra dienst</p>
                  <p className="font-semibold text-slate-900 mb-2">{e.titel}</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-2">{e.tekst}</p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">{e.prijs}</p>
                  <Link href={e.href} className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:underline">{e.knop} →</Link>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat u van ons mag verwachten</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                { titel: "Vaste prijs vooraf", omschrijving: "De offerte is het bedrag. Geen uren achteraf, geen verrassingen bij de eindinspectie." },
                { titel: "Vaste contactpersoon", omschrijving: "Eén aanspreekpunt van het eerste gesprek tot de sleuteloverdracht." },
                { titel: "Opleveringsgarantie", omschrijving: "Is er na oplevering een opmerking, dan komen wij kosteloos terug. Schriftelijk vastgelegd." },
                { titel: "Zo weinig mogelijk afval", omschrijving: "Hergebruik eerst, dan kringloop en goede doelen, dan gescheiden afvoer. In die volgorde, bij elke woning." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Ook mogelijk</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              Dezelfde werkwijze, dezelfde garantie, voor situaties die net anders zijn.
            </p>
            <ul className="flex flex-wrap gap-2 mb-12">
              {[
                { label: "Spoedontruiming", href: "/diensten/spoedontruiming/" },
                { label: "Bedrijfsontruiming", href: "/diensten/bedrijfsontruiming/" },
                { label: "Vervuilde woning", href: "/vervuilde-woning-ontruimen/" },
                { label: "Verhuizen", href: "/diensten/verhuizen/" },
                { label: "Vloer verwijderen", href: "/diensten/vloerverwijdering/" },
                { label: "Keuken verwijderen", href: "/diensten/keuken-verwijderen/" },
                { label: "Alle aanvullende services", href: "/diensten/" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="inline-block rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors">{label}</Link>
                </li>
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
