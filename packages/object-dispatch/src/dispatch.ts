import { dispatchEmail } from './channels/email'
import { dispatchWhatsApp } from './channels/whatsapp'
import { dispatchWebhook } from './channels/webhook'
import { fotoUrlsVoorKanaal } from './utils/photo-urls'
import {
  dispatchInputSchema,
  type Channel,
  type DispatchAdapters,
  type DispatchInput,
  type DispatchRecord,
  type DispatchResult,
} from './types'

async function verstuurKanaal(
  input: DispatchInput,
  kanaal: Channel,
  adapters: DispatchAdapters
): Promise<DispatchRecord> {
  const fotoUrls = await fotoUrlsVoorKanaal(input.object.fotoUrls, kanaal.type, adapters.signPhotos)

  switch (kanaal.type) {
    case 'email':
      return dispatchEmail(input.recipient, input.object, kanaal, fotoUrls, adapters.sendEmail)
    case 'whatsapp':
      return dispatchWhatsApp(input.recipient, input.object, kanaal, fotoUrls, adapters.sendWhatsApp)
    case 'webhook':
      return dispatchWebhook(input.recipient, input.object, kanaal, fotoUrls)
  }
}

/**
 * Verstuurt één object naar één ontvanger over één of meer kanalen, parallel.
 * Eén gefaald kanaal laat de rest niet falen; het resultaat bevat per kanaal
 * succes/fout. Gooit alleen bij ongeldige input (Zod).
 */
export async function dispatch(
  rawInput: DispatchInput,
  adapters: DispatchAdapters = {}
): Promise<DispatchResult> {
  const start = Date.now()
  const input = dispatchInputSchema.parse(rawInput)

  const records = await Promise.all(
    input.channels.map((kanaal) =>
      verstuurKanaal(input, kanaal, adapters).catch(
        (err): DispatchRecord => ({
          channel: kanaal.type,
          success: false,
          error: err instanceof Error ? err.message : String(err),
          durationMs: Date.now() - start,
        })
      )
    )
  )

  const result: DispatchResult = {
    success: records.filter((r) => r.success),
    failed: records.filter((r) => !r.success),
    metadata: {
      durationMs: Date.now() - start,
      fotoCount: input.object.fotoUrls.length,
      channelsAttempted: input.channels.length,
    },
  }

  // Fire-and-forget: een log-fout mag de dispatch nooit laten falen.
  if (adapters.log) {
    adapters.log({
      timestamp: new Date(),
      requestId: input.requestId,
      source: input.source,
      object: { id: input.object.id, omschrijving: input.object.omschrijving },
      recipient: input.recipient,
      records,
      allSucceeded: result.failed.length === 0,
    }).catch((err) => console.error('[object-dispatch] logging mislukt:', err))
  }

  return result
}
