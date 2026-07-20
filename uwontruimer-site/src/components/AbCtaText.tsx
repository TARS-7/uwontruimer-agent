import { AB_CTA_VARIANTS, type AbCtaSlot } from "@/data/ab-cta";

// Rendert beide varianten in de (statische) HTML; CSS in globals.css toont
// alleen de variant die het head-script via data-ab-cta op <html> zet.
export default function AbCtaText({ slot }: { slot: AbCtaSlot }) {
  return (
    <>
      <span className="ab-cta-a">{AB_CTA_VARIANTS.A[slot]}</span>
      <span className="ab-cta-b">{AB_CTA_VARIANTS.B[slot]}</span>
    </>
  );
}
