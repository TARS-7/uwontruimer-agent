import { sendGAEvent } from "@next/third-parties/google";

// Note: this component uses sendGAEvent which requires client context.
// Wrap in a client component on pages that need it, or use as-is in server pages
// by keeping the onClick separate.

export default function WizardCallout() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-1">Geen bellen nodig</p>
          <p className="text-sm font-medium text-slate-900 mb-1">Prijsindicatie binnen 5 minuten</p>
          <p className="text-xs text-slate-500 font-light leading-relaxed">Gebruik onze AI-analysetool: vul uw adres in, upload foto's en ontvang direct een indicatie — zonder gesprek.</p>
        </div>
        <a
          href="https://analyse.uwontruimer.nl"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
        >
          Start de wizard →
        </a>
      </div>
    </div>
  );
}
