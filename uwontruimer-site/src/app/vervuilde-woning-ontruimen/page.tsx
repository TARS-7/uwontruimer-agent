import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vervuilde woning laten ontruimen | UwOntruimer.nl",
  description: "Wilt u een (ernstig) vervuilde woning laten ontruimen? Laat dit dan over aan het team van Uw Ontruimer! Wij beschikken over jarenlange ervaring in het ontr",
  alternates: { canonical: "/vervuilde-woning-ontruimen/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vervuilde woning laten ontruimen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Wilt u een (ernstig) vervuilde woning laten ontruimen? Laat dit dan over aan het team van Uw Ontruimer! Wij beschikken over jarenlange ervaring in het ontruimen van vervuilde woningen. Als professioneel ontruimingsbedrijf kunnen wij zelfs de meest vervuilde woning weer bewoonbaar maken. Ook een spoedontruiming is mogelijk! Bel ons vrijblijvend voor een afspraak. Dan voorzien we u van een maatwerk offerte!</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat komt er kijken bij het ontruimen van een vervuilde woning?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bij het ontruimen van een vervuilde woning komt meer kijken dan alleen het leegruimen van de woning. De woning moet ook worden schoongemaakt en gedesinfecteerd voordat hij weer geschikt is voor bewoning. Wie hier geen ervaring mee heeft, kan dit beter overlaten aan een professioneel ontruimingsbedrijf. Wij weten hoe we dit aan moeten pakken en beschikken over beschermende pakken, die nodig kunnen zijn om veilig te werken. Of het nu om uw eigen woning gaat of om een pand dat u verhuurt, onderneem zo snel mogelijk actie in verband met gezondheidsrisico's voor de (toekomstige) bewoner.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De huisraad kan vaak worden afgeschreven. Ongedierte, schimmel en luchtjes die er niet meer uit willen, maken de meeste spullen in het huis ongeschikt om nog te gebruiken. Deze voeren wij in overleg met u af naar de vuilstort. Wat nog wel goed is, kan worden geveild of naar de kringloop worden gebracht.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De woning wordt volledig leeggemaakt, waarbij vaak ook tapijten en de vloeren eruit moeten. Ook deze worden afgevoerd, waarna de woning grondig kan worden gereinigd en schoongemaakt. Hierna is de vervuilde woning volledig schoon en zijn ook de nare luchtjes weg. Het huis is weer geschikt voor bewoning!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost het ontruimen van een vervuilde woning?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De kosten van het ontruimen van een vervuilde woning kunnen sterk uiteenlopen. Hoe groot is de woning? Is de hele woning vervuild en hoe erg? Hoe dan ook heeft u de hulp van een professionele ontruimer nodig om de woning weer bewoonbaar te maken. Wij komen vrijblijvend langs op locatie om een goede inschatting van de werkzaamheden te maken. En we voorzien u van een maatwerk offerte, zodat u precies weet wat de kosten zijn.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Vaak is de inboedel niets meer waard, maar wij lopen alles na om hier zeker van te zijn. Eventuele waardevolle spullen kunnen worden geveild en in mindering worden gebracht op de offerte.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Naast woningontruiming ook bedrijfsontruiming in Aalsmeer</h2>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom kiezen voor Uw Ontruimer?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Ons ontruimingsbedrijf is een specialist in het ontruimen van (sterk) vervuilde woningen. In een kort tijdsbestek wordt uw woning leeggeruimd, schoongemaakt en ontsmet, zodat het weer snel geschikt is voor bewoning.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Vrijblijvende maatwerk offerte</li>
              <li>Zoveel mogelijk wordt hergebruikt</li>
              <li>Ontruiming van a tot z geregeld</li>
              <li>Vakkundige ontruiming</li>
              <li>Eén aanspreekpunt</li>
            </ul>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hulp nodig bij ontruimen vervuilde woning?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wilt u onze hulp voor het ontruimen van een vervuilde woning? Bel ons dan vrijblijvend op 085-303 58 94 of vul het contactformulier in. Dan komen wij vrijblijvend bij u langs om een maatwerk offerte op te stellen.</p>
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
