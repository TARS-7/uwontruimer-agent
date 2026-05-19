import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spoed ontruiming | UwOntruimer.nl",
  description: "Heeft u een ontruiming met spoed? Dan bent u bij Uw Ontruimer aan het juiste adres! Wij kunnen uw ontruiming namelijk binnen 24 uur uitvoeren. Onze ervaren",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/hero-truck.png" alt="Spoedontruiming binnen 24 uur" fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Spoed ontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Heeft u een ontruiming met spoed? Dan bent u bij Uw Ontruimer aan het juiste adres! Wij kunnen uw ontruiming namelijk binnen 24 uur uitvoeren. Onze ervaren vakmannen staan voor u klaar, wij staan voor zekerheid en kwaliteit.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wij staan met spoed voor u klaar</h2>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>15+ jaar ervaring</li>
              <li>Waardevolle spullen kunnen geveild worden</li>
              <li>Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels</li>
              <li>Wij werken discreet en ontzorgen u zoveel mogelijk</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Spoedontruiming binnen 24 uur</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Moet een ontruiming binnen 24 uur plaatsvinden? Wij staan voor u klaar! Met onze spoedontruiming service is dit snel geregeld. Wij nemen het werk voor u uit handen, kunt u zich richten op andere zaken. Heeft u al bedacht wat u met de spullen wilt doen of nog helemaal geen tijd gehad in deze uit te zoeken? Wij kunnen dit voor u sorteren en apart houden. Dan kunt u op een later tijdstip op uw gemak de waardevolle spullen uitzoeken.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Spoedontruiming zorgkamer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Het ontruimen van een zorgkamer is vaak het gevolg na overlijden. Vaak is hier sprake van tijdsdruk. Volgens de richtlijnen van het Landelijk Organisatie Cliëntenraden (LOC) en het Actiz moet een zorgkamer binnen 7 dagen en soms zelfs 24 uur na overlijden ontruimd worden. Vaak midden in het rouwproces terwijl u nog bezig bent met een uitvaart. In dit soort emotionele situaties is het soms onmogelijk om de ontruiming zelf uit te voeren.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Bedrijfsruimte ontruimen met spoed</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wilt u uw bedrijfspand met spoed ontruimen bijvoorbeeld na verhuizing of faillissement ? Kies dan voor onze spoedservice. Wij leveren diverse soorten aanvullende diensten zoals demontage, vloerverwijdering,  sloopwerkzaamheden en verhuizen. Hiermee kunnen wij uw zorgen uit handen nemen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Direct contact</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Heeft u een huis of bedrijfspand wat leeggehaald moet worden met spoed? Twijfel dan niet om een woningontruimer in te schakelen. Een ontruimingsbedrijf zoals wij zijn gespecialiseerd in een woning leegruimen. Wij hebben meer dan 15 jaar ervaring en werken deskundig en discreet.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Werkwijze</h2>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Bel ons landelijke telefoonnummer 085 – 30 35 894</li>
              <li>Wij nemen telefonisch uw gegevens op, zijn er nog bijzonderheden? Geef dit aan.</li>
              <li>U krijgt van ons een offerte per e-mail.</li>
              <li>Na akkoord staan wij op de afgesproken datum en tijd klaar op locatie.</li>
              <li>Wij leveren de ruimte op volgens de gestelde opleveringseisen.</li>
              <li>Sleuteloverdracht. U hoeft niet bij de ontruiming aanwezig te zijn u heeft immers wel wat anders aan uw hoofd. Wel moet iemand ons toegang tot de woning verschaffen. Dit kunnen ook medewerkers of kennissen zijn. Of u laat de sleutel achter bij de receptie indien deze aanwezig is.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor spoedontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
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
