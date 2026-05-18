import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
              <span className="font-semibold text-slate-900 text-sm">Uw Ontruimer</span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[200px] mb-4">Professionele ontruiming van woningen en bedrijven in heel Nederland.</p>
            <Link href="tel:0853035894" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">085-303 58 94</Link>
          </div>
          <div>
            <h4 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Diensten</h4>
            <ul className="space-y-2">
              {[["Woningontruiming","/diensten/woningontruiming"],["Bedrijfsontruiming","/diensten/bedrijfsontruiming"],["Spoedontruiming","/diensten/spoedontruiming"],["Vloerverwijdering","/diensten/vloerverwijdering"],["Opkopen inboedel","/diensten/opkopen-inboedel"],["Taxatie","/diensten/taxatie"],["Inboedel veilen","/diensten/inboedel-veilen"],["Verhuizen","/diensten/verhuizen"]].map(([label,href])=>(
                <li key={href}><Link href={href} className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-light">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Zakelijk</h4>
            <ul className="space-y-2">
              {[["Voor notarissen","/notaris"],["Voor makelaars","/makelaar"],["Bewindvoerders","/bewindvoerder"],["Woningcorporaties","/woningbouwvereniging"]].map(([label,href])=>(
                <li key={href}><Link href={href} className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-light">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Over ons</h4>
            <ul className="space-y-2">
              {[["Over ons","/over-ons"],["Werkwijze","/werkwijze"],["Opleveringsgarantie","/opleveringsgarantie"],["Duurzaam","/duurzaam"],["FAQ","/faq"],["Blog","/blog"],["Contact","/contact"]].map(([label,href])=>(
                <li key={href}><Link href={href} className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-light">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400">© 2026 uwontruimer.nl — Alle rechten voorbehouden</p>
          <p className="text-xs text-slate-400">KVK 12345678 · BTW NL123456789B01</p>
        </div>
      </div>
    </footer>
  );
}
