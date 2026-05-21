import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bedrijfsontruiming - Al meer dan 15 jaar ervaring",
  description: "Op zoek naar een expert voor het ontruimen van uw bedrijfspand? Bekijk dan de mogelijkheden bij Uw Ontruimer. Duurzaam en discreet.",
  alternates: { canonical: "/diensten/bedrijfsontruiming/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image
            src="/bedrijfsontruiming.png"
            alt="Professionele bedrijfsontruiming"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Bedrijfsontruiming: Snel en vakkundig<br />uw bedrijfspand bezemschoon
              </h1>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "15+ jaar ervaring",
              "Schriftelijke opleveringsgarantie",
              "Binnen 24 uur beschikbaar",
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

        {/* Content */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>

            {/* Amber CTA */}
            <div className="mb-10">
              <a
                href="https://analyse.uwontruimer.nl"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
                style={{ backgroundColor: "#d97706" }}
              >
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Bedrijfspand ontruimen van A tot Z</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw bedrijfspand dient bij het verlaten leeg en conform de huurovereenkomst te worden opgeleverd. Of het gaat om een kantoorpand, winkelruimte, opslagruimte of industrieel object — Uw Ontruimer verzorgt de volledige bedrijfsontruiming van inventarisatie tot sleuteloverdracht. Discreet, efficiënt en binnen de afgesproken termijn.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Kantoren, winkels, magazijnen en industriële objecten",
                "Volledige of gedeeltelijke ontruiming op maat",
                "Ook bij spoedgevallen binnen 24 uur ter plaatse",
                "Archiefvernietiging conform AVG-wetgeving",
                "Bruikbare inventaris naar gewenste locatie of veiling",
                "Bezemschone oplevering inclusief foto-rapportage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Onze aanvullende zakelijke diensten</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Naast de standaard bedrijfsontruiming biedt Uw Ontruimer een volledig pakket aan aanvullende diensten, zodat u na afloop direct uw pand kunt overdragen:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Vloerverwijdering", omschrijving: "Parket, laminaat, tapijt, tegels — wij verwijderen alle typen vloerbedekking vakkundig en stofvrij." },
                { titel: "Klus- en sloopwerkzaamheden", omschrijving: "Tussenmuurtjes, kastenwanden, plafondplaten — volledig slopen en afvoeren." },
                { titel: "Archiefvernietiging", omschrijving: "Veilige vernietiging van dossiers en digitale dragers conform AVG, inclusief certificaat." },
                { titel: "Schoonmaakwerkzaamheden", omschrijving: "Eindreiniging van vloeren, wanden en sanitaire ruimten na de ontruiming." },
                { titel: "Opkoop en veiling inventaris", omschrijving: "Waardevolle bedrijfsinventaris wordt opgekocht of geveild — dit verlaagt uw ontruimingskosten." },
                { titel: "Herstelwerkzaamheden", omschrijving: "Kleine reparaties zoals spackling, sauswerk of het wegwerken van bevestigingspunten." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Onze werkwijze in 5 stappen</h2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Telefonische intake", tekst: "Bel 085-303 58 94 of start de AI-wizard. Wij nemen uw gegevens op en stellen gerichte vragen over de omvang, bijzonderheden en gewenste opleverdatum." },
                { stap: "2", titel: "Offerte op maat", tekst: "U ontvangt een gedetailleerde vaste-prijs offerte met schriftelijke opleveringsgarantie. Geen verborgen kosten." },
                { stap: "3", titel: "Ontruiming op afgesproken datum", tekst: "Ons team start precies op tijd. Waardevolle inventaris wordt geïnventariseerd voor opkoop of veiling en verrekend met de offerte." },
                { stap: "4", titel: "Bezemschone oplevering", tekst: "Het pand wordt volledig leeggemaakt, schoongemaakt en indien gewenst hersteld tot oorspronkelijke staat. U ontvangt een foto-rapportage." },
                { stap: "5", titel: "Sleuteloverdracht", tekst: "U hoeft niet aanwezig te zijn. Een medewerker, receptionist of contactpersoon kan ons toegang verschaffen. Na oplevering regelen wij de sleuteloverdracht aan verhuurder of notaris." },
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

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Maatschappelijk verantwoord en duurzaam</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              Uw Ontruimer zet zich actief in voor een duurzame bedrijfsvoering. Wij streven ernaar zo min mogelijk naar de stortplaats te brengen:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Samenwerking met regionale kringlooporganisaties en goede doelen",
                "Waardevolle inventaris gaat naar opkoop, veiling of hergebruik",
                "Gescheiden afvalinzameling voor maximale recycling",
                "Archiefvernietiging met certificaat conform AVG",
                "CO₂-bewuste planning — zo min mogelijk ritten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Direct een prijsindicatie via onze zakelijke AI-tool</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Via de AI-wizard van Uw Ontruimer uploadt u eenvoudig foto's van uw bedrijfspand en ontvangen u binnen 2 minuten een scherpe prijsindicatie. Geen vertegenwoordiger die langskomt, geen wachttijd — direct duidelijkheid over de kosten.
            </p>

            {/* Bottom CTA box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Klaar voor de volgende stap?</h2>
              <p className="text-slate-500 font-light text-sm mb-6">
                Ontvang binnen 2 minuten een vrijblijvende prijsindicatie via onze AI-wizard, of bel direct voor een afspraak.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href="https://analyse.uwontruimer.nl"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
                  style={{ backgroundColor: "#d97706" }}
                >
                  Start de AI-wizard →
                </a>
                <a
                  href="tel:0853035894"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl transition-colors text-base"
                >
                  Bel 085-303 58 94
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {["100% Gratis & Vrijblijvend", "Direct een prijsindicatie", "Foto's uploaden via mobiel"].map((item) => (
                  <span key={item} className="text-xs text-slate-400 flex items-center gap-1">
                    <svg className="w-3 h-3 text-slate-300" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
