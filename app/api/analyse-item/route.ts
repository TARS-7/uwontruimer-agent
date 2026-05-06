import { NextRequest } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const PROMPT = `
Je bent een ervaren taxateur. Bekijk de foto en beoordeel of het item mogelijk taxatiewaarde heeft.

WAARDEVOL: antiek meubel, kunst/schilderij, juwelen/goud/zilver, luxe horloge, postzegels/munten, vintage elektronica, design meubel (bijv. Eames, Vitra), kristal/Delfts blauw porselein, bontmantel, muziekinstrument, verzamelobject, tapijt/kleed van waarde, etc.

NIET WAARDEVOL: standaard IKEA-meubels, gewone elektronica (tv, laptop), dagelijkse kleding, keukengerei, supermarktproducten, kinderspeelgoed, boeken, etc.

Antwoord UITSLUITEND als geldig JSON, geen markdown, geen uitleg:

Als waardevol:
{"waardevol":true,"categorie":"naam categorie","waardeRange":"€X - €Y","beschrijving":"Één zin beschrijving"}

Als niet waardevol:
{"waardevol":false,"beschrijving":"Één zin beschrijving","reden":"Waarom geen taxatiewaarde"}
`.trim()

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

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

  const file = formData.get('foto') as File | null
  if (!file) return Response.json({ error: 'Geen afbeelding ontvangen' }, { status: 400 })
  if (!ALLOWED_TYPES.includes(file.type)) {
    return Response.json({ error: 'Alleen JPEG, PNG, WebP of GIF toegestaan' }, { status: 400 })
  }
  if (file.size > 5 * 1024 * 1024) {
    return Response.json({ error: 'Afbeelding is te groot (max 5 MB)' }, { status: 413 })
  }

  const buffer = await file.arrayBuffer()
  const base64 = Buffer.from(buffer).toString('base64')

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

  let raw: string
  try {
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { mimeType: file.type, data: base64 } },
          { text: PROMPT },
        ],
      }],
    })
    raw = result.response.text().trim()
  } catch (err) {
    console.error('[analyse-item] Gemini fout:', err)
    return Response.json({ error: 'AI-analyse mislukt. Probeer opnieuw.' }, { status: 502 })
  }

  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()

  try {
    const parsed = JSON.parse(cleaned)
    if (typeof parsed.waardevol !== 'boolean') throw new Error('Onverwacht formaat')
    return Response.json(parsed)
  } catch {
    return Response.json({ error: 'Onverwachte AI-respons. Probeer opnieuw.' }, { status: 502 })
  }
}
