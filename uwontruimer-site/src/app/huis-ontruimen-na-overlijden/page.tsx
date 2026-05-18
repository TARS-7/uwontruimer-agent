import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Huis ontruimen na overlijden",
  description: "Respectvolle en discrete ontruiming na overlijden. Wij ontzorgen u volledig tijdens een moeilijke periode. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatief</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Huis ontruimen na overlijden</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Het overlijden van een dierbare brengt veel praktische zaken met zich mee. Het ontruimen van de woning is daar één van. UwOntruimer begrijpt de emotionele belasting van dit moment en werkt altijd met respect, discretie en begrip.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij nemen het volledige ontruimingsproces van u over: van taxatie en eventuele opkoop van waardevolle items tot de uiteindelijke schone oplevering van de woning. U kunt aanwezig zijn, maar dat hoeft niet.</p>
            <p className="text-slate-500 font-light leading-relaxed">Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> — wij luisteren en denken vrijblijvend met u mee.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
