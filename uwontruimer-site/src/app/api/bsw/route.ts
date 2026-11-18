import { NextRequest, NextResponse } from "next/server";

// Aanvraag BSW, Boedel Sorteer Waardering, vanuit de pop-up op /bsw/.
// Zelfde route als de voorinspectie: de lead gaat via de wizard-webhook het
// dashboard in (bron "bsw-website"), zonder betaalstap. Geen Stripe, geen mail
// vanaf hier; het dashboard stuurt zelf de bevestiging en Jurriën belt.

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Record<string, unknown>;
  const s = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  const naam = s("naam");
  const telefoon = s("telefoon");
  const email = s("email");
  const postcode = s("postcode");
  const toelichting = s("toelichting").slice(0, 600);
  const van = s("van");

  if (!naam || !telefoon || !email) {
    return NextResponse.json({ error: "naam, telefoon en e-mail zijn verplicht" }, { status: 400 });
  }

  // Alleen bekende attributievelden doorgeven (zie /api/voorinspectie).
  const ATTRIBUTIE_VELDEN = [
    "gclid", "gbraid", "wbraid", "utmSource", "utmMedium",
    "utmCampaign", "utmTerm", "utmContent", "landingsPagina", "klikVastgelegdOp",
  ] as const;
  const attributie: Record<string, string | boolean> = {};
  for (const veld of ATTRIBUTIE_VELDEN) {
    const v = body[veld];
    if (typeof v === "string" && v) attributie[veld] = v;
  }
  if (typeof body.marketingConsent === "boolean") attributie.marketingConsent = body.marketingConsent;

  const opmerkingDelen = ["Aanvraag BSW, Boedel Sorteer Waardering (EUR 75 per uur per medewerker, 2 medewerkers, min. 2 uur; verrekend als wij de inboedel kopen)"];
  if (postcode) opmerkingDelen.push(`Postcode: ${postcode}`);
  if (toelichting) opmerkingDelen.push(`Toelichting: ${toelichting}`);
  opmerkingDelen.push(`Ingang: ${van || "direct"}`);

  const h = body.herkomst;
  if (h && typeof h === "object") {
    const { ref, landing } = h as { ref?: string; landing?: string };
    const bronTekst = ref ? ref.replace(/^https?:\/\//, "").split("/")[0] : "direct";
    opmerkingDelen.push(`Eerste bezoek via ${bronTekst}${landing ? ` op ${landing}` : ""}`);
  }

  const res = await fetch("https://app.uwontruimer.nl/api/webhooks/wizard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
    },
    body: JSON.stringify({
      naam,
      telefoon,
      email,
      gemeente: "",
      bron: "bsw-website",
      opmerking: opmerkingDelen.join(" · "),
      ...attributie,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("BSW webhook mislukt:", res.status, text);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }

  let referentie = "";
  try {
    const data = (await res.json()) as { referentie?: string };
    referentie = data.referentie ?? "";
  } catch {
    // geen JSON terug; referentie is optioneel
  }

  return NextResponse.json({ ok: true, referentie });
}
