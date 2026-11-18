"use client";

import { useEffect, useRef, useState } from "react";

// Stille film op de site. Laadt pas als het blok in beeld komt, speelt dan
// gedempt in een lus. Meting per film: <naam>_film_gestart (eerste keer
// afspelen) en <naam>_film_afgespeeld (75 procent gezien), één keer per
// paginabezoek, met de plek op de pagina erbij.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  naam: string;            // prefix van de events, bv. "duurzaam" of "bsw"
  src: string;             // pad naar de mp4 in public
  poster: string;          // stilstaand beeld tot de film geladen is
  plek: string;            // waar op de site, voor de meting
  className?: string;
  label: string;           // aria-label
};

export default function Film({ naam, src, poster, plek, className = "", label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inBeeld, setInBeeld] = useState(false);
  const gestart = useRef(false);
  const afgespeeld = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInBeeld(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inBeeld) return;
    el.play().catch(() => { /* autoplay geblokkeerd; poster blijft staan */ });
  }, [inBeeld]);

  function meet(event: string) {
    if (typeof window.gtag === "function") window.gtag("event", `${naam}_film_${event}`, { plek });
  }

  return (
    <video
      ref={ref}
      className={className}
      src={inBeeld ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      onPlay={() => {
        if (!gestart.current) { gestart.current = true; meet("gestart"); }
      }}
      onTimeUpdate={(e) => {
        const v = e.currentTarget;
        if (!afgespeeld.current && v.duration > 0 && v.currentTime / v.duration >= 0.75) {
          afgespeeld.current = true;
          meet("afgespeeld");
        }
      }}
    />
  );
}
