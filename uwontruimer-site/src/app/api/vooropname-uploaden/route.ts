import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

/**
 * Ontvangt de vooropname van de woningbouw plus de
 * contactgegevens. De lead wordt eerst weggeschreven (zodat hij nooit verloren
 * gaat), daarna gaat het rapport als bijlage naar kantoor.
 */
export async function POST(request: NextRequest) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Ongeldig formulier" }, { status: 400 });
  }

  const tekst = (k: string) => (form.get(k) as string | null)?.trim() ?? "";
  const naam = tekst("naam");
  const telefoon = tekst("telefoon");
  const email = tekst("email");
  if (!naam || !telefoon || !email) {
    return NextResponse.json({ error: "naam, telefoon en e-mail zijn verplicht" }, { status: 400 });
  }

  const van = tekst("van") || "direct";

  let attributie: Record<string, unknown> = {};
  try { attributie = JSON.parse(tekst("attributie") || "{}"); } catch { attributie = {}; }

  const opmerkingDelen = [
    "Vooropname geüpload — vraagt goedkoper aanbod dan de woningbouw",
    `Ingang: ${van}`,
  ];

  // 1. Lead eerst — die mag nooit verloren gaan als de mail hapert.
  const leadRes = await fetch("https://app.uwontruimer.nl/api/webhooks/wizard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
    },
    body: JSON.stringify({
      naam, telefoon, email,
      gemeente: "",
      bron: "vooropname-upload",
      opmerking: opmerkingDelen.join(" · "),
      ...attributie,
    }),
  });

  let referentie = "";
  try {
    const d = (await leadRes.json()) as { referentie?: string };
    referentie = d.referentie ?? "";
  } catch {
    // geen JSON terug; referentie blijft leeg
  }

  // 2. Rapport als bijlage naar kantoor.
  const bestanden = form.getAll("bestanden").filter((f): f is File => f instanceof File);
  const bijlagen = await Promise.all(
    bestanden.map(async (f) => ({
      bestandsnaam: f.name,
      type: f.type,
      base64: Buffer.from(await f.arrayBuffer()).toString("base64"),
    }))
  );

  let rapportVerstuurd = false;
  if (bijlagen.length) {
    try {
      const res = await fetch("https://app.uwontruimer.nl/api/voorinspectie/rapport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
        },
        body: JSON.stringify({
          naam, telefoon, email,
          referentie, ingang: van, bijlagen,
        }),
      });
      rapportVerstuurd = res.ok;
      if (!res.ok) console.error("Rapport doorsturen mislukt:", res.status, await res.text());
    } catch (err) {
      console.error("Rapport doorsturen mislukt:", err);
    }
  }

  return NextResponse.json({ ok: true, referentie, rapportVerstuurd });
}
