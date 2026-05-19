import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten woningontruimer",
  description: "Bent u benieuwd wat onze specialisaties als woningontruimer zijn? Neem dan gerust een kijkje op onze website.",
};

const diensten = [
  {
    href: "/diensten/woningontruiming",
    title: "Woningontruiming",
    desc: "Volledig ontzorgen op een duurzame en discrete manier.",
  },
  {
    href: "/diensten/bedrijfsontruiming",
    title: "Bedrijfsontruiming",
    desc: "Leegruimen van winkels, kantoren en bedrijfspanden.",
  },
  {
    href: "/diensten/spoedontruiming",
    title: "Spoedontruiming",
    desc: "Ontruiming binnen 24 uur, 5 werkdagen of 1 week.",
  },
  {
    href: "/diensten/vloerverwijdering",
    title: "Vloerverwijdering",
    desc: "Tapijt, zeil of tegels: vakkundig laten verwijderen.",
  },
  {
    href: "/diensten/opkopen-inboedel",
    title: "Inboedel opkopen",
    desc: "Opkopen van antiek, vintage en design voor een eerlijke prijs.",
  },
  {
    href: "/diensten/traplift-verwijderen",
    title: "Traplift verwijderen",
    desc: "Trapliften professioneel demonteren en duurzaam afvoeren.",
  },
  {
    href: "/diensten/verhuizen",
    title: "Verhuizen",
    desc: "Verhuizing van groot naar klein of seniorenverhuizing.",
  },
  {
    href: "/diensten/taxatie",
    title: "Taxatie",
    desc: "Inboedel of waardevolle objecten laten taxeren door erkende experts.",
  },
  {
    href: "/diensten/inboedel-veilen",
    title: "Inboedel veilen",
    desc: "Waardevolle objecten via gerenommeerde veilinghuizen laten veilen.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Overzicht</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Onze diensten</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-xl">
              Uw Ontruimer biedt een breed pakket aan ontruimings- en aanverwante diensten — van woningontruiming en spoedontruiming tot inboedel opkopen en verhuizen. Kies hieronder de dienst die bij uw situatie past.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diensten.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group block p-6 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <h2 className="text-slate-900 font-semibold mb-2 group-hover:text-blue-600 transition-colors">{d.title}</h2>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{d.desc}</p>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-700 font-medium mb-2">Staat uw dienst er niet bij?</p>
              <p className="text-slate-500 font-light">Geen klus is te gek. Bel ons op <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> om de mogelijkheden te bespreken.</p>
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
