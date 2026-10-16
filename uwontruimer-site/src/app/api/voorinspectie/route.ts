import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { naam, telefoon, email, postcode, corporatie, van, aanvraag } = body as Record<string, string>;

  if (!naam?.trim() || !telefoon?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "naam, telefoon en e-mail zijn verplicht" }, { status: 400 });
  }

  // Zelfde attributie-aanpak als /api/terugbel: alleen bekende velden doorgeven,
  // zodat de webhook geen willekeurige body-velden binnenkrijgt.
  const ATTRIBUTIE_VELDEN = [
    "gclid", "gbraid", "wbraid", "utmSource", "utmMedium",
    "utmCampaign", "utmTerm", "utmContent", "landingsPagina", "klikVastgelegdOp",
  ] as const;
  const attributie: Record<string, string | boolean> = {};
  for (const veld of ATTRIBUTIE_VELDEN) {
    const v = (body as Record<string, unknown>)[veld];
    if (typeof v === "string" && v) attributie[veld] = v;
  }
  const mc = (body as Record<string, unknown>).marketingConsent;
  if (typeof mc === "boolean") attributie.marketingConsent = mc;

  const opmerkingDelen = ["Aanvraag voorinspectie huurwoning (EUR 150, wordt verrekend met de ontruiming)"];
  if (postcode?.trim()) opmerkingDelen.push(`Postcode: ${postcode.trim()}`);
  opmerkingDelen.push(`Ingang: ${van?.trim() || "direct"}`);
  if (aanvraag?.trim()) opmerkingDelen.push(`Uit wizard-aanvraag: ${aanvraag.trim()}`);

  // First-touch herkomst (cookie uo_bron, 90 dagen): waar kwam deze bezoeker
  // de eerste keer vandaan? Zegt iets anders dan de last-click attributie.
  const h = (body as Record<string, unknown>).herkomst;
  if (h && typeof h === "object") {
    const { ref, landing } = h as { ref?: string; landing?: string };
    const bronTekst = ref ? ref.replace(/^https?:\/\//, "").split("/")[0] : "direct";
    opmerkingDelen.push(`Eerste bezoek via ${bronTekst}${landing ? ` op ${landing}` : ""}`);
  }
  if (corporatie?.trim()) opmerkingDelen.push(`Woningcorporatie: ${corporatie.trim()}`);

  const res = await fetch("https://app.uwontruimer.nl/api/webhooks/wizard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
    },
    body: JSON.stringify({
      naam: naam.trim(),
      telefoon: telefoon.trim(),
      email: email.trim(),
      gemeente: "",
      bron: "voorinspectie-website",
      opmerking: opmerkingDelen.join(" · "),
      ...attributie,
    }),
  });

  if (!res.ok && res.status !== 200) {
    const text = await res.text();
    console.error("Voorinspectie webhook mislukt:", res.status, text);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }

  // De lead staat nu vast in het dashboard. Pas daarna maken we de
  // Stripe-betaalsessie aan — mislukt dat, dan is de aanvraag nog steeds
  // binnen en belt Uw Ontruimer gewoon zelf. De lead gaat nooit verloren.
  // De Moneybird-factuur ontstaat pas ná een geslaagde betaling (Stripe-webhook).
  let referentie = "";
  try {
    const data = (await res.json()) as { referentie?: string };
    referentie = data.referentie ?? "";
  } catch {
    // webhook gaf geen JSON terug; niet erg, referentie is optioneel
  }

  let betaalUrl: string | null = null;
  try {
    const betaal = await fetch("https://app.uwontruimer.nl/api/voorinspectie/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
      },
      body: JSON.stringify({
        naam: naam.trim(),
        email: email.trim(),
        telefoon: telefoon.trim(),
        postcode: postcode?.trim() ?? "",
        van: van?.trim() ?? "",
        referentie,
      }),
    });
    if (betaal.ok) {
      const d = (await betaal.json()) as { betaalUrl?: string | null };
      betaalUrl = d.betaalUrl ?? null;
    }
  } catch (err) {
    console.error("Voorinspectie betaallink mislukt:", err);
  }

  return NextResponse.json({ ok: true, betaalUrl, referentie });
}
