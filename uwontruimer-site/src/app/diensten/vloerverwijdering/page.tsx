import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vloerverwijdering | Snel uw vloer laten verwijderen? - Uw Ontruimer",
  description: "Wij verwijderen uw vloer op een professionele manier. ✓ Vloerverwijdering specialist ✓ Ruim 10 jaar ervaring ✓ Duurzaam ✓ Actief in héél NL.",
  alternates: { canonical: "/diensten/vloerverwijdering/" },
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
          <Image src="/Ontruimers.png" alt="Vloer verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Vloerverwijdering:<br />Professioneel en snel verwijderd
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Stofvrij werken", "Duurzame afvoer"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke vloeren verwijderen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer verwijdert vakkundig alle soorten vloerbedekking — van versleten tapijt tot vastgelijmd parket. Wij beschikken over professioneel gereedschap zoals vloerenstrippers, schrapmessen en stootijzers, zodat ook meerdere lagen over elkaar efficiënt worden verwijderd.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Laminaat & parket", omschrijving: "Klikparket en gelijmd parket worden zorgvuldig losgemaakt en afgevoerd zonder de ondervloer te beschadigen." },
                { titel: "Tapijt & vloerbedekking", omschrijving: "Vaste tapijten, losliggend tapijt en pvc-vloerbedekking — inclusief de ondertapijt en bevestigingsstrips." },
                { titel: "Tegels & plavuizen", omschrijving: "Keramische tegels, plavuizen en natuursteen worden uitgehakt en verantwoord afgevoerd als bouwafval." },
                { titel: "PVC & vinyl", omschrijving: "Zelfklevende vinylstroken, klik-pvc en gelijmde vinylvloeren inclusief restlijmlaag." },
                { titel: "Kurk & linoleum", omschrijving: "Gelijmd kurk en linoleum inclusief lijmresten op de betonvloer worden professioneel verwijderd." },
                { titel: "Epoxy & gietvloer", omschrijving: "Industriële gietvloeren en epoxycoatings worden gefreesd of geslepen tot op de ondergrond." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom kiezen voor professionele vloerverwijdering?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Een vloer zelf verwijderen lijkt eenvoudig, maar is het zelden. Meerdere lagen over elkaar, onbekende ondervloer, asbesthoudende lijmresten of een vaste betonvloer kunnen voor vervelende verrassingen zorgen. Uw Ontruimer inspecteert de situatie van tevoren en werkt met de juiste materialen — veilig, snel en stofvrij.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Professioneel gereedschap voor elk type vloer",
                "Stofvrij werken met afzuiginstallatie waar mogelijk",
                "Meerdere lagen tegelijk verwijderd in één bezoek",
                "Verantwoorde afvoer en sortering van bouwafval",
                "Combineerbaar met woningontruiming of renovatie",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Vloerverwijdering combineren met ontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Vloerverwijdering maakt vaak deel uit van een grotere ontruiming of renovatie. Uw Ontruimer biedt een compleet pakket: wij verwijderen eerst de inboedel, daarna de vloerbedekking, en leveren het pand bezemschoon op. Zo heeft u één aanspreekpunt en één factuur.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost vloerverwijdering?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs hangt af van het type vloer, de oppervlakte en eventuele bijzonderheden zoals meerdere lagen of asbestonderzoek. Gebruik de AI-wizard voor een directe indicatie.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Tapijt / laminaat (per m²)", prijs: "vanaf €4,–" },
                { type: "Tegels (per m²)", prijs: "vanaf €8,–" },
                { type: "Gelijmd parket (per m²)", prijs: "vanaf €7,–" },
                { type: "Epoxy / gietvloer (per m²)", prijs: "op maat" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
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
