import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Woningontruiming",
  description: "Professionele woningontruiming door heel Nederland. Discreet, snel en met opleveringsgarantie. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero afbeelding */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <Image
            src="/Gemini_Generated_Image_nz1f59nz1f59nz1f_cleanup.jpg"
            alt="Professionele woningontruiming"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Woningontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij verzorgen de volledige ontruiming van woningen en appartementen in heel Nederland. Of het nu gaat om een reguliere verhuizing, een nalatenschap of een spoedontruiming — ons team staat voor u klaar.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Onze werkwijze is transparant: vaste prijs, geen verborgen kosten en altijd een schriftelijke opleveringsgarantie. Bruikbare goederen worden zoveel mogelijk hergebruikt of geveild.</p>
            <p className="text-slate-500 font-light leading-relaxed">Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een gratis en vrijblijvende offerte.</p>
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
