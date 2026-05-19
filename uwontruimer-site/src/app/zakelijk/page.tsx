import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Uitgebreide zakelijke dienstverlening van Uw Ontruimer | UwOntruimer.nl",
  description: "Uw Ontruimer is een professionele partner op het gebied van ontruimen. Wij hebben namelijk al ruim 10 jaar ervaring in deze branche en een uitgebreide dien",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijk</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Uitgebreide zakelijke dienstverlening van Uw Ontruimer</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Uw Ontruimer is een professionele partner op het gebied van ontruimen. Wij hebben namelijk al ruim 10 jaar ervaring in deze branche en een uitgebreide dienstverlening die o.a bestaat uit woning-, bedrijfs-, spoedontruiming, vloerverwijdering, en boedelbeheer. Daarnaast bieden wij u opleveringsgarantie aan, dit houdt in dat als er op of aanmerkingen zijn wij hier uiteraard kosteloos voor terugkomen.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Onze zakelijke partners</h2>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Makelaar</li>
              <li>Notaris</li>
              <li>Bewindvoerder</li>
              <li>Gemeenten</li>
              <li>Woningbouwvereniging</li>
              <li>Zorgcentrum</li>
              <li>Uitvaartondernemer</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">De voordelen van onze zakelijke dienstverlening</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze service is groot en we kunnen u volledig ontzorgen op het gebied van ontruimen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Duurzaam: Wij werken duurzaam, zoveel mogelijk van de inboedel wordt hergebruikt.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Discreet: Bij een ontruiming komen we veel persoonlijke spullen tegen. Onze medewerkers gaan op een respectvolle manier om met de ontruiming.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Archiefvernietiging: Het vernietigen van vertrouwelijke dossiers en digitale data bestanden.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Inboedel opkopen: Waardevolle spullen kopen wij op. Dit kan eventueel in mindering gebracht worden van de offerte.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Veilinghuis: Wilt u waardevolle spullen laten veilen? Dan kunnen we deze voor u naar het veilinghuis brengen. Wij hebben een uitgebreid netwerk van veilinghuizen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Boedelbeheer: Taxeren en beheren van de inboedel. Indien nodig maken we voor u een boedellijst voor de notaris.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Opleveringsgarantie: Mochten er op- of aanmerkingen zijn van de afgesproken werkzaamheden dan komen we hier uiteraard kosteloos voor terug.</p>
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
