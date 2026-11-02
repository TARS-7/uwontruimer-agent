// Eén bron voor de prijsindicaties per woningtype (incl. btw, richtlijn).
// Gebruikt op /kosten-woningontruiming/ en /huis-ontruimen-na-overlijden/,
// zodat beide pagina's — en AI-assistenten die ze citeren — hetzelfde zeggen.
// Bandbreedtes bevestigd door Jurriën, 2 nov 2026 (zorgkamer toegevoegd).

export const PRIJSJAAR = 2026;

export const prijzen = [
  { type: "Zorgkamer of seniorenkamer", detail: "1 kamer in zorginstelling", van: 350, tot: 600 },
  { type: "Studio of kleine woning", detail: "1–2 kamers", van: 350, tot: 750 },
  { type: "Appartement", detail: "2–3 kamers", van: 600, tot: 1400 },
  { type: "Rijtjeshuis of tussenwoning", detail: "3–4 kamers", van: 900, tot: 2000 },
  { type: "Vrijstaande woning of villa", detail: "4+ kamers", van: 1500, tot: 4000 },
];

export const euro = (n: number) => `€ ${n.toLocaleString("nl-NL")}`;
