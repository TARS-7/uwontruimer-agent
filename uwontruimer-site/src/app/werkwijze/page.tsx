import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";
import Link from "next/link";
import DuurzaamFilm from "@/components/DuurzaamFilm";

export const metadata: Metadata = {
  title: "Werkwijze: zo verloopt een woningontruiming bij Uw Ontruimer, in vijf stappen",
  description: "Eerst kijken wat waarde heeft, één bod op de inboedel, ontruiming met vaste prijs, oplevering met garantie, en zo weinig mogelijk naar de verbrandingsoven. Zo werkt een woningontruiming bij Uw Ontruimer.",
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

type Stap = { titel: string; intro: string; u: string; wij: string; kosten: string; duurzaam: string; href: string; knop: string; film?: boolean };

const stappen: Stap[] = [
  {
    titel: "Weten wat er staat",
    intro: "Wilt u zeker weten dat er niets weggaat wat geld waard is? Dan beginnen wij met een BSW, Boedel Sorteer Waardering: de hele inboedel uitgezocht met onze lijst van spullen die nog waarde hebben.",
    u: "U bent erbij, of iemand namens u. U beslist per stuk: houden, laten veilen, verkopen of aan ons verkopen.",
    wij: "Wij lopen elke ruimte in een vaste volgorde door, zetten apart wat waarde heeft en leveren een overzicht met foto, richtprijs en advies per stuk.",
    kosten: "€ 75 per uur per medewerker, twee medewerkers, minimaal twee uur. Verrekend als wij de inboedel kopen. Optioneel.",
    duurzaam: "Niets wat nog waarde heeft, gaat de container in. Dat is de eerste en grootste stap naar minder afval.",
    href: "/bsw/?van=werkwijze",
    knop: "Meer over de BSW",
  },
  {
    titel: "Eén bod op de inboedel",
    intro: "Op de complete inboedel doen wij één bod, meestal binnen 48 uur na uw foto's. Dat bod gaat van de ontruimingskosten af; bij een waardevolle inboedel betalen wij u uit.",
    u: "U stuurt foto's via WhatsApp of laat ons langskomen. U beslist pas als het bod op papier staat.",
    wij: "Wij beoordelen antiek, design, sieraden, boeken en gewone huisraad in één keer en zetten het bod schriftelijk vast.",
    kosten: "Geen. Het bod wordt verrekend of uitbetaald; een eventuele BSW gaat van het bod af.",
    duurzaam: "Wat wij kopen, krijgt een tweede leven via onze afnemers, veilinghuizen en vintage-handelaren in plaats van een nieuw gekocht exemplaar.",
    href: "/diensten/opkopen-inboedel/",
    knop: "Zo werkt inboedel opkopen",
  },
  {
    titel: "De ontruiming, met vaste prijs",
    intro: "U krijgt één offerte met alles erin: leeghalen, afvoeren, vloer of keuken eruit als dat nodig is, gaatjes dichten, schoon opleveren. Bij een huurwoning wonen wij de voorinspectie van de corporatie bij, zodat de herstellijst in dezelfde offerte zit.",
    u: "U vult de AI-analyse in met foto's, of maakt een afspraak voor een opname aan huis. Op de klusdag hoeft u er niet te zijn.",
    wij: "Wij halen leeg in één of twee dagen, demonteren wat vast zit en laden gescheiden: meubels en bruikbare spullen apart van hout, metaal en rest.",
    kosten: "Vaste prijs uit de offerte. Voorinspectie huurwoning € 150, verrekend met de ontruiming.",
    duurzaam: "Bruikbare meubels, kleding en huisraad gaan naar de kringloop en goede doelen. Hout, metaal en papier worden apart gewogen en verwerkt, niet als gemengd afval.",
    href: "/offerte/?van=werkwijze",
    knop: "Vraag een offerte aan",
  },
  {
    titel: "Opleveren met garantie",
    intro: "De woning gaat bezemschoon naar de verhuurder, de makelaar of de nieuwe bewoner. Wij zijn bij de eindinspectie en dragen de sleutels over.",
    u: "U ontvangt de fotorapportage en het opleveringsbewijs. Is er een opmerking, dan belt u ons.",
    wij: "Wij leggen de oplevering vast met foto's, wonen de eindinspectie bij en komen kosteloos terug als er iets niet in orde is.",
    kosten: "Inbegrepen. De opleveringsgarantie staat schriftelijk in de offerte.",
    duurzaam: "Persoonlijke documenten, foto's en gegevensdragers gaan in een gesloten overdrachtsdoos naar u terug. Niets daarvan belandt bij het oud papier.",
    href: "/opleveringsgarantie/",
    knop: "Lees de opleveringsgarantie",
  },
  {
    titel: "Waar de inboedel heen gaat",
    intro: "Twee weken na de ontruiming staat een groot deel van de inboedel in de kringloopwinkel. Dit is hoe dat eruitziet.",
    u: "Niets. Als u wilt, vertellen wij u achteraf waar de spullen heen zijn gegaan.",
    wij: "Wij werken met vaste kringlooporganisaties, goede doelen en gecertificeerde verwerkers, en houden bij wat er is hergebruikt en wat is afgevoerd.",
    kosten: "Geen. Hergebruik maakt de ontruiming juist goedkoper: wat niet de container in gaat, hoeft niet gestort te worden.",
    duurzaam: "Zo weinig mogelijk naar de verbrandingsoven. Hergebruik eerst, dan kringloop, dan gescheiden afvoer.",
    href: "/duurzaam/",
    knop: "Meer over onze duurzame aanpak",
    film: true,
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/hero-verhuisdozen-bus.jpg" alt="Werkwijze Uw Ontruimer — van offerte tot oplevering" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Zo verloopt een woningontruiming bij ons
              </h1>
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Woningontruiming is ons vak</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              Een woning die leeg moet, na een overlijden, een verhuizing naar een zorginstelling of een verkoop: dat doen wij al meer dan
              vijftien jaar, en een bedrijfspand, een spoedklus of een verhuizing gaat op dezelfde manier. Alles wat u op deze site
              tegenkomt is een onderdeel van die ene werkwijze: eerst kijken wat waarde heeft, dan één bod op de inboedel, dan de
              ontruiming met een vaste prijs, en een oplevering met garantie.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              En door alles heen: zo weinig mogelijk naar de verbrandingsoven. Wat waarde heeft, krijgt een nieuwe eigenaar. Wat bruikbaar is,
              gaat naar de kringloop en goede doelen. Wat overblijft, wordt gescheiden afgevoerd. Dat is geen extra dienst; het is de manier
              waarop wij elke woning leeghalen.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Zo verloopt het, in vijf stappen</h2>
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
                  <p className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 font-light leading-relaxed">
                    <span className="font-medium text-slate-700">Duurzaam: </span>{stap.duurzaam}
                  </p>
                  {stap.film && (
                    <div className="relative overflow-hidden rounded-xl mt-4 aspect-video bg-slate-100">
                      <DuurzaamFilm plek="werkwijze" className="absolute inset-0 w-full h-full object-cover" bijschrift="Hergebruik via kringloop, de rest verantwoord afgevoerd" />
                    </div>
                  )}
                  <p className="mt-4">
                    <Link href={stap.href} className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:underline">{stap.knop} →</Link>
                  </p>
                </li>
              ))}
            </ol>

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
