import { NextRequest, NextResponse } from "next/server";

// Telefoonklik-meting (3 nov 2026): wie op het telefoonnummer tikt, wordt mét
// herkomst (Ads-klik-ID, UTM, verwijzer, pagina) vastgelegd in het dashboard.
// Het dashboard koppelt de klik daarna op tijd aan het Voys-gesprek en aan de
// opdracht, zodat telefonische leads dezelfde bron krijgen als wizard-leads.
// Er gaat geen persoonsgegeven van de bezoeker mee; alleen herkomst en pagina.

const VELDEN = [
  "gclid", "gbraid", "wbraid", "utmSource", "utmMedium", "utmCampaign", "utmTerm", "utmContent",
  "landingsPagina", "klikVastgelegdOp", "verwijzer", "eersteLanding", "pagina", "abVarianten", "apparaat",
] as const;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown> = {};
  try { body = await request.json(); } catch { return NextResponse.json({ error: "ongeldig" }, { status: 400 }); }
  const data: Record<string, string | boolean> = {};
  for (const v of VELDEN) {
    const w = body[v];
    if (typeof w === "string" && w) data[v] = w.slice(0, 300);
  }
  if (typeof body.betaald === "boolean") data.betaald = body.betaald;
  if (!data.pagina) return NextResponse.json({ error: "pagina ontbreekt" }, { status: 400 });

  try {
    await fetch("https://app.uwontruimer.nl/api/webhooks/telefoonklik", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(8000),
    });
  } catch (err) {
    console.error("telefoonklik doorsturen mislukt:", err);
  }
  return NextResponse.json({ ok: true });
}
