import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

const steden = [
  { slug: "amsterdam",              name: "Amsterdam",              title: "Woningontruiming Amsterdam | UwOntruimer.nl",                         desc: "Bel Uw Ontruimer op 085-303 58 94 voor een bedrijfsontruiming, spoedontruiming of woningontruiming in Amsterdam. ✓15+ jaar ervaring ✓Opleveringsgarantie" },
  { slug: "amstelveen",             name: "Amstelveen",             title: "Woningontruiming Amstelveen | Bel vandaag UwOntruimer.nl",             desc: "Woningontruiming Amstelveen? Bel vandaag Uw Ontruimer voor een snelle, duurzame en discrete ontruiming van uw huis of appartement." },
  { slug: "haarlem",                name: "Haarlem",                title: "Woningontruiming Haarlem - UwOntruimer.nl | Bel vandaag",             desc: "Uw woningontruiming in Haarlem uitbesteden aan een professioneel ontruimingsbedrijf? Bel Uw Ontruimer via 085-303 58 94. ✓15+ jaar ervaring ✓Duurzaam" },
  { slug: "rotterdam",              name: "Rotterdam",              title: "Woningontruiming Rotterdam | Uw Ontruimer voor iedere klus",           desc: "Woningontruiming in Rotterdam nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming ✓Bedrijfsontruiming" },
  { slug: "utrecht",                name: "Utrecht",                title: "Woningontruiming Utrecht - Uw ontruimer voor iedere klus",             desc: "Heeft u professionele woningontruiming in Utrecht nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "den-haag",               name: "Den Haag",               title: "Woningontruiming Den Haag | UwOntruimer.nl",                          desc: "Voor woningontruiming in Den Haag belt u de specialisten van Uw Ontruimer via 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "leiden",                 name: "Leiden",                 title: "Woningontruiming Leiden | UwOntruimer.nl",                            desc: "Bel Uw Ontruimer via 085-303 58 94 voor professionele woningontruiming in Leiden. Ook voor bedrijfsontruiming of een spoedontruiming. ✓15+ jaar ervaring" },
  { slug: "hoofddorp",              name: "Hoofddorp",              title: "Woningontruiming Hoofddorp | UwOntruimer.nl",                         desc: "Professionele woningontruiming in Hoofddorp en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "zaandam",                name: "Zaandam",                title: "Woningontruiming Zaandam | UwOntruimer.nl",                           desc: "Huis laten leegruimen in Zaandam? Neem contact op om de mogelijkheden te bespreken. Geen klus is te gek. Bel 085-303 58 94." },
  { slug: "purmerend",              name: "Purmerend",              title: "Woningontruiming Purmerend | UwOntruimer.nl",                         desc: "Voor een bedrijfsontruiming, spoedontruiming of woningontruiming in Purmerend belt u Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie" },
  { slug: "alkmaar",                name: "Alkmaar",                title: "Woningontruiming Alkmaar | UwOntruimer.nl",                           desc: "Professionele woningontruiming in Alkmaar en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "hoorn",                  name: "Hoorn",                  title: "Woningontruiming Hoorn | UwOntruimer.nl",                             desc: "Professionele woningontruiming in Hoorn en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "hilversum",              name: "Hilversum",              title: "Woningontruiming Hilversum | UwOntruimer.nl",                         desc: "Woningontruiming in Hilversum nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming ✓Bedrijfsontruiming!" },
  { slug: "amersfoort",             name: "Amersfoort",             title: "Woningontruiming Amersfoort | UwOntruimer.nl",                        desc: "Professionele woningontruiming in Amersfoort. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "zoetermeer",             name: "Zoetermeer",             title: "Woningontruiming Zoetermeer | UwOntruimer.nl",                        desc: "Professionele woningontruiming in Zoetermeer. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "delft",                  name: "Delft",                  title: "Woningontruiming Delft | UwOntruimer.nl",                             desc: "Professionele woningontruiming in Delft. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "gouda",                  name: "Gouda",                  title: "Woningontruiming Gouda | UwOntruimer.nl",                             desc: "Professionele woningontruiming in Gouda. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "schiedam",               name: "Schiedam",               title: "Woningontruiming Schiedam | Uw Ontruimer",                            desc: "Woningontruiming in Schiedam? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan of plan direct een afspraak." },
  { slug: "vlaardingen",            name: "Vlaardingen",            title: "Woningontruiming Vlaardingen | Uw Ontruimer",                         desc: "Woningontruiming in Vlaardingen? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan of maak direct een afspraak." },
  { slug: "capelle-aan-den-ijssel", name: "Capelle aan den IJssel", title: "Woningontruiming Capelle aan den IJssel | Uw Ontruimer",              desc: "Woningontruiming in Capelle aan den IJssel? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag nu uw offerte aan of maak een afspraak." },
];

export function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params;
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  return {
    title: city?.title || `Woningontruiming ${name} | UwOntruimer.nl`,
    description: city?.desc || `Professionele woningontruiming in ${name}. Discreet, snel en met opleveringsgarantie. Bel 085-303 58 94.`,
  };
}

export default async function StadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params;
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;

  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkgebied</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ontruiming {name}</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is actief in {name} en omstreken. Wij verzorgen de volledige ontruiming van woningen, appartementen en bedrijfspanden — snel, discreet en met een schriftelijke opleveringsgarantie.</p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">Of u nu een woning wilt laten ontruimen na een overlijden, een verhuizing plant of een spoedontruiming nodig heeft: ons team staat voor u klaar in {name}. Wij hanteren vaste, transparante prijzen zonder verborgen kosten.</p>
            <p className="text-slate-500 font-light leading-relaxed">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag direct een gratis offerte aan.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
