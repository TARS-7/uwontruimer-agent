import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Woningontruiming nodig als bewindvoerder? Kom in contact",
  description: "Heeft u de taak om een ontruiming te regelen voor uw cliënt? Bij Uw Ontruimer bent u aan het juiste adres. Het kan spoedig en duurzaam. 15+ jaar ervaring",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Voor bewindvoerders</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Bewindvoerders vertrouwen op UwOntruimer voor ontruimingen binnen hun cliëntendossiers. Wij begrijpen de financiële en organisatorische beperkingen die bij bewindvoering horen en hanteren transparante, concurrerende tarieven.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij verzorgen duidelijke facturen en rapportages die aansluiten bij uw administratie. De opbrengst van waardevolle inboedelstukken wordt verrekend, waardoor de netto kosten voor uw cliënt zo laag mogelijk blijven.</p>
            <p className="text-slate-500 font-light leading-relaxed">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
