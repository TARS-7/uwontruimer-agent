import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import Image from "next/image";
import Link from "next/link";

// Foto's gaan rechtstreeks naar de zakelijke WhatsApp (085-303 58 94, dashboard-inbox),
// niet via de wizard: bij een complete inboedel wil Jurriën de foto's zelf direct zien.
const WHATSAPP_URL =
  "https://wa.me/31853035894?text=" +
  encodeURIComponent("Hallo, ik wil graag een bod op een complete inboedel. Hierbij stuur ik foto's van de woning.");

export const metadata: Metadata = {
  title: "Inboedel overnemen en woning leeg opleveren | Uw Ontruimer",
  description:
    "Wij nemen de complete inboedel over en leveren de woning leeg op. Eén bod, vaak binnen 48 uur. Bij een waardevolle inboedel betalen wij u. Amsterdam, Amstelveen, 't Gooi, Haarlem, Utrecht.",
  alternates: { canonical: "/diensten/opkopen-inboedel/" },
};

const FAQ = [
  {
    v: "Hoe snel kan het?",
    a: "Het bod volgt meestal binnen 48 uur nadat wij uw foto's hebben ontvangen. De uitvoering plannen wij vaak binnen een week. Spoed is mogelijk, ook in het weekend.",
  },
  {
    v: "Moet ik eerst alles uitzoeken?",
    a: "Nee. U zegt wat u wilt houden, de rest nemen wij over. Persoonlijke papieren, foto's en herinneringen leggen wij tijdens het werk apart en geven wij aan u terug.",
  },
  {
    v: "Wat als er stukken zijn die ik zelf wil houden?",
    a: "Dat is geen probleem. U geeft vooraf aan welke stukken u houdt en wij verwerken dat in het bod. Op de dag zelf zetten wij ze apart of brengen wij ze op een adres in de buurt.",
  },
  {
    v: "Hoe weet ik dat het bod eerlijk is?",
    a: "Het bod is vrijblijvend en staat op papier. U beslist pas daarna. Wij nemen al meer dan vijftien jaar inboedels over en leven van terugkerende families en verwijzingen, niet van één enkele afspraak.",
  },
  {
    v: "Werkt u ook voor huurwoningen met een opleverdatum?",
    a: "Juist. Wij leveren op volgens de eisen van de verhuurder of beheerder en u ontvangt een opleveringsbewijs. Zo kunt u de sleutels op tijd inleveren.",
  },
  {
    v: "Komt u ook buiten uw werkgebied?",
    a: "Voor grote of bijzondere inboedels komen wij in overleg ook verder weg. Stuur foto's mee, dan hoort u snel of dat kan.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ v, a }) => ({ "@type": "Question", name: v, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 tracking-tight">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-500 font-light leading-relaxed mb-5">{children}</p>
);

const check = (
  <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CtaBox = () => (
  <div className="bg-slate-50 rounded-2xl p-8 text-center mt-12 border border-slate-100">
    <h2 className="text-xl font-semibold mb-2" style={{ color: "#1e3a5f" }}>Stuur foto&apos;s en hoor wat wij bieden</h2>
    <p className="text-slate-500 font-light mb-6">Een paar overzichtsfoto&apos;s per kamer is genoeg. U hoort meestal binnen 48 uur van ons.</p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>
        Foto&apos;s sturen via WhatsApp →
      </a>
      <a href="tel:0853035894" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-7 py-4 rounded-xl bg-white hover:bg-slate-50 transition-colors text-base">
        Bel 085-303 58 94
      </a>
    </div>
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
      {["Vrijblijvend bod", "Eén bod op het geheel", "Leeg opgeleverd met garantie"].map((item) => (
        <span key={item} className="flex items-center gap-2 text-sm text-slate-600">{check}{item}</span>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="mt-16">
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/inboedel opkopen.jpg" alt="Complete inboedel overnemen en woning leeg opleveren" fill className="w-full h-full object-cover" style={{ objectPosition: "bottom center" }} priority />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end pb-10 px-6">
            <div className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
                Wij nemen de complete inboedel over<br />en leveren de woning leeg op
              </h1>
            </div>
          </div>
        </div>

        <div className="py-3 px-6 border-b border-slate-100" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Eén bod op het geheel", "Vaak binnen 48 uur", "U hoeft niets te sorteren", "Schriftelijke opleveringsgarantie"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-600">{check}{item}</span>
            ))}
          </div>
        </div>

        <GoogleReviewsBar />

        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Inboedel overnemen</p>

            <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
              Moet een woning leeg worden opgeleverd en staat er een volledige inboedel in? Uw Ontruimer doet <strong className="font-medium">één bod op de complete inboedel</strong> en levert de woning bezemschoon op. U hoeft niets uit te zoeken, niets te verkopen en niemand anders over de vloer te halen. Bij een waardevolle inboedel is het bod hoger dan de ontruimingskosten en betalen wij u het verschil uit.
            </p>

            <div className="mb-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base" style={{ backgroundColor: "#d97706" }}>Foto&apos;s sturen via WhatsApp →</a>
              <p className="text-xs text-slate-400 mt-2">085-303 58 94 · U hoort snel wat wij bieden · Geen verplichtingen</p>
            </div>

            <H2>Hoe het werkt</H2>
            <ol className="space-y-4 mb-8">
              {[
                { stap: "1", titel: "Foto's sturen via WhatsApp", tekst: "Een paar overzichtsfoto's per kamer en de stukken die u zelf het meest waard vindt, naar 085-303 58 94. Liever bellen? Dat kan ook." },
                { stap: "2", titel: "Eén bod op het geheel", tekst: "Meestal binnen 48 uur. Bij een grote of bijzondere inboedel komen wij langs. Het bod geldt voor alles wat in de woning staat, inclusief leeg opleveren." },
                { stap: "3", titel: "Akkoord en datum", tekst: "Wij plannen de dag in, vaak binnen een week. Persoonlijke papieren, foto's en wat u wilt houden zetten wij apart." },
                { stap: "4", titel: "Leeg opgeleverd", tekst: "U krijgt het opleveringsbewijs voor de verhuurder of makelaar. Is het bod hoger dan de kosten, dan staat het verschil binnen enkele dagen op uw rekening." },
              ].map(({ stap, titel, tekst }) => (
                <li key={stap} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{stap}</span>
                  <div><p className="font-medium text-slate-800 mb-1">{titel}</p><p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p></div>
                </li>
              ))}
            </ol>

            <H2>Waarom één bod beter werkt dan zelf verkopen</H2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { titel: "Tijd", tekst: "De huur loopt door en de opzegtermijn is kort. Zelf verkopen en daarna alsnog een ontruimer zoeken duurt weken tot maanden. Bij ons is het in één keer geregeld." },
                { titel: "Eén partij", tekst: "Geen onbekenden over de vloer, geen losse afspraken. Eén aanspreekpunt, één datum en één afrekening." },
                { titel: "Het geheel telt", tekst: "Wij kijken naar de hele inboedel, niet naar losse stukken. Daardoor kunnen wij vaak meer bieden dan de som van losse verkopen, en alles wat overblijft nemen wij mee." },
                { titel: "Afgesproken is afgesproken", tekst: "Het bod staat vast na akkoord. De woning wordt leeg opgeleverd met schriftelijke garantie, zodat u de sleutels zonder zorgen inlevert." },
              ].map(({ titel, tekst }) => (
                <div key={titel} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <p className="font-medium text-slate-800 mb-1">{titel}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>

            <H2>Wanneer betalen wij u?</H2>
            <P>
              Bij een gewone inboedel verrekenen wij de waarde met de ontruimingskosten, zodat uw rekening lager uitvalt. Bij een inboedel met kunst, antiek, design, zilver, sieraden of een goede bibliotheek komt het regelmatig voor dat ons bod boven de kosten ligt. Dan betalen wij u uit.
            </P>
            <P>
              Stuur daarom altijd foto&apos;s mee van de stukken waarvan u denkt dat ze waarde hebben. Dat bepaalt of ik zelf kom kijken. Bij een bijzondere inboedel kom ik persoonlijk langs, zodat het bod recht doet aan wat er staat.
            </P>

            <H2>Voor wie</H2>
            <P>
              Erfgenamen en executeurs die een woning leeg moeten opleveren, bewindvoerders, en beheerders van seniorenresidenties en serviceflats die een woning snel en netjes terug willen. Ons werkgebied is Amsterdam, Amstelveen, Haarlem, Hoofddorp, &apos;t Gooi, Utrecht en omgeving. Voor grote of bijzondere inboedels komen wij in overleg verder.
            </P>
            <P>
              Moet er meer gebeuren dan alleen leeg opleveren, zoals vloeren verwijderen of gaatjes dichten? Kijk dan ook bij <Link href="/diensten/woningontruiming/" className="text-blue-600 underline underline-offset-2">woningontruiming</Link> of lees wat een <Link href="/kosten-woningontruiming/" className="text-blue-600 underline underline-offset-2">woningontruiming kost</Link>.
            </P>

            <H2>Veelgestelde vragen</H2>
            <div className="divide-y divide-slate-100 border-y border-slate-100 mb-4">
              {FAQ.map(({ v, a }) => (
                <details key={v} className="group py-4" data-opkoop-faq>
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-slate-800">
                    {v}
                    <span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mt-3">{a}</p>
                </details>
              ))}
            </div>

            <CtaBox />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
