import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taxatie inboedel | UwOntruimer.nl",
  description: "Vraag een taxatie aan voor een prijsbepaling van uw object of inboedel. Ervaren en erkende taxateurs volgens richtlijnen Federatie TMV. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Intro */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Taxatie</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Vraag een taxatie aan voor een prijsbepaling van uw object of inboedel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Benieuwd naar de waarde van uw inboedel? Dan biedt Uw Ontruimer uitkomst! Het kan gaan om een schilderij van een meester, een design meubel of een complete inboedel. Niet alleen taxeren — onze service biedt ook een oplossing voor het afhandelen van de verkoop. Zo biedt Uw Ontruimer een eerlijke prijs en koopt dit op naar waarde. Dit bedrag kan verrekend worden met een ontruiming!
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Neem direct contact op
            </Link>
          </div>
        </div>

        {/* Erkende taxateurs */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Wij werken uitsluitend met ervaren en erkende taxateurs</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Wij werken met ervaren experts die een weloverwogen waardebepaling geven aan uw goederen volgens de richtlijnen van de Federatie TMV.
            </p>
          </div>
        </div>

        {/* Totaaloplossing */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Voor alle roerende goederen een oplossing</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-6">
              Bij Uw Ontruimer regelen wij alles van A tot Z. Zo bieden wij u een eerlijke prijs voor waardevolle goederen en kunnen wij de rest-inboedel voor u afwikkelen. Liever laten veilen? Wij hebben een groot netwerk van veilinghuizen en regelen daarvoor de afhandeling en het transport. Voor goederen die geen waarde vertegenwoordigen vinden wij tevens een nieuwe eigenaar — denk hierbij aan goede doelen of kringlooporganisaties.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0853035894" className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Bel ons — 085-303 58 94
              </a>
              <Link href="/diensten/inboedel-veilen" className="inline-flex items-center gap-2 border border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Meer over inboedel veilen
              </Link>
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
