import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Inboedel veilen",
  description: "Uw inboedel veilen via erkende veilingpartners. Maximale opbrengst, minimale moeite. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Inboedel veilen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Waardevolle inboedelstukken die niet worden opgekocht, kunnen via onze veilingpartners worden aangeboden. Zo haalt u de maximale opbrengst uit de inboedel en worden de netto-ontruimingskosten lager.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij coördineren het gehele proces: van taxatie en transport tot aanmelding bij de veiling. U hoeft zelf niets te regelen. De opbrengst wordt na afloop met u verrekend.</p>
            <p className="text-slate-500 font-light leading-relaxed">Meer informatie? Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag een gratis offerte aan.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
