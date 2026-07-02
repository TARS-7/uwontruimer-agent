import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bullets = [
  "Gratis waardeoordeel door erkende specialisten",
  "Meerdere veilinghuizen beoordelen tegelijk",
  "U beslist zelf of, en bij wie, u veilt",
];

export default function TakarosHomepageBlock() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center gap-12">
        {/* Linkerkolom: tekst */}
        <div className="order-2 md:order-1 text-left">
          <p
            className="text-xs font-semibold mb-5"
            style={{ color: "#1a2744", letterSpacing: "0.35em" }}
          >
            TAKAROS — ZUSTERPLATFORM
          </p>
          <h2
            className={`${cormorant.className} text-4xl md:text-5xl font-semibold tracking-tight mb-6`}
            style={{ color: "#1a2744" }}
          >
            Zit er iets waardevols tussen?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 max-w-xl" style={{ color: "#4a4a4a" }}>
            Tijdens een ontruiming stuiten wij regelmatig op objecten die meer waard zijn dan gedacht. Een schilderij, een sieraad, een horloge of een stuk design — het is niet altijd zichtbaar wat iets waard is.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "#4a4a4a" }}>
            Via Takaros legt u een foto voor aan gespecialiseerde veilinghuizen. Zij geven een vrijblijvend waardeoordeel — inclusief een indicatie van de verwachte opbrengst. Gratis, zonder veilingkennis, en zonder verplichting.
          </p>

          <ul className="space-y-3 mb-9">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#c9a84c" }}
                >
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-base" style={{ color: "#1a2744" }}>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://takaros.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl shadow-md transition-colors bg-[#c9a84c] hover:bg-[#b8973a]"
          >
            Ontdek Takaros →
          </a>
        </div>

        {/* Rechterkolom: afbeelding */}
        <div className="order-1 md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden" style={{ backgroundColor: "#f5f0e8" }}>
          <Image
            src="/hero-main-takaros.png"
            alt="Waardevolle objecten uit een inboedel"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
