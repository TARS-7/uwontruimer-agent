import type { Channel, PhotoSigner } from '../types'

// Geldigheid per kanaal: WhatsApp haalt media vertraagd op (24u),
// webhooks downloaden direct na ontvangst (1u), e-mail embedt de URL
// in de mail dus die moet het langst mee (7 dagen).
const EXPIRY_SECONDS: Record<Channel['type'], number> = {
  whatsapp: 86400,
  webhook: 3600,
  email: 604800,
}

/**
 * Maakt per kanaal geldige foto-URL's. Mét signer gaan álle URL's erdoorheen —
 * ook volledige URL's kunnen naar een privé-bucket wijzen en moeten dan opnieuw
 * gesigned worden; de signer hoort bij niet-bucket-URL's terug te vallen op de
 * originele URL. Zonder signer gaan alleen http-URL's ongewijzigd mee.
 */
export async function fotoUrlsVoorKanaal(
  fotoUrls: string[],
  kanaal: Channel['type'],
  signPhotos?: PhotoSigner
): Promise<string[]> {
  if (fotoUrls.length === 0) return []
  if (!signPhotos) return fotoUrls.filter((u) => u.startsWith('http'))

  const gesigned = await signPhotos(fotoUrls, EXPIRY_SECONDS[kanaal])
  return gesigned.filter(Boolean)
}
