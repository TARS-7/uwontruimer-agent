import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Keuken verwijderen | Keuken laten slopen & afvoeren - Uw Ontruimer",
  description: "Keuken laten verwijderen? ✓ Complete keukensloping inclusief afzuiging & apparatuur ✓ Leidingwerk afgedopt ✓ Duurzame afvoer ✓ Combineerbaar met woningontruiming.",
  alternates: { canonical: "/diensten/keuken-verwijderen/" },
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
          <Image src="/Ontruimers.png" alt="Keuken verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Keuken verwijderen:<br />Compleet gesloopt en afgevoerd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Leidingwerk afgedopt", "Duurzame materiaalscheiding"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat houden wij bij een keukenverwijdering?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een keuken slopen is meer dan kasten losschroeven. Gas-, water- en elektrische aansluitingen moeten veilig worden losgekoppeld, werkbladen zijn soms vastgemetseld en inbouwapparatuur zit vaak ingeklemd achter panelen. Uw Ontruimer verzorgt de complete demontage — van hoog naar laag, van kastje tot tegel.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Onderbouw- & bovenbouwkasten", omschrijving: "Alle hangkasten, onderbouwkasten en hoekoplossingen worden losgeschroefd, zorgvuldig uitgebouwd en gedemonteerd." },
                { titel: "Werkblad & spoelbak", omschrijving: "Stenen, houten en composiet werkbladen inclusief spoelbak en kraan worden vakkundig losgekoppeld en afgevoerd." },
                { titel: "Inbouwapparatuur", omschrijving: "Oven, magnetron, vaatwasser, koelkast en afzuigkap worden ontkoppeld — gas en stroom op de juiste manier losgezet." },
                { titel: "Keukenachterwand & spatbescherming", omschrijving: "Tegels, glazen panelen of rvs-achterwanden worden verwijderd, inclusief de resterende voeg en tegellijm." },
                { titel: "Gasaansluiting afschakelen", omschrijving: "Onze gecertificeerde medewerkers schakelen de gasleiding veilig af en doppen de aansluiting af conform de NEN-normen." },
                { titel: "Waterleiding afkoppelen & afdoppen", omschrijving: "Hot en cold aansluitingen worden losgekoppeld, waterdruk afgeblazen en aansluitingen netjes afgesloten." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Veilig werken met gas, water en elektra</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een keuken zelf slopen zonder kennis van installaties is riskant. Een gaskoppeling die niet correct is afgesloten kan leiden tot lekkage of erger. Wateraansluitingen die niet goed zijn afgedopt veroorzaken schade. Uw Ontruimer werkt met gecertificeerde installateurs die alle aansluitingen veilig en conform wet- en regelgeving afschakelen. Na de sloping ontvangt u een keukenruimte die leeg, veilig en gereed is voor de volgende fase — of dat nu een nieuwe keuken, een renovatie of een volledige ontruiming is.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Gecertificeerde afkoppeling van gas, water en elektra",
                "Alle kasten, werkbladen en apparatuur volledig verwijderd",
                "Keukenruimte bezemschoon opgeleverd",
                "Materiaalscheiding: hout, metaal en wit- & bruingoed apart",
                "Waardevolle apparatuur eventueel opgekocht",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Keuken verwijderen bij woningontruiming of renovatie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Het verwijderen van een keuken is een veelgevraagde aanvulling op onze <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a>. Wij ontruimen de woning compleet — inclusief de keuken — en leveren het pand in de gewenste staat op aan verhuurder, makelaar of aannemer. Ook als u uitsluitend de keuken wilt laten verwijderen ter voorbereiding op een renovatie of verbouwing, staan we voor u klaar. Combineer de klus desgewenst met het verwijderen van de badkamerinrichting, sanitair of vloerbedekking.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost een keuken verwijderen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs hangt af van de omvang van de keuken, het type aansluitingen en de hoeveelheid materiaal die afgevoerd moet worden. Kleine keukens zijn al voor een scherp tarief weg; grotere keukenopstellingen of keukens met extra aansluitingen vragen om maatwerk.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Kleine keuken (rechte opstelling)", prijs: "vanaf €350,–" },
                { type: "Middel keuken (hoekopstelling)", prijs: "vanaf €550,–" },
                { type: "Grote keuken met eiland", prijs: "vanaf €750,–" },
                { type: "Inclusief tegels achterwand (per m²)", prijs: "vanaf €8,–" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap voor stap: zo werkt het</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              U vraagt een offerte aan via de AI-wizard of belt ons. Wij plannen een inspectie, beoordelen de situatie en geven een vaste prijs op. Op de geplande dag koppelen onze vakmensen alle aansluitingen veilig los, demonteren de keuken volledig en voeren alles verantwoord af. De keukenruimte wordt schoongemaakt en bezemschoon overgedragen. Betaling achteraf op factuur.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
