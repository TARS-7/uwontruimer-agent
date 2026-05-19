import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Notaris - Meer dan alleen een ontruiming",
  description: "Uw Ontruimer is een professionele en integere partner. Wij zijn namelijk al meer dan 10 jaar actief in het afhandelen van inboedels en nalatenschappen. Onz",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Samenwerking</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Professionele partner voor het afwikkelen van een nalatenschap</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Uw Ontruimer is een professionele en integere partner. Wij zijn namelijk al meer dan 10 jaar actief in het afhandelen van inboedels en nalatenschappen. Onze service gaat verder dan alleen ontruimen. Wij inventariseren, taxeren en beheren tevens de inboedel zondig. Dit is met name erg handig als praktische hulp voor het maken van een boedelbeschrijving.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hulp voor nabestaanden in het geval van overlijden</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Voor nabestaanden kan het om diverse redenen niet mogelijk zijn om de ontruiming zelf uit te voeren. Dan is het belangrijk om een betrouwbare partner te vinden die dit voor u kan doen. Wij begrijpen heel goed dat dit een emotioneel zware periode kan zijn. Uw Ontruimer gaat altijd op een respectvolle manier om met de nabestaanden en zijn of haar eigendommen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Duurzaamheid</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer zet zich actief in voor een duurzame toekomst. Zo werken wij samen met diverse kringlooporganisaties en goede doelen om zoveel mogelijk van de boedel te hergebruiken.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Recyclen vinden wij eveneens heel belangrijk. Zo wordt zoveel mogelijk van het afval apart gescheiden zodat deze gerecycled kunnen worden.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen boedelbeheer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van boedelbeheer door Uw Ontruimer zijn groot. Zo inventariseren, taxeren en beheren wij de volledige boedel. Wij hebben kwaliteit en vertrouwen hoog in het vaandel staan. Alles wat we in de woning aantreffen wordt gedocumenteerd. Waardevolle spullen kunnen we voor u bijvoorbeeld verkopen, naar het veilinghuis brengen of opkopen.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Opleveringsgarantie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij zijn bekend met de algemene opleveringseisen van de verhuurder of makelaar. De ontruimde woning leveren wij volgens de afgesproken eisen op. Als er op of aanmerkingen zijn aan de afgesproken werkzaamheden komen wij hier uiteraard kosteloos voor terug. Dit is tot op heden nog nooit voorgekomen, al onze klanten zijn erg tevreden over ons.</p>
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
