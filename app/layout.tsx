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

// Google Consent Mode v2 — leest bestaande consent uit het cc_cookie dat
// vanilla-cookieconsent op .uwontruimer.nl zet (cross-domain gedeeld met de
// hoofdsite). Zonder cookie: alles denied en toont de CookieBanner de modal.
const consentDefault = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  (function(){
    var consent = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    };
    try {
      var match = document.cookie.match(/(?:^|;\\s*)cc_cookie=([^;]+)/);
      if (match) {
        var categories = JSON.parse(decodeURIComponent(match[1])).categories || [];
        var analytics = categories.indexOf('analytics') > -1 ? 'granted' : 'denied';
        var marketing = categories.indexOf('marketing') > -1 ? 'granted' : 'denied';
        consent.analytics_storage = analytics;
        consent.ad_storage = marketing;
        consent.ad_user_data = marketing;
        consent.ad_personalization = marketing;
      }
    } catch (e) {}
    gtag('consent', 'default', consent);
  })();
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
})(window,document,'script','dataLayer','GTM-MKHKSZP5');` }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKHKSZP5" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
