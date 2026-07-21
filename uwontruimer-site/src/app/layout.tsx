import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
import MetaPixel from "@/components/MetaPixel";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uwontruimer.nl"),
  title: { default: "UwOntruimer.nl – Professionele Woningontruiming", template: "%s | UwOntruimer.nl" },
  description: "Professionele ontruiming van woningen en bedrijfspanden in heel Nederland. Betrouwbaar, discreet en met schriftelijke opleveringsgarantie.",
  verification: { google: "vfnFmk6CeVk-3rAasrRakH6pezmYdQ8cCORUy30hWWA" },
};

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

// A/B-test CTA-teksten: variant toewijzen vóór eerste paint (geen flikkering).
// Cookie ab_cta (1 jaar) houdt bezoekers bij herbezoek op dezelfde variant;
// data-ab-cta op <html> stuurt de CSS in globals.css. Teksten: src/data/ab-cta.ts.
const abCtaAssign = `
  (function(){try{
    var m=document.cookie.match(/(?:^|; )ab_cta=(A|B)/);
    var v=m?m[1]:(Math.random()<0.5?"A":"B");
    if(!m)document.cookie="ab_cta="+v+"; path=/; max-age=31536000; SameSite=Lax";
    document.documentElement.setAttribute("data-ab-cta",v);
    gtag('event','ab_cta_exposure',{ab_cta_variant:v});
  }catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: het A/B-script zet data-ab-cta vóór hydration
    <html lang="nl" className={dmSans.className} suppressHydrationWarning>
      <head>
        {/* Consent Mode v2 default — moet vóór gtag script staan */}
        <script dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <script dangerouslySetInnerHTML={{ __html: abCtaAssign }} />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8ZW2GRM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-FK7P241P9Z" />
        {/* GTM na hydration: dataLayer-events (consent, A/B-exposure) staan al in de wachtrij
            en worden bij laden alsnog verwerkt — conversiemeting blijft intact, LCP-render eerder. */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W8ZW2GRM');`}} />
      </body>
    </html>
  );
}
