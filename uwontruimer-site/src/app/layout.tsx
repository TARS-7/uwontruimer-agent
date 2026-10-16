import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
import MetaPixel from "@/components/MetaPixel";
import TrackingEvents from "@/components/TrackingEvents";
import MicrosoftClarity from "@/components/MicrosoftClarity";
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
    // Cookies staan op het parent-domein .uwontruimer.nl zodat de variant
    // meereist naar de wizard (analyse.uwontruimer.nl) en daar bij de aanvraag
    // kan worden meegestuurd; anders is een test alleen op kliks te meten.
    var dom=location.hostname.indexOf("uwontruimer.nl")>-1?"; domain=.uwontruimer.nl":"";
    function zet(naam,waarde){
      document.cookie=naam+"="+waarde+"; path=/"+dom+"; max-age=31536000; SameSite=Lax";
    }
    // Bestaande waarde hergebruiken (ook een oude cookie zonder domain), zodat
    // niemand halverwege in een andere variant terechtkomt.
    function kies(naam){
      var m=document.cookie.match(new RegExp("(?:^|; )"+naam+"=(A|B)"));
      var v=m?m[1]:(Math.random()<0.5?"A":"B");
      zet(naam,v);
      document.documentElement.setAttribute("data-"+naam.replace("_","-"),v);
      return v;
    }
    // A/B-test CTA-teksten (20 jul 2026), hero-foto stadpagina's (verhuisbus A
    // vs. handdruk B) en positie Lisa-schaarstekaart (17 sep 2026).
    kies("ab_cta"); kies("ab_hero"); kies("ab_lisa");
    // WhatsApp-knop: test afgerond (sep 2026) — knop staat aan voor iedereen.
    zet("ab_wa","B");
    document.documentElement.setAttribute("data-ab-wa","B");
  }catch(e){}})();
`;

// Closed-loop marketing-attributie (Laag 2): legt de Google-klik-ID's (gclid/
// gbraid/wbraid) en UTM-parameters uit de landings-URL vast in de first-party
// cookie uo_attr op .uwontruimer.nl (90 dagen). Zo reist de attributie mee naar
// de wizard op analyse.uwontruimer.nl en wordt ze bij conversie op de Opdracht
// opgeslagen. Last-click: overschrijft alleen bij een nieuwe klik met parameters.
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

// Herkomst-meting (first-touch): legt bij het ALLEREERSTE bezoek de verwijzende
// site (document.referrer) en de landingspagina vast in de cookie uo_bron op
// .uwontruimer.nl (90 dagen). Anders dan uo_attr (last-click, alleen betaald)
// wordt deze NOOIT overschreven: zo blijft ook van organisch/direct verkeer
// bekend waar de bezoeker oorspronkelijk vandaan kwam (sollicitaties, wizard).
const herkomstCapture = `
  (function(){try{
    if(document.cookie.indexOf("uo_bron=")>-1)return;
    var b={ref:(document.referrer||"").slice(0,300),landing:location.pathname,ts:new Date().toISOString()};
    var d=location.hostname.indexOf("uwontruimer.nl")>-1?"; domain=.uwontruimer.nl":"";
    document.cookie="uo_bron="+encodeURIComponent(JSON.stringify(b))+"; path=/"+d+"; max-age=7776000; SameSite=Lax";
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
        <script dangerouslySetInnerHTML={{ __html: attributieCapture }} />
        <script dangerouslySetInnerHTML={{ __html: herkomstCapture }} />
        {/* Directe Google-tag voor Google Ads (AW-748902533) in de server-HTML.
            Nodig zodat: (1) Google Ads de tag detecteert — verhelpt "Google-tag
            ontbreekt / verkeerd ingesteld"; (2) de gclid op de landingspagina wordt
            vastgelegd zodat conversies toegeschreven kunnen worden; (3) Consent Mode
            conversies kan modelleren. consentDefault hierboven definieert al
            window.dataLayer + gtag() en zet de consent-default (ad_storage denied). */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-748902533" />
        <script dangerouslySetInnerHTML={{ __html: `gtag('js', new Date());gtag('config', 'AW-748902533');` }} />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKHKSZP5" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {children}
        <CookieBanner />
        <TrackingEvents />
        <MicrosoftClarity />
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-FK7P241P9Z" />
        {/* GTM na hydration: dataLayer-events (consent, A/B-exposure) staan al in de wachtrij
            en worden bij laden alsnog verwerkt — conversiemeting blijft intact, LCP-render eerder. */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MKHKSZP5');`}} />
      </body>
    </html>
  );
}
