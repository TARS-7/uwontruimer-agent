import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 h-16">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <span className="font-semibold text-slate-900 text-[15px]">Uw Ontruimer</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/diensten/woningontruiming" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Diensten</Link>
          <Link href="/notaris" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Zakelijk</Link>
          <Link href="/werkwijze" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Werkwijze</Link>
          <Link href="/over-ons" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Over ons</Link>
          <Link href="/faq" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm font-medium text-slate-700">085-303 58 94</span>
          <Link href="/offerte" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Gratis offerte</Link>
        </div>
      </div>
    </header>
  );
}
