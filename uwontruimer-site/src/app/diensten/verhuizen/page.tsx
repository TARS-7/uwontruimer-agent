import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Verhuizen van groot naar klein of seniorenverhuizing | UwOntruimer.nl",
  description: "Bij een seniorenverhuizing kunnen meestal niet alle spullen mee naar de nieuwe locatie of woning. Wij kunnen dan de gewenste goederen naar de nieuwe bestem",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Verhuizen van groot naar klein of seniorenverhuizing</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Bij een seniorenverhuizing kunnen meestal niet alle spullen mee naar de nieuwe locatie of woning. Wij kunnen dan de gewenste goederen naar de nieuwe bestemming brengen en de overige goederen uit de woning verwijderen. De goederen die u niet meeneemt worden beschikbaar gesteld aan kringlooporganisaties en andere goede doelen. Zoveel mogelijk van de restboedel wordt hergebruikt.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Discreet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Duurzaam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Opleveringsgarantie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">15+ jaar ervaring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Ontzorgt</span>
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen verhuizen met verhuislift</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze verhuisservice is groot. Zo hebben wij onze eigen verhuislift waarmee het een stuk makkelijker wordt. Bijvoorbeeld wanneer u in een appartementencomplex op de derde of vierde verdieping woont biedt de verhuislift een goede oplossing. Doordat uw meubels met de verhuislift worden verplaatst beschadigen deze ook niet. Daarnaast scheelt het gebruik van een dergelijke lift een hoop manuren die u anders kwijt bent aan het sjouwen op de trap. Deze pluspunten zult u ook merken aan uw portemonnee!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hulp bij Seniorenverhuizing</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Voor ouderen is een verhuizing net even wat ingrijpender. Een seniorenverhuizing vraagt om meer begeleiding en zorg. Desgewenst kunnen wij de verhuizing met begeleiding voor de oudere verzorgen. Dit houdt in dat u één aanspreekpunt krijgt toegewezen van ons. Deze persoon begeleidt u bij de gehele verhuizing. Onze medewerker neemt dan de tijd om u te helpen en te ondersteunen met het uitkiezen van de meubelen en huisraad om mee te verhuizen. En zorgt ervoor dat spullen die niet mee kunnen een goede nieuwe bestemming krijgen</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Vrijblijvende offerte</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De prijzen van een seniorenverhuizing zijn afhankelijk van de werkzaamheden die uitgevoerd moeten worden. Neem contact op voor een persoonlijk gesprek en een vrijblijvende offerte.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor woning ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte</p>
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
