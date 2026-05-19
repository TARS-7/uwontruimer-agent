import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Meer dan 10 jaar ervaring in boedelbeheer | UwOntruimer.nl",
  description: "Bent u op zoek naar een betrouwbare en ervaren partner voor het afhandelen van een inboedel? Dan bent u bij Uw Ontruimer aan het juiste adres. Wij bieden n",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Meer dan 10 jaar ervaring in boedelbeheer</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Bent u op zoek naar een betrouwbare en ervaren partner voor het afhandelen van een inboedel? Dan bent u bij Uw Ontruimer aan het juiste adres. Wij bieden namelijk een uitgebreide service op het gebied van inboedels. Bijvoorbeeld in het geval van een nalatenschap wordt er van onze diensten gebruikt gemaakt door erfgenamen, executeurs testamentair, notarissen en bewindvoerders.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Inventarisatie en taxatie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Na het inventariseren van de inboedel wordt er een taxatie uitgevoerd. Wij werken met erkende experts die een weloverwogen waardebepaling geven aan uw goederen. Belangrijke informatie voor het afhandelen van de inboedel of nalatenschap. Wellicht bevat de inboedel immers waardevolle goederen zoals een schilderij van een oude meester, kunst, design of sieraden.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Aanvaarding</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">U kunt als erfgenaam de erfenis zuiver aanvaarden, beneficiair aanvaarden of verwerpen. Als u de erfenis beneficiair aanvaardt hoeft u eventuele schulden niet van uw eigen geld te betalen. U bent wel verplicht deze schulden te vereffenen. Beneficiaire aanvaarding betekent ook dat u een boedelbeschrijving moet neerleggen bij de kantonrechter of boedelnotaris. Hiermee kunnen wij u goed van dienst zijn.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Boedelbeschrijving roerende goederen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De boedelbeschrijving is een lijst van bezit en schulden. Ook roerende goederen zoals de inboedel behoort hiertoe. Wij werken met experts die ervaren zijn in het maken van een inboedelbeschrijving en wij kunnen hierbij ook een schatting maken van de waarde van roerende goederen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afwikkeling</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij kunnen u perfect van dienst zijn met de praktische kant van de afwikkeling en aan uw specifieke wensen tegemoet komen. Denk hierbij aan het veiligstellen, inventariseren en sorteren van de inboedel. Maar ook in de bemiddeling van de verkoop van de inboedel kunnen wij u uitstekend van dienst zijn dankzij ons uitgebreide netwerk van veilinghuizen en gespecialiseerde partijen.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
            <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Neem contact op voor boedelbeheer</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bent u benieuwd naar de mogelijkheden? Neem dan contact met ons op. Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
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
