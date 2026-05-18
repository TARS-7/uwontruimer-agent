export default function CTASection() {
  return (
    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-4">Aan de slag</p>
        <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Klaar voor de volgende stap?</h2>
        <p className="text-slate-500 font-light text-sm leading-relaxed mb-10">Vraag vandaag nog een gratis offerte aan of gebruik onze analysetool voor een directe prijsindicatie.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://analyse.uwontruimer.nl" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">Gratis offerte aanvragen</a>
          <a href="tel:0853035894" className="border border-slate-200 hover:border-blue-600 text-slate-600 hover:text-blue-600 font-medium px-6 py-3 rounded-lg transition-colors text-sm bg-white">Bel 085-303 58 94</a>
        </div>
      </div>
    </section>
  );
}
