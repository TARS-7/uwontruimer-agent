import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vloerverwijdering | Snel uw vloer laten verwijderen? - Uw Ontruimer",
  description: "Wij verwijderen uw vloer op een professionele manier. ✓ Vloerverwijdering specialist ✓ Ruim 10 jaar ervaring ✓ Duurzaam ✓ Actief in héél NL.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/Ontruimers.png" alt="Vloer verwijderen door experts" fill className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vloer verwijderen door experts</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Een vloer verwijderen kan een lastig klusje zijn. Zeker als u niet weet wat er onder uw huidige vloerbedekking ligt. Soms liggen er meerdere lagen over elkaar wat voor verrassingen kan zorgen. Vloeren worden door Uwontruimer.nl vakkundig verwijderd en afgevoerd. Wij hebben het juiste materiaal: Vloerenstrippers, schrapmessen en stootijzers om de klus naar behoren uit te voeren.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>15+ jaar ervaring</li>
              <li>Waardevolle spullen kunnen geveild worden</li>
              <li>Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels</li>
              <li>Wij werken discreet en ontzorgen u zoveel mogelijk</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Huis ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Naast het verwijderen van vloeren kan Uw Ontruimer u helpen bij andere klussen. Denk aan: spoedontruiming, traplift verwijderen, bedrijfsontruiming en senioren verhuizingen. Neem gerust contact met ons op om de mogelijkheden te bespreken.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom u voor Uw Ontruimer zou moeten kiezen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Als u een ontruimingsbedrijf met expertise wilt inschakelen voor uw woningontruiming, bent u bij Uw Ontruimer aan het juiste adres. Al meer dan 15 jaar staan wij klaar voor particulieren en bedrijven. Wij helpen dan ook bij veel verschillende klussen, zoals verhuizingen, bedrijfsverhuizingen en spoedverhuizingen. Bovendien is onze communicatie goed en is onze woningontruiming zeer betaalbaar.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Neem contact op voor vloerverwijdering</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wilt u uw vloer deskundig laten verwijderen? Neem dan gerust contact op met Uw Ontruimer. U kunt ons bereiken door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
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
