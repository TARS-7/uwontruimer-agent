import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met UwOntruimer. Telefonisch bereikbaar op 085-303 58 94, ma-za 8:00–18:00.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Neem contact op</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-10">Heeft u een vraag, wilt u een offerte of zoekt u een vaste partner? Wij zijn telefonisch en per e-mail bereikbaar. U kunt ook direct een gratis offerte aanvragen via onze analysetool.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Telefoon</div>
                <a href="tel:0853035894" className="text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors">085-303 58 94</a>
                <p className="text-xs text-slate-400 mt-2">Maandag t/m zaterdag, 8:00 – 18:00</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">E-mail</div>
                <a href="mailto:info@uwontruimer.nl" className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all">info@uwontruimer.nl</a>
                <p className="text-xs text-slate-400 mt-2">Reactie binnen 1 werkdag</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Adres</div>
                <p className="text-base font-medium text-slate-900">UwOntruimer.nl</p>
                <p className="text-sm text-slate-500 mt-1">Postbus 1234<br/>1000 AA Amsterdam</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">KVK & BTW</div>
                <p className="text-sm text-slate-500">KVK: 12345678</p>
                <p className="text-sm text-slate-500 mt-1">BTW: NL123456789B01</p>
              </div>
            </div>
            <a href="https://analyse.uwontruimer.nl" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">Gratis offerte aanvragen</a>
          </div>
        </div>
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
