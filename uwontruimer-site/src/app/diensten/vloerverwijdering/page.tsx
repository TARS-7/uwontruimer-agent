import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Vloerverwijdering",
  description: "Professionele vloerverwijdering van parket, laminaat, tegels en tapijt. Snel en stofvrij. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vloerverwijdering</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij verwijderen alle soorten vloerbedekking: parket, laminaat, PVC, tegels, tapijt en meer. Of het om één kamer gaat of een volledig pand — ons team werkt snel, netjes en zo stofvrij mogelijk.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">De verwijderde vloermaterialen worden door ons afgevoerd en waar mogelijk gescheiden aangeboden voor hergebruik of recycling. U hoeft er niets voor te doen.</p>
            <p className="text-slate-500 font-light leading-relaxed">Vraag een gratis offerte aan via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of via onze offertetool.</p>
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
