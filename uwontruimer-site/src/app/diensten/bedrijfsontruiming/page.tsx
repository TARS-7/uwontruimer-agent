import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Bedrijfsontruiming",
  description: "Professionele bedrijfsontruiming van kantoren, winkels en magazijnen. Minimale overlast, vaste prijs. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Bedrijfsontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer verzorgt de complete ontruiming van kantoren, winkels, magazijnen en andere bedrijfspanden. Wij werken efficiënt en met minimale overlast voor uw omgeving, zodat u snel verder kunt met uw plannen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Van bureaus en kasten tot zware machines en palletstellingen — ons ervaren team verwerkt alle inventaris. Bruikbare items worden aangeboden via onze veilingpartners, wat de kosten kan drukken.</p>
            <p className="text-slate-500 font-light leading-relaxed">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een vrijblijvende offerte op maat.</p>
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
