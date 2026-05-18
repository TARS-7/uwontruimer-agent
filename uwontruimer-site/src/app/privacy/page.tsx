import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van UwOntruimer.nl — hoe wij omgaan met uw persoonsgegevens conform de AVG.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Juridisch</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">Privacyverklaring</h1>
            <p className="text-xs text-slate-400 mb-10">Laatste update: mei 2026</p>

            <div className="prose-sm space-y-8 text-slate-500 font-light leading-relaxed">

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Wie zijn wij?</h2>
                <p>UwOntruimer.nl wordt geëxploiteerd door Uw Ontruimer, gevestigd in Amstelveen, Nederland. KVK-nummer: 84981393. BTW-nummer: NL863451159B01.</p>
                <p className="mt-2">Contactgegevens: <a href="mailto:info@uwontruimer.nl" className="text-blue-600">info@uwontruimer.nl</a> · <a href="tel:0853035894" className="text-blue-600">085-303 58 94</a></p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Welke persoonsgegevens verwerken wij?</h2>
                <p>Wij verwerken alleen persoonsgegevens die u actief aan ons verstrekt of die automatisch worden gegenereerd bij gebruik van onze website:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li><strong className="text-slate-700">Contactgegevens:</strong> naam, telefoonnummer, e-mailadres — alleen als u contact met ons opneemt.</li>
                  <li><strong className="text-slate-700">Offertegegevens:</strong> adres, omschrijving van de ontruiming, foto's van het pand — via onze analysetool (analyse.uwontruimer.nl).</li>
                  <li><strong className="text-slate-700">Analytische gegevens:</strong> geanonimiseerde gebruiksdata via Google Analytics 4 (alleen na uw toestemming).</li>
                  <li><strong className="text-slate-700">Technische gegevens:</strong> IP-adres, browsertype, bezochte pagina's — automatisch en geanonimiseerd.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Waarom verwerken wij uw gegevens?</h2>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong className="text-slate-700">Uitvoering van overeenkomst (art. 6 lid 1 sub b AVG):</strong> het verwerken van offerteaanvragen en het uitvoeren van ontruimingsopdrachten.</li>
                  <li><strong className="text-slate-700">Gerechtvaardigd belang (art. 6 lid 1 sub f AVG):</strong> het verbeteren van onze dienstverlening en website.</li>
                  <li><strong className="text-slate-700">Toestemming (art. 6 lid 1 sub a AVG):</strong> het plaatsen van analytische cookies na uw expliciete toestemming via de cookiebanner.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Hoe lang bewaren wij uw gegevens?</h2>
                <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li>Offertegegevens: maximaal 2 jaar na laatste contact.</li>
                  <li>Klantgegevens (bij opdracht): 7 jaar conform wettelijke bewaarplicht.</li>
                  <li>Analytische data (Google Analytics): maximaal 14 maanden (ingesteld conform AVG).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Delen wij uw gegevens?</h2>
                <p>Wij verkopen uw gegevens nooit. Wij delen gegevens alleen met:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li><strong className="text-slate-700">Google LLC</strong> — voor Google Analytics 4, uitsluitend na uw toestemming. Google is gecertificeerd onder het EU–VS Data Privacy Framework.</li>
                  <li><strong className="text-slate-700">Vercel Inc.</strong> — hostingprovider van onze website (VS, adequaatheidsbesluit/SCCs van toepassing).</li>
                  <li>Overheidsinstanties, indien wettelijk verplicht.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Cookies</h2>
                <p>Wij gebruiken twee soorten cookies:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li><strong className="text-slate-700">Noodzakelijke cookies:</strong> vereist voor de werking van de website. Geen toestemming nodig.</li>
                  <li><strong className="text-slate-700">Analytische cookies (Google Analytics 4):</strong> alleen met uw toestemming. U kunt uw voorkeur altijd aanpassen via de cookiebanner.</li>
                </ul>
                <p className="mt-3">Wij passen Google Consent Mode v2 toe: zonder uw toestemming worden geen analytische gegevens verzonden naar Google.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Uw rechten</h2>
                <p>Op grond van de AVG heeft u de volgende rechten:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li><strong className="text-slate-700">Inzage:</strong> u kunt opvragen welke gegevens wij van u hebben.</li>
                  <li><strong className="text-slate-700">Rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren.</li>
                  <li><strong className="text-slate-700">Verwijdering:</strong> u kunt vragen uw gegevens te wissen.</li>
                  <li><strong className="text-slate-700">Beperking:</strong> u kunt de verwerking laten beperken.</li>
                  <li><strong className="text-slate-700">Bezwaar:</strong> u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
                  <li><strong className="text-slate-700">Dataportabiliteit:</strong> u kunt uw gegevens opvragen in een gestructureerd formaat.</li>
                </ul>
                <p className="mt-3">Stuur uw verzoek naar <a href="mailto:info@uwontruimer.nl" className="text-blue-600">info@uwontruimer.nl</a>. Wij reageren binnen 30 dagen.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">8. Klachten</h2>
                <p>Heeft u een klacht over de verwerking van uw persoonsgegevens? U kunt een klacht indienen bij de <strong className="text-slate-700">Autoriteit Persoonsgegevens</strong> via <a href="https://autoriteitpersoonsgegevens.nl" className="text-blue-600" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">9. Wijzigingen</h2>
                <p>Wij kunnen deze privacyverklaring aanpassen. De meest recente versie is altijd te vinden op uwontruimer.nl/privacy. Bij wezenlijke wijzigingen informeren wij u via de website.</p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
