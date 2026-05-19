import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inboedel opkopen - Voor een eerlijke prijs | Uwontruimer.nl",
  description: "Uw Ontruimer kan uw inboedel opkopen naar waarde ✓Actief in héél Nederland ✓ Ervaren taxateurs ✓ Een eerlijke handelsprijs voor uw inboedel!",
  alternates: { canonical: "/diensten/opkopen-inboedel/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/inboedel opkopen.png" alt="Inboedel opkopen" fill className="w-full h-full object-cover" style={{ objectPosition: "bottom center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Woning laten ontruimen? Wij kopen vintage, antiek en kunst inboedel</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Uw Ontruimer kan uw inboedel opkopen naar waarde. Wij hebben ruim 10 jaar ervaring in veilingen, internetverkopen en verkoop van roerende goederen. Daardoor kunnen wij u een eerlijke en scherpe prijs bieden voor waardevolle inboedel. Wilt u uw inboedel verkopen aan een integere partij en voor de beste handelsprijs? Dan bent u bij ons absoluut aan het juiste adres! Wij kopen waardevolle inboedel en leveren aanvullende diensten die aansluiten op uw wensen.</p>
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
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen inboedel opkopen bij ontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Inboedel opkopen bij een ontruiming door Uw Ontruimer zorgt voor een totaaloplossing en kan u compleet ontzorgen. Met het laten opkopen van waardevolle inboedel kunt u geld verdienen. Daarnaast kan het u ook besparen op een eventuele ontruiming. Met onze inboedel opkoop service krijgt u een eerlijke prijs voor uw antiek, vintage meubels, kunst en andere waardevolle waren. De verkoop van uw inboedel is eenvoudig en snel geregeld. Wij leveren een uitgebreide service en kunnen daarbij de woning weer helemaal leeg en schoon opleveren.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze inboedel opkoop service zijn groot zo krijgt u o.a. ;</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Een eerlijke handelsprijs voor uw inboedel</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Ervaren taxateur</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Geen onzinbiedingen</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Geen onbekenden mensen over de vloer zoals bij marktplaats of andere websites</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Wij kunnen de woning leeg en bezemschoon opleveren</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">– Afgesproken prijs kan verrekend worden met het offertebedrag van een eventuele woningontruiming.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Direct contact</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Heeft u een huis wat leeggehaald moet worden en kunt u hulp gebruiken? Twijfel dan niet om een woningontruimer in te schakelen. Een ontruimingsbedrijf zoals wij zijn gespecialiseerd in een woning leegruimen. Wij hebben meer dan 15 jaar ervaring en werken deskundig en discreet. Voor u het weet is het appartement leeg.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Transparant en een eerlijke prijs voor het opkopen van waardevolle inboedel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij geven een handelsprijs voor waardevolle inboedel, zoals vintage, antiek, kunst en meer. Het bedrag is gebaseerd op de huidige markt van vraag en aanbod. Meestal vindt er ook een woningontruiming plaats. Dan wordt de waarde van de inboedel verrekend met het offertebedrag. Wij kopen dus de inboedel op en wij zorgen voor een bezemschone oplevering van de woning. Dit is natuurlijk niet noodzakelijk. Wilt u alleen uw waardevolle inboedel of bepaalde goederen verkopen dan kan dit natuurlijk ook. Neem contact op voor meer informatie over onze services. Onze medewerkers staan u graag te woord.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Inboedel opkopen en woningontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij kunnen zowel uw inboedel opkopen als een woningontruiming verzorgen. Wel zo makkelijk, zo hoeft u zelf niet de restboedel op te ruimen. Bijvoorbeeld in het geval van overlijden kan het zijn dat een woning verhuur- of verkoop klaar moet worden opgeleverd. In dat geval kunnen wij u een prijs verstrekken voor de waardevolle spullen én de woning weer naar uw wensen opleveren.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Taxatie voor het verkopen van uw inboedel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Benieuwd wat uw inboedel waard is? Overweeg dan eerst een taxatie. Wij werken met ervaren taxateurs die u kunnen helpen met het verkopen van uw inboedel. Wij hebben ruim 10 jaar ervaring in de inkoop en verkoop van roerende goederen en we zijn erg op de hoogte van de prijzen op de huidige markt.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Snel uw inboedel verkopen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wilt u op korte termijn uw inboedel laten opkopen? Bied deze dan direct aan op Whatsapp via het 06- nummer op onze contactpagina.</p>
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
