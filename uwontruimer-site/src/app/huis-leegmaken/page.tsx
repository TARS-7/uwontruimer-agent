import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Huis leegmaken | Hoe kun je dat het beste doen? | UwOntruimer.nl",
  description: "Huis leegmaken? Uw Ontruimer kan je hierbij snel en discreet helpen. Lees wat er allemaal komt kijken bij het leegmaken van een huis.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatief</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Huis leegmaken</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Na een overlijden of verhuizing kan het voorkomen dat u een huis moet leegmaken. Een huis leegmaken is vaak fysiek zwaar werk. In dit artikel nemen we alles stap voor stap door — of u kunt er natuurlijk ook voor kiezen dit uit te besteden aan een professionele woningontruimer.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 1. Inventariseren</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Voordat u kunt beginnen met het huis leegmaken is het van belang om een inschatting te maken van de werkzaamheden. Is het een huurhuis? Vraag dan een voorinspectie aan bij de verhuurder of woningcorporatie. Is er een opnamestaat aanwezig? Dit is een rapport waarin de staat van de woning is beschreven voordat deze verhuurd werd — vaak moet de woning weer in de oude staat worden opgeleverd.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Maak bij de inventarisatie een lijst van spullen die weg mogen, die geschikt zijn voor hergebruik en van spullen die u zelf wilt houden. Goederen die nog bruikbaar zijn kunt u doneren aan de kringloopwinkel — zij halen deze gratis bij u op.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 2. Vervoer en transport</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Hoe gaat u de inboedel vervoeren? Misschien kent u iemand met een busje of aanhanger, anders kunt u er één huren. Houd ook rekening met intern transport: plankjes op wieltjes (steekwagens) kunnen heel handig zijn om meubels door het huis te manoeuvreren.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 3. Klein en groot afval scheiden</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Zorg ervoor dat u grofvuil, klein chemisch afval en restafval gescheiden houdt. Veel gemeenten bieden gratis grofvuilophaal aan of hebben een milieustraat waar u dit gratis kunt brengen. Boeken en kleingoed worden snel zwaar — onderschat dit onderdeel niet.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Uitbesteden aan Uw Ontruimer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Heeft u geen tijd, energie of mankracht om het huis zelf leeg te maken? Uw Ontruimer verzorgt de volledige ontruiming voor u — inclusief het sorteren, afvoeren en schoon opleveren van de woning. Wij werken met vaste, transparante prijzen en een schriftelijke opleveringsgarantie.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een gratis offerte of vraag er één aan via onze website.
            </p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
