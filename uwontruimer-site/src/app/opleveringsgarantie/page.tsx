import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Opleveringsgarantie | UwOntruimer.nl",
  description: "Uw Ontruimer is sinds 2010 een vooraanstaand dienstverlener van het leeghalen van woningen en bedrijfspanden. Het streven van de onderneming is het ontzorg",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Opleveringsgarantie</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Uw Ontruimer is sinds 2010 een vooraanstaand dienstverlener van het leeghalen van woningen en bedrijfspanden. Het streven van de onderneming is het ontzorgen en opleveren van panden voor haar klanten. Kwaliteit in de vorm van hoogstaande serviceverlening en zekerheid voor een oplevering van de specifieke eisen die gesteld worden voor de oplevering. Dat blijkt wel uit het feit dat u oplevergarantie krijgt bij deze dienst. Voorts beschikt de onderneming over eigen, goed opgeleide vakkundige, ervaren ontruimers en professioneel materieel zoals vrachtwagens en verhuisliften om op het gebied van ontruimen de hoogste kwaliteit te kunnen bieden.</p>

            <p className="text-slate-500 font-light leading-relaxed mb-5">De onderneming is actief in de particuliere én de zakelijke markt. Voor zowel huur- als  koopwoningen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer B.V is gevestigd aan de Welnastraat 175 1096GJ Amsterdam. De onderneming beschikt over een uitgebreide buitendienst en bedient hiermee de gehele regio Noord- en Zuid-Holland. De adviseurs van Uw Ontruimer komen altijd kosteloos bij u langs om een vrijblijvende offerte voor u te maken.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Tijdens een bezoek van deze adviseur staat deze u graag te woord om u te informeren over de voordelen van Uw Ontruimer en om samen de specifieke werkzaamheden te bespreken zodat de offerte geheel aan uw wensen voldoet.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">De beslissing om een woning of pand leeg te laten halen neemt u uiteraard niet zomaar. U laat zich natuurlijk eerst informeren. U kunt natuurlijk alle ontruimingsbedrijven in de buurt langs laten komen, maar u kunt ook alles in één keer laten regelen door Uw Ontruimer. Want daarmee vindt u alle denkbare oplossingen voor woningontruiming inboedel opkoop, vloerverwijdering, bedrijfsontruiming, spoedontruiming en verhuizen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bovendien is het belangrijk om met een solide bedrijf in zee te gaan voordat u de sleutels van de woning overhandigd. Loop niet meer ontruimingsbedrijven af dan nodig is…. er zijn een hoop sjacheraars in deze branche.</p>
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
