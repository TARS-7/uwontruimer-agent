"use client";

const reviews = [
  { stars: 5, quote: "Bijzonder begripvol en professioneel na het overlijden van mijn moeder.", name: "Sandra de Vries", city: "Amsterdam" },
  { stars: 5, quote: "Spoedontruiming aangevraagd, de volgende ochtend al voor de deur. Top!", name: "Peter Smits", city: "Haarlem" },
  { stars: 5, quote: "Betrouwbaar, snel en altijd op tijd. Schakel ze regelmatig in.", name: "Ellen Bakker", city: "Utrecht" },
  { stars: 5, quote: "Vaste prijs, geen verrassingen. Pand perfect opgeleverd.", name: "Marco van Dijk", city: "Rotterdam" },
  { stars: 5, quote: "Discreet en zorgvuldig — precies wat je nodig hebt in zo'n situatie.", name: "Ingrid Hoekstra", city: "Den Haag" },
  { stars: 5, quote: "Binnen een dag geregeld. Uitstekende communicatie en nette afwerking.", name: "Thomas Visser", city: "Leiden" },
];

// Duplicate for seamless loop
const items = [...reviews, ...reviews];

export default function ReviewTicker() {
  return (
    <div className="bg-white border-b border-slate-100 py-3 overflow-hidden">
      <div className="flex gap-10 review-ticker-track">
        {items.map((r, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <span className="text-yellow-400 text-xs tracking-widest">{"★".repeat(r.stars)}</span>
            <span className="text-xs text-slate-500 font-light italic max-w-[240px] truncate">"{r.quote}"</span>
            <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{r.name}</span>
            <span className="text-xs text-slate-400 whitespace-nowrap">{r.city}</span>
            <span className="text-slate-200 text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
