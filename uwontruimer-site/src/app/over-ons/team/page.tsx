import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ons team — Uw Ontruimer",
  description: "Maak kennis met het team achter Uw Ontruimer. Ervaren vakmensen die elke ontruiming zorgvuldig en discreet uitvoeren.",
  alternates: { canonical: "/over-ons/team/" },
};

const team = [
  {
    naam: "Peter Visser",
    functie: "Bedrijfsleider",
    foto: "/team-Peter.jpg",
    bio: "Al meer dan 15 jaar zorgt Peter persoonlijk voor een zorgvuldige en discrete uitvoering van elke ontruiming.",
  },
  {
    naam: "Lisa Vermeer",
    functie: "Planning & Klantenservice",
    foto: "/team-Lisa.jpg",
    bio: "Lisa is het eerste aanspreekpunt voor klanten en zorgt voor een vlekkeloze planning.",
  },
  {
    naam: "Carlos",
    functie: "Senior Uitvoerder",
    foto: "/team-Carlos.jpg",
    bio: "Carlos heeft jarenlange ervaring met grote en complexe ontruimingen in de regio Amsterdam.",
  },
  {
    naam: "Boris",
    functie: "Uitvoerder",
    foto: "/team-Boris.jpg",
    bio: "Boris staat bekend om zijn snelheid en zorgvuldigheid op de werkvloer.",
  },
  {
    naam: "Hector",
    functie: "Teamhond & Moraalbooster",
    foto: "/team-Hector.jpg",
    bio: "Hector is de vaste favoriet op kantoor en verwelkomt elke klant die langskomt met een kwispelende staart.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">
              <Link href="/over-ons" className="hover:underline">Over ons</Link>
              {" / "}Ons team
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Maak kennis met ons team
            </h1>
            <p className="text-slate-500 font-light leading-relaxed mb-14 max-w-2xl">
              Achter elke ontruiming staat een team van betrokken vakmensen. Ze werken discreet, respectvol en met oog voor detail — ook in moeilijke situaties.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {team.map((lid) => (
                <div key={lid.naam} className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-100 mb-5 flex-shrink-0">
                    <Image
                      src={lid.foto}
                      alt={lid.naam}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-semibold text-slate-900 mb-0.5">{lid.naam}</p>
                  <p className="text-sm text-slate-400 mb-3">{lid.functie}</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{lid.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
