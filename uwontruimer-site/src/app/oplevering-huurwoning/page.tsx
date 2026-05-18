import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Oplevering huurwoning | Tips en stappenplan | UwOntruimer.nl",
  description: "Hoe lever je een huurwoning op? Lees ons stappenplan met tips en adviezen voor de oplevering van uw huurwoning. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatief</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Oplevering huurwoning</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Gaat u verhuizen en moet u uw huurwoning opleveren? Of heeft u te maken met het opleveren van een woning na overlijden van een dierbare? Op deze pagina leest u stap voor stap wat de gebruikelijke procedure is bij het opleveren van een huurwoning.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 1. Abonnementen opzeggen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Alle abonnementen (energie, water, internet, etc.) moeten worden opgezegd. Eventueel vooruit betaalde abonnementen kunnen worden teruggevorderd.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 2. Contact opnemen met de verhuurder</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Neem contact op met de verhuurder of woningcorporatie. Leg de situatie uit en vraag zo nodig een voorinspectie aan. Tijdens deze voorinspectie legt de verhuurder uit wat de eisen zijn voor de oplevering. Vraag ook of er een opnamestaat (inspectierapport) beschikbaar is — dit is een beschrijving van de woning bij het aangaan van de huurovereenkomst. Vaak moet de woning in de oorspronkelijke staat worden opgeleverd.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 3. De inboedel regelen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Bij het overlijden van een dierbare kan de verdeling van de inboedel emotioneel beladen zijn. Tip: stel een onafhankelijk persoon aan voor de verdeling en zorg dat alle spullen een waarde toegekend krijgen, zodat niemand onevenredig veel waardevolle goederen ontvangt.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 4. De woning in oude staat opleveren</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Denk hierbij aan vloerverwijdering, het weghalen van gordijnrails en lampen, en het herstellen van eventuele schade. Slijtage door normaal gebruik hoeft doorgaans niet te worden hersteld, maar muurschilderingen of beschadigingen door verkeerd gebruik wel.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Stap 5. Schoonmaken</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              De woning moet bezemschoon worden opgeleverd. Dit betekent: geen vuil, geen inboedel en alle ruimtes geveegd of gestofzuigd. Sommige verhuurders eisen een professionele eindschoonmaak.
            </p>

            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-600 font-medium mb-2">Wilt u de oplevering uitbesteden?</p>
              <p className="text-slate-500 font-light">Uw Ontruimer verzorgt de volledige ontruiming én oplevering van de huurwoning. Inclusief vloerverwijdering, schoonmaken en een schriftelijke opleveringsgarantie. Bel <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een vrijblijvende offerte.</p>
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
