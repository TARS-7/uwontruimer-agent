import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Traplift laten verwijderen | UwOntruimer.nl",
  description: "Moet er een traplift verwijderd worden? Dan bent u bij ons aan het juiste adres! Wij werken met ervaren monteurs. Onze vakmensen demonteren de traplift en ",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Traplift laten verwijderen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Moet er een traplift verwijderd worden? Dan bent u bij ons aan het juiste adres! Wij werken met ervaren monteurs. Onze vakmensen demonteren de traplift en voeren deze af.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Traplift hergebruiken</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Is de traplift in de woning nog goed werkend maar moet deze toch verwijderd worden? Wij zijn een duurzaam bedrijf, wat nog geschikt is voor hergebruik krijgt een tweede leven.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Is de traplift niet meer geschikt voor hergebruik? Dan voeren wij deze af naar onze werkplaats waar deze gestript zal worden van alle recyclebare onderdelen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen Uw Ontruimer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Met al meer dan 15 jaar ervaring kunt u van Uw Ontruimer spreken van een betrouwbare woningontruimer. Wij zijn gespecialiseerd in diverse klussen. Geen klus is te gek. Als u hulp nodig heeft kunt u gerust contact met ons opnemen. We staan u graag te woord om samen met u een plan te maken.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor huis ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Duurzaamheid</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer zet zich actief in voor een duurzame toekomst. Zo werken wij samen met diverse kringlooporganisaties en goede doelen om zoveel mogelijk van de boedel te hergebruiken.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Recyclen vinden wij eveneens heel belangrijk. Zo wordt zoveel mogelijk van het afval apart gescheiden zodat deze gerecycled kunnen worden.</p>
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
        <WizardCallout />
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
