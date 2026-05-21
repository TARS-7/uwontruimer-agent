import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Woningontruiming door experts - 15+ jaar ervaring",
  description: "Woningontruiming van A tot Z door ervaren vakmensen. ✓ Kwaliteit & Zekerheid ✓ Offerte mét Oplevergarantie ✓ Snel geregeld ✓ Hoge klantbeoordeling.",
  alternates: { canonical: "/diensten/woningontruiming/" },
};

const checkIcon = (
  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const stadsLinks = [
  { name: "Amsterdam", slug: "amsterdam" },
  { name: "Amstelveen", slug: "amstelveen" },
  { name: "Utrecht", slug: "utrecht" },
  { name: "Haarlem", slug: "haarlem" },
  { name: "Den Haag", slug: "den-haag" },
  { name: "Rotterdam", slug: "rotterdam" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image
            src="/Ontruimers.png"
            alt="Professionele woningontruiming"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Woningontruiming nodig?<br />Professioneel en bezemschoon opgeleverd
              </h1>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-3 px-6" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "15+ jaar ervaring",
              "Schriftelijke opleveringsgarantie",
              "Binnen 24 uur beschikbaar",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <GoogleReviewsBar />

        {/* Content */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Diensten</p>

            {/* Amber CTA */}
            <div className="mb-10">
              <a
                href="https://analyse.uwontruimer.nl"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
                style={{ backgroundColor: "#d97706" }}
              >
                Start de AI-wizard →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratis prijsindicatie in 2 minuten · Geen verplichtingen</p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Wat is een woningontruiming?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Bij een woningontruiming wordt een woning volledig leeggemaakt en bezemschoon opgeleverd. Dit kan nodig zijn na overlijden van een bewoner, bij verhuizing, bij huurachterstand of bij een gedwongen ontruiming op last van een rechter. Uw Ontruimer verzorgt het hele traject: van inventarisatie en offerte tot en met de sleuteloverdracht aan verhuurder of notaris.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wanneer schakelt u een professioneel ontruimingsbedrijf in?</h2>
            <ul className="space-y-3 mb-6">
              {[
                "Na overlijden van een familielid of partner",
                "Bij verhuizing naar een verzorgingstehuis of zorgwoning",
                "Bij gedwongen ontruiming via deurwaarder of rechtbank",
                "Als verhuurder bij vertrek van een huurder",
                "Bij een vervuilde woning of problematische opruiming",
                "Als notaris, makelaar of bewindvoerder die een woning moet overdragen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Hoe verloopt een woningontruiming?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              Uw Ontruimer werkt volgens een vast stappenplan zodat u nooit voor verrassingen komt te staan:
            </p>
            <ol className="space-y-4 mb-6">
              {[
                { stap: "1", titel: "AI-wizard of telefonische inventarisatie", tekst: "Via onze gratis AI-wizard uploadt u foto's en ontvangt u binnen 2 minuten een scherpe prijsindicatie. Liever bellen? Dat kan ook op 085-303 58 94." },
                { stap: "2", titel: "Offerte met schriftelijke opleveringsgarantie", tekst: "U ontvangt een gedetailleerde offerte met vaste prijs en een schriftelijke garantie dat de woning bezemschoon wordt opgeleverd." },
                { stap: "3", titel: "Uitvoering op afgesproken datum", tekst: "Ons team start op de afgesproken dag. Waardevolle spullen worden geïnventariseerd voor opkoop of veiling — dit brengt de kosten omlaag." },
                { stap: "4", titel: "Duurzame verwerking", tekst: "Niet-waardevolle inboedel gaat naar regionale kringloopwinkels of wordt verantwoord afgevoerd. Minimale milieu-impact." },
                { stap: "5", titel: "Bezemschone oplevering", tekst: "De woning wordt bezemschoon opgeleverd, inclusief foto-rapportage voor verhuurder of notaris." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">{titel}</p>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Waarom kiezen voor Uw Ontruimer?</h2>
            <ul className="space-y-3 mb-6">
              {[
                "Meer dan 15 jaar ervaring in woningontruiming",
                "Schriftelijke opleveringsgarantie — geen verrassingen achteraf",
                "Discreet en respectvol, ook bij overlijden",
                "Waardevolle inboedel in mindering op uw offerte",
                "Binnen 24 uur beschikbaar voor spoedontruiming",
                "Duurzame verwerking via kringloopwinkels",
                "Gemiddeld 9.8/10 op Google — 2.500+ families geholpen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-slate-600 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Woningontruiming in uw regio</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-5">
              Uw Ontruimer is actief in heel Noord-Holland, Zuid-Holland en Utrecht. Bekijk de pagina voor uw stad voor lokale informatie en tarieven:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {stadsLinks.map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/woningontruiming-${slug}/`}
                  className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Woningontruiming {name}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">Wat kost een woningontruiming?</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              De kosten van een woningontruiming hangen af van de omvang van de woning, de hoeveelheid inboedel en eventuele bijzondere omstandigheden zoals vervuiling. Gemiddeld rekent u met:
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              {[
                { type: "Appartement (1–2 kamers)", prijs: "vanaf €450" },
                { type: "Rijtjeswoning (3–4 kamers)", prijs: "vanaf €750" },
                { type: "Vrijstaande woning / villa", prijs: "op maat" },
                { type: "Spoedontruiming (< 24 uur)", prijs: "toeslag van toepassing" },
              ].map(({ type, prijs }) => (
                <li key={type} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-light">{type}</span>
                  <span className="font-medium text-slate-800">{prijs}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
              Waardevolle spullen (antiek, sieraden, gereedschap) worden geïnventariseerd en kunnen het offertebedrag verlagen. Gebruik de AI-wizard voor een directe prijsindicatie.
            </p>

            {/* Bottom CTA */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mt-4">
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Klaar voor de volgende stap?</h2>
              <p className="text-slate-500 font-light text-sm mb-6">
                Ontvang binnen 2 minuten een vrijblijvende prijsindicatie via onze AI-wizard, of bel direct voor een afspraak.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href="https://analyse.uwontruimer.nl"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
                  style={{ backgroundColor: "#d97706" }}
                >
                  Start de AI-wizard →
                </a>
                <a
                  href="tel:0853035894"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-4 rounded-xl transition-colors text-base"
                >
                  Bel 085-303 58 94
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {["100% Gratis & Vrijblijvend", "Direct een prijsindicatie", "Foto's uploaden via mobiel"].map((item) => (
                  <span key={item} className="text-xs text-slate-400 flex items-center gap-1">
                    <svg className="w-3 h-3 text-slate-300" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
