import { NextRequest } from 'next/server'

const PDOK_BASE = 'https://api.pdok.nl/bzk/locatieserver/search/v3_1'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const postcode = searchParams.get('postcode')?.replace(/\s/g, '').toUpperCase()
  const huisnummer = searchParams.get('huisnummer')
  const toevoeging = searchParams.get('toevoeging') || ''

  if (!postcode || !huisnummer) {
    return Response.json(
      { error: 'Postcode en huisnummer zijn verplicht' },
      { status: 400 }
    )
  }

  const query = `${postcode} ${huisnummer}${toevoeging ? toevoeging : ''}`

  // Step 1: find matching address via suggest
  const suggestUrl = `${PDOK_BASE}/suggest?q=${encodeURIComponent(query)}&fq=type:adres&rows=5`

  let suggestData: PDOKSuggestResponse
  try {
    const res = await fetch(suggestUrl, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`PDOK suggest fout: ${res.status}`)
    suggestData = await res.json()
  } catch {
    return Response.json({ error: 'Adres-service niet bereikbaar. Probeer opnieuw.' }, { status: 503 })
  }

  const docs = suggestData.response?.docs ?? []
  if (docs.length === 0) {
    return Response.json({ error: 'Adres niet gevonden. Controleer postcode en huisnummer.' }, { status: 404 })
  }

  // Pick the best match: prefer exact postcode + huisnummer
  const best = docs.find(
    (d) =>
      d.postcode?.replace(/\s/g, '') === postcode &&
      String(d.huisnummer) === String(huisnummer)
  ) ?? docs[0]

  // Step 2: fetch full details via lookup
  const lookupUrl = `${PDOK_BASE}/lookup?id=${encodeURIComponent(best.id)}&fl=*`

  let detail: PDOKDoc
  try {
    const res = await fetch(lookupUrl, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`PDOK lookup fout: ${res.status}`)
    const data: PDOKLookupResponse = await res.json()
    if (!data.response?.docs?.length) throw new Error('Geen details gevonden')
    detail = data.response.docs[0]
  } catch {
    // Fall back to suggest data
    detail = best
  }

  // Step 3: if BAG API key is configured, enrich with verblijfsobject details
  let bagData: BAGVerblijfsobject | null = null
  const bagApiKey = process.env.BAG_API_KEY
  const verblijfsobjectId = detail.adresseerbaarobject_id

  if (bagApiKey && verblijfsobjectId) {
    try {
      const bagUrl = `https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2/verblijfsobjecten/${verblijfsobjectId}`
      const bagRes = await fetch(bagUrl, {
        headers: {
          'X-Api-Key': bagApiKey,
          Accept: 'application/hal+json',
        },
        next: { revalidate: 86400 },
      })
      if (bagRes.ok) {
        const bagJson = await bagRes.json()
        bagData = bagJson
      }
    } catch {
      // BAG API niet beschikbaar, doorgaan zonder verrijking
    }
  }

  return Response.json({
    postcode: detail.postcode ?? postcode,
    huisnummer: String(detail.huisnummer ?? huisnummer),
    huisletter: detail.huisletter ?? '',
    toevoeging: detail.huisnummertoevoeging ?? toevoeging,
    straat: detail.straatnaam ?? '',
    woonplaats: detail.woonplaatsnaam ?? '',
    gemeente: detail.gemeentenaam ?? '',
    oppervlakte: bagData?.oppervlakte ?? detail.oppervlakte ?? null,
    bouwjaar: bagData?.oorspronkelijkBouwjaar ?? detail.bouwjaar ?? null,
    woningtype: bagData?.gebruiksdoel?.[0] ?? detail.woningtype ?? null,
    gebruiksdoel: bagData?.gebruiksdoel?.join(', ') ?? detail.gebruiksdoel ?? null,
    adresseerbaarobjectId: verblijfsobjectId ?? null,
  })
}

// BAG Verblijfsobject type
interface BAGVerblijfsobject {
  oppervlakte?: number
  oorspronkelijkBouwjaar?: number
  gebruiksdoel?: string[]
}

// PDOK response types
interface PDOKDoc {
  id: string
  type?: string
  weergavenaam?: string
  postcode?: string
  huisnummer?: number | string
  huisletter?: string
  huisnummertoevoeging?: string
  straatnaam?: string
  woonplaatsnaam?: string
  gemeentenaam?: string
  oppervlakte?: number
  bouwjaar?: number
  woningtype?: string
  gebruiksdoel?: string
  adresseerbaarobject_id?: string
}

interface PDOKSuggestResponse {
  response: {
    numFound: number
    docs: PDOKDoc[]
  }
}

interface PDOKLookupResponse {
  response: {
    docs: PDOKDoc[]
  }
}
