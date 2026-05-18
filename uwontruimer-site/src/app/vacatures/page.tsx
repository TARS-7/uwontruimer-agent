import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vacatures | Werk bij UwOntruimer.nl",
  description: "Wil jij deel uitmaken van een enthousiast ontruimingsteam? Bekijk onze openstaande vacatures bij Uw Ontruimer.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werken bij ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vacatures</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wil jij deel uitmaken van een klein, enthousiast team? Steek je graag de handen uit de mouwen en houd je van fysiek werk? Wie weet ben jij dan de ontruimer die wij zoeken! Uw Ontruimer is een erkend ontruimingsbedrijf met meer dan 15 jaar ervaring in regio Noord- en Zuid-Holland.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Hoe ziet jouw werkdag eruit?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Als ontruimer is geen dag hetzelfde. Je rijdt heel Nederland door, voornamelijk in Noord- en Zuid-Holland. De ene dag ben je aan het werk in het centrum van Amsterdam, de andere dag in een winkel of bedrijfspand ver daarbuiten.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Wat kun je verwachten?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Uw Ontruimer biedt je een marktconform salaris volgens de CAO. Je komt terecht in een enthousiast team dat van aanpakken houdt.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Dit is echt iets voor jou als je:</h2>
            <ul className="text-slate-500 font-light space-y-2 mb-6 list-disc list-inside">
              <li>het te gek vindt om met collega&apos;s onze klanten te ontzorgen</li>
              <li>fysiek fit bent en ook wilt blijven</li>
              <li>flexibiliteit in werktijden geen probleem vindt</li>
              <li>in het bezit bent van rijbewijs B</li>
              <li>in Amsterdam, Amstelveen of omgeving (20 km) woont</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8">Parttime mogelijk?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Ja, ook parttime werken behoort tot de mogelijkheden. Wij komen graag met je in contact om dit te bespreken.
            </p>

            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-600 font-medium mb-2">Interesse?</p>
              <p className="text-slate-500 font-light">Neem contact met ons op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of stuur een e-mail naar <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.</p>
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
