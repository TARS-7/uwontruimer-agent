const BUCKET  = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY

const MAX_DIM      = 1200
const JPEG_QUALITY = 0.82

export function generateUploadId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

// Maakt een string veilig voor gebruik als mapnaam in Firebase Storage
function sanitizePadDeel(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accenten
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || 'onbekend'
}

// ─── Compression ──────────────────────────────────────────────────────────────

// Resize to MAX_DIM and convert to JPEG. GIFs are passed through unchanged
// (animated GIFs would lose all frames on canvas).
async function compressImage(file: File): Promise<Blob> {
  if (file.type === 'image/gif') return file

  return new Promise((resolve, reject) => {
    const img = new Image()
    const objectUrl = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)

      let { width, height } = img
      if (width > MAX_DIM || height > MAX_DIM) {
        if (width >= height) {
          height = Math.round(height * MAX_DIM / width)
          width  = MAX_DIM
        } else {
          width  = Math.round(width * MAX_DIM / height)
          height = MAX_DIM
        }
      }

      const canvas = document.createElement('canvas')
      canvas.width  = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (!ctx) { reject(new Error('canvas context niet beschikbaar')); return }
      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob)
          else reject(new Error('canvas.toBlob mislukt'))
        },
        'image/jpeg',
        JPEG_QUALITY,
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Afbeelding laden mislukt'))
    }

    img.src = objectUrl
  })
}

// ─── Upload ───────────────────────────────────────────────────────────────────

async function uploadBlob(blob: Blob, pad: string): Promise<string | null> {
  if (!BUCKET || !API_KEY) return null

  const url = [
    `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(BUCKET)}/o`,
    `?uploadType=media`,
    `&name=${encodeURIComponent(pad)}`,
    `&key=${API_KEY}`,
  ].join('')

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': blob.type || 'image/jpeg' },
    body: blob,
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

export async function uploadFoto(file: File, pad: string): Promise<string | null> {
  let blob: Blob
  try {
    blob = await compressImage(file)
  } catch (err) {
    console.warn('[firebase-upload] Compressie mislukt, origineel gebruikt:', err)
    blob = file
  }

  // Pad altijd .jpg behalve voor GIFs (die blijven ongewijzigd)
  const effectiefPad = file.type === 'image/gif' ? pad : pad.replace(/\.[^.]+$/, '.jpg')
  return uploadBlob(blob, effectiefPad)
}

export async function uploadFotos(
  files: File[],
  uploadId: string,
  naam?: string,
  woonplaats?: string,
  subfolder?: string,
): Promise<string[]> {
  const datum      = new Date().toISOString().slice(0, 10)
  const naamDeel   = naam?.trim()      ? sanitizePadDeel(naam)      : uploadId
  const plaatsDeel = woonplaats?.trim() ? sanitizePadDeel(woonplaats) : uploadId
  const mapNaam    = `${datum}_${naamDeel}_${plaatsDeel}`
  const basePad    = `aanvragen/${mapNaam}/${uploadId}`
  const subpad     = subfolder ? `${basePad}/${subfolder}` : basePad

  const urls: string[] = []
  for (let i = 0; i < files.length; i++) {
    const isGif = files[i].type === 'image/gif'
    const ext   = isGif ? 'gif' : 'jpg'
    const pad   = `${subpad}/foto-${i}.${ext}`
    const url   = await uploadFoto(files[i], pad)
    if (url) urls.push(url)
  }
  return urls
}
