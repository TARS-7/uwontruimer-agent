import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op veelgestelde vragen over woningontruiming, kosten, werkwijze en meer. UwOntruimer.nl",
};

const faqs = [
  { q: "Wat kost een woningontruiming?", a: "De kosten hangen af van de omvang van de ontruiming, de hoeveelheid inboedel en de locatie. Wij werken altijd met een vaste prijs na bezichtiging. Een kleine studio begint doorgaans rond €400, grotere woningen variëren. Waardevolle inboedel kan de netto kosten verlagen." },
  { q: "Hoe snel kunnen jullie komen?", a: "Voor reguliere ontruimingen plannen wij doorgaans binnen 3–5 werkdagen. Bij spoedopdrachten zijn wij in de meeste gevallen binnen 24 uur beschikbaar, ook in het weekend." },
  { q: "Wat houdt de opleveringsgarantie in?", a: "Na afronding van de ontruiming leveren wij het pand bezem­schoon op. Dit leggen wij schriftelijk vast in een opleveringsrapport dat u kunt overhandigen aan verhuurder, notaris of makelaar." },
  { q: "Wat gebeurt er met de spullen?", a: "Bruikbare goederen worden aangeboden aan kringloopwinkels, goede doelen of via onze veilingpartners. Waardevolle items kunnen wij opkopen en de opbrengst verrekenen met de kosten. Wat overblijft wordt milieuvriendelijk verwerkt en afgevoerd." },
  { q: "Moet ik aanwezig zijn tijdens de ontruiming?", a: "Dat is niet verplicht. U kunt de sleutels aan ons overdragen en wij regelen de rest. Na afloop ontvangt u een opleveringsbevestiging en kunnen wij de sleutels overdragen aan de partij van uw keuze." },
  { q: "Werken jullie ook buiten kantooruren?", a: "Ja, voor spoedopdrachten zijn wij ook buiten de reguliere kantooruren bereikbaar. Bel 085-303 58 94 en leg uw situatie uit — wij denken altijd met u mee." },
  { q: "Zijn jullie verzekerd?", a: "Ja, UwOntruimer is volledig aansprakelijkheidsverzekerd. Mocht er onverhoopt iets misgaan, dan bent u gedekt." },
  { q: "Kunnen jullie ook bedrijfspanden ontruimen?", a: "Absoluut. Naast woningen ontruimen wij ook kantoren, winkels, magazijnen en andere bedrijfspanden. Neem contact op voor een offerte op maat." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Veelgestelde vragen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12">Heeft u een andere vraag? Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a>.</p>
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
