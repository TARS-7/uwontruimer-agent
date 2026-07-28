import type { DispatchRecord, ObjectPayload, Recipient, WebhookChannel } from '../types'

const RETRYABLE_STATUS = new Set([502, 503, 504])
const MAX_POGINGEN = 2

export async function dispatchWebhook(
  recipient: Recipient,
  object: ObjectPayload,
  config: WebhookChannel,
  fotoUrls: string[]
): Promise<DispatchRecord> {
  const start = Date.now()

  const body = JSON.stringify({
    opdracht_ref: object.referentie ?? object.id,
    adres: object.adres,
    object: {
      omschrijving: object.omschrijving,
      categorie: object.categorie,
      geschatteWaarde: object.geschatteWaarde,
      // fotoUrl blijft meegaan voor achterwaartse compatibiliteit
      fotoUrl: fotoUrls[0] ?? null,
      fotoUrls,
    },
    inbrenger: recipient.naam || recipient.email
      ? { naam: recipient.naam ?? null, email: recipient.email ?? null, type: recipient.type }
      : null,
    ...config.extraPayload,
  })

  let laatsteFout = ''
  for (let poging = 1; poging <= MAX_POGINGEN; poging++) {
    try {
      const res = await fetch(config.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.bearerToken}`,
        },
        body,
      })

      if (res.ok) {
        const data = (await res.json().catch(() => ({}))) as { id?: unknown; objectId?: unknown }
        const ruwId = data.objectId ?? data.id
        return {
          channel: 'webhook',
          success: true,
          messageId: ruwId != null && ruwId !== '' ? String(ruwId) : undefined,
          durationMs: Date.now() - start,
        }
      }

      const tekst = await res.text().catch(() => '')
      laatsteFout = `HTTP ${res.status}: ${tekst.slice(0, 300)}`
      if (!RETRYABLE_STATUS.has(res.status)) break
    } catch (err) {
      laatsteFout = err instanceof Error ? err.message : String(err)
    }
  }

  return { channel: 'webhook', success: false, error: laatsteFout, durationMs: Date.now() - start }
}
