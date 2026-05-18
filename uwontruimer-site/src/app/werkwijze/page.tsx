import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: "Hoe werkt UwOntruimer? Van gratis offerte tot schone oplevering in 4 stappen. Transparant, betrouwbaar en met garantie.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkwijze</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Zo werkt UwOntruimer</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12">Van het eerste contact tot de schone oplevering — wij begeleiden u door het gehele proces. Geen verrassingen, geen verborgen kosten.</p>
            <div className="space-y-10">
              {[
                { n: "01", t: "Gratis offerte aanvragen", d: "U vraagt een offerte aan via onze website of belt ons op 085-303 58 94. Wij plannen een gratis bezichtiging op een tijdstip dat u uitkomt. Tijdens de bezichtiging beoordelen wij de omvang van de ontruiming en de aanwezige inboedel." },
                { n: "02", t: "Helder voorstel zonder verborgen kosten", d: "Op basis van de bezichtiging ontvangt u een vaste offerteprijs. Geen uurtarieven, geen verrassingen achteraf. In het voorstel staat exact wat wij doen, wanneer wij dit doen en wat het kost. Eventuele opbrengst uit waardevolle items wordt verrekend." },
                { n: "03", t: "Professionele ontruiming", d: "Op de afgesproken datum verschijnt ons team op tijd. Wij ontruimen de woning volledig, inclusief zolder, kelder, schuur en tuin. Bruikbare goederen gaan naar hergebruik of veiling. De rest wordt milieuvriendelijk verwerkt." },
                { n: "04", t: "Schone oplevering met garantie", d: "Na de ontruiming leveren wij het pand bezem­schoon op. Dit wordt schriftelijk vastgelegd in onze opleveringsgarantie. U ontvangt een bewijs van oplevering dat u kunt overhandigen aan de verhuurder, notaris of makelaar." },
              ].map((s) => (
                <div key={s.n} className="relative pt-6 border-t-2 border-slate-100">
                  <div className="absolute top-[-2px] left-0 w-10 h-[3px] bg-blue-600 rounded-full"></div>
                  <div className="text-4xl font-semibold text-slate-200 leading-none mb-3">{s.n}</div>
                  <div className="text-base font-medium text-slate-900 mb-2">{s.t}</div>
                  <div className="text-sm text-slate-400 font-light leading-relaxed">{s.d}</div>
                </div>
              ))}
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
