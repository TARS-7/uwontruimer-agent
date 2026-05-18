import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

const steden = [
  { slug: "amsterdam", name: "Amsterdam" },
  { slug: "amstelveen", name: "Amstelveen" },
  { slug: "haarlem", name: "Haarlem" },
  { slug: "rotterdam", name: "Rotterdam" },
  { slug: "utrecht", name: "Utrecht" },
  { slug: "den-haag", name: "Den Haag" },
  { slug: "leiden", name: "Leiden" },
  { slug: "hoofddorp", name: "Hoofddorp" },
  { slug: "zaandam", name: "Zaandam" },
  { slug: "purmerend", name: "Purmerend" },
  { slug: "alkmaar", name: "Alkmaar" },
  { slug: "hoorn", name: "Hoorn" },
  { slug: "hilversum", name: "Hilversum" },
  { slug: "amersfoort", name: "Amersfoort" },
  { slug: "zoetermeer", name: "Zoetermeer" },
  { slug: "delft", name: "Delft" },
  { slug: "gouda", name: "Gouda" },
  { slug: "schiedam", name: "Schiedam" },
  { slug: "vlaardingen", name: "Vlaardingen" },
  { slug: "capelle-aan-den-ijssel", name: "Capelle aan den IJssel" },
];

export function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params;
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  return {
    title: `Ontruiming ${name}`,
    description: `Professionele woningontruiming in ${name}. Discreet, snel en met opleveringsgarantie. Bel 085-303 58 94.`,
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
