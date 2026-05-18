import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Boedelbeheer | UwOntruimer.nl",
  description: "De betrouwbare partner op het gebied van boedelbeheer. Al meer dan 15 jaar ervaring. Neem contact op voor een vrijblijvende offerte.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Dienst</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Boedelbeheer</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Bent u op zoek naar een betrouwbare en ervaren partner voor het afhandelen van een inboedel? Dan bent u bij Uw Ontruimer aan het juiste adres. Wij bieden een uitgebreide service op het gebied van boedelbeheer. Van inventarisatie en taxatie tot het regelen van de volledige afwikkeling.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Inventarisatie en taxatie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Na het inventariseren van de inboedel wordt er een taxatie uitgevoerd. Wij werken met erkende experts die een weloverwogen waardebepaling geven aan uw goederen. Belangrijke informatie voor het afhandelen van de inboedel of nalatenschap. Wellicht bevat de inboedel immers waardevolle goederen zoals een schilderij van een oude meester, kunst, design of sieraden.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Aanvaarding van een erfenis</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              U kunt als erfgenaam de erfenis zuiver aanvaarden, beneficiair aanvaarden of verwerpen. Als u de erfenis beneficiair aanvaardt hoeft u eventuele schulden niet van uw eigen geld te betalen. Beneficiaire aanvaarding betekent ook dat u een boedelbeschrijving moet neerleggen bij de kantonrechter of boedelnotaris. Hiermee kunnen wij u goed van dienst zijn.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Boedelbeschrijving roerende goederen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              De boedelbeschrijving is een lijst van bezit en schulden. Ook roerende goederen zoals de inboedel behoort hiertoe. Wij werken met experts die ervaren zijn in het maken van een inboedelbeschrijving en wij kunnen hierbij ook een schatting maken van de waarde van roerende goederen.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Afwikkeling</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wij kunnen u perfect van dienst zijn met de praktische kant van de afwikkeling. Denk hierbij aan het veiligstellen, inventariseren en sorteren van de inboedel. Maar ook in de bemiddeling van de verkoop van de inboedel kunnen wij u uitstekend van dienst zijn dankzij ons uitgebreide netwerk van veilinghuizen en gespecialiseerde partijen.
            </p>

            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-600 font-medium mb-2">Meer informatie of een offerte aanvragen?</p>
              <p className="text-slate-500 font-light">Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag vrijblijvend een offerte aan via onze website. Wij zijn ook actief voor notarissen, bewindvoerders en executeurs testamentair.</p>
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
