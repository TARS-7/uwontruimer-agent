import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vloerverwijdering | UwOntruimer.nl",
  description: "Vloer verwijderen door experts. Vloerenstrippers, schrapmessen en stootijzers voor alle soorten vloerbedekking. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Intro */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Vloerverwijdering</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Vloer verwijderen door experts</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Een vloer verwijderen kan een lastig klusje zijn. Zeker als u niet weet wat er onder uw huidige vloerbedekking ligt. Soms liggen er meerdere lagen over elkaar wat voor verrassingen kan zorgen. Vloeren worden door UwOntruimer.nl vakkundig verwijderd en afgevoerd. Wij hebben het juiste materiaal: vloerenstrippers, schrapmessen en stootijzers om de klus naar behoren uit te voeren.
            </p>

            {/* USPs */}
            <ul className="space-y-3 mb-10">
              {[
                "15+ jaar ervaring",
                "Waardevolle spullen kunnen geveild worden",
                "Overige spullen worden duurzaam verwijderd in samenwerking met regionale kringloopwinkels",
                "Wij werken discreet en ontzorgen u zoveel mogelijk",
              ].map((usp) => (
                <li key={usp} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-slate-600 font-light">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Aanvullende diensten */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Huis ontruimen</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Naast het verwijderen van vloeren kan Uw Ontruimer u helpen bij andere klussen. Denk aan:{" "}
              <Link href="/diensten/spoedontruiming" className="text-blue-600 hover:underline">spoedontruiming</Link>,{" "}
              <Link href="/diensten/bedrijfsontruiming" className="text-blue-600 hover:underline">bedrijfsontruiming</Link>{" "}
              en seniorenverhuizingen. Neem gerust contact met ons op om de mogelijkheden te bespreken.
            </p>
          </div>
        </div>

        {/* Waarom ons */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Waarom u voor Uw Ontruimer zou moeten kiezen</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              Als u een ontruimingsbedrijf met expertise wilt inschakelen voor uw woningontruiming, bent u bij Uw Ontruimer aan het juiste adres. Al meer dan 15 jaar staan wij klaar voor particulieren en bedrijven. Wij helpen dan ook bij veel verschillende klussen, zoals verhuizingen, bedrijfsverhuizingen en spoedverhuizingen. Bovendien is onze communicatie goed en is onze woningontruiming zeer betaalbaar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Neem direct contact op
              </Link>
              <a href="tel:0853035894" className="inline-flex items-center gap-2 border border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Bel ons — 085-303 58 94
              </a>
            </div>
          </div>
        </div>

        <WizardCallout />
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
