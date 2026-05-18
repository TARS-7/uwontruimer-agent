import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Huis laten ontruimen",
  description: "Uw huis laten ontruimen door professionals. Vaste prijs, geen verborgen kosten, schriftelijke opleveringsgarantie. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatief</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Huis laten ontruimen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wilt u uw huis laten ontruimen? UwOntruimer verzorgt de volledige ontruiming van uw woning, ongeacht de omvang. Wij werken met vaste prijzen, zodat u van tevoren precies weet waar u aan toe bent.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Na een gratis bezichtiging ontvangt u een helder voorstel. Na goedkeuring plannen wij de ontruiming op een tijdstip dat u uitkomt. Na afloop leveren wij schoon en leeg op — schriftelijk vastgelegd.</p>
            <p className="text-slate-500 font-light leading-relaxed">Vraag een gratis offerte aan via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of via onze website.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
