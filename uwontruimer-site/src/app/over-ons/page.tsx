import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over ons | Uw Ontruimer — dé specialist in ontruimingsdiensten",
  description: "Met meer dan 15 jaar ervaring is Uw Ontruimer gespecialiseerd in diverse ontruimingsdiensten. Betrouwbaar, discreet en met opleveringsgarantie.",
};

const usps = ["Discreet", "Duurzaam", "Opleveringsgarantie", "15+ jaar ervaring", "Ontzorgt"];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Over ons</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">
              Uw Ontruimer — dé specialist in professionele ontruimingsdiensten
            </h1>

            {/* Teamfoto */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
              <Image
                src="/Uw-Ontruimer.jpg"
                alt="Het team van UwOntruimer"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Met ons ervaren en toegewijde team bieden wij hoogwaardige oplossingen voor diverse ontruimingsbehoeften in Nederland. Betrouwbaarheid, deskundigheid en klantgerichtheid vormen de kern van onze dienstverlening.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Wij begrijpen dat ontruimingen vaak complex en emotioneel beladen zijn. Of het nu gaat om een woningontruiming na een overlijden, een bedrijfsontruiming of een verhuizing, wij staan voor u klaar om het proces soepel te laten verlopen en u te ontzorgen.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Bij Uw Ontruimer streven we naar maximale klanttevredenheid. Wij luisteren naar uw wensen en passen onze diensten daarop aan. Ons doel is om elke ontruiming vlekkeloos te laten verlopen, waarbij we efficiëntie, kwaliteit en oog voor detail combineren. Het pand wordt achtergelaten zoals u dat wenst, volgens de afgesproken specificaties.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {usps.map((usp) => (
                <span key={usp} className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  {usp}
                </span>
              ))}
            </div>

            {/* Achtergrond */}
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Achtergrond</h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Opgericht vanuit maatschappelijk oogpunt</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is ruim 8 jaar werkzaam geweest voor diverse stichtingen en kringlooporganisaties en heeft daar veel ervaring opgedaan in het taxeren van roerende goederen en het ontruimen van woningen.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5 italic border-l-4 border-blue-100 pl-4">
              "Tijdens mijn werk voor diverse stichtingen, die zich richten op ontruimingen en verhuizingen, merkte ik dat er een behoefte is aan een betrouwbare en professionele organisatie die u daarbij kan helpen."
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Dankzij de ervaring van Uw Ontruimer in kringloopwinkels, veilingen en internetverkopen kunnen wij u vertellen wat uw inboedel voor waarde heeft en kunnen wij u er een eerlijke prijs voor verstrekken of voor u laten veilen.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-3">Duurzaam</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Wij zijn een duurzaam bedrijf dat zoveel mogelijk hergebruikt. Bij een ontruiming blijven vaak nog een heleboel bruikbare goederen over. Daarom werken we samen met diverse kringlooporganisaties en andere goede doelen om nog veel meer mensen gelukkig te maken met uw restboedel.
            </p>

            {/* Opleveringsgarantie */}
            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Opleveringsgarantie</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is sinds 2010 een vooraanstaand dienstverlener van het leeghalen van woningen en bedrijfspanden. Het streven van de onderneming is het ontzorgen en opleveren van panden voor haar klanten. Kwaliteit in de vorm van hoogstaande serviceverlening en zekerheid voor een oplevering van de specifieke eisen die gesteld worden — dat blijkt wel uit het feit dat u oplevergarantie krijgt bij deze dienst.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              De onderneming beschikt over eigen, goed opgeleide en ervaren ontruimers en professioneel materieel zoals vrachtwagens en verhuisliften. Uw Ontruimer is gevestigd aan de Welnastraat 175, 1096GJ Amsterdam en bedient hiermee de gehele regio Noord- en Zuid-Holland. De adviseurs komen altijd kosteloos bij u langs om een vrijblijvende offerte te maken.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              De onderneming is actief in de particuliere én de zakelijke markt. Voor zowel huur- als koopwoningen. Bovendien is het belangrijk om met een solide bedrijf in zee te gaan voordat u de sleutels van de woning overhandigt — Uw Ontruimer is dat bedrijf.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: "2.500+", label: "Families geholpen" },
                { stat: "15+", label: "Jaar ervaring" },
                { stat: "5,0 ★", label: "Google beoordeling" },
                { stat: "100%", label: "Opleveringsgarantie" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900 mb-1">{s.stat}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
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
