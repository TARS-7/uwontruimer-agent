import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ontruiming voor makelaars",
  description: "Panden snel verkoopklaar laten maken? UwOntruimer is de ontruimingspartner voor makelaars. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Voor makelaars</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Als makelaar wilt u panden zo snel mogelijk verkoopklaar hebben. UwOntruimer helpt u daarbij: wij ontruimen woningen snel en volledig, zodat een pand aantrekkelijk gepresenteerd kan worden aan potentiële kopers.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij werken op basis van vaste prijsafspraken en zijn flexibel in planning. Of het om een studio gaat of een vrijstaande villa — wij leveren altijd schoon en leeg op, met schriftelijke garantie.</p>
            <p className="text-slate-500 font-light leading-relaxed">Word vaste partner via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
