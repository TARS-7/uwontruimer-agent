"use client";

import { useEffect, useRef, useState } from "react";

// De duurzaam-film (kringloopwinkel en sorteercentrum, 20 s, zonder geluid).
// Laadt pas als het blok in beeld komt, speelt dan gedempt in een lus. Meting:
// duurzaam_film_gestart (eerste keer afspelen) en duurzaam_film_afgespeeld
// (75 procent gezien), één keer per paginabezoek.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  plek: string;            // homepage | stad | duurzaam-hero
  className?: string;      // afmetingen en afronding van de omlijsting
  bijschrift?: string;     // regel onderin het beeld, leeg = geen
};

export default function DuurzaamFilm({ plek, className = "", bijschrift }: Props) {
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

  function meet(naam: string) {
    if (typeof window.gtag === "function") window.gtag("event", naam, { plek });
  }

  return (
    <video
      ref={ref}
      className={className}
      src={inBeeld ? "/duurzaam.mp4" : undefined}
      poster="/duurzaam-poster.jpg"
      muted
      loop
      playsInline
      preload="none"
      aria-label={bijschrift ?? "Kringloopwinkel en sorteercentrum: hergebruik van inboedel"}
      onPlay={() => {
        if (!gestart.current) { gestart.current = true; meet("duurzaam_film_gestart"); }
      }}
      onTimeUpdate={(e) => {
        const v = e.currentTarget;
        if (!afgespeeld.current && v.duration > 0 && v.currentTime / v.duration >= 0.75) {
          afgespeeld.current = true;
          meet("duurzaam_film_afgespeeld");
        }
      }}
    />
  );
}
