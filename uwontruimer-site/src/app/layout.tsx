import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
import MetaPixel from "@/components/MetaPixel";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={dmSans.className}>
      <head>
        {/* Consent Mode v2 default — moet vóór gtag script staan */}
        <script dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5CL66R');`}} />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5CL66R" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {children}
        <CookieBanner />
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-FK7P241P9Z" />
      </body>
    </html>
  );
}
