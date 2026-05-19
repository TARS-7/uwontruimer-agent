import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Woningontruiming door experts - 15+ jaar ervaring",
  description: "Woningontruiming van A tot Z door ervaren vakmensen. ✓ Kwaliteit & Zekerheid ✓ Offerte mét Oplevergarantie ✓ Snel geregeld ✓ Hoge klantbeoordeling.",
  alternates: { canonical: "/diensten/woningontruiming/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/Ontruimers.png" alt="Professionele woningontruiming" fill className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Woningontruiming voor iedereen - ontruiming door experts</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Woningontruiming nodig? Uw Ontruimer is dé specialist op het gebied van woning ontruimen. We staan klaar voor bedrijven en particulieren zoals senioren. Of het nou gaat om huis ontruimen na overlijden of bedrijfspand ontruimen, we staan voor u klaar!</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Discreet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Duurzaam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Opleveringsgarantie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">15+ jaar ervaring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-slate-600 font-light">Ontzorgt</span>
              </li>
            </ul>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>15+ jaar ervaring</li>
              <li>Waardevolle spullen kunnen geveild worden</li>
              <li>Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels</li>
              <li>Wij werken discreet en ontzorgen u zoveel mogelijk</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Woningontruiming in uw regio</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Woning laten ontruimen? Wij kunnen u snel helpen door middel van spoedontruiming. Doordat wij in uw buurt zijn, namelijk: Utrecht, Noord-Holland en Zuid-Holland kunnen wij snel handelen. U kunt gemakkelijk een afspraak met ons maken door ons te bellen of het contactformulier in te vullen. U ontvangt dan een vrijblijvende offerte van ons.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze woningontruiming service zijn groot. Zo werken wij op een duurzame manier en wordt zoveel mogelijk van de inboedel hergebruikt. Bij een ontruiming krijgt u te maken met veel spullen. De diensten die wij leveren kunnen u volledig ontzorgen. Waardevolle spullen kunnen in mindering gebracht worden van het offertebedrag. Met onze opkoop en veilingservice kunt u er zelfs aan verdienen. Al deze pluspunten zult u merken aan uw portemonnee!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Huis ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Heeft u een appartement wat leeggehaald moet worden en kunt u hulp gebruiken? Twijfel dan niet om een woningontruimer in te schakelen. Een ontruimingsbedrijf zoals wij zijn gespecialiseerd in een woning leegruimen. Wij hebben meer dan 15 jaar ervaring en werken deskundig en discreet. Voor u het weet is het appartement leeg. Handig voor senioren en makelaars.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor woning ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte</p>
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
