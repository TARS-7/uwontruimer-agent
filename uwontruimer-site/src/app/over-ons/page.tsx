import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Meer dan 15 jaar ervaring in professionele ontruiming. Leer ons team en onze werkwijze kennen. UwOntruimer.nl",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Wie is UwOntruimer?</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is een gespecialiseerd ontruimingsbedrijf met meer dan 15 jaar ervaring in de branche. Wij helpen particulieren en professionals bij de volledige ontruiming van woningen, appartementen en bedrijfspanden door heel Nederland.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Wij geloven dat een ontruiming meer is dan het afvoeren van spullen. Veel van onze opdrachten vinden plaats in emotioneel beladen situaties — bij overlijden, scheiding of uitzetting. Ons team werkt altijd met respect, discretie en aandacht voor de mens achter de situatie.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">Ons bedrijf is erkend, verzekerd en werkt met vaste, transparante tarieven. Wij staan voor kwaliteit en leveren elke opdracht af met een schriftelijke opleveringsgarantie.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: "2.500+", label: "Families geholpen" },
                { stat: "15+", label: "Jaar ervaring" },
                { stat: "5,0 ★", label: "Google beoordeling" },
                { stat: "100%", label: "Opleveringsgarantie" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900 mb-1">{s.stat}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
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
