import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Opkopen inboedel",
  description: "Waardevolle inboedel verkopen en verrekenen met de ontruimingskosten. Eerlijke taxatie, directe afhandeling. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Opkopen inboedel</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer koopt waardevolle inboedelstukken op en verrekent de opbrengst met de ontruimingskosten. Denk aan meubels, witgoed, kunst, antiek, gereedschap en elektronica — wij beoordelen alles op locatie.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Door de opbrengst te verrekenen, worden de netto kosten voor u lager. U heeft slechts één aanspreekpunt voor de volledige afhandeling: taxatie, opkoop én ontruiming.</p>
            <p className="text-slate-500 font-light leading-relaxed">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een gratis bezichtiging en taxatie.</p>
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
