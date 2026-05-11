import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (!process.env.INTERN_PASSWORD) {
    return Response.json({ error: 'Niet geconfigureerd' }, { status: 500 })
  }

  if (password !== process.env.INTERN_PASSWORD) {
    return Response.json({ error: 'Ongeldig wachtwoord' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set('intern_session', process.env.INTERN_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 dagen
    path: '/',
  })

  return Response.json({ ok: true })
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete('intern_session')
  return Response.json({ ok: true })
}
