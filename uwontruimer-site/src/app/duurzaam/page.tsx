import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Uw Ontruimer werkt mee aan een duurzame toekomst | UwOntruimer.nl",
  description: "Uw Ontruimer bouwt mee aan een duurzame toekomst. Het verduurzamen van de ontruimingssector ligt ons aan het hart. Wij streven ernaar om de complete inboed",
  alternates: { canonical: "/duurzaam" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Uw Ontruimer werkt mee aan een duurzame toekomst</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Uw Ontruimer bouwt mee aan een duurzame toekomst. Het verduurzamen van de ontruimingssector ligt ons aan het hart. Wij streven ernaar om de complete inboedel te hergebruiken. Zo hebben wij de processen zodanig duurzaam ingericht door de afvalstromen zoveel mogelijk te beperken.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Recyclen vinden wij heel belangrijk</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Zo proberen wij alles wat geschikt is voor hergebruik een nieuwe bestemming te geven. Wij hebben een groot netwerk van kringlooporganisaties en goede doelen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor woning ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte</p>
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
