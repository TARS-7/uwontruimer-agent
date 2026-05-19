import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Woningontruiming nodig als bewindvoerder? Kom in contact",
  description: "Heeft u de taak om een ontruiming te regelen voor uw cliënt? Bij Uw Ontruimer bent u aan het juiste adres. Het kan spoedig en duurzaam. 15+ jaar ervaring",
  alternates: { canonical: "/bewindvoerder" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Samenwerking</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Uw Ontruimer voor bewindvoerders</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">In uw taak als bewindvoerder zijnde kan het voorkomen dat een cliënt zijn of haar woning uit moet en dat de oude woning ontruimd dient te worden. Uw Ontruimer kan u hierbij helpen. Wij halen de woning op een respectvolle manier leeg.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Inboedelbeheer</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Een groot voordeel van Uw Ontruimer is onze service inboedelbeheer. Wij inventariseren dan de volledige inboedel en documenteren dit. Zo houdt u zicht op de inboedel. Indien nodig kunnen we dit ook voor u taxeren.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waardevolle goederen</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Waardevolle goederen kunnen we voor u taxeren. Wilt u de goederen verkopen? Uw Ontruimer koopt deze ook op. Daarnaast kunnen we het ook voor u naar de veiling brengen. U krijgt dan een overzicht met de ingebrachte spullen en de geschatte opbrengst. Nadat de goederen geveild zijn krijgt u de opbrengst direct op uw rekening gestort.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Duurzaam</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij hebben duurzaamheid hoog in het vaandel staan. Met uw toestemming bieden wij de spullen die nog geschikt zijn voor hergebruik aan bij de aan ons aangesloten kringlooporganisaties.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Woning verhuur of verkoop klaar opleveren</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer levert de woning op naar wens van de verhuur of verkoop makelaar. Wij hebben kwaliteit hoog in het vaandel staan en we kunnen u hierbij volledig ontzorgen.</p>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>Discreet</li>
              <li>Duurzaam</li>
              <li>Opleveringsgarantie</li>
              <li>15+ jaar ervaring</li>
              <li>Ontzorgt</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Kom in contact</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Maak eenvoudig een afspraak met ons door te bellen naar: 085-303 58 94 of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.</p>
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
