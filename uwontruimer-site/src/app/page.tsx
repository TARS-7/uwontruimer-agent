import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import ReviewTicker from "@/components/ReviewTicker";
import WizardUSP from "@/components/WizardUSP";
import HeroTunnels from "@/components/HeroTunnels";
import Image from "next/image";
import Link from "next/link";
import WerkgebiedSearch from "@/components/WerkgebiedSearch";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import { blogPosts } from "@/data/blog-posts";
import { Zap } from "lucide-react";
import TerugbelForm from "@/components/TerugbelForm";

const blogImages: Record<string, string> = {
  "na-de-ontruiming":                      "/Ontruimers.png",
  "zelf-woning-ontruimen-of-uitbesteden":  "/appartement-leeg.png",
  "wat-te-doen-bij-een-woningontruiming":  "/hero-truck.png",
  "vloer-verwijderen-kosten":              "/bedrijfsontruiming.png",
  "wat-is-het-stappenplan-bij-een-woningontruiming": "/Ontruimers.png",
  "wat-kost-een-woningontruiming":         "/truck-woningontruiming.png",
  "huis-ontruimen-na-overlijden":          "/appartement-leeg.png",
  "woningontruiming-checklist":            "/Ontruimers.png",
  "woningontruiming-vs-verhuizen":         "/Verhuizen.jpg",
  "hoe-werkt-opleveringsgarantie":         "/appartement-makelaar.png",
  "ontruiming-na-overlijden-kosten":       "/appartement-leeg.png",
};

