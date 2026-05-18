import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spoedontruiming | UwOntruimer.nl",
  description: "Heeft u een ontruiming met spoed? Uw Ontruimer voert uw ontruiming binnen 24 uur uit. Discreet, snel en betrouwbaar. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Intro */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Spoedontruiming</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Wij staan met spoed voor u klaar</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Heeft u een ontruiming met spoed? Dan bent u bij Uw Ontruimer aan het juiste adres! Wij kunnen uw ontruiming namelijk binnen 24 uur uitvoeren. Onze ervaren vakmannen staan voor u klaar, wij staan voor zekerheid en kwaliteit.
            </p>

            {/* USPs */}
            <ul className="space-y-3 mb-10">
              {[
                "15+ jaar ervaring",
                "Waardevolle spullen kunnen geveild worden",
                "Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels",
                "Wij werken discreet en ontzorgen u zoveel mogelijk",
              ].map((usp) => (
                <li key={usp} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-slate-600 font-light">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Binnen 24 uur */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Spoedontruiming binnen 24 uur</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Moet een ontruiming binnen 24 uur plaatsvinden? Wij staan voor u klaar! Met onze spoedontruiming service is dit snel geregeld. Wij nemen het werk voor u uit handen, zodat u zich kunt richten op andere zaken. Heeft u al bedacht wat u met de spullen wilt doen of nog helemaal geen tijd gehad dit uit te zoeken? Wij kunnen dit voor u sorteren en apart houden. Dan kunt u op een later tijdstip op uw gemak de waardevolle spullen uitzoeken.
            </p>
          </div>
        </div>

        {/* Zorgkamer */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Spoedontruiming zorgkamer</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Het ontruimen van een zorgkamer is vaak het gevolg na overlijden. Vaak is hier sprake van tijdsdruk. Volgens de richtlijnen van het Landelijk Organisatie Cliëntenraden (LOC) en het Actiz moet een zorgkamer binnen 7 dagen en soms zelfs 24 uur na overlijden ontruimd worden. Vaak midden in het rouwproces terwijl u nog bezig bent met een uitvaart. In dit soort emotionele situaties is het soms onmogelijk om de ontruiming zelf uit te voeren.
            </p>
          </div>
        </div>

        {/* Bedrijfsruimte */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Bedrijfsruimte ontruimen met spoed</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wilt u uw bedrijfspand met spoed ontruimen, bijvoorbeeld na verhuizing of faillissement? Kies dan voor onze spoedservice. Wij leveren diverse soorten aanvullende diensten zoals demontage, vloerverwijdering, sloopwerkzaamheden en verhuizen. Hiermee kunnen wij uw zorgen uit handen nemen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0853035894" className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Bel direct — 085-303 58 94
              </a>
              <Link href="/offerte" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Gratis offerte
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
