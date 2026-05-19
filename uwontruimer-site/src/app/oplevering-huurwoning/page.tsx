import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Stap 1. Alle abonnementen moeten worden opgezegd. | UwOntruimer.nl",
  description: "Hoe moet je als huurder je oude huurwoning opleveren? Op deze pagina kunt u informatie, tips en adviezen lezen over het opleveren van een huurwoning.",
  alternates: { canonical: "/oplevering-huurwoning" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Informatie</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Stap 1. Alle abonnementen moeten worden opgezegd.</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Hoe moet je als huurder je oude huurwoning opleveren? Op deze pagina kunt u informatie, tips en adviezen lezen over het opleveren van een huurwoning.</p>

            <p className="text-slate-500 font-light leading-relaxed mb-5">Er zijn verschillende aanleidingen waarom dit voor u een nuttig artikel is. Misschien gaat u verhuizen. Dan moet u uw oude huurwoning weer in oude staat opleveren. Bij het overlijden van een dierbare of familielid kan het zijn dat u als erfgename de nalatenschap moet verzorgen. Dan is de aanleiding vervelend en heeft u misschien te maken met verdriet of andere emoties. Dan kan dit artikel u helpen in deze moeilijke tijd.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">In het volgende artikel nemen we stap voor stap door wat de gebruikelijke procedure is bij het opleveren van een huurwoning.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Eventueel vooruit betaalde abonnementen kunnen teruggevorderd worden.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap 2. Contact opnemen met de verhuurder of woningcorporatie.</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">U legt uit wat de situatie is en vraagt zo nodig een voorinspectie aan. Tijdens deze voorinspectie legt de verhuurder/verhuurmakelaar uit wat de eisen zijn voor de oplevering. Is er een opnamestaat aanwezig? Opnamestaat ook wel inspectierapport genoemd is een beschrijving van de woning bij het aangaan van de huurovereenkomst. Vaak moet de woning weer in oude staat opgeleverd worden.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap 3. De inboedel</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bij het overlijden van een dierbare kan dit een emotionele gebeurtenis zijn. Sommige spullen kunnen nog een emotionele waarde vertegenwoordigen voor de erfgename. Erfgenamen kunnen aanspraak hebben op dezelfde spullen. Dit kan problemen veroorzaken bij de verdeling van de inboedel.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Tip: Stel een onafhankelijk persoon aan voor de verdeling van de goederen en zorg dat alle spullen een waarde toegekend krijgen. Zo voorkom je dat iemand waardevollere spullen toegekend krijgt dan een ander.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap 4. De woning in oude staat opleveren.</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Denk hierbij aan vloerverwijdering en weghalen van gordijnrails en lampen. Slijtage door gebruikt hoeft u niet te herstellen. Schade aan de woning moet wel hersteld worden. Had u toestemming van de verhuurder om veranderingen aan te brengen? Bijvoorbeeld bij het verbouwen van de badkamer of keuken. Dan hoeft dit niet hersteld te worden. U kunt dan zelfs een vergoeding vragen aan het einde van de huurovereenkomst. (link juridisch loket.nl)</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Bij een verhuizing heeft u mogelijk nog een restboedel. Is dit nog bruikbaar? Dan zijn er verschillende kringlooporganisaties die dit gratis ophalen. Misschien wil de nieuwe bewoner spullen overnemen. Maak hierover een duidelijke prijsafspraak zodat u niet voor verassingen komt te staan. Voor een waardevolle inboedel kunt u eventueel een opkoper zoeken. Klik hier voor inboedel opkoop.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Tip: Een woning leegruimen en schoon opleveren is een tijdrovende klus. Het is ook nog eens fysiek zwaar werk om de inboedel te verwijderen. Daarom kiezen veel mensen ervoor dit uit handen te geven. U kunt er ook voor kiezen om de woning professioneel te laten ontruimen. Er zijn veel bedrijven die woningontruimingen aanbieden. Als u ervoor kiest dit uit handen te geven zoek dan een betrouwbare partner aan wie u de sleutels letterlijk toevertrouwd.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap 5. Meterstanden opnemen en doorgeven.</h2>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Stap 6. Eindopname.</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Als de woning leeg is komt de verhuurder of de verhuurmakelaar langs voor een inspectie. Hij controleert of de is woning opgeleverd zoals afgesproken bij de voorcontrole en u levert alle sleutels in.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Afspraak maken voor woning ontruimen</h2>
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
