import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
import AnnouncementBar from "@/components/AnnouncementBar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
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
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <AnnouncementBar />
        <div className="pt-10">{children}</div>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-FK7P241P9Z" />
      </body>
    </html>
  );
}
