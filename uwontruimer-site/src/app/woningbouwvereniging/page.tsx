import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Woningbouwvereniging - Woning laten voldoen aan opleveringseisen",
  description: "Is de huurder niet in staat de ontruiming zelf uit te voeren Uw Ontruimer levert de woning op naar opleveringseisen",
  alternates: { canonical: "/woningbouwvereniging" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Samenwerking</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Woningbouwvereniging</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Het komt vaak voor dat een huurder niet in de gelegenheid is om de woning op te leveren. Uw Ontruimer heeft ruim 10 jaar ervaring als ontruimingsbedrijf. Wij staan voor kwaliteit en werkkracht. Bent u op zoek naar een partner voor het ontruimen van woningen? Dan bent u bij ons aan het goede adres.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Kies voor een samenwerking met Uw Ontruimer</h2>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voor- en eindinspectie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze services zijn groot. Zo doen wij voor onze klanten de voor- en eindinspectie. Wij leveren de woning dan helemaal naar eisen van de voorinspectie op. Zo kunnen wij onze klanten helemaal ontzorgen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Discrete en respectvolle woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Onze medewerkers hebben een georganiseerde werkwijze en gaan op een respectvolle manier met de ontruiming om. Indien nodig wordt de hele inboedel geïnventariseerd en gedocumenteerd.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Geïnteresseerd in een samenwerking met ons?</h2>
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
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
