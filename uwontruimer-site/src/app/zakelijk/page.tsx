import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Zakelijk ontruimen | UwOntruimer.nl",
  description: "Zakelijke ontruimingsdiensten van Uw Ontruimer. ✓15+ jaar ervaring ✓Volledig ontzorgd ✓Opleveringsgarantie ✓Discreet en professioneel.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Zakelijke dienstverlening</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Uw Ontruimer is een professionele partner op het gebied van ontruimen. Met meer dan 15 jaar ervaring in de branche bieden wij een uitgebreide zakelijke dienstverlening: woning-, bedrijfs- en spoedontruiming, vloerverwijdering, boedelbeheer en meer.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Onze zakelijke partners</h2>
            <ul className="text-slate-500 font-light space-y-1 mb-6 list-disc list-inside">
              <li>Makelaars</li>
              <li>Notarissen</li>
              <li>Bewindvoerders</li>
              <li>Gemeenten</li>
              <li>Woningbouwverenigingen</li>
              <li>Zorgcentra</li>
              <li>Uitvaartondernemers</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Voordelen van onze zakelijke dienstverlening</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-slate-700 font-medium">Duurzaam</p>
                <p className="text-slate-500 font-light">Wij werken duurzaam — zoveel mogelijk van de inboedel wordt hergebruikt via kringlooporganisaties en goede doelen.</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Discreet</p>
                <p className="text-slate-500 font-light">Bij een ontruiming komen we veel persoonlijke spullen tegen. Onze medewerkers gaan te allen tijde respectvol en discreet te werk.</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Archiefvernietiging</p>
                <p className="text-slate-500 font-light">Vertrouwelijke dossiers en digitale data worden professioneel vernietigd.</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Inboedel opkopen</p>
                <p className="text-slate-500 font-light">Waardevolle spullen kopen wij op — dit kan in mindering worden gebracht op de offerte.</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Boedelbeheer</p>
                <p className="text-slate-500 font-light">Taxeren en beheren van de inboedel, inclusief boedellijst voor de notaris.</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Opleveringsgarantie</p>
                <p className="text-slate-500 font-light">Mochten er opmerkingen zijn over de afgesproken werkzaamheden, dan komen wij hier kosteloos voor terug.</p>
              </div>
            </div>

            <p className="text-slate-500 font-light leading-relaxed">
              Interesse in een samenwerking? Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag een vrijblijvende offerte aan.
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
