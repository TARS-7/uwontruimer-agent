import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Woningontruiming door experts - 15+ jaar ervaring",
  description: "Woningontruiming van A tot Z door ervaren vakmensen. ✓ Kwaliteit & Zekerheid ✓ Offerte mét Oplevergarantie ✓ Snel geregeld ✓ Hoge klantbeoordeling.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <Image
            src="/Gemini_Generated_Image_nz1f59nz1f59nz1f_cleanup.jpg"
            alt="Professionele woningontruiming"
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
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Woningontruiming</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Woningontruiming voor iedereen — ontruiming door experts</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Woningontruiming nodig? Uw Ontruimer is dé specialist op het gebied van woning ontruimen. We staan klaar voor bedrijven en particulieren zoals senioren. Of het nou gaat om huis ontruimen na overlijden of{" "}
              <Link href="/diensten/bedrijfsontruiming" className="text-blue-600 hover:underline">bedrijfspand ontruimen</Link>, we staan voor u klaar!
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

        {/* Regio sectie */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Woningontruiming in uw regio</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Woning laten ontruimen? Wij kunnen u snel helpen door middel van spoedontruiming. Doordat wij in uw buurt zijn — namelijk Utrecht, Noord-Holland en Zuid-Holland — kunnen wij snel handelen. U kunt gemakkelijk een afspraak met ons maken door ons te bellen of het contactformulier in te vullen. U ontvangt dan een vrijblijvende offerte van ons.
            </p>
          </div>
        </div>

        {/* Voordelen sectie */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Voordelen woningontruiming</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              De voordelen van onze woningontruiming service zijn groot. Zo werken wij op een duurzame manier en wordt zoveel mogelijk van de inboedel hergebruikt. Bij een ontruiming krijgt u te maken met veel spullen. De diensten die wij leveren kunnen u volledig ontzorgen. Waardevolle spullen kunnen in mindering gebracht worden van het offertebedrag. Met onze opkoop en veilingservice kunt u er zelfs aan verdienen. Al deze pluspunten zult u merken aan uw portemonnee!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0853035894" className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Bel ons direct — 085-303 58 94
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
