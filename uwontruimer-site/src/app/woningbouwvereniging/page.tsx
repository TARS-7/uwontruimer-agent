import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ontruiming voor woningcorporaties",
  description: "Vaste ontruimingspartner voor woningcorporaties. Snelle doorlooptijden, vaste prijsafspraken. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Voor woningcorporaties</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is vaste partner voor woningcorporaties en VvE's bij woningwisselingen, opleveringen en ontruimingen. Wij begrijpen de tijdsdruk die bij corporatievastgoed hoort en zorgen voor snelle doorlooptijden.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Met vaste raamcontracten bieden wij concurrerende tarieven en gegarandeerde beschikbaarheid. Onze teams werken in heel Nederland en kunnen bij oplopende volumes snel opschalen.</p>
            <p className="text-slate-500 font-light leading-relaxed">Meer weten over een partnerschap? Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of mail naar <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
