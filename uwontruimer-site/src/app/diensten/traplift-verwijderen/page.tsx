import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Traplift verwijderen | UwOntruimer.nl",
  description: "Traplift laten verwijderen? Uw Ontruimer werkt met ervaren monteurs. ✓Duurzame afvoer ✓15+ jaar ervaring ✓Vrijblijvende offerte. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Dienst</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Traplift verwijderen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Moet er een traplift worden verwijderd? Dan bent u bij ons aan het juiste adres. Wij werken met ervaren monteurs die de traplift professioneel demonteren en afvoeren.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Traplift hergebruiken</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Is de traplift nog goed werkend maar moet deze toch worden verwijderd? Als duurzaam bedrijf zorgen wij dat wat nog geschikt is voor hergebruik een tweede leven krijgt. Is de traplift niet meer herbruikbaar, dan voeren wij deze af naar onze werkplaats waar alle recyclebare onderdelen worden verwijderd.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Duurzaamheid staat centraal</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Uw Ontruimer zet zich actief in voor een duurzame toekomst. Wij werken samen met diverse kringlooporganisaties en goede doelen om zoveel mogelijk te hergebruiken. Wat niet herbruikbaar is, wordt zo verantwoord mogelijk gerecycled.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Voordelen van Uw Ontruimer</h2>
            <ul className="text-slate-500 font-light space-y-2 mb-6 list-disc list-inside">
              <li>Meer dan 15 jaar ervaring</li>
              <li>Erkend en verzekerd bedrijf</li>
              <li>Duurzame en verantwoorde verwijdering</li>
              <li>Vaste, transparante prijzen</li>
              <li>Snel beschikbaar</li>
            </ul>

            <p className="text-slate-500 font-light leading-relaxed">
              Maak eenvoudig een afspraak door te bellen naar <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag een vrijblijvende offerte aan via onze website.
            </p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
