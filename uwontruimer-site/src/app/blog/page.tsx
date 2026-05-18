import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, informatie en nieuws over woningontruiming, nalatenschappen en meer. Blog van UwOntruimer.nl",
};

const posts = [
  { slug: "woning-ontruimen-na-overlijden", title: "Woning ontruimen na overlijden: een praktische gids", date: "15 april 2026", excerpt: "Het overlijden van een dierbare brengt veel praktische zaken met zich mee. In dit artikel leggen wij stap voor stap uit hoe u een woning kunt laten ontruimen na een overlijden." },
  { slug: "kosten-woningontruiming", title: "Wat kost een woningontruiming in 2026?", date: "3 maart 2026", excerpt: "De kosten van een woningontruiming zijn afhankelijk van meerdere factoren. Wij leggen uit hoe de prijzen zijn opgebouwd en hoe u kunt besparen." },
  { slug: "spoedontruiming-aanvragen", title: "Spoedontruiming aanvragen: wat u moet weten", date: "18 februari 2026", excerpt: "Heeft u een urgente ontruiming nodig? In dit artikel leest u hoe een spoedontruiming werkt, wat de kosten zijn en hoe snel wij ter plaatse kunnen zijn." },
  { slug: "inboedel-verkopen-bij-ontruiming", title: "Inboedel verkopen bij een ontruiming: zo werkt het", date: "5 januari 2026", excerpt: "Wist u dat u de opbrengst van waardevolle spullen kunt verrekenen met de ontruimingskosten? Wij leggen uit hoe opkoop en veiling werken." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Artikelen & tips</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12">Praktische informatie over ontruiming, nalatenschappen en meer.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-transparent transition-all duration-300">
                  <time className="text-xs text-slate-400 mb-3 block">{post.date}</time>
                  <h2 className="text-base font-semibold text-slate-900 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                    Lees meer
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
