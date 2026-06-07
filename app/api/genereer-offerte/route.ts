import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import type { Offerte, OfferteOnderdeel } from '@/lib/types'

// ─── Prompt ───────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Je bent de offerte-calculator van Uw Ontruimer, een professioneel woningontruimingsbedrijf in Nederland. Je stelt indicatieve offertes op met prijsranges.

PRIJSLIJST (gebruik deze exacte tarieven, niets anders):

1. WONINGONTRUIMING EN AFVAL AFVOEREN (altijd eerste post)
   Berekening: m² × 0.3 = geschat volume in m³
   1 vrachtwagen = 20 m³ → bedragMin: €900, bedragMax: €1.100
   Meerdere vrachtwagens: bedragMin = vrachtwagens × 900, bedragMax = vrachtwagens × 1100
   Absoluut minimum: bedragMin = 450, bedragMax = 550

2. SCHILDERWERK
   €20 per m² (min) tot €30 per m² (max) vloeroppervlak per kamer
   Schat kamermaat op basis van totaal m² ÷ aantal kamers.

3. BEHANG VERWIJDEREN
   €20 per m² (min) tot €40 per m² (max) per kamer

4. TUINWERKZAAMHEDEN (snoeien, opruimen)
   €45 per uur. Schat uren op basis van omschrijving (kleine tuin 2-4u, grote tuin 6-10u).

5. VLOER VERWIJDEREN — LOS
   isPM: true (prijs op aanvraag, niet meerekenen in totaal)

6. VLOER VERWIJDEREN — GELIJMD
   €45 per uur. Schat uren op basis van m² (globaal 1u per 10m²).

7. KELDER OF ZOLDERRUIMING
   €1.000 per 20 m³. Schat volume op basis van omschrijving.

8. TOESLAG MOEILIJKE BEREIKBAARHEID
   NOOIT opnemen tenzij expliciet vermeld. Dan: isPM: true.

