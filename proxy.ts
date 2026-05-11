import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Login pagina altijd toegankelijk
  if (pathname === '/intern/login') return NextResponse.next()

  const token    = request.cookies.get('intern_session')?.value
  const expected = process.env.INTERN_PASSWORD

  if (!expected || !token || token !== expected) {
    return NextResponse.redirect(new URL('/intern/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/intern/:path*'],
}
