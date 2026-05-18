import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seniorenverhuizing - Compleet ontzorgd met Uw Ontruimer",
  description: "Wij ontzorgen u op alle gebieden tijdens de verhuizing ✓ Professioneel en discreet ✓ Eigen verhuislift ✓ Persoonlijke begeleiding ✓ Actief in héél NL.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <Image
            src="/Verhuizen.jpg"
            alt="Professionele verhuisservice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        {/* Intro */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Verhuizen van groot naar klein of seniorenverhuizing</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Bij een seniorenverhuizing kunnen meestal niet alle spullen mee naar de nieuwe locatie of woning. Wij kunnen dan de gewenste goederen naar de nieuwe bestemming brengen en de overige goederen uit de woning verwijderen. De goederen die u niet meeneemt worden beschikbaar gesteld aan kringlooporganisaties en andere goede doelen. Zoveel mogelijk van de restboedel wordt hergebruikt.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Neem direct contact op
            </Link>
          </div>
        </div>

        {/* Verhuislift */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Voordelen verhuizen met verhuislift</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              De voordelen van onze verhuisservice zijn groot. Zo hebben wij onze eigen verhuislift waarmee het een stuk makkelijker wordt. Bijvoorbeeld wanneer u in een appartementencomplex op de derde of vierde verdieping woont, biedt de verhuislift een goede oplossing. Doordat uw meubels met de verhuislift worden verplaatst, beschadigen deze ook niet. Daarnaast scheelt het gebruik van een dergelijke lift een hoop manuren die u anders kwijt bent aan het sjouwen op de trap. Deze pluspunten zult u ook merken aan uw portemonnee!
            </p>
          </div>
        </div>

        {/* Seniorenverhuizing */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Hulp bij seniorenverhuizing</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              Voor ouderen is een verhuizing net even wat ingrijpender. Een seniorenverhuizing vraagt om meer begeleiding en zorg. Desgewenst kunnen wij de verhuizing met begeleiding voor de oudere verzorgen. Dit houdt in dat u één aanspreekpunt krijgt toegewezen van ons. Deze persoon begeleidt u bij de gehele verhuizing. Onze medewerker neemt dan de tijd om u te helpen en te ondersteunen met het uitkiezen van de meubelen en huisraad om mee te verhuizen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0853035894" className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Bel ons — 085-303 58 94
              </a>
              <Link href="/offerte" className="inline-flex items-center gap-2 border border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Gratis offerte aanvragen
              </Link>
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
