import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werken bij",
  description: "Kom werken bij Uw Ontruimer. Fysiek werk bij woningontruimingen in Amsterdam en de Randstad, tot 5 dagen per week. Laat je naam en nummer achter \u2014 wij bellen jou.",
  alternates: { canonical: "/werken-bij/" },
};

export default function WerkenBijLayout({ children }: { children: React.ReactNode }) {
  return children;
}
