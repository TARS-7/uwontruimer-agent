import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vacatures | UwOntruimer.nl",
  description: "Werken bij Uw Ontruimer? Bekijk onze vacatures of stuur een open sollicitatie. We zijn altijd op zoek naar enthousiaste ontruimers.",
  alternates: { canonical: "/vacatures/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werken bij</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Vacatures</h1>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
              <p className="text-slate-700 font-medium mb-1">Momenteel geen openstaande vacatures</p>
              <p className="text-slate-500 font-light text-sm">
                We hebben op dit moment geen specifieke vacatures — maar we zijn altijd benieuwd naar enthousiaste mensen. Stuur een open sollicitatie naar 
                <a href="mailto:info@uwontruimer.nl" className="text-blue-600 font-medium">info@uwontruimer.nl</a>.
              </p>
            </div>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wil jij deel uitmaken van een klein enthousiast team? Steek je graag de handen uit de mouwen en houd je van fysiek werk? Wie weet ben jij dan de ontruimer die wij zoeken!  Uw Ontruimer is en een erkend ontruimingsbedrijf  met meer dan 10 jaar ervaring in regio Noord- en Zuid-Holland. Wij ontruimen dagelijks zowel woningen als bedrijfspanden. Er komt veel kijken bij een ontruiming en dat kan een behoorlijke impact hebben op onze klanten. Wij begrijpen dat en we weten wat er  voor nodig is om ze te ontzorgen.  Tevreden klanten, daar doen we het voor!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe ziet je werkdag eruit?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Als ontruimer is geen dag hetzelfde! Je rijdt heel Nederland door en voornamelijk in Noord- en Zuid-Holland. De ene dag ben je aan het werk in het centrum van Amsterdam en de andere dag ben je aan het werk in een winkel of bedrijfspand ver daarbuiten!</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kan je verwachten?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Uw Ontruimer bied je een marktconform salaris volgens de  CAO. Het salaris is afhankelijk van je leeftijd en je ervaring. Je komt terecht in een enthousiast team ontruimers dat van aanpakken houdt.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Dit is echt iets voor jou als je;</h2>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>het te gek vindt om met collega’s onze klanten te ontzorgen;</li>
              <li>fysiek fit bent en ook wilt blijven;</li>
              <li>flexibiliteit in werktijden geen probleem is;</li>
              <li>in het bezit bent van rijbewijs B</li>
              <li>in Amsterdam / Amstelveen of omgeving (20km) woont</li>
            </ul>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Je kunt beter niet reageren als;</h2>
            <ul className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
              <li>het fijn vindt om elke dag hetzelfde te doen;</li>
              <li>niks van Nederland wil zien;</li>
              <li>niet van humor houdt;</li>
              <li>niet van hard werken houdt;</li>
            </ul>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Liever parttime werken?  Dat behoort ook tot de mogelijkheden. Wij komen graag met je in contact om dit te bespreken.</p>
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Ben jij de ontruimer die wij zoeken?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">Wij komen graag met je in contact!</p>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 font-medium mb-2">Hulp nodig?</p>
          <p className="text-slate-500 font-light text-sm mb-4">
            Bel Uw Ontruimer op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag vrijblijvend een offerte aan.
          </p>
          <a href="/offerte" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
            Gratis offerte aanvragen
          </a>
        </div>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
