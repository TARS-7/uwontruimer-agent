"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const diensten = [
  { label: "Woningontruiming", href: "/diensten/woningontruiming" },
  { label: "Bedrijfsontruiming", href: "/diensten/bedrijfsontruiming" },
  { label: "Spoedontruiming", href: "/diensten/spoedontruiming" },
  { label: "Vloerverwijdering", href: "/diensten/vloerverwijdering" },
  { label: "Opkopen inboedel", href: "/diensten/opkopen-inboedel" },
  { label: "Taxatie", href: "/diensten/taxatie" },
  { label: "Inboedel veilen", href: "/diensten/inboedel-veilen" },
  { label: "Verhuizen", href: "/diensten/verhuizen" },
];

const zakelijk = [
  { label: "Voor notarissen", href: "/notaris" },
  { label: "Voor makelaars", href: "/makelaar" },
  { label: "Bewindvoerders", href: "/bewindvoerder" },
  { label: "Woningcorporaties", href: "/woningbouwvereniging" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors">
        {label}
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-52 pt-2 z-50">
          <div className="bg-white border border-slate-100 rounded-xl shadow-lg py-1.5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 h-16">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={close}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <span className="font-semibold text-slate-900 text-[15px]">Uw Ontruimer</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Dropdown label="Diensten" items={diensten} />
            <Dropdown label="Zakelijk" items={zakelijk} />
            <Link href="/werkwijze" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Werkwijze</Link>
            <Link href="/over-ons" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Over ons</Link>
            <Link href="/faq" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:0853035894" className="hidden sm:block text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">085-303 58 94</a>
            <Link href="https://analyse.uwontruimer.nl" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Gratis AI-analyse</Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu openen"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto"
          style={{ top: "64px" }}
        >
          <nav className="flex-1 px-6 py-4">
            {[
              { heading: "Diensten", items: diensten },
              { heading: "Zakelijk", items: zakelijk },
              {
                heading: "Informatie",
                items: [
                  { label: "Werkwijze", href: "/werkwijze" },
                  { label: "Over ons", href: "/over-ons" },
                  { label: "FAQ", href: "/faq" },
                ],
              },
            ].map(({ heading, items }) => (
              <div key={heading} className="mb-6">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">{heading}</p>
                <div className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center py-3 text-[15px] text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-slate-100 space-y-3">
            <a
              href="tel:0853035894"
              onClick={close}
              className="flex items-center gap-2 text-slate-700 font-medium text-base"
            >
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              085-303 58 94
            </a>
            <Link
              href="https://analyse.uwontruimer.nl"
              onClick={close}
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
            >
              Gratis AI-analyse
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
