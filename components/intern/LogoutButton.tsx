'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/intern-auth', { method: 'DELETE' })
    router.push('/intern/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/20 hover:text-white"
    >
      Uitloggen
    </button>
  )
}
