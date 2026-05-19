import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { blogPosts, type Block } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDesc,
  };
}

function renderBlock(block: Block, i: number) {
  if (block.type === "h2") {
    return (
      <h2 key={i} className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 key={i} className="text-lg font-semibold text-slate-800 mt-8 mb-3">
        {block.text}
      </h3>
    );
  }
  if (block.type === "h4") {
    return (
      <h4 key={i} className="text-base font-semibold text-slate-800 mt-6 mb-2">
        {block.text}
      </h4>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={i} className="list-disc list-inside text-slate-500 font-light leading-relaxed mb-5 space-y-1">
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  // paragraph
  return (
    <p key={i} className="text-slate-500 font-light leading-relaxed mb-5">
      {block.text}
    </p>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="bg-white py-16 px-6 border-b border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/blog"
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center gap-1"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                Blog
              </Link>
              <span className="text-slate-200">·</span>
              <time className="text-xs text-slate-400" dateTime={post.date}>
                {post.dateDisplay}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-slate-500 font-light leading-relaxed text-lg">{post.excerpt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white px-6 pb-20">
          <div className="max-w-3xl mx-auto pt-12">
            {post.blocks.map((block, i) => renderBlock(block, i))}

            {/* CTA inline */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-slate-700 font-medium mb-2">Hulp nodig bij uw ontruiming?</p>
              <p className="text-slate-500 font-light text-sm mb-4">
                Bel Uw Ontruimer op{" "}
                <a href="tel:0853035894" className="text-blue-600 font-medium">
                  085-303 58 94
                </a>{" "}
                of vraag vrijblijvend een offerte aan.
              </p>
              <Link
                href="/offerte"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Gratis offerte aanvragen
              </Link>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="bg-slate-50 py-16 px-6 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-6">Meer lezen</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
                  >
                    <time className="text-xs text-slate-400 mb-2 block" dateTime={related.date}>
                      {related.dateDisplay}
                    </time>
                    <p className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                      {related.title}
                    </p>
                  </Link>
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
