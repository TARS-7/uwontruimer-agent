import { NextRequest } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const PROMPT = `
Dit is een inspectie rapport van een huurwoning. Analyseer het document en extraheer alle werkzaamheden die uitgevoerd moeten worden voor oplevering.

Denk aan werkzaamheden zoals: schilderen, behang verwijderen, tuin snoeien, vloer schoonmaken, sanitair repareren, kozijnen behandelen, CV-ketel onderhoud, zolder opruimen, garage leegmaken, schutting repareren, ramen lappen, etc.

Geef als antwoord een JSON array met korte maar duidelijke beschrijvingen in het Nederlands. Elke beschrijving maximaal 70 tekens.

Formaat: ["werkzaamheid 1", "werkzaamheid 2", ...]

Antwoord ALLEEN met de JSON array. Geen uitleg, geen markdown, geen andere tekst.
`.trim()

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Gemini API key niet geconfigureerd' }, { status: 500 })
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  const file = formData.get('rapport') as File | null
  if (!file) {
    return Response.json({ error: 'Geen bestand ontvangen' }, { status: 400 })
  }
  if (file.type !== 'application/pdf') {
    return Response.json({ error: 'Alleen PDF-bestanden zijn toegestaan' }, { status: 400 })
  }
  if (file.size > 10 * 1024 * 1024) {
    return Response.json({ error: 'Bestand is te groot (max 10 MB)' }, { status: 413 })
  }

  // Convert to base64 for Gemini inline data
  const buffer = await file.arrayBuffer()
  const base64 = Buffer.from(buffer).toString('base64')

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

  let raw: string
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            { inlineData: { mimeType: 'application/pdf', data: base64 } },
            { text: PROMPT },
          ],
        },
      ],
    })
    raw = result.response.text().trim()
  } catch (err) {
    console.error('[analyse-inspectie] Gemini fout:', err)
    return Response.json({ error: 'AI-analyse mislukt. Probeer opnieuw.' }, { status: 502 })
  }

  // Strip markdown code fences if present
  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()

  let werkzaamheden: string[]
  try {
    const parsed = JSON.parse(cleaned)
    if (!Array.isArray(parsed)) throw new Error('Geen array')
    werkzaamheden = parsed
      .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
      .map((item) => item.trim())
  } catch {
    // Fallback: split by newline if JSON parse fails
    werkzaamheden = cleaned
      .split('\n')
      .map((l) => l.replace(/^[-*•]\s*/, '').replace(/^"\s*/, '').replace(/"\s*,?\s*$/, '').trim())
      .filter((l) => l.length > 2)
  }

  if (werkzaamheden.length === 0) {
    return Response.json({ error: 'Geen werkzaamheden gevonden in het rapport.' }, { status: 422 })
  }

  return Response.json({ werkzaamheden })
}
