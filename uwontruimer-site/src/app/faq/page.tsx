import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Veelgestelde vragen | UwOntruimer.nl",
  description: "Antwoorden op veelgestelde vragen over woningontruiming, kosten, werkwijze en meer. UwOntruimer.nl",
};

const faqs = [
  {
    q: "Wat is een woningontruiming precies?",
    a: "Een woningontruiming houdt in dat een woning volledig wordt leeggemaakt, inclusief het verwijderen van meubels, persoonlijke bezittingen en eventuele vloerbedekking. Dit gebeurt vaak bij overlijden, verhuizing naar een zorginstelling of bij een gedwongen uitzetting. Het doel is om de woning bezemschoon op te leveren voor de volgende bewoner of eigenaar.",
  },
  {
    q: "Wat kost een woningontruiming?",
    a: "De kosten van een woningontruiming variëren afhankelijk van de specifieke werkzaamheden. Elke ontruiming is uniek en vereist een specifieke aanpak. Uw Ontruimer biedt een vrijblijvende en gratis offerte aan na een bezoek op locatie. Waardevolle spullen uit de inboedel kunnen in mindering worden gebracht op het offertebedrag. Voorbeeldbedragen: zorgkamer €150–€500, appartement €350–€950, eengezinswoning €650–€1.450.",
  },
  {
    q: "Hoe snel kan een woningontruiming plaatsvinden?",
    a: "Wij hebben geen lange wachttijden. In geval van spoed kan een ontruiming binnen 24 uur worden uitgevoerd.",
  },
  {
    q: "Kan een woningontruiming in het weekend worden uitgevoerd?",
    a: "Ja, in overleg kunnen wij ook in het weekend een woningontruiming uitvoeren. Er is zelfs een spoedontruiming mogelijk.",
  },
  {
    q: "Hoe lang duurt een woningontruiming?",
    a: "De duur van een woningontruiming hangt af van de grootte van de woning en de hoeveelheid inboedel. Gemiddeld duurt het één tot drie dagen. Bij spoedgevallen kan het proces binnen 24 uur worden afgerond.",
  },
  {
    q: "Wat gebeurt er met bruikbare spullen tijdens de ontruiming?",
    a: "Bruikbare spullen worden zoveel mogelijk beschikbaar gesteld voor hergebruik. Wij werken hiervoor samen met diverse stichtingen en kringlooporganisaties om hergebruik te bevorderen.",
  },
  {
    q: "Welke spullen koopt uwontruimer.nl op?",
    a: "Roerende goederen en complete inboedels die nog een waarde vertegenwoordigen: antiek, vintage, design, kwaliteitsmeubels, bekende merken (Chesterfield, Pastoe, Rietveld, Gispen, Artifort), zilverwerk, porselein, schilderijen, aardewerk, glaswerk, sieraden, witgoed, perzen, kunst, gereedschap, verzamelingen, curiosa en kleding. Wij komen altijd bij u langs voor een taxatie, of u kunt een foto sturen naar info@uwontruimer.nl.",
  },
  {
    q: "Hoe draagt Uw Ontruimer bij aan duurzaamheid?",
    a: "Uw Ontruimer zet zich actief in voor een duurzame toekomst. We werken samen met diverse kringlooporganisaties en goede doelen om zoveel mogelijk van de boedel te hergebruiken. Afval wordt zoveel mogelijk apart gescheiden zodat het gerecycled kan worden.",
  },
  {
    q: "Wat gebeurt er met persoonlijke documenten en foto's bij woningontruiming?",
    a: "Persoonlijke documenten en foto's worden met zorg behandeld. Ze worden apart gehouden en aan de opdrachtgever overhandigd, zodat ze niet verloren gaan tijdens de ontruiming.",
  },
  {
    q: "Moet ik aanwezig zijn tijdens de ontruiming?",
    a: "Het is niet noodzakelijk om aanwezig te zijn tijdens de ontruiming. Voor veel mensen kan het een emotionele aangelegenheid zijn. Na het leegruimen van de woning zal Uw Ontruimer samen met u controleren of alles naar wens is verlopen.",
  },
  {
    q: "Word er opleveringsgarantie gegeven?",
    a: "Ja, wij garanderen dat de diensten volledig naar wens en tevredenheid worden uitgevoerd. Uw Ontruimer streeft naar 100% klanttevredenheid. Mocht u toch niet tevreden zijn, dan wordt samen naar een passende oplossing gezocht.",
  },
  {
    q: "Kan Uw Ontruimer een woning opleveren aan de woningbouw of stichting?",
    a: "Ja, dit is mogelijk. Wij kunnen de voor- en eindinspectie uit handen nemen.",
  },
  {
    q: "Wie is verantwoordelijk voor woningontruiming na een overlijden?",
    a: "In de meeste gevallen zijn de erfgenamen verantwoordelijk voor de woningontruiming na overlijden. Bij zuivere aanvaarding van de erfenis nemen zij ook de verplichting tot ontruiming op zich.",
  },
  {
    q: "Welke aanvullende diensten biedt Uw Ontruimer aan?",
    a: "Naast woningontruiming biedt Uw Ontruimer ook diensten zoals vloerverwijdering, spoedontruiming, bedrijfsontruiming, inboedel opkopen, traplift verwijderen, verhuizen en taxatie van inboedel.",
  },
  {
    q: "Hoe kan ik een offerte aanvragen voor een woningontruiming?",
    a: "U kunt eenvoudig een afspraak maken door te bellen naar 085-303 58 94 of het contactformulier in te vullen op onze website. U ontvangt dan een vrijblijvende offerte.",
  },
  {
    q: "In welke regio's is Uw Ontruimer actief?",
    a: "Uw Ontruimer is actief in heel Nederland, met name in de provincies Utrecht, Noord-Holland en Zuid-Holland.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Veelgestelde vragen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12">
              Uw Ontruimer geeft antwoord op uw vragen. Staat uw vraag er niet tussen? Bel ons op{" "}
              <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a>.
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-slate-100 pb-6">
                  <h2 className="text-base font-medium text-slate-900 mb-2">{faq.q}</h2>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
