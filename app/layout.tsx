import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Offerte aanvragen | Uw Ontruimer',
  description:
    'Vraag binnen 5 minuten een gratis offerte aan voor woningontruiming. Snel, transparant en professioneel.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-icon.png',
  },
}

// Google Consent Mode v2 — default alles denied vóór gtag laadt
const consentDefault = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} h-full`}>
      <head>
        {/* Consent Mode v2 default — moet vóór GTM script staan */}
        <script dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8ZW2GRM');` }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8ZW2GRM" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
