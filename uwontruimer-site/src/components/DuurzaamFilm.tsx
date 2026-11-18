"use client";

import Film from "@/components/Film";

// De duurzaam-film (kringloopwinkel en sorteercentrum, 20 s, zonder geluid).
// Dunne schil om Film met vaste bron, poster en events duurzaam_film_*.

type Props = {
  plek: string;            // homepage | stad | duurzaam-hero | werkwijze
  className?: string;
  bijschrift?: string;
};

export default function DuurzaamFilm({ plek, className = "", bijschrift }: Props) {
  return (
    <Film
      naam="duurzaam"
      src="/duurzaam.mp4"
      poster="/duurzaam-poster.jpg"
      plek={plek}
      className={className}
      label={bijschrift ?? "Kringloopwinkel en sorteercentrum: hergebruik van inboedel"}
    />
  );
}
