import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bedankt | UwOntruimer.nl",
  description: "Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-32 px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Bedankt voor uw bericht!</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              We nemen zo spoedig mogelijk contact met u op. Heeft u haast? Bel ons direct op{" "}
              <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a>.
            </p>
            <a href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
              Terug naar home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
