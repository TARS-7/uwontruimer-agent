import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { naam, telefoon, gemeente } = body as Record<string, string>;

  if (!naam?.trim() || !telefoon?.trim()) {
    return NextResponse.json({ error: "naam en telefoon zijn verplicht" }, { status: 400 });
  }

  // Marketing-attributie (Laag 2): alleen de bekende attributie-velden doorgeven,
  // niet het hele request-body, zodat de webhook geen willekeurige velden krijgt.
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

  const placeholderEmail = `terugbel-${telefoon.replace(/\D/g, "")}@noreply.uwontruimer.nl`;

  const res = await fetch("https://app.uwontruimer.nl/api/webhooks/wizard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
    },
    body: JSON.stringify({
      naam: naam.trim(),
      telefoon: telefoon.trim(),
      email: placeholderEmail,
      gemeente: gemeente?.trim() ?? "",
      bron: "terugbel-website",
      opmerking: "Terugbelverzoek via website",
      ...attributie,
    }),
  });

  if (!res.ok && res.status !== 200) {
    const text = await res.text();
    console.error("Terugbel webhook mislukt:", res.status, text);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
