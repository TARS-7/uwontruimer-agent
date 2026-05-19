import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Artikelen & tips over woningontruiming | UwOntruimer.nl",
  description: "Praktische informatie over woningontruiming, nalatenschappen, kosten en meer. Lees onze artikelen op het blog van UwOntruimer.nl.",
  alternates: { canonical: "/blog/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Artikelen & tips</h1>
            <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-xl">
              Praktische informatie over woningontruiming, nalatenschappen, kosten en meer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-transparent transition-all duration-300"
                >
                  <time className="text-xs text-slate-400 mb-3 block" dateTime={post.date}>
                    {post.dateDisplay}
                  </time>
                  <h2 className="text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Lees meer
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
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
