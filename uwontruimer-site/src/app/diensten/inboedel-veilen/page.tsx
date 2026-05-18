import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import WizardCallout from "@/components/WizardCallout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inboedel veilen | UwOntruimer.nl",
  description: "Laat uw inboedel veilen via erkende veilinghuizen. Al meer dan 10 jaar ervaring. Discreet, duurzaam en met opleveringsgarantie. Bel 085-303 58 94.",
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
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Inboedel veilen</h1>
            <h2 className="text-xl font-medium text-slate-600 mb-6">Laat uw inboedel veilen — al meer dan 10 jaar ervaring</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Heeft u mogelijk een waardevolle inboedel of object die u wilt laten veilen? Dan bent u bij Uw Ontruimer aan het juiste adres. Wij hebben ruim 10 jaar ervaring en bieden hulp bij de afwikkeling met onze eigen ervaren adviseurs.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Neem direct contact op
            </Link>
          </div>
        </div>

        {/* Voordelen */}
        <div className="bg-slate-50 py-14 px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">De voordelen van je inboedel veilen</h2>
              <p className="text-slate-500 font-light leading-relaxed">
                Wij werken samen met verschillende veilinghuizen die een goede zorg dragen om een mooie opbrengst te realiseren. Het veilen van goederen kan een mooi resultaat opleveren omdat deze veilinghuizen een goed opgebouwd netwerk van verzamelaars, liefhebbers, handelaren en antiquairs hebben. U ontvangt van het veilinghuis een inbrenglijst waarop alle ingebrachte goederen staan met de getaxeerde waarde. Als de veiling is afgelopen krijgt u een bericht met wat de geveilde goederen hebben opgebracht en wordt de opbrengst op uw rekening gestort.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {[
                  "Discreet",
                  "Duurzaam",
                  "Opleveringsgarantie",
                  "15+ jaar ervaring",
                  "Ontzorgt",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Afspraak */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Wilt u uw inboedel laten veilen?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Overweegt u om uw inboedel te laten veilen? Neem dan gerust contact met ons op. Maak eenvoudig een afspraak met ons door te bellen naar{" "}
              <a href="tel:0853035894" className="text-blue-600 font-medium hover:underline">085-303 58 94</a>{" "}
              of vul het <Link href="/contact" className="text-blue-600 hover:underline">contactformulier</Link> in op onze website. U ontvangt dan een vrijblijvende offerte van ons.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0853035894" className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Bel ons — 085-303 58 94
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Contactformulier
              </Link>
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
