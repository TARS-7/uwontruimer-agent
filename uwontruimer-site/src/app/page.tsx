import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import ReviewTicker from "@/components/ReviewTicker";
import WizardUSP from "@/components/WizardUSP";
import CTASection from "@/components/CTASection";
import HeroTunnels from "@/components/HeroTunnels";
import Image from "next/image";
import Link from "next/link";
import WerkgebiedSearch from "@/components/WerkgebiedSearch";

export const metadata: Metadata = {
  title: "UwOntruimer.nl | Bedrijfs- en woningontruiming in heel NL",
  description: "Snel een woningontruiming nodig? Bel Uw Ontruimer! ✓ Voor particulier en verhuurder ✓ Spoed? Binnen 24 uur geholpen ✓ Wij werken duurzaam en ontzorgend",
};

export default function HomePage() {
  return (
    <>
      <Header />
      {/* HERO */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-16">
          <div className="fade-1 inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-8">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            15+ jaar ervaring · heel Nederland
          </div>
          <h1 className="fade-2 text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
            Professionele ontruiming,<br/>uitgevoerd met zorg
          </h1>
          <p className="fade-3 text-slate-500 text-base font-light leading-relaxed max-w-md mb-10">
            Wij ontzorgen particulieren en professionals bij de volledige ontruiming van woningen en bedrijfspanden. Discreet, betrouwbaar en met schriftelijke opleveringsgarantie.
          </p>
          <HeroTunnels />
          {/* TRUST STATS */}
          <div className="fade-5 flex flex-wrap gap-8 pt-8 border-t border-slate-100">
            <div><div className="text-xl font-semibold text-slate-900 leading-none mb-1">2.500+</div><div className="text-xs text-slate-400 uppercase tracking-wide">Families geholpen</div></div>
            <div><div className="text-xl font-semibold text-slate-900 leading-none mb-1">5,0 ★</div><div className="text-xs text-slate-400 uppercase tracking-wide">Google beoordeling</div></div>
            <div><div className="text-xl font-semibold text-slate-900 leading-none mb-1">24u</div><div className="text-xs text-slate-400 uppercase tracking-wide">Spoedservice</div></div>
            <div><div className="text-xl font-semibold text-slate-900 leading-none mb-1">100%</div><div className="text-xs text-slate-400 uppercase tracking-wide">Opleveringsgarantie</div></div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
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

      <WizardUSP />
      <TrustBar />
      <ReviewTicker />

      {/* DIENSTEN */}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/diensten/woningontruiming", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=70", title: "Woningontruiming", desc: "Complete ontruiming van woningen en appartementen." },
              { href: "/diensten/bedrijfsontruiming", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=70", title: "Bedrijfsontruiming", desc: "Kantoren, winkels en magazijnen. Minimale overlast." },
              { href: "/diensten/spoedontruiming", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=70", title: "Spoedontruiming", desc: "Urgente ontruiming binnen 24 uur, 7 dagen per week." },
              { href: "/diensten/opkopen-inboedel", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=70", title: "Opkopen inboedel", desc: "Waardevolle spullen verrekend met de kosten." },
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

      {/* WERKGEBIED */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkgebied</p>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Actief in heel Nederland</h2>
            <p className="text-slate-500 font-light text-sm max-w-md leading-relaxed">Wij verzorgen woningontruimingen in de regio&apos;s Utrecht, Noord-Holland en Zuid-Holland. Snel ter plaatse, ook voor spoedopdrachten.</p>
          </div>
          <WerkgebiedSearch />
        </div>
      </section>

      {/* FOTO GRID */}
      <div className="grid grid-cols-3 grid-rows-2" style={{ height: "560px" }}>
        <div className="bg-slate-50 border border-slate-100 flex flex-col justify-center p-12">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Onze aanpak</p>
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Respect voor mensen en hun bezittingen</h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">Veel ontruimingen vinden plaats in emotioneel beladen situaties. Wij werken altijd met discretie en begrip.</p>
          <Link href="/over-ons" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit">Meer over ons</Link>
        </div>
        <div className="overflow-hidden foto-zoom relative"><Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=75" fill className="object-cover" alt="" /></div>
        <div className="bg-blue-600 flex flex-col justify-center p-12">
          <div className="text-6xl font-semibold text-white leading-none mb-3">15+</div>
          <p className="text-blue-100 font-light text-sm leading-relaxed">Jaar ervaring in professionele ontruiming door heel Nederland</p>
        </div>
        <div className="overflow-hidden foto-zoom relative"><Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=75" fill className="object-cover" alt="" /></div>
        <div className="overflow-hidden foto-zoom relative"><Image src="/Gemini_Generated_Image_73a62s73a62s73a6_cleanup.jpg" fill className="object-cover" alt="Ontruiming resultaat" /></div>
        <div className="bg-slate-50 border border-slate-100 flex flex-col justify-center p-12">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Duurzaam</p>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Verantwoord verwerkt</h3>
          <p className="text-slate-500 font-light text-sm leading-relaxed">Bruikbare spullen gaan naar hergebruik. Wat resteert wordt milieuvriendelijk verwerkt.</p>
        </div>
      </div>

      {/* WERKWIJZE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Hoe het werkt</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-14">Werkwijze in 4 stappen</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
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

      {/* B2B */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Zakelijke partners</p>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Vaste partner voor professionals</h2>
          <p className="text-slate-500 font-light text-sm max-w-lg leading-relaxed mb-12">Notarissen, makelaars en woningcorporaties vertrouwen al jaren op UwOntruimer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/notaris", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=320&q=70", label: "Notarissen", title: "Nalatenschappen & boedelontruimingen", desc: "Discreet, snel en juridisch correct." },
              { href: "/makelaar", img: "https://images.unsplash.com/photo-1582407947304-fd86f28320be?w=320&q=70", label: "Makelaars", title: "Pand verkoopklaar maken", desc: "Snelle ontruiming voor bezichtiging of overdracht." },
              { href: "/woningbouwvereniging", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=320&q=70", label: "Woningcorporaties", title: "Vaste partner voor woningcorporaties en VvE\u2019s", desc: "Snelle doorlooptijden en vaste prijsafspraken." },
              { href: "/bewindvoerder", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=320&q=70", label: "Bewindvoerders", title: "Ontruimingen binnen bewindvoering", desc: "Professionele samenwerking bij budgetbeheer." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-slate-100 rounded-2xl overflow-hidden grid hover:shadow-md hover:border-transparent transition-all duration-300" style={{ gridTemplateColumns: "160px 1fr" }}>
                <div className="relative h-full min-h-[100px]"><Image src={s.img} fill className="object-cover" alt={s.title} /></div>
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

      {/* REVIEWS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Wat klanten zeggen</p>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Beoordeeld met 5 sterren</h2>
            </div>
            <div className="text-right">
              <div className="text-yellow-400 text-lg tracking-widest mb-1">★★★★★</div>
              <div className="text-xs text-slate-400">5,0 op Google Reviews</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { init: "S", name: "Sandra de Vries", loc: "Amsterdam", text: "\"Na het overlijden van mijn moeder heeft UwOntruimer de woning volledig ontruimd. Ze waren bijzonder begripvol en professioneel.\"" },
              { init: "P", name: "Peter Smits", loc: "Haarlem", text: "\"Spoedontruiming aangevraagd en ze stonden de volgende ochtend al voor de deur. Geweldige service en perfecte oplevering.\"" },
              { init: "E", name: "Ellen Bakker", loc: "Utrecht · Makelaar", text: "\"Als makelaar schakel ik UwOntruimer regelmatig in. Betrouwbaar, snel en altijd op tijd. De samenwerking verloopt altijd soepel.\"" },
            ].map((r) => (
              <div key={r.name} className="bg-white border border-slate-100 rounded-2xl p-6">
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

      <CTASection />
      <Footer />
    </>
  );
}
