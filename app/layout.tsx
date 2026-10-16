import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/CookieBanner'
import MicrosoftClarity from '@/components/MicrosoftClarity'
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

// Closed-loop marketing-attributie (Laag 2): legt de Google-klik-ID's (gclid/
// gbraid/wbraid) en UTM-parameters uit de landings-URL vast in de first-party
// cookie uo_attr op .uwontruimer.nl (90 dagen). Gedeeld met de hoofdsite; bij
// conversie leest de wizard de cookie en slaat de velden op de Opdracht op.
// Last-click: overschrijft alleen bij een nieuwe klik met parameters.
// Herkomst-meting (first-touch, gedeeld met de hoofdsite): legt bij het
// állereerste bezoek de verwijzer + landingspagina vast in uo_bron (90 dagen,
// .uwontruimer.nl) en wordt daarna nooit overschreven — zo is ook organisch/
// direct verkeer herleidbaar wanneer iemand rechtstreeks op de wizard landt.
const herkomstCapture = `
  (function(){try{
    if(document.cookie.indexOf("uo_bron=")>-1)return;
    var b={ref:(document.referrer||"").slice(0,300),landing:location.pathname,ts:new Date().toISOString()};
    var d=location.hostname.indexOf("uwontruimer.nl")>-1?"; domain=.uwontruimer.nl":"";
    document.cookie="uo_bron="+encodeURIComponent(JSON.stringify(b))+"; path=/"+d+"; max-age=7776000; SameSite=Lax";
  }catch(e){}})();
`;

const attributieCapture = `
  (function(){try{
    var q=new URLSearchParams(location.search);
    var keys=["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
    var found={},hit=false;
    keys.forEach(function(k){var v=q.get(k);if(v){found[k]=v.slice(0,200);hit=true;}});
    if(!hit)return;
    found.landing=location.pathname;
    found.ts=new Date().toISOString();
    var d=location.hostname.indexOf("uwontruimer.nl")>-1?"; domain=.uwontruimer.nl":"";
    document.cookie="uo_attr="+encodeURIComponent(JSON.stringify(found))+"; path=/"+d+"; max-age=7776000; SameSite=Lax";
  }catch(e){}})();
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
        <script dangerouslySetInnerHTML={{ __html: attributieCapture }} />
        <script dangerouslySetInnerHTML={{ __html: herkomstCapture }} />
        {/* Directe Google-tag voor Google Ads (AW-748902533) — verhelpt "Google-tag
            ontbreekt", legt de gclid vast en laat Consent Mode conversies modelleren.
            consentDefault hierboven definieert al window.dataLayer + gtag(). */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-748902533" />
        {/* GA4 (zelfde property als uwontruimer.nl, G-FK7P241P9Z): tot 21 sep 2026 mat de
            wizard NIETS in GA4 — alleen de Ads-tag laadde en de GTM-container (GTM-MKHKSZP5)
            geeft een 404. Zelfde meet-ID op beide subdomeinen = één bezoeker over site én
            wizard. Consent Mode (consentDefault hierboven) blijft leidend. */}
        <script dangerouslySetInnerHTML={{ __html: `gtag('js', new Date());gtag('config', 'AW-748902533');gtag('config', 'G-FK7P241P9Z');` }} />
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
        <MicrosoftClarity />
        <Analytics />
      </body>
    </html>
  )
}
