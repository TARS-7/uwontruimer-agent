import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedrijfsontruiming | UwOntruimer.nl",
  description: "Bedrijfsontruiming: snel en vakkundig ontruimd door Uw Ontruimer. Inclusief archiefvernietiging, vloerverwijdering en schoonmaak. Bel 085-303 58 94.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <Image
            src="/Dienst_Bedrijfsontruiming.jpg"
            alt="Professionele bedrijfsontruiming"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        {/* Intro */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Bedrijfsontruiming</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Bedrijfsontruiming: snel en vakkundig ontruimd door Uw Ontruimer. Uw bedrijfspand dient leeg en conform de huurovereenkomst opgeleverd te worden. Wij leveren ook aanvullende diensten:
            </p>

            {/* USPs */}
            <ul className="space-y-3 mb-10">
              {[
                "Klus- of sloopwerkzaamheden",
                "Vloerverwijdering",
                "Schoonmaakwerkzaamheden",
                "Archiefvernietiging (dossier en papier)",
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

        {/* Werkwijze */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Werkwijze</h2>
            <ul className="space-y-3">
              {[
                "Offerte op maat",
                "Archiefvernietiging",
                "Bruikbare goederen worden naar gewenste locatie gebracht",
                "Afval wordt door ons verwijderd en afgevoerd",
                "Herstelwerkzaamheden worden uitgevoerd",
                "Pand wordt in originele staat opgeleverd",
              ].map((stap) => (
                <li key={stap} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-slate-600 font-light">{stap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA blauw */}
        <div className="bg-blue-600 py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Neem contact op voor een bedrijfsontruiming</h2>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              Wilt u een bedrijfspand laten ontruimen? Neem dan gerust contact met ons op. Maak eenvoudig een afspraak met ons door te bellen of vul het contactformulier in op onze website. U ontvangt dan een vrijblijvende offerte.
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
