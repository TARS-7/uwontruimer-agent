import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet. Ga terug naar de homepage van UwOntruimer.nl.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mt-16 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 bg-white text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
          </svg>
        </div>
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">404</p>
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Pagina niet gevonden</h1>
        <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm mb-10">
          De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of neem contact met ons op.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">
            Terug naar homepage
          </Link>
          <a href="tel:0853035894" className="border border-slate-200 hover:border-blue-600 text-slate-600 hover:text-blue-600 font-medium px-6 py-3 rounded-lg transition-colors text-sm bg-white">
            Bel 085-303 58 94
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
