import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Huisontruiming | UwOntruimer.nl | Al 15 jaar dé specialist",
  description: "Huisontruiming nodig? Uw Ontruimer werkt discreet, snel en met een opleveringsgarantie. Al meer dan 15 jaar de ontruimingspecialist van Nederland.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatief</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Huisontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is gespecialiseerd in huisontruimingen door heel Nederland. Of het gaat om een kleine studio of een grote gezinswoning — wij beschikken over de mankracht, middelen en ervaring om elke ontruiming vlekkeloos uit te voeren.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Onze huisontruimingen worden altijd afgesloten met een schriftelijke opleveringsgarantie. Dat betekent dat de woning schoon, leeg en bezem­schoon wordt opgeleverd, klaar voor de volgende bewoner of verkoop.</p>
            <p className="text-slate-500 font-light leading-relaxed">Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een gratis offerte.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
