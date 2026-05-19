import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vraag een taxatie aan voor een prijsbepaling van uw object of inboedel | UwOntruimer.nl",
  description: "Benieuwd naar de waarde van uw inboedel? Dan biedt Uw Ontruimer uitkomst! Het kan gaan om een schilderij van een meester,  design meubel of een complete in",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-80 overflow-hidden">
          <Image src="/waardevolle.spullen.png" alt="Taxatie van waardevolle spullen" fill className="object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vraag een taxatie aan voor een prijsbepaling van uw object of inboedel</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Benieuwd naar de waarde van uw inboedel? Dan biedt Uw Ontruimer uitkomst! Het kan gaan om een schilderij van een meester,  design meubel of een complete inboedel. Niet alleen taxeren, onze service biedt ook een oplossing voor het afhandelen van de verkoop. Zo biedt Uw Ontruimer een eerlijke prijs en koopt dit op naar waarde. Dit bedrag kan verrekend worden met een ontruiming!</p>
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
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wij werken uitsluitend met ervaren en erkende taxateurs.</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij werken met ervaren experts die een weloverwogen waardebepaling geven aan uw goederen volgens de richtlijnen van de Federatie TMV.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voor alle roerende goederen een oplossing</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bij Uw Ontruimer regelen wij alles van A tot Z. Zo bieden wij u een eerlijke prijs voor waardevolle goederen en kunnen wij de rest- inboedel voor uw afwikkelen. Liever laten veilen? Wij hebben een groot netwerk van veilinghuizen en regelen daarvoor de afhandeling en het transport. Voor goederen die geen waarde vertegenwoordigen vinden wij tevens een nieuwe eigenaar, denk hierbij aan goede doelen of kringlooporganisaties.</p>
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
