import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={dmSans.className}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
