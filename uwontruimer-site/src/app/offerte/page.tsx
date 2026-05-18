import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Gratis offerte aanvragen",
  description: "Vraag gratis een offerte aan voor uw ontruiming. Prijsindicatie binnen 5 minuten via onze analysetool.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Offerte</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Gratis offerte aanvragen</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-4 max-w-xl mx-auto">Gebruik onze analysetool voor een directe prijsindicatie. U krijgt binnen 5 minuten een indicatie — geen gesprek nodig, geen verplichtingen.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-10 max-w-xl mx-auto">Liever direct contact? Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> voor een vrijblijvend gesprek.</p>
            <a
              href="https://analyse.uwontruimer.nl"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-colors text-base"
            >
              Offerte aanvragen via analysetool
            </a>
            <p className="text-xs text-slate-400 mt-4">Gratis · Vrijblijvend · Binnen 5 minuten</p>
          </div>
        </div>
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
