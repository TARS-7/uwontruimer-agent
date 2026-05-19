import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Werkwijze | Zo brengen wij uw ontruiming tot een succes | UwOntruimer.nl",
  description: "Hoe werkt UwOntruimer? Van gratis offerte tot schone oplevering. Transparant, betrouwbaar en met opleveringsgarantie.",
};

const stappen = [
  "De meubels, huisraad en overige inboedel die geschikt zijn voor hergebruik worden door Uw Ontruimer uit de woning verwijderd en krijgen een nieuwe bestemming.",
  "Wilt u afstand doen van spullen of goederen van hoge waarde, dan kunt u ervoor kiezen gebruik te maken van onze ervaren taxateur.",
  "Eventuele inbouwkasten en andere constructies worden professioneel gedemonteerd en verwijderd.",
  "Vloeren worden professioneel verwijderd en afgevoerd.",
  "Lampen, spiegels, schilderijen en andere aangebrachte aanhangsels op muren en plafonds worden professioneel verwijderd.",
  "Schroeven, spijkers, pluggen en overige bevestigingsmaterialen worden verwijderd en de gaatjes worden netjes gedicht.",
  "Op loshangende draden van elektrapunten worden kroonsteentjes gemonteerd.",
  "Kluswerkzaamheden die gedaan moeten worden voor de oplevering van de woning, zoals muren witten, stucwerk, deuren terugzetten en tuinwerkzaamheden.",
  "De woning wordt netjes en schoon opgeleverd.",
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkwijze</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">
              Zo brengen wij uw ontruiming tot een succes
            </h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12">
              Van het eerste contact tot de schone oplevering — wij begeleiden u door het gehele proces. Geen verrassingen, geen verborgen kosten.
            </p>

            <ol className="space-y-5 mb-16">
              {stappen.map((stap, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-slate-500 font-light leading-relaxed pt-1">{stap}</p>
                </li>
              ))}
            </ol>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Afspraak maken voor woning ontruimen</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                Maak eenvoudig een afspraak met ons door te bellen naar{" "}
                <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a>{" "}
                of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0853035894"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Bel direct
                </a>
                <Link
                  href="/offerte"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-5 py-2.5 rounded-xl hover:border-blue-200 hover:text-blue-700 transition-colors"
                >
                  Gratis offerte aanvragen
                </Link>
              </div>
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
