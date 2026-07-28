import { z } from 'zod'

// ── Object dat verstuurd wordt ──────────────────────────────────────────────

export const objectPayloadSchema = z.object({
  id: z.string().min(1),
  omschrijving: z.string(),
  categorie: z.string().optional(),
  /** Paden in een bucket óf volledige URL's. Signing gebeurt per kanaal. */
  fotoUrls: z.array(z.string()).default([]),
  adres: z.string().optional(),
  referentie: z.string().optional(),
  geschatteWaarde: z.number().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
})

export type ObjectPayload = z.infer<typeof objectPayloadSchema>

// ── Ontvanger ───────────────────────────────────────────────────────────────

export const recipientSchema = z.object({
  type: z.enum(['veilinghuis', 'klant', 'afnemer', 'notaris', 'expert', 'intern']),
  naam: z.string().optional(),
  email: z.string().email().optional(),
  /** Internationaal formaat zonder +, bijv. 31612345678 */
  telefoon: z.string().optional(),
  externalId: z.string().optional(),
})

export type Recipient = z.infer<typeof recipientSchema>

// ── Kanalen ─────────────────────────────────────────────────────────────────

export const emailChannelSchema = z.object({
  type: z.literal('email'),
  onderwerp: z.string(),
  /** Volledige HTML-body. De aanroeper rendert zijn eigen template. */
  html: z.string(),
  van: z.string().optional(),
  cc: z.array(z.string()).optional(),
  bcc: z.array(z.string()).optional(),
})

export const whatsappChannelSchema = z.object({
  type: z.literal('whatsapp'),
  templateName: z.string(),
  taal: z.string().default('nl'),
  /** Body-parameters in volgorde van het goedgekeurde sjabloon */
  bodyParams: z.array(z.string()).default([]),
  /** true = eerste foto als header-image meesturen */
  headerFoto: z.boolean().default(false),
})

export const webhookChannelSchema = z.object({
  type: z.literal('webhook'),
  url: z.string().url(),
  /** Bearer-token (zonder "Bearer " prefix) */
  bearerToken: z.string(),
  /** Extra payload-velden die naast het object meegaan */
  extraPayload: z.record(z.string(), z.unknown()).optional(),
})

export const channelSchema = z.discriminatedUnion('type', [
  emailChannelSchema,
  whatsappChannelSchema,
  webhookChannelSchema,
])

export type EmailChannel = z.infer<typeof emailChannelSchema>
export type WhatsAppChannel = z.infer<typeof whatsappChannelSchema>
export type WebhookChannel = z.infer<typeof webhookChannelSchema>
export type Channel = z.infer<typeof channelSchema>

// ── Dispatch-input ──────────────────────────────────────────────────────────

export const dispatchInputSchema = z.object({
  object: objectPayloadSchema,
  recipient: recipientSchema,
  channels: z.array(channelSchema).min(1),
  source: z.string(),
  requestId: z.string().optional(),
})

export type DispatchInput = z.infer<typeof dispatchInputSchema>

// ── Resultaat per kanaal ────────────────────────────────────────────────────

export interface DispatchRecord {
  channel: Channel['type']
  success: boolean
  /** Provider-id (Resend message id, WhatsApp message id, webhook response id) */
  messageId?: string
  error?: string
  durationMs: number
}

export interface DispatchResult {
  success: DispatchRecord[]
  failed: DispatchRecord[]
  metadata: {
    durationMs: number
    fotoCount: number
    channelsAttempted: number
  }
}

// ── Adapters (platform levert deze zelf) ────────────────────────────────────

/** Verstuur een e-mail. Platform kiest zelf Resend/nodemailer. Moet throwen bij fout. */
export type EmailSender = (opts: {
  van?: string
  aan: string
  onderwerp: string
  html: string
  cc?: string[]
  bcc?: string[]
}) => Promise<{ messageId?: string }>

/** Verstuur een WhatsApp-sjabloon. Moet throwen bij fout. */
export type WhatsAppSender = (opts: {
  naar: string
  templateName: string
  taal: string
  bodyParams: string[]
  headerFotoUrl?: string
}) => Promise<{ messageId?: string }>

/** Maak signed URL's van foto-paden, met opgegeven geldigheid in seconden. */
export type PhotoSigner = (paden: string[], expiresInSeconds: number) => Promise<string[]>

export interface DispatchLog {
  timestamp: Date
  requestId?: string
  source: string
  object: { id: string; omschrijving: string }
  recipient: Recipient
  records: DispatchRecord[]
  allSucceeded: boolean
}

/** Fire-and-forget logging; fouten hierin mogen dispatch nooit laten falen. */
export type LogAdapter = (log: DispatchLog) => Promise<void>

export interface DispatchAdapters {
  sendEmail?: EmailSender
  sendWhatsApp?: WhatsAppSender
  signPhotos?: PhotoSigner
  log?: LogAdapter
}
