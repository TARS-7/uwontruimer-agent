import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Verhuizen",
  description: "Professionele verhuisservice door heel Nederland. Van inpakken tot opbouwen, wij regelen alles. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Verhuizen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer verzorgt ook complete verhuizingen voor particulieren en bedrijven. Van inpakken en laden tot transport en opbouwen in de nieuwe woning — wij regelen alles van A tot Z.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Combineer een verhuizing met een gedeeltelijke ontruiming en bespaar op de totale kosten. Ons team is gewend om in korte tijd grote volumes te verwerken, zodat uw verhuisdag soepel verloopt.</p>
            <p className="text-slate-500 font-light leading-relaxed">Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een vrijblijvende offerte op maat.</p>
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
