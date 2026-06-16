import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tuin snoeien & opschonen | Tuin laten leegmaken voor oplevering - Uw Ontruimer",
  description: "Tuin laten snoeien en opschonen? ✓ Struiken, bomen & begroeiing verwijderd ✓ Groenafval afgevoerd ✓ Tuin leeg voor oplevering ✓ Combineerbaar met woningontruiming.",
  alternates: { canonical: "/diensten/tuin-snoeien-opschonen/" },
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

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/Ontruimers.png" alt="Tuin snoeien en opschonen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Tuin snoeien & opschonen:<br />Leeg, netjes en opleverklaar
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Groenafval afgevoerd", "Tuin opleverklaar"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat houdt tuin snoeien en opschonen in?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een verwaarloosde of overwoekerde tuin is een veelvoorkomend onderdeel van een ontruimingsopdracht. Na jarenlang bewoning staat de begroeiing soms zo hoog dat het pad nauwelijks begaanbaar is, de schuttingen onzichtbaar zijn achter klimplanten en bomen scheuten de gevel hebben bereikt. Uw Ontruimer snoeit, maait, wiedt en ruimt de complete tuin op — inclusief afvoer van al het groenafval.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij werken niet met een standaard tuinierbeurt, maar met een resultaatgerichte aanpak: de tuin is na afloop leeg, netjes en gereed voor oplevering aan verhuurder, makelaar of nieuwe eigenaar. Dat betekent ook het verwijderen van tuinmeubilair, potgrond, compostbakken en achtergelaten tuinmateriaal.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Struiken & heesters snoeien", omschrijving: "Overwoekerde struiken, ligusterhaagjes en heesters worden flink teruggesnoeid of volledig verwijderd, inclusief wortelstronk." },
                { titel: "Bomen snoeien & rooien", omschrijving: "Laaghangende takken, dode stammen en ongewenste opschot worden gesnoeid. Kleine bomen worden indien gewenst geheel gerooid en verwijderd." },
                { titel: "Klimplanten & onkruid verwijderen", omschrijving: "Wingerd, klimop, braamstruiken en woekerende onkruiden worden tot op de wortel verwijderd van schuttingen, muren en pergola's." },
                { titel: "Gazon maaien & edgen", omschrijving: "Hoog opgeschoten gras wordt gemaaid, randen worden bijgewerkt en mos of kale plekken worden gesignaleerd voor de opdrachtgever." },
                { titel: "Groenafval afvoeren", omschrijving: "Al het snoeihout, bladeren, grasmaaisel en organisch afval wordt geladen en afgevoerd naar een erkende groenverwerker." },
                { titel: "Tuinmateriaal & rommel ruimen", omschrijving: "Achtergelaten potten, gereedschap, schuttingpalen, compostbakken en tuinmeubilair worden geruimd en verantwoord afgevoerd." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom een tuin professioneel laten opschonen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Tuinen die jarenlang niet of nauwelijks zijn onderhouden vertonen problemen die u met een gewone snoeischaar niet oplost. Wortelstokken van bamboe en klimplanten dringen door in funderingen; dode bomen kunnen instabiel zijn; meters hoog groenafval past niet in een paar groene containers. Uw Ontruimer beschikt over professioneel snoeigereedschap, een containerauto voor groenafval en de ervaring om ook de meest verwaarloosde tuin in één dag op te schonen.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bovendien is de tuin bij woningoplevering net zo belangrijk als het interieur. Verhuurders en VvE's stellen vaak als eis dat de tuin leeg en goed onderhouden wordt opgeleverd. Wie dat niet regelt, riskeert inhoudingen op de borg of conflicten bij de overdracht.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Professioneel gereedschap: heggenschaar, kettingzaag, bladblazer",
                "Containerauto voor afvoer van grote hoeveelheden groenafval",
                "Wortelstronken gefreesd of verwijderd op aanvraag",
                "Schuttingen, paden en bestrating vrijgemaakt van begroeiing",
                "Tuin bezemschoon en opleverklaar achtergelaten",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Tuin opschonen als onderdeel van woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              De tuin hoort bij de woning — en bij een complete ontruiming ruimen wij hem dan ook mee op. Via onze <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a> verzorgen wij het totaalpakket: inboedel eruit, vloeren verwijderd, behang gestript en tuin leeg. U heeft één aanspreekpunt, één planning en één factuur. Ideaal bij oplevering aan verhuurder, bij verkoop of bij een erfenis waarbij de woning snel leeg en verkoopklaar moet zijn.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Ook als u alleen de tuin wilt laten opschonen — zonder dat de rest van de woning betrokken is — kunnen wij dat als losse dienst uitvoeren. Wij passen de scope volledig aan op uw situatie.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voor welke situaties schakelt u ons in?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer wordt regelmatig ingeschakeld voor tuinen die jarenlang zijn verwaarloosd na overlijden van de bewoner, tuinen bij huurwoningen die moeten worden opgeleverd aan de woningcorporatie, en tuinen bij woningen die klaar moeten worden gemaakt voor verkoop. Ook makelaars en vastgoedbeheerders kennen ons als betrouwbare partner voor het snel en grondig opschonen van buitenruimten.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Daarbij maakt het niet uit hoe groot de chaos is. Een tuin van 20 m² met wat overgroeid gras is snel klaar; een grote achtertuin van 200 m² met volwassen coniferen, een verwaarloosde moestuin en tientallen jaren aan opgestapeld tuinafval vragen een halve dag met een heel team. Wij beoordelen de situatie eerlijk en geven een vaste prijs zonder verrassingen achteraf.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost tuin snoeien en opschonen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs hangt af van de omvang van de tuin, de mate van verwaarlozing en de hoeveelheid groenafval die afgevoerd moet worden. Wij werken met vaste prijzen die u vooraf kent — geen uurtarief met onzekere eindrekening.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Kleine tuin (t/m 30 m²)", prijs: "vanaf €150,–" },
                { type: "Middelgrote tuin (30–80 m²)", prijs: "vanaf €250,–" },
                { type: "Grote tuin (80 m² en meer)", prijs: "vanaf €350,–" },
                { type: "Zwaar verwaarloosd / bomen rooien", prijs: "op maat" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe verloopt de opdracht?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              U vraagt een offerte aan via de AI-wizard of belt ons rechtstreeks. Stuur gerust een paar foto's van de tuin mee — dan kunnen wij al een eerste inschatting maken zonder dat er iemand langs hoeft. Daarna volgt een inspectie op locatie en ontvangt u een vaste prijs. Op de uitvoeringsdag werkt ons team snel en grondig: snoeien, maaien, ruimen en afvoeren. Aan het einde overlopen wij de tuin met u zodat u zeker weet dat alles naar wens is gedaan. Betaling achteraf op factuur.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
