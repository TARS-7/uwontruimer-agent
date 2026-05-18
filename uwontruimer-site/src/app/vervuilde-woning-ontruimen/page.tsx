import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vervuilde woning ontruimen | UwOntruimer.nl",
  description: "Vervuilde woning laten ontruimen? Bel ontruimingsbedrijf Uw Ontruimer op 085-303 58 94 ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Snel beschikbaar.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Dienst</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vervuilde woning ontruimen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wilt u een (ernstig) vervuilde woning laten ontruimen? Laat dit over aan het team van Uw Ontruimer. Wij beschikken over jarenlange ervaring in het ontruimen van vervuilde woningen en kunnen zelfs de meest vervuilde woning weer bewoonbaar maken. Ook een spoedontruiming is mogelijk.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Wat komt er kijken bij een vervuilde woning?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Bij het ontruimen van een vervuilde woning komt meer kijken dan alleen het leegruimen. De woning moet ook worden schoongemaakt en gedesinfecteerd voordat hij weer geschikt is voor bewoning. Wij beschikken over beschermende uitrusting en weten exact hoe we dit veilig en effectief aanpakken — of het nu om uw eigen woning gaat of een pand dat u verhuurt.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Aanpak</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              De huisraad kan bij ernstige vervuiling vaak worden afgeschreven. Ongedierte, schimmel en hardnekkige geuren maken de meeste spullen onbruikbaar. Wij voeren deze af naar de vuilstort. Wat nog goed is, kan worden geveild of naar de kringloop worden gebracht.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              De woning wordt volledig leeggemaakt — waarbij vaak ook vloeren en tapijten eruit moeten. Na de volledige ontruiming wordt de woning grondig gereinigd en schoongemaakt, zodat het pand weer bewoonbaar is.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Kosten</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              De kosten hangen af van de omvang en mate van vervuiling. Hoe groter de woning en hoe zwaarder de vervuiling, hoe meer werk er bij komt kijken. Na een gratis bezichtiging brengen wij u een heldere offerte uit.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Bel ons vrijblijvend op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag direct een offerte aan via onze website.
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
