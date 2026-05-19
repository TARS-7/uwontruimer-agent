import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Werkwijze | UwOntruimer.nl",
  description: "Bedrijfsontruiming: snel en vakkundig ontruimd door uw ontruimer. Uw bedrijfspand dient leeg en conform de huurovereenkomst opgeleverd te worden. Wij lever",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-80 overflow-hidden">
          <Image src="/bedrijfsontruiming.png" alt="Professionele bedrijfsontruiming" fill className="object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Werkwijze</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Bedrijfsontruiming: snel en vakkundig ontruimd door uw ontruimer. Uw bedrijfspand dient leeg en conform de huurovereenkomst opgeleverd te worden. Wij leveren ook aanvullende diensten:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Klus- of sloopwerkzaamheden</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Vloerverwijdering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Schoonmaakwerkzaamheden</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Archiefvernietiging (dossier en papier)</span>
              </li>
            </ul>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Offerte op maat</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Archiefvernietiging</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Bruikbare goederen worden naar gewenste locatie gebracht</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Afval wordt door ons verwijderd en afgevoerd</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Herstelwerkzaamheden worden uitgevoerd</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Pand wordt in originele staat opgeleverd</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Neem contact op voor een bedrijfsontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wilt u een bedrijfspand laten ontruimen? Neem dan gerust contact met ons op.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Bel ons landelijke telefoonnummer 085 – 30 35 894</li>
              <li>Wij nemen telefonisch uw gegevens op, zijn er nog bijzonderheden? Geef dit aan.</li>
              <li>U krijgt van ons een offerte per e-mail.</li>
              <li>Na akkoord staan wij op de afgesproken datum en tijd klaar op locatie.</li>
              <li>Wij leveren de ruimte op volgens de gestelde opleveringseisen.</li>
              <li>Sleuteloverdracht. U hoeft niet bij de ontruiming aanwezig te zijn u heeft immers wel wat anders aan uw hoofd. Wel moet iemand ons toegang tot de woning verschaffen. Dit kunnen ook medewerkers of kennissen zijn. Of u laat de sleutel achter bij de receptie indien deze aanwezig is.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Duurzaamheid</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer zet zich actief in voor een duurzame toekomst. Zo werken wij samen met diverse kringlooporganisaties en goede doelen om zoveel mogelijk van de boedel te hergebruiken.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Recyclen vinden wij eveneens heel belangrijk. Zo wordt zoveel mogelijk van het afval apart gescheiden zodat deze gerecycled kunnen worden.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor bedrijfsontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 font-medium mb-2">Hulp nodig?</p>
          <p className="text-slate-500 font-light text-sm mb-4">
            Bel Uw Ontruimer op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag vrijblijvend een offerte aan.
          </p>
          <a href="/offerte" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
            Gratis offerte aanvragen
          </a>
        </div>
          </div>
        </div>
        <WizardCallout />
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
