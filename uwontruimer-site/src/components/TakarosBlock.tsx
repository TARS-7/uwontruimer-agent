import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function TakarosBlock() {
  return (
    <section className="mt-14 rounded-2xl py-16 px-8" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-stretch gap-8">
        {/* Links (60%): tekst + knop */}
        <div className="md:w-3/5 order-2 md:order-1 text-left">
          <p
            className="text-xs font-semibold mb-4"
            style={{ color: "#1a2744", letterSpacing: "0.35em" }}
          >
            TAKAROS
          </p>
          <h2
            className={`${cormorant.className} text-3xl sm:text-4xl font-semibold tracking-tight mb-5`}
            style={{ color: "#1a2744" }}
          >
            Waardevolle objecten in de inboedel?
          </h2>
          <p className="text-base leading-relaxed mb-4 max-w-2xl" style={{ color: "#4a4a4a" }}>
            Tijdens een ontruiming stuiten wij regelmatig op objecten die meer waard zijn dan gedacht — antiek, sieraden, kunst of design. Via Takaros, ons zusterplatform, kunt u die objecten gratis laten beoordelen door gespecialiseerde veilinghuizen. Vrijblijvend, zonder veilingkennis, en zonder verplichting.
          </p>
          <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: "#4a4a4a" }}>
            Wij signaleren waardevolle objecten tijdens de ontruiming en informeren u hierover. U bepaalt zelf wat er daarna mee gebeurt.
          </p>
          <a
            href="https://takaros.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white px-7 py-4 rounded-xl shadow-md transition-colors bg-[#c9a84c] hover:bg-[#b8973a]"
          >
            Gratis waardeoordeel aanvragen via Takaros →
          </a>
        </div>

        {/* Rechts (40%): afbeelding */}
        <div className="md:w-2/5 order-1 md:order-2 relative h-56 md:h-auto rounded-lg overflow-hidden">
          <Image
            src="/images/takaros-objecten.png"
            alt="Waardevolle objecten uit een inboedel"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
