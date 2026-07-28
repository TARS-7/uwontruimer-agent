import type { DispatchRecord, EmailChannel, EmailSender, ObjectPayload, Recipient } from '../types'

export async function dispatchEmail(
  recipient: Recipient,
  _object: ObjectPayload,
  config: EmailChannel,
  _fotoUrls: string[],
  sendEmail: EmailSender | undefined
): Promise<DispatchRecord> {
  const start = Date.now()

  if (!sendEmail) {
    return { channel: 'email', success: false, error: 'Geen sendEmail-adapter geconfigureerd', durationMs: 0 }
  }
  if (!recipient.email) {
    return { channel: 'email', success: false, error: 'Ontvanger heeft geen e-mailadres', durationMs: 0 }
  }

  try {
    const { messageId } = await sendEmail({
      van: config.van,
      aan: recipient.email,
      onderwerp: config.onderwerp,
      html: config.html,
      cc: config.cc,
      bcc: config.bcc,
    })
    return { channel: 'email', success: true, messageId, durationMs: Date.now() - start }
  } catch (err) {
    return {
      channel: 'email',
      success: false,
      error: err instanceof Error ? err.message : String(err),
      durationMs: Date.now() - start,
    }
  }
}
