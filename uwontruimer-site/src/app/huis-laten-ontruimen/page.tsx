import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Een woningontruiming in Aalsmeer van a tot z geregeld. | UwOntruimer.nl",
  description: "Woningontruiming in Aalsmeer vakkundig uitgevoerd door ervaren ontruimers. U zoekt een professionele partner voor uw ontruiming? Wij komen graag persoonlij",
  alternates: { canonical: "/huis-laten-ontruimen" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Ontruiming</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Een woningontruiming in Aalsmeer van a tot z geregeld.</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">Woningontruiming in Aalsmeer vakkundig uitgevoerd door ervaren ontruimers. U zoekt een professionele partner voor uw ontruiming? Wij komen graag persoonlijk bij u langs. Voor een gratis</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wij adviseren en assisteren u graag bij een woningontruiming in Aalsmeer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">offerte en advies op maat. Wij doen alles voor een succesvolle oplevering. Ook inboedelopkoop, vloerverwijdering en verhuizen. Neem contact op voor een gratis offerte.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Seniorenverhuizing van groot naar klein</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Een woningontruiming in combinatie met een seniorenverhuizing in Aalsmeer. Vakkundig, goede service en grote klanttevredenheid. (klanten geven ons gemiddeld een 9,8). Van groot naar klein verhuizen of seniorenverhuizing is vaak een ingrijpender dan een normale verhuizing. Omdat er maar een kleiner aantal spullen meekunnen is het fijn als iemand u kan helpen. Wij bieden een uitgebreide service. Onze medewerkers denken graag met u mee om het u zo makkelijk mogelijk te maken. Wellicht heeft u een restboedel. Wij zorgen ervoor dat deze weer een nieuwe bestemming krijgt. Of als deze nog een aanzienlijke waarde vertegenwoordigt kunnen wij u er aantrekkelijk prijs voor verstrekken.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Huis leegmaken na overlijden</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Een woningontruiming komt vaak in een vervelende tijd. Vaak na overlijden of verhuizen. Na het overlijden van een dierbare is vaak sprak van verdriet en/of andere emoties. Dan is het fijn als u kunt vertrouwen op iemand. Wij garanderen u dat we de ontruiming naar uw wensen uitvoeren. Wij helpen u graag door deze moelijke tijd en proberen u zoveel mogelijk te ontzorgen. Onze peilers: transparante werkwijze, persoonlijk contact en maatschappelijk betrokken. Schroom niet om te bellen als u vragen heeft. Onze medewerkers staan u graag te woord.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Naast woningontruiming ook bedrijfsontruiming in Aalsmeer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uwontruimer.nl doet in Aalsmeer naast woningontruiming ook bedrijfsontruimingen. Heeft u een winkel- of bedrijfspand dat ontruimd moet worden? Wij zijn u graag van dienst. Zo verwijderen wij voor u de inboedel zoals kantoormeubelen archief kasten et cetera. Zorgen ervoor dat het afval netjes afgevoerd wordt en doen kleine kluswerkzaamheden om de oplevering naar wens uit te voeren.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
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
