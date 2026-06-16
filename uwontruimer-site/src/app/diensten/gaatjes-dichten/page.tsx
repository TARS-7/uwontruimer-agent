import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gaatjes dichten | Muren herstellen na ontruiming of renovatie - Uw Ontruimer",
  description: "Gaatjes laten dichten na ontruiming of demontage? ✓ Schroefgaten, ankerplekken & grote uitsparingen vakkundig hersteld ✓ Stucwerk egaal ✓ Direct schilderklaar.",
  alternates: { canonical: "/diensten/gaatjes-dichten/" },
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
          <Image src="/Ontruimers.png" alt="Gaatjes dichten na ontruiming" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Gaatjes dichten:<br />Muren hersteld en schilderklaar
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Egaal stucwerk", "Direct schilderklaar"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke beschadigingen herstellen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na een ontruiming, demontage of renovatie zitten muren en plafonds vol sporen van het verleden: schroefgaten van inbouwkasten, ankerboringen van trapliften, grote uitsparingen van verwijderde scheidingswanden of resterende vlekken van bevestigingsmateriaal. Uw Ontruimer herstelt al deze beschadigingen vakkundig — zodat muren er egaal uitzien en klaar zijn voor de schilder of behanger.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Schroefgaten & spijkergaten", omschrijving: "Kleine gaatjes van schroeven, spijkers en pluggen worden gevuld met reparatieplamuur, geschuurd en egaal afgewerkt." },
                { titel: "Ankergaten & grote boorgaten", omschrijving: "Boorgaten van ankers, deuvels of kabelinvoeren worden met mortel of reparatiestuc dichtgezet en vlak afgewerkt." },
                { titel: "Uitsparingen & metselwerkgaten", omschrijving: "Grotere openingen in muurwerk van vroegere constructies worden dichtgemetseld of met reparatiestuc opgebouwd en gelijk gemetseld." },
                { titel: "Plafondschade & stukadoorswerk", omschrijving: "Ingeslagen plafondgaten, loszittend stucwerk en losse plafonddelen worden vakkundig hersteld zodat het plafond weer egaal is." },
                { titel: "Scheurvoegen & kieren", omschrijving: "Scheuren in pleisterwerk, voegwerk en rond kozijnen worden behandeld met elastische kit of reparatiestuc, afhankelijk van de oorzaak." },
                { titel: "Tegel- en betegeling herstel", omschrijving: "Ontbrekende tegels na verwijdering van douche of keukeninrichting worden vervangen of de resterende opening wordt netjes dichtgezet." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom gaatjes dichten bij oplevering zo belangrijk is</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Bij de oplevering van een huurwoning of koop­woning worden muren beoordeeld op de staat van onderhoud. Onherstelde gaatjes, losliggend stucwerk of zichtbare ankerpunten kunnen leiden tot inhouding op de borg of vertraging bij de overdracht. Wij zorgen ervoor dat de muren er verzorgd uitzien en voldoen aan de redelijke verwachting van de verhuurder of koper — zonder dat u een aparte stucadoor hoeft in te huren.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Alle gangbare reparatiemethoden: plamuur, stuc en mortel",
                "Oppervlakken geschuurd en egaal afgewerkt",
                "Direct schilderklaar opgeleverd",
                "Kleine en grote uitsparingen — ook in plafond",
                "Combineerbaar met ontruiming en vloerverwijdering",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Gaatjes dichten na woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Wij bieden het herstel van muren en plafonds als aanvullende dienst op onze <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a>. Na de ontruiming inventariseren we welke beschadigingen er zijn en herstellen we die in dezelfde opdracht. Zo levert u de woning in één keer op in de gewenste staat — zonder extra planning of extra aannemer. Ideaal voor verhuurders, makelaars en particulieren die de woning snel en compleet willen overdragen.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost gaatjes dichten?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs is afhankelijk van het aantal en de grootte van de beschadigingen. Kleine klussen met tientallen schroefgaten zijn snel en goedkoop klaar; grotere uitsparingen of meerdere kamers met uitgebreide schade vragen meer tijd en materiaal.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Kleine klus (t/m 20 gaatjes)", prijs: "vanaf €150,–" },
                { type: "Middelgrote klus (20–60 gaatjes)", prijs: "vanaf €250,–" },
                { type: "Grotere uitsparingen of scheurwerk", prijs: "vanaf €350,–" },
                { type: "Volledig pand (gecombineerd met ontruiming)", prijs: "op maat" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe gaan we te werk?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na uw aanvraag via de AI-wizard of per telefoon plannen wij een inspectie. Stuur gerust foto's mee zodat wij al op afstand een indicatie kunnen geven. Op de uitvoeringsdag brengen onze vakmensen alle beschadigingen in kaart, behandelen elk type schade met het juiste materiaal en schuren de oppervlakken glad. U ontvangt muren die klaar zijn voor primer, verf of behang. Betaling achteraf op factuur.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