export const metadata: Metadata = {
  title: "Professionele Woningontruiming | Uw Ontruimer",
  description: "Meer dan 15 jaar ervaring in woningontruiming. Snel, discreet en met schriftelijke opleveringsgarantie. Vraag vandaag een gratis offerte aan.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Professionele Woningontruiming | Uw Ontruimer",
    description: "Meer dan 15 jaar ervaring in woningontruiming. Snel, discreet en met schriftelijke opleveringsgarantie. Vraag vandaag een gratis offerte aan.",
    url: "https://www.uwontruimer.nl/",
    siteName: "UwOntruimer.nl",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.uwontruimer.nl/hero-truck.png",
        width: 1200,
        height: 630,
        alt: "Professionele Woningontruiming – UwOntruimer.nl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionele Woningontruiming | Uw Ontruimer",
    description: "Meer dan 15 jaar ervaring in woningontruiming. Snel, discreet en met schriftelijke opleveringsgarantie. Vraag vandaag een gratis offerte aan.",
    images: ["https://www.uwontruimer.nl/hero-truck.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Uw Ontruimer",
  url: "https://www.uwontruimer.nl",
  telephone: "+31853035894",
  priceRange: "€€",
  image: "https://www.uwontruimer.nl/hero-truck.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Welnastraat 175",
    postalCode: "1096GJ",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      {/* HERO */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left column — mobile: bg image + overlay; desktop: white */}
        <div className="relative flex flex-col justify-center px-8 lg:px-16 py-16 lg:bg-white min-h-[520px] lg:min-h-0">
          {/* Mobile background + overlay — hidden on lg */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <Image src="/peter-visser.png" alt="" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          {/* Content */}
          <div className="relative z-10">
            <div className="fade-1 inline-flex items-center gap-2 bg-white/15 lg:bg-blue-50 text-white lg:text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-8">
              <span className="w-1.5 h-1.5 bg-white lg:bg-blue-600 rounded-full"></span>
              15+ jaar ervaring · heel Nederland
            </div>
            <h1 className="fade-2 text-4xl lg:text-5xl font-semibold text-white lg:text-slate-900 leading-tight tracking-tight mb-5">
              Woning leeghalen na overlijden of verhuizing? Wij ontzorgen u volledig.
            </h1>
            <p className="fade-3 text-white/80 lg:text-slate-500 text-base font-light leading-relaxed max-w-md mb-10">
              Discreet, respectvol en met een vaste prijs — schriftelijk vastgelegd. Geen verrassingen achteraf.
            </p>
            <HeroTunnels />
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md w-fit mb-8 overflow-hidden divide-y divide-slate-100">
              <div className="flex items-center gap-3 px-4 py-3">
                <Image
                  src="/peter-visser2.png"
                  alt="Peter Visser"
                  width={48}
                  height={48}
                  className="rounded-full object-cover object-center flex-shrink-0 w-12 h-12"
                />
                <div>
                  <div className="text-sm font-medium text-slate-900">Persoonlijk begeleid</div>
                  <div className="text-xs text-slate-400">door Peter Visser</div>
                </div>
              </div>
              <div className="px-4 py-3">
                <GoogleReviewsBadge />
              </div>
            </div>
            {/* TRUST STATS */}
            <div className="fade-5 flex flex-wrap items-center gap-8 pt-8 border-t border-white/20 lg:border-slate-100">
              <div><div className="text-xl font-semibold text-white lg:text-slate-900 leading-none mb-1">1.200+</div><div className="text-xs text-white/60 lg:text-slate-400 uppercase tracking-wide">Families geholpen</div></div>
              <div><div className="text-xl font-semibold text-white lg:text-slate-900 leading-none mb-1">4,9 ★</div><div className="text-xs text-white/60 lg:text-slate-400 uppercase tracking-wide">Google beoordeling</div></div>
              <div><div className="text-xl font-semibold text-white lg:text-slate-900 leading-none mb-1">24u</div><div className="text-xs text-white/60 lg:text-slate-400 uppercase tracking-wide">Spoedservice</div></div>
              <div><div className="text-xl font-semibold text-white lg:text-slate-900 leading-none mb-1">100%</div><div className="text-xs text-white/60 lg:text-slate-400 uppercase tracking-wide">Opleveringsgarantie</div></div>
            </div>
          </div>
        </div>
        {/* HERO IMAGE — desktop only */}
        <div className="hidden lg:block relative overflow-hidden">
          <Image src="/hero-truck.png" alt="Professionele woningontruiming door UwOntruimer" fill className="object-cover object-center" priority quality={90} />
          <div className="absolute bottom-8 left-6 bg-white rounded-2xl p-4 flex items-center gap-3 border border-slate-100 shadow-lg">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">Opleveringsgarantie</div>
              <div className="text-xs text-slate-400">Schriftelijk vastgelegd</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUSTBALK */}
      <TrustBar />

      {/* 3. GOOGLE REVIEWS BADGE */}
      <div className="bg-white border-b border-slate-100 py-5 px-6 flex justify-center">
        <GoogleReviewsBadge />
      </div>

      {/* 4. AI-WIZARD UITLEG */}
      <WizardUSP />

      {/* 5. REVIEWS CAROUSEL */}
      <ReviewTicker />

      {/* 6. DIENSTEN */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Wat wij doen</p>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Onze diensten</h2>
              <p className="text-slate-500 font-light text-sm max-w-md leading-relaxed">Van volledige woningontruiming tot spoedopdrachten — wij regelen het voor u.</p>
            </div>
            <Link href="/diensten/woningontruiming" className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors bg-white w-fit">Alle diensten <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/diensten/woningontruiming", img: "/Verhuislift-diensten.png", title: "Woningontruiming", desc: "Complete ontruiming van woningen en appartementen." },
              { href: "/diensten/bedrijfsontruiming", img: "/bedrijfsontruiming.png", title: "Bedrijfsontruiming", desc: "Kantoren, winkels en magazijnen. Minimale overlast." },
              { href: "/diensten/spoedontruiming", img: "/hero-truck.png", title: "Spoedontruiming", desc: "Urgente ontruiming binnen 24 uur, 7 dagen per week." },
              { href: "/diensten/opkopen-inboedel", img: "/inboedel opkopen.png", title: "Opkopen inboedel", desc: "Waardevolle spullen verrekend met de kosten." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-md hover:border-transparent transition-all duration-300">
                <div className="overflow-hidden h-32 foto-zoom relative"><Image src={s.img} fill className="object-cover" alt={s.title} /></div>
                <div className="p-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  </div>
                  <div className="text-sm font-medium text-slate-900 mb-1">{s.title}</div>
                  <div className="text-xs text-slate-400 font-light leading-relaxed">{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6b. USP — WAAROM EERLIJK GEPRIJSD */}
      <section className="bg-white py-10 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={20} color="#2563eb" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">Waarom eerlijk geprijsd?</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Onze AI-tool analyseert de woning vooraf zodat ons team precies weet wat er komt. Geen verspilde uren, geen verrassingen — dat maakt ons scherp geprijsd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PETER VISSER */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12">
            <Image
              src="/peter-visser.png"
              alt="Peter Visser"
              width={220}
              height={260}
              className="rounded-lg object-cover object-center flex-shrink-0 shadow-lg"
              style={{ width: "220px", height: "260px" }}
            />
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Persoonlijk</p>
              <p className="text-lg font-light text-slate-600 leading-relaxed italic mb-4">
                &ldquo;Ik sta persoonlijk garant voor elke ontruiming — discreet, respectvol en op tijd.&rdquo;
              </p>
              <p className="text-sm font-semibold text-slate-900">Peter Visser</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WERKWIJZE */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Hoe het werkt</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-14">Werkwijze in 4 stappen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: "01", t: "Gratis offerte", d: "U vraagt een offerte aan. Wij plannen een bezichtiging op uw moment." },
              { n: "02", t: "Helder voorstel", d: "Vaste prijs, geen verborgen kosten. Na goedkeuring plannen we de datum." },
              { n: "03", t: "Ontruiming", d: "Ons team voert de ontruiming professioneel en zorgvuldig uit." },
              { n: "04", t: "Oplevering", d: "Schoon en leeg opgeleverd, met schriftelijke opleveringsgarantie." },
            ].map((s) => (
              <div key={s.n} className="relative pt-6 border-t-2 border-slate-100">
                <div className="absolute top-[-2px] left-0 w-10 h-[3px] bg-blue-600 rounded-full"></div>
                <div className="text-4xl font-semibold text-slate-200 leading-none mb-4">{s.n}</div>
                <div className="text-sm font-medium text-slate-900 mb-2">{s.t}</div>
                <div className="text-xs text-slate-400 font-light leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DUURZAAMHEID */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Milieu</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Duurzame ontruiming</h2>
          <p className="text-slate-500 font-light text-sm max-w-lg leading-relaxed mb-8">
            Bij Uw Ontruimer gaat zo weinig mogelijk naar de verbrandingsoven. Meubels, kleding en huisraad die nog bruikbaar zijn, doneren wij aan de kringloopwinkel. Wat niet hergebruikt kan worden, wordt gesorteerd afgevoerd via gecertificeerde milieustraten.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-2xl">
            <div className="relative overflow-hidden rounded-xl h-52">
              <Image src="/milieustraat.png" alt="Milieustraat — verantwoord afvoeren" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 px-3 py-2">
                <p className="text-white text-xs font-medium">Verantwoord afvoeren</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl h-52">
              <Image src="/kringloop.png" alt="Kringloopwinkel — hergebruik van inboedel" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 px-3 py-2">
                <p className="text-white text-xs font-medium">Hergebruik via kringloop</p>
              </div>
            </div>
          </div>
          <Link href="/duurzaam/" className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:underline">
            Meer over onze duurzame aanpak
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 10. ZAKELIJKE PARTNERS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijke partners</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Vaste partner voor professionals</h2>
          <p className="text-slate-500 font-light text-sm max-w-lg leading-relaxed mb-12">Notarissen, makelaars en woningcorporaties vertrouwen al jaren op UwOntruimer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/notaris", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=320&q=70", label: "Notarissen", title: "Nalatenschappen & boedelontruimingen", desc: "Discreet, snel en juridisch correct." },
              { href: "/makelaar", img: "/appartement-makelaar.png", label: "Makelaars", title: "Pand verkoopklaar maken", desc: "Snelle ontruiming voor bezichtiging of overdracht." },
              { href: "/woningbouwvereniging", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=320&q=70", label: "Woningcorporaties", title: "Vaste partner voor woningcorporaties en VvE\u2019s", desc: "Snelle doorlooptijden en vaste prijsafspraken." },
              { href: "/bewindvoerder", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=320&q=70", label: "Bewindvoerders", title: "Ontruimingen binnen bewindvoering", desc: "Professionele samenwerking bij budgetbeheer." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col sm:grid hover:shadow-md hover:border-transparent transition-all duration-300" style={{ gridTemplateColumns: "160px 1fr" }}>
                <div className="relative h-[160px] sm:h-full sm:min-h-[100px]"><Image src={s.img} fill className="object-cover" alt={s.title} /></div>
                <div className="p-5">
                  <span className="text-[10px] font-medium text-blue-600 uppercase tracking-widest mb-2 block">{s.label}</span>
                  <div className="text-sm font-medium text-slate-900 mb-1">{s.title}</div>
                  <div className="text-xs text-slate-400 font-light leading-relaxed">{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WERKGEBIED */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkgebied</p>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Actief in heel Nederland</h2>
            <p className="text-slate-500 font-light text-sm max-w-md leading-relaxed">Wij verzorgen woningontruimingen in de regio&apos;s Noord-Holland, Zuid-Holland, Utrecht, Flevoland en Noord-Brabant. Snel ter plaatse, ook voor spoedopdrachten.</p>
          </div>
          <WerkgebiedSearch />
        </div>
      </section>

      {/* 12. BLOG */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Blog</p>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Vragen en tips</h2>
              <p className="text-slate-500 font-light text-sm max-w-md leading-relaxed">Praktische informatie over woningontruiming, nalatenschappen en meer.</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors bg-white w-fit">
              Alle artikelen
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-transparent transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blogImages[post.slug] ?? "/Ontruimers.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-xs text-slate-400 mb-3 block" dateTime={post.date}>{post.dateDisplay}</time>
                  <h3 className="text-base font-semibold text-[#2563eb] leading-snug mb-3 group-hover:text-blue-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {post.excerpt.slice(0, 120)}{post.excerpt.length > 120 ? "…" : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. REVIEWS GRID */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Wat klanten zeggen</p>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Beoordeeld met 4,9 sterren</h2>
            </div>
            <div className="text-right">
              <div className="text-yellow-400 text-lg tracking-widest mb-1">★★★★★</div>
              <div className="text-xs text-slate-400">4,9 op Google Reviews</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { init: "S", name: "Sandra de Vries", loc: "Amsterdam — na overlijden moeder", text: "\"Na het overlijden van mijn moeder heeft UwOntruimer de woning volledig ontruimd. Ze waren bijzonder begripvol en professioneel.\"" },
              { init: "P", name: "Peter Smits", loc: "Haarlem — spoedontruiming", text: "\"Spoedontruiming aangevraagd en ze stonden de volgende ochtend al voor de deur. Geweldige service en perfecte oplevering.\"" },
              { init: "E", name: "Ellen Bakker", loc: "Utrecht — makelaar", text: "\"Als makelaar schakel ik UwOntruimer regelmatig in. Betrouwbaar, snel en altijd op tijd. De samenwerking verloopt altijd soepel.\"" },
              { init: "M", name: "Marieke van den Berg", loc: "Amstelveen — na overlijden vader", text: "\"Na het overlijden van mijn vader stond het huis vol herinneringen. Het team van Uw Ontruimer heeft alles met zoveel respect behandeld — ik kon mijn ogen niet geloven.\"" },
            ].map((r) => (
              <div key={r.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-yellow-400 text-sm tracking-widest mb-4">★★★★★</div>
                <p className="text-slate-500 font-light text-sm leading-relaxed italic mb-5">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-600">{r.init}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-400">{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CTA */}
      {/* 14. CTA ONDERAAN */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-4">Aan de slag</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Klaar voor de volgende stap?</h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed mb-10">Vraag vandaag nog een gratis offerte aan of gebruik onze analysetool voor een directe prijsindicatie.</p>
          {/* Peter Visser + knoppen */}
          <div className="flex flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/peter-visser2.png"
                alt="Peter Visser"
                width={80}
                height={80}
                className="rounded-full object-cover object-center w-20 h-20 border-2 border-slate-100 shadow-sm flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-slate-900 leading-snug">Peter Visser</p>
                <p className="text-xs text-slate-400 font-light leading-snug">Persoonlijk bereikbaar<br/>voor al uw vragen.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <a href="https://analyse.uwontruimer.nl" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">Gratis offerte aanvragen</a>
              <a href="tel:0853035894" className="phone-glow border border-slate-200 hover:border-blue-600 text-slate-600 hover:text-blue-600 font-medium px-6 py-3 rounded-lg transition-colors text-sm bg-white whitespace-nowrap">Bel 085-303 58 94</a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm text-left">
              <TerugbelForm gemeente="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
