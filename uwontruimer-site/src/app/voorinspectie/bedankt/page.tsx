import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoorinspectieBedanktTracking from "@/components/VoorinspectieBedanktTracking";

export const metadata: Metadata = {
  title: "Voorinspectie ingepland — Uw Ontruimer",
  description: "Uw betaling is ontvangen. Wij nemen contact op om de voorinspectie in te plannen.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/voorinspectie/bedankt/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <VoorinspectieBedanktTracking />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Bedankt — uw voorinspectie staat vast
            </h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Wij hebben uw betaling ontvangen en sturen de factuur per e-mail. Binnen één werkdag nemen wij
              contact met u op om de inspectie met de woningcorporatie af te stemmen. U hoeft er zelf niet bij te zijn.
            </p>
            <div className="rounded-2xl border border-slate-200 p-6 text-left" style={{ backgroundColor: "#f8fafc" }}>
              <p className="font-medium text-slate-800 mb-3">Wat er nu gebeurt</p>
              <ol className="space-y-3">
                {[
                  "Wij bellen u binnen één werkdag om de gegevens door te nemen",
                  "Wij stemmen het inspectiemoment af met de woningcorporatie",
                  "Wij zijn erbij, leggen de woning vast en nemen de herstellijst door",
                  "U ontvangt één offerte, met de €150 er alvast van afgetrokken",
                ].map((tekst, i) => (
                  <li key={tekst} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-600 font-light text-sm leading-relaxed">{tekst}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              Vragen? Bel <a href="tel:0853035894" className="text-blue-600 hover:underline">085-303 58 94</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
