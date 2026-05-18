import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Duurzame ontruiming",
  description: "UwOntruimer werkt duurzaam: hergebruik, recycling en verantwoorde verwerking van alle afval. Lees meer over onze aanpak.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Duurzaamheid</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Duurzame ontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Bij UwOntruimer nemen wij onze verantwoordelijkheid voor het milieu serieus. Wij streven ernaar om zo min mogelijk afval te produceren en zo veel mogelijk materialen te hergebruiken of te recyclen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Bruikbare meubels, kleding en huisraad brengen wij naar kringloopwinkels of doneren wij aan goede doelen. Waardevolle items worden verkocht via veiling, waarvan de opbrengst aan u ten goede komt. Wat echt niet meer hergebruikt kan worden, wordt gescheiden aangeboden voor recycling bij erkende verwerkers.</p>
            <p className="text-slate-500 font-light leading-relaxed">Onze aanpak is niet alleen goed voor het milieu, maar drukt ook de kosten van uw ontruiming. Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor meer informatie.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
