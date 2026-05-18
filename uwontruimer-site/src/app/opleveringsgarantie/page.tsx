import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Opleveringsgarantie",
  description: "Elke ontruiming door UwOntruimer wordt afgesloten met een schriftelijke opleveringsgarantie. Lees meer over onze garantie.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Garantie</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Opleveringsgarantie</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Elke ontruiming die UwOntruimer uitvoert, wordt afgesloten met een schriftelijke opleveringsgarantie. Dit document bevestigt dat het pand leeg, schoon en bezem­schoon is opgeleverd conform de gemaakte afspraken.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">De opleveringsgarantie is een officieel document dat u kunt overleggen aan de verhuurder, de notaris, de makelaar of andere betrokken partijen. Het geeft zekerheid over de staat van het pand na de ontruiming.</p>
            <p className="text-slate-500 font-light leading-relaxed">Heeft u vragen over onze garantie? Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a>.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
