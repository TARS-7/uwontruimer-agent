import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Taxatie inboedel",
  description: "Professionele taxatie van inboedel, meubels, antiek en kunst. Eerlijk en onafhankelijk. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Taxatie inboedel</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Weet u niet wat uw inboedel waard is? Onze taxateurs komen op locatie en beoordelen meubels, antiek, kunst, sieraden, gereedschap en overige bezittingen op actuele marktwaarde.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Een taxatie is een logische eerste stap bij een nalatenschap of ontruiming. Op basis van de taxatie kunnen wij direct een passend voorstel doen voor opkoop of veiling van de waardevolle items.</p>
            <p className="text-slate-500 font-light leading-relaxed">Plan een vrijblijvende taxatie via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of via onze website.</p>
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
