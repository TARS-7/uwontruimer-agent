import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Professionele huisontruiming: laat uw huis ontruimen door experts | UwOntruimer.nl",
  description: "Huis ontruiming nodig? Uw Ontruimer is dé specialist op het gebied van huis ontruimen. We staan klaar voor bedrijven en particulieren zoals senioren. Of he",
  alternates: { canonical: "/huisontruiming/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Professionele huisontruiming: laat uw huis ontruimen door experts</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Huis ontruiming nodig? Uw Ontruimer is dé specialist op het gebied van huis ontruimen. We staan klaar voor bedrijven en particulieren zoals senioren. Of het nou gaat om huis ontruimen na overlijden of bedrijfspand ontruimen, we staan voor u klaar!</p>

            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>15+ jaar ervaring</li>
              <li>Waardevolle spullen kunnen geveild worden</li>
              <li>Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels</li>
              <li>Wij werken discreet en ontzorgen u zoveel mogelijk</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Huisontruiming in uw regio</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Huis laten ontruimen? Wij kunnen u snel helpen door middel van spoedontruiming. Doordat wij in uw buurt zijn, namelijk: Utrecht, Noord-Holland en Zuid-Holland kunnen wij snel handelen. U kunt gemakkelijk een afspraak met ons maken door ons te bellen of het contactformulier in te vullen. U ontvangt dan een vrijblijvende offerte van ons.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Voordelen huisontruiming</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De voordelen van onze huisontruimng service zijn groot. Zo werken wij op een duurzame manier en wordt zoveel mogelijk van de inboedel hergebruikt. Bij een ontruiming krijgt u te maken met veel spullen. De diensten die wij leveren kunnen u volledig ontzorgen. Waardevolle spullen kunnen in mindering gebracht worden van het offertebedrag. Met onze opkoop en veilingservice kunt u er zelfs aan verdienen. Al deze pluspunten zult u merken aan uw portemonnee!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Direct contact</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Heeft u een huis wat leeggehaald moet worden en kunt u hulp gebruiken? Twijfel dan niet om een woningontruimer in te schakelen. Een ontruimingsbedrijf zoals wij zijn gespecialiseerd in een woning leegruimen. Wij hebben meer dan 15 jaar ervaring en werken deskundig en discreet. Voor u het weet is het appartement leeg.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor huis ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte</p>
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
