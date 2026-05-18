import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ontruiming voor notarissen",
  description: "Betrouwbare ontruimingspartner voor notarissen bij nalatenschappen en boedelontruimingen. Discreet en juridisch correct. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Voor notarissen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is een vaste ontruimingspartner voor notarissen die te maken hebben met nalatenschappen, boedelontruimingen en overige juridische ontruimingsopdrachten. Wij werken discreet, professioneel en met oog voor de gevoeligheid van de situatie.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij bieden snelle inzetbaarheid, heldere communicatie en schriftelijke opleveringsgarantie. Onze tarieven zijn transparant en wij stellen facturen op die aansluiten bij uw administratieve vereisten.</p>
            <p className="text-slate-500 font-light leading-relaxed">Heeft u een boedelontruiming? Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
