import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";

export const metadata: Metadata = {
  title: "Spoedontruiming",
  description: "Urgente spoedontruiming binnen 24 uur, 7 dagen per week. Direct beschikbaar door heel Nederland. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Spoedontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Heeft u een urgente ontruiming nodig? UwOntruimer is 7 dagen per week beschikbaar voor spoedopdrachten. Wij kunnen in de meeste gevallen binnen 24 uur ter plaatse zijn en de ontruiming dezelfde dag afronden.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Spoedontruimingen vragen om snelle coördinatie. Ons team staat klaar om direct op te schalen en meerdere medewerkers in te zetten, zodat de klus zo snel en zorgvuldig mogelijk wordt uitgevoerd.</p>
            <p className="text-slate-500 font-light leading-relaxed">Bel ons direct op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> — ook buiten kantooruren voor echte spoedgevallen.</p>
          </div>
        </div>
        <WizardCallout />
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
