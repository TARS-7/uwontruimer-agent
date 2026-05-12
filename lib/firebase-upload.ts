const BUCKET  = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY

export function fotoExtensie(file: File): string {
  if (file.type === 'image/png')  return 'png'
  if (file.type === 'image/webp') return 'webp'
  if (file.type === 'image/gif')  return 'gif'
  return 'jpg'
}

export function generateUploadId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export async function uploadFoto(file: File, pad: string): Promise<string | null> {
  if (!BUCKET || !API_KEY) return null

  const url = [
    `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(BUCKET)}/o`,
    `?uploadType=media`,
    `&name=${encodeURIComponent(pad)}`,
    `&key=${API_KEY}`,
  ].join('')

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': file.type || 'image/jpeg' },
    body: file,
  })

  if (!res.ok) {
    console.error(`[firebase-upload] Upload mislukt (${res.status}) voor ${pad}`)
    return null
  }

  const data = await res.json() as { downloadTokens?: string }
  if (!data.downloadTokens) return null

  return [
    `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(BUCKET)}/o/`,
    `${encodeURIComponent(pad)}`,
    `?alt=media&token=${data.downloadTokens}`,
  ].join('')
}

export async function uploadFotos(
  files: File[],
  subpad: string,
): Promise<string[]> {
  const urls: string[] = []
  for (let i = 0; i < files.length; i++) {
    const ext = fotoExtensie(files[i])
    const pad = `${subpad}/foto-${i}.${ext}`
    const url = await uploadFoto(files[i], pad)
    if (url) urls.push(url)
  }
  return urls
}
