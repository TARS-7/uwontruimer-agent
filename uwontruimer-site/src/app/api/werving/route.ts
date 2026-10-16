import { NextRequest, NextResponse } from "next/server";

// Proxy voor het werken-bij-formulier. De site stuurt de sollicitatie
// server-side door naar het dashboard (app.uwontruimer.nl/api/werving), zodat
// aanmeldingen op één plek in het dashboard belanden en er geen CORS-gedoe is.
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { naam, telefoon, notitie, website, attributie, herkomst } = body as Record<string, unknown> & {
    naam?: string; telefoon?: string; notitie?: string; website?: string;
  };

  // Honeypot: bots vullen het verborgen veld in — doe alsof het gelukt is
  if (website) {
    return NextResponse.json({ ok: true });
  }
  if (!naam?.trim() || !telefoon?.trim()) {
    return NextResponse.json({ error: "naam en telefoon zijn verplicht" }, { status: 400 });
  }

  try {
    const res = await fetch("https://app.uwontruimer.nl/api/werving", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        naam: naam.trim(),
        telefoon: telefoon.trim(),
        notitie: notitie?.trim() ?? "",
        attributie: attributie ?? null,
        herkomst: herkomst ?? null,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Werving proxy mislukt:", res.status, text);
      return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Werving proxy fout:", error);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }
}
