import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van UwOntruimer.nl — van toepassing op alle diensten en overeenkomsten.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Juridisch</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">Algemene Voorwaarden</h1>
            <p className="text-xs text-slate-400 mb-10">Versie mei 2026 — van toepassing op alle diensten van Uw Ontruimer (KVK 84981393)</p>

            <div className="prose-sm space-y-8 text-slate-500 font-light leading-relaxed">

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 1 — Definities</h2>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong className="text-slate-700">Opdrachtnemer:</strong> Uw Ontruimer, gevestigd te Amstelveen, KVK 84981393.</li>
                  <li><strong className="text-slate-700">Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst sluit met Uw Ontruimer.</li>
                  <li><strong className="text-slate-700">Diensten:</strong> alle door Uw Ontruimer aangeboden werkzaamheden, waaronder woningontruiming, bedrijfsontruiming, vloerverwijdering, taxatie en verkoop van inboedel.</li>
                  <li><strong className="text-slate-700">Overeenkomst:</strong> de tussen partijen gesloten afspraak, vastgelegd in een offerte of opdrachtbevestiging.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 2 — Toepasselijkheid</h2>
                <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten tussen Uw Ontruimer en opdrachtgever. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen. De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 3 — Offertes en totstandkoming</h2>
                <p>Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke aanvaarding van de offerte door opdrachtgever, of na schriftelijke bevestiging door Uw Ontruimer van een mondeling gegeven opdracht.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibond text-slate-900 mb-3">Artikel 4 — Uitvoering van de diensten</h2>
                <p>Uw Ontruimer voert de werkzaamheden uit naar beste inzicht en vermogen. De opgegeven uitvoerdata zijn indicatief, tenzij schriftelijk een fatale termijn is overeengekomen. Opdrachtgever zorgt voor vrije toegang tot het te ontruimen pand en stelt benodigde documenten tijdig beschikbaar.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 5 — Prijzen en betaling</h2>
                <p>Alle prijzen zijn inclusief BTW tenzij anders vermeld. Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen. Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is de wettelijke handelsrente verschuldigd. Uw Ontruimer behoudt het recht incassokosten in rekening te brengen.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 6 — Opkopen en verrekening inboedel</h2>
                <p>Indien partijen overeenkomen dat Uw Ontruimer waardevolle goederen overneemt, wordt de overeengekomen waarde verrekend met de kosten van de ontruiming. De waardebepaling geschiedt door Uw Ontruimer op basis van actuele marktwaarden. Opdrachtgever dient rechthebbende te zijn van de betreffende goederen.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 7 — Opleveringsgarantie</h2>
                <p>Uw Ontruimer biedt een schriftelijke opleveringsgarantie: het te ontruimen object wordt leeg, schoon en bezemschoon opgeleverd conform de overeengekomen specificaties. Eventuele gebreken dienen binnen 48 uur na oplevering schriftelijk te worden gemeld.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 8 — Aansprakelijkheid</h2>
                <p>De aansprakelijkheid van Uw Ontruimer is beperkt tot het bedrag dat in het betreffende geval wordt uitbetaald door de bedrijfsaansprakelijkheidsverzekering. Uw Ontruimer is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst. Opdrachtgever is verantwoordelijk voor het tijdig informeren over aanwezigheid van gevaarlijke stoffen of bijzondere objecten.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 9 — Annulering</h2>
                <p>Bij annulering door opdrachtgever worden de volgende kosten in rekening gebracht:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1.5">
                  <li>Meer dan 7 dagen voor uitvoering: geen kosten.</li>
                  <li>2 tot 7 dagen voor uitvoering: 25% van de opdrachtsom.</li>
                  <li>Minder dan 48 uur voor uitvoering: 50% van de opdrachtsom.</li>
                  <li>Op de dag van uitvoering: 100% van de opdrachtsom.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 10 — Overmacht</h2>
                <p>Uw Ontruimer is niet gehouden tot nakoming van verplichtingen bij overmacht, waaronder extreme weersomstandigheden, stakingen, overheidsmaatregelen of andere omstandigheden buiten de controle van Yw Ontruimer. Partijen treden in overleg over een nieuwe uitvoerdatum.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 11 — Toepasselijk recht en geschillen</h2>
                <p>Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing. Geschillen worden bij voorkeur in goed overleg opgelost. Indien dit niet lukt, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam, tenzij dwingend recht anders bepaalt.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Artikel 12 — Contact</h2>
                <p>Voor vragen over deze algemene voorwaarden: <a href="mailto:info@uwontruimer.nl" className="text-blue-600">info@uwontruimer.nl</a> of <a href="tel:0853035894" className="text-blue-600">085-303 58 94</a>.</p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
