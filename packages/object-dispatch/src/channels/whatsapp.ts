import type { DispatchRecord, ObjectPayload, Recipient, WhatsAppChannel, WhatsAppSender } from '../types'

export async function dispatchWhatsApp(
  recipient: Recipient,
  _object: ObjectPayload,
  config: WhatsAppChannel,
  fotoUrls: string[],
  sendWhatsApp: WhatsAppSender | undefined
): Promise<DispatchRecord> {
  const start = Date.now()

  if (!sendWhatsApp) {
    return { channel: 'whatsapp', success: false, error: 'Geen sendWhatsApp-adapter geconfigureerd', durationMs: 0 }
  }
  if (!recipient.telefoon) {
    return { channel: 'whatsapp', success: false, error: 'Ontvanger heeft geen telefoonnummer', durationMs: 0 }
  }
  if (config.headerFoto && fotoUrls.length === 0) {
    return { channel: 'whatsapp', success: false, error: 'headerFoto gevraagd maar geen foto beschikbaar', durationMs: 0 }
  }

  try {
    const { messageId } = await sendWhatsApp({
      naar: recipient.telefoon,
      templateName: config.templateName,
      taal: config.taal,
      bodyParams: config.bodyParams,
      headerFotoUrl: config.headerFoto ? fotoUrls[0] : undefined,
    })
    return { channel: 'whatsapp', success: true, messageId, durationMs: Date.now() - start }
  } catch (err) {
    return {
      channel: 'whatsapp',
      success: false,
      error: err instanceof Error ? err.message : String(err),
      durationMs: Date.now() - start,
    }
  }
}