REGELS:
- Voeg ALLEEN posten toe die relevant zijn voor deze specifieke woning en werkzaamheden.
- Woningontruiming is ALTIJD aanwezig.
- Geen m² bekend? Gebruik dan 75 m² als schatting.
- PM-posten: bedragMin=0, bedragMax=0, isPM=true.
- totaalMin en totaalMax = som van alle non-PM posten.
- Antwoord UITSLUITEND als geldig JSON, geen markdown, geen uitleg.`

const RESPONSE_SCHEMA = {
  onderdelen: [
    { naam: 'string', beschrijving: 'string', bedragMin: 0, bedragMax: 0, isPM: false },
  ],
  totaalMin: 0,
  totaalMax: 0,
  samenvatting: 'string (1-2 zinnen, professioneel)',
  referentie: 'UO-2026-XXXXX',
}

// ─── Input type ───────────────────────────────────────────────────────────────

interface OfferteInput {
  address: {
    straat: string; huisnummer: string; postcode: string; woonplaats: string
    oppervlakte: number | null; bouwjaar: number | null
  }
  aantalKamers: number | null
  staatWoning: string | null
  opleveringsdatum: string
  eigendomstype: string | null
  inspectieWerkzaamheden: string[]
  waardevolleSpullen: Array<{ categorie: string; waardeRange: string; beschrijving: string }>
}

// ─── Prompt builder ───────────────────────────────────────────────────────────

function buildPrompt(input: OfferteInput): string {
  const { address, aantalKamers, staatWoning, opleveringsdatum, eigendomstype, inspectieWerkzaamheden, waardevolleSpullen } = input
  const m2 = address.oppervlakte
  const m3 = m2 ? Math.round(m2 * 0.3) : null
  const vrachtwagens = m3 ? Math.ceil(m3 / 20) : null

  const lines = [
    'Stel een indicatieve offerte op voor:',
    '',
    'WONINGGEGEVENS:',
    `Adres: ${address.straat} ${address.huisnummer}, ${address.postcode} ${address.woonplaats}`,
    m2 ? `Oppervlakte: ${m2} m² (= ~${m3} m³, = ~${vrachtwagens} vrachtwagen${vrachtwagens !== 1 ? 's' : ''})` : 'Oppervlakte: onbekend',
    address.bouwjaar ? `Bouwjaar: ${address.bouwjaar}` : '',
    aantalKamers ? `Aantal kamers: ${aantalKamers}` : '',
    staatWoning ? `Staat woning: ${staatWoning}` : '',
    eigendomstype ? `Type: ${eigendomstype === 'huur' ? 'Huurwoning' : 'Koopwoning'}` : '',
    opleveringsdatum ? `Gewenste opleveringsdatum: ${opleveringsdatum}` : '',
  ].filter(Boolean)

  if (inspectieWerkzaamheden.length > 0) {
    lines.push('', 'WERKZAAMHEDEN UIT INSPECTIERAPPORT:')
    inspectieWerkzaamheden.forEach((w) => lines.push(`- ${w}`))
  }

  if (waardevolleSpullen.length > 0) {
    lines.push('', 'WAARDEVOLLE SPULLEN (ter info — geen onderdeel van ontruimingsprijs):')
    waardevolleSpullen.forEach((s) => lines.push(`- ${s.categorie}: ${s.beschrijving} (${s.waardeRange})`))
  }

  lines.push('', 'Geef de offerte in dit exacte JSON-formaat:')
  lines.push(JSON.stringify(RESPONSE_SCHEMA, null, 2))

  return lines.join('\n')
}

// ─── Referentie ───────────────────────────────────────────────────────────────

function generateReferentie(): string {
  return `UO-2026-${Math.floor(10000 + Math.random() * 90000)}`
}

// ─── Demo offerte (geen API key) ──────────────────────────────────────────────

function demoOfferte(input: OfferteInput): Offerte {
  const m2 = input.address.oppervlakte ?? 75
  const m3 = m2 * 0.3
  const vrachtwagens = Math.ceil(m3 / 20)
  const ontruimingMin = Math.max(450, vrachtwagens * 900)
  const ontruimingMax = Math.max(550, vrachtwagens * 1100)
  const kamers = input.aantalKamers ?? 4
  const m2PerKamer = Math.round(m2 / kamers)

  const onderdelen: OfferteOnderdeel[] = [{
    naam: 'Woningontruiming en afval afvoeren',
    beschrijving: `${m2} m² woning = ~${Math.round(m3)} m³, ${vrachtwagens} vrachtwagen${vrachtwagens > 1 ? 's' : ''}`,
    bedragMin: ontruimingMin,
    bedragMax: ontruimingMax,
    isPM: false,
  }]

  for (const w of input.inspectieWerkzaamheden) {
    const lager = w.toLowerCase()
    if (lager.includes('schild')) {
      onderdelen.push({
        naam: 'Schilderwerk',
        beschrijving: w,
        bedragMin: m2PerKamer * 20,
        bedragMax: m2PerKamer * 30,
        isPM: false,
      })
    } else if (lager.includes('behang')) {
      onderdelen.push({
        naam: 'Behang verwijderen',
        beschrijving: w,
        bedragMin: m2PerKamer * 20,
        bedragMax: m2PerKamer * 40,
        isPM: false,
      })
    } else if (lager.includes('tuin') || lager.includes('snoei')) {
      onderdelen.push({ naam: 'Tuinwerkzaamheden', beschrijving: w, bedragMin: 180, bedragMax: 360, isPM: false })
    } else if (lager.includes('kelder') || lager.includes('zolder')) {
      onderdelen.push({ naam: 'Kelder/zolderruiming', beschrijving: w, bedragMin: 1000, bedragMax: 2000, isPM: false })
    } else if (lager.includes('vloer') && lager.includes('gelijmd')) {
      const uren = Math.ceil(m2 / 10)
      onderdelen.push({ naam: 'Vloer verwijderen (gelijmd)', beschrijving: w, bedragMin: uren * 45, bedragMax: uren * 45, isPM: false })
    } else if (lager.includes('vloer')) {
      onderdelen.push({ naam: 'Vloer verwijderen (los)', beschrijving: w, bedragMin: 0, bedragMax: 0, isPM: true })
    } else {
      onderdelen.push({ naam: 'Aanvullende werkzaamheid', beschrijving: w, bedragMin: 180, bedragMax: 360, isPM: false })
    }
  }

  const nonPM = onderdelen.filter((o) => !o.isPM)
  return {
    onderdelen,
    totaalMin: nonPM.reduce((s, o) => s + o.bedragMin, 0),
    totaalMax: nonPM.reduce((s, o) => s + o.bedragMax, 0),
    samenvatting: `Indicatieve offerte voor de ontruiming van de woning aan ${input.address.straat} ${input.address.huisnummer} te ${input.address.woonplaats}. De definitieve prijs wordt bevestigd na een gratis inspectie.`,
    geldigTot: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
    referentie: generateReferentie(),
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let input: OfferteInput
  try {
    input = await request.json()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return Response.json(demoOfferte(input))
  }

  const client = new Anthropic({ apiKey })

  let raw: string
  try {
    const msg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: [
        { type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
      ] as Anthropic.Messages.TextBlockParam[],
      messages: [{ role: 'user', content: buildPrompt(input) }],
    })
    const block = msg.content[0]
    raw = block.type === 'text' ? block.text.trim() : ''
  } catch (err) {
    console.error('[genereer-offerte] Claude fout:', err)
    return Response.json({ error: 'AI-analyse mislukt. Probeer opnieuw.' }, { status: 502 })
  }

  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()

  try {
    const p = JSON.parse(cleaned)

    const onderdelen: OfferteOnderdeel[] = (p.onderdelen ?? []).map((o: Record<string, unknown>) => ({
      naam: String(o.naam ?? ''),
      beschrijving: String(o.beschrijving ?? ''),
      bedragMin: Number(o.bedragMin ?? 0),
      bedragMax: Number(o.bedragMax ?? 0),
      isPM: Boolean(o.isPM ?? false),
    }))

    const nonPM = onderdelen.filter((o) => !o.isPM)
    const offerte: Offerte = {
      onderdelen,
      totaalMin: p.totaalMin ? Number(p.totaalMin) : nonPM.reduce((s, o) => s + o.bedragMin, 0),
      totaalMax: p.totaalMax ? Number(p.totaalMax) : nonPM.reduce((s, o) => s + o.bedragMax, 0),
      samenvatting: String(p.samenvatting ?? ''),
      geldigTot: String(p.geldigTot ?? new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]),
      referentie: p.referentie ? String(p.referentie) : generateReferentie(),
    }

    return Response.json(offerte)
  } catch {
    return Response.json({ error: 'Onverwachte AI-respons. Probeer opnieuw.' }, { status: 502 })
  }
}
