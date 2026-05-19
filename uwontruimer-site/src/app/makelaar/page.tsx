import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hoe ziet een samenwerking eruit? | UwOntruimer.nl",
  description: "Wij brengen jou nieuwe klanten aan die een woning willen verkopen. Wij vragen hier geen courtage voor. Wij willen het verkoopproces zo voorspoedig en eenvo",
  alternates: { canonical: "/makelaar/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/appartement-makelaar.png" alt="Makelaar samenwerking — pand verkoopklaar" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/25" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Samenwerking</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Hoe ziet een samenwerking eruit?</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Wij brengen jou nieuwe klanten aan die een woning willen verkopen. Wij vragen hier geen courtage voor. Wij willen het verkoopproces zo voorspoedig en eenvoudig mogelijk laten verlopen voor onze klant. Hetzelfde geldt natuurlijk voor uw klanten. Als makelaar komt u geregeld een woning tegen die nog ontruimd moet worden. Dan wilt u ook een professionele en betrouwbare partij die deze klus kan uitvoeren. Als wederdienst vragen wij deze werkzaamheden uit te besteden aan ons of Uw Ontruimer aan te dragen bij uw klant. Op deze manier vergroten we beide ons netwerk en helpen we elkaar aan nieuwe klanten.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">De voordelen van onze samenwerking</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wordt een woning na de ontruiming verkocht en heeft de klant nog geen makelaar? Dan brengen we de klant in contact met jou.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Meer potentiële klanten</li>
            </ul>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Een woning moet waarschijnlijk leeg opgeleverd worden voor de verkoop. Uw Ontruimer is een integer en betrouwbaar ontruimingsbedrijf. Wij werken georganiseerd en discreet.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Uw klanten volledig ontzorgen</li>
            </ul>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij kunnen op korte termijn de ontruiming uitvoeren zodat u de woning snel kan verkopen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Dit betekent dat als er op of aanmerkingen zijn na afloop van de afgesproken werkzaamheden, wij hier vanzelfsprekend kosteloos voor terugkomen.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Woning sneller verkoop klaar</li>
              <li>Opleveringsgarantie</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wil jij met ons samenwerken?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Ben jij als makelaar benieuwd wat we voor elkaar kunnen betekenen? Neem dan vrijblijvend contact op. Maak eenvoudig een afspraak met ons door te bellen of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 font-medium mb-2">Hulp nodig?</p>
          <p className="text-slate-500 font-light text-sm mb-4">
            Bel Uw Ontruimer op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag vrijblijvend een offerte aan.
          </p>
          <a href="/offerte" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
            Gratis offerte aanvragen
          </a>
        </div>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
