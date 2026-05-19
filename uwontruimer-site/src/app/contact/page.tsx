import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Neem gerust contact op | UwOntruimer.nl",
  description: "Neem contact op met UwOntruimer. Telefonisch bereikbaar op 085-303 58 94. Wij reageren zo spoedig mogelijk op uw vraag of offerteverzoek.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Neem gerust contact op</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Wilt u een ontruimer inschakelen of heeft u een vraag? Neem dan gerust contact met ons op. Dit kan telefonisch, per mail of door het invullen van het contactformulier. Wij reageren zo spoedig mogelijk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {/* Telefoon */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Bel ons direct</div>
                <a href="tel:0853035894" className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                  085-303 58 94
                </a>
                <p className="text-xs text-slate-400 mt-2">Ma t/m za, 8:00 – 18:00</p>
              </div>

              {/* E-mail */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Stuur een mail</div>
                <a href="mailto:info@uwontruimer.nl" className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all">
                  info@uwontruimer.nl
                </a>
                <p className="text-xs text-slate-400 mt-2">Reactie binnen 1 werkdag</p>
              </div>

              {/* Adres */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">U kunt ons vinden op</div>
                <p className="text-base font-medium text-slate-900">Welnastraat 175</p>
                <p className="text-sm text-slate-500 mt-1">1096 GJ Amsterdam</p>
              </div>
            </div>

            <Link
              href="/offerte"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Gratis offerte aanvragen
            </Link>
          </div>
        </div>
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
