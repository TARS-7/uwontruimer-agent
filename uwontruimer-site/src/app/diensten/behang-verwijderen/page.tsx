import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Behang verwijderen | Professioneel behang laten strippen - Uw Ontruimer",
  description: "Behang laten verwijderen? ✓ Alle soorten behangtechnieken ✓ Muren intact gelaten ✓ Snel & grondig ✓ Combineerbaar met woningontruiming. Vraag gratis offerte aan.",
  alternates: { canonical: "/diensten/behang-verwijderen/" },
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
          <Image src="/Ontruimers.png" alt="Behang verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Behang verwijderen:<br />Muren schoon en klaar voor een nieuw begin
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["15+ jaar ervaring", "Muren intact", "Droog gereed opgeleverd"].map((item) => (
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

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Welke soorten behang verwijderen wij?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Behang verwijderen is een vak apart. Oud behang zit soms zo stevig aan de muur dat onjuist strippen de onderlaag beschadigt. Onze vakmensen kennen de technieken en middelen om elk type behang vakkundig te verwijderen — van moderne vinylbehang tot decennia oud papier dat laag voor laag verwijderd moet worden.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Papier- en vliesbehang", omschrijving: "Klassiek papierbehang en vliesbehang worden week gemaakt met heet water of stoom en zorgvuldig gestript zonder de gipsplaat te beschadigen." },
                { titel: "Vinylbehang", omschrijving: "De vinyllaag laat de dragerlaag los, maar die beschermlaag moet ook verwijderd worden. Wij werken dat grondig weg." },
                { titel: "Structuurbehang & ruw spack", omschrijving: "Grof structuurbehang en spachtelputz vragen extra werk met schrapers en schuurmiddelen. Wij leveren een egale muur op." },
                { titel: "Meerdere lagen behang", omschrijving: "In oudere woningen zitten soms vijf of zes lagen over elkaar. Wij brengen alle lagen vakkundig weg tot op het pleisterwerk." },
                { titel: "Behang op gipsplaat", omschrijving: "Gipsplaat is kwetsbaar bij nat stomen. Onze specialisten weten precies hoe ze behang op gipsplaat verwijderen zonder de plaat te beschadigen." },
                { titel: "Behang in vochtige ruimten", omschrijving: "Badkamer- of keukenbehang kan schimmel achter de laag verbergen. Wij signaleren het en adviseren u over de vervolgstap." },
              ].map(({ titel, omschrijving }) => (
                <div key={titel} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-medium text-slate-800 mb-1 text-sm">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{omschrijving}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom professioneel behang laten verwijderen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Zelf behang verwijderen kost al snel een heel weekend — en dan is de kans nog groot dat u de muur beschadigt. Natte gipsplaat scheurt, oud pleisterwerk brokkelt en resterende lijmlagen zorgen ervoor dat nieuw behang of verf niet hecht. Onze mensen werken met stoomapparaten, enzymatische weekmiddelen en professionele schrapers om de muur in optimale staat achter te laten voor uw schilder of behanger.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Stoomapparaten en enzymatische weekmiddelen",
                "Muren intact: geen beschadigingen of scheuren",
                "Alle lijmresten grondig verwijderd",
                "Muren droog opgeleverd, klaar voor schilderwerk",
                "Signalering van vocht- of schimmelproblematiek",
                "Actief in heel Noord-Holland, Zuid-Holland en Utrecht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-slate-600 font-light">{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Behang verwijderen als onderdeel van woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Staat u op het punt een woning te ontruimen voor verkoop, verhuur of renovatie? Dan is het verwijderen van behang een logische aanvullende stap. Uw Ontruimer biedt een totaalpakket: wij ruimen de inboedel uit, verwijderen vloerbedekking, strippen het behang en leveren het pand bezemschoon op. Via onze <a href="/diensten/woningontruiming" className="text-blue-600 hover:underline">woningontruiming</a> regelen we alles in één keer — één planning, één factuur, één aanspreekpunt.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost behang verwijderen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De prijs hangt af van het aantal m² behang, het type ondergrond en het aantal lagen. Meerdere lagen en beschadigde muren vragen meer tijd. Via de AI-wizard geeft u eenvoudig de situatie door en ontvangt u direct een indicatie.
            </p>
            <ul className="space-y-2 mb-10 text-sm">
              {[
                { type: "Standaard behang (per m²)", prijs: "vanaf €3,50" },
                { type: "Kleine klus (1–2 kamers)", prijs: "vanaf €150,–" },
                { type: "Meerdere lagen (per m²)", prijs: "vanaf €6,–" },
                { type: "Volledig pand", prijs: "vanaf €350,–" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe verloopt de opdracht?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Na uw aanvraag via de AI-wizard of telefonisch contact maken wij een afspraak voor een vrijblijvende inspectie. Wij beoordelen het type behang, de ondergrond en het aantal lagen en geven u een vaste prijs. Op de uitvoeringsdag beschermen wij vloeren en aangrenzende oppervlakken, verwijderen wij al het behang en ruimen wij al het afval af. U ontvangt een schone, gladde muur — klaar voor schilder of behanger.
            </p>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
