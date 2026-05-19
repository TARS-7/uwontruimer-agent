import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Discreet een huis laten ontruimen na een overlijden | UwOntruimer.nl",
  description: "Wilt u een huis laten ontruimen na een overlijden? Laat dit dan over aan het professionele en toegewijde team van Uw Ontruimer! Wij zijn betrouwbaar, desku",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Discreet een huis laten ontruimen na een overlijden</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Wilt u een huis laten ontruimen na een overlijden? Laat dit dan over aan het professionele en toegewijde team van Uw Ontruimer! Wij zijn betrouwbaar, deskundig en klantgericht. Wij begrijpend dat een overlijden voor u een zware emotionele tijd betekent. En dat uw hoofd op dat moment niet staat naar het ontruimen van een huis. Ons team staat klaar om het leegruimen met de grootst mogelijke zorg voor u uit te voeren. Bel ons voor een vrijblijvende offerte!</p>

            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>15+ jaar ervaring</li>
              <li>Waardevolle spullen kunnen geveild worden</li>
              <li>Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels</li>
              <li>Wij werken discreet en ontzorgen u zoveel mogelijk</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe werkt een huis laten ontruimen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bij een overlijden zijn de erfgenamen verantwoordelijk voor het leegruimen van het huis. Maar dit is een flinke klus en u heeft op dat moment al genoeg aan uw hoofd. Dan is het handig om hulp in te schakelen. Bijvoorbeeld van een ons ontruimingsbedrijf.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Dat is makkelijk, want zo hoeft u niet zelf het hele huis leeg te ruimen en alles uit te zoeken. Ons team is snel, efficiënt en discreet. Als we nog dingen van waarde vinden, dan worden die geveild en in mindering gebracht op de factuur. Voorwerpen waarvan we vermoeden dat ze emotionele waarde hebben, houden we voor u apart. De rest geven we zoveel mogelijk een tweede leven via kringloopwinkels.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Moet de woning ook klaar worden gemaakt voor verhuur of om te worden verkocht? Dan kunt u dit ook aan ons uitbesteden. Wij zorgen ervoor dat het leegruimen van de woning met respect gebeurt. En dat u zelf nergens omkijken naar heeft!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Direct contact</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Heeft u een huis wat leeggehaald moet worden en kunt u hulp gebruiken? Twijfel dan niet om een woningontruimer in te schakelen. Een ontruimingsbedrijf zoals wij zijn gespecialiseerd in een woning leegruimen. Wij hebben meer dan 15 jaar ervaring en werken deskundig en discreet. Voor u het weet is het appartement leeg.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Kosten ontruimen huis na overlijden</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wat de kosten van het ontruimen van een huis na overlijden zijn, is van meerdere factoren afhankelijk. Hoeveel spullen zijn het, moet er veel worden uitgezocht, is het op de begane grond is en zijn er nog extra werkzaamheden die moeten worden uitgevoerd? Dit zijn allemaal zaken die invloed hebben op de kosten.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Daarom komen wij vrijblijvend bij u langs en voorzien we u van een maatwerk offerte. Zo weet u precies wat het laten ontruimen van een huis na een overlijden u gaat kosten. Vinden wij bij het ontruimen nog waardevolle spullen? Dan worden die op het offertebedrag in mindering gebracht. Met onze opkoop- en veilingservice kunt u hier dus zelfs aan verdienen.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor ontruimen huis na overlijden</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak voor het ontruimen van een huis na een overlijden. Bel ons op 085-303 58 94 of vul het contactformulier in en wij komen vrijblijvend bij u langs om een offerte op te stellen</p>
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
