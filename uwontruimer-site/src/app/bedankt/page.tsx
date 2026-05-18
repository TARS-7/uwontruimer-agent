import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag | UwOntruimer.nl",
  description: "Bedankt voor het invullen van het contactformulier. We nemen zo spoedig mogelijk contact met u op.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-24 px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-5xl mb-6">✓</div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Bedankt!</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Bedankt voor het invullen van het contactformulier. We nemen zo spoedig mogelijk contact met u op.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
              Terug naar de homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
