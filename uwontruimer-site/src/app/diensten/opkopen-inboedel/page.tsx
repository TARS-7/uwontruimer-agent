import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inboedel opkopen - Voor een eerlijke prijs | Uwontruimer.nl",
  description: "Uw Ontruimer kan uw inboedel opkopen naar waarde ✓Actief in héél Nederland ✓ Ervaren taxateurs ✓ Een eerlijke handelsprijs voor uw inboedel!",
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
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Inboedel opkopen</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Wij kopen vintage, antiek en kunst inboedel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Uw Ontruimer kan uw inboedel opkopen naar waarde. Wij hebben ruim 10 jaar ervaring in veilingen, internetverkopen en verkoop van roerende goederen. Daardoor kunnen wij u een eerlijke en scherpe prijs bieden voor waardevolle inboedel. Wilt u uw inboedel verkopen aan een integere partij en voor de beste handelsprijs? Dan bent u bij ons absoluut aan het juiste adres! Wij kopen waardevolle inboedel en leveren aanvullende diensten die aansluiten op uw wensen.
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

        {/* Voordelen */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Voordelen inboedel opkopen bij ontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Inboedel opkopen bij een ontruiming door Uw Ontruimer zorgt voor een totaaloplossing en kan u compleet ontzorgen. Met het laten opkopen van waardevolle inboedel kunt u geld verdienen. Daarnaast kan het u ook besparen op een eventuele ontruiming. Met onze inboedel opkoop service krijgt u een eerlijke prijs voor uw antiek, vintage meubels, kunst en andere waardevolle waren. De verkoop van uw inboedel is eenvoudig en snel geregeld. Wij leveren een uitgebreide service en kunnen daarbij de woning weer helemaal leeg en schoon opleveren.
            </p>
            <p className="text-slate-500 font-light mb-4">De voordelen van onze inboedel opkoop service zijn groot, zo krijgt u o.a.:</p>
            <ul className="space-y-3 mb-8">
              {[
                "Een eerlijke handelsprijs voor uw inboedel",
                "Ervaren taxateur",
                "Geen onzinbiedingen",
                "Geen onbekende mensen over de vloer zoals bij Marktplaats of andere websites",
                "Wij kunnen de woning leeg en bezemschoon opleveren",
                "Afgesproken prijs kan verrekend worden met het offertebedrag van een eventuele woningontruiming",
              ].map((voordeel) => (
                <li key={voordeel} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-slate-600 font-light">{voordeel}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct contact */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Direct contact</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              Heeft u een huis dat leeggehaald moet worden? Wilt u uw inboedel verkopen? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Neem direct contact op
              </Link>
              <a href="tel:0853035894" className="inline-flex items-center gap-2 border border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Bel ons — 085-303 58 94
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
