"use client";
import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(analyticsGranted: boolean, marketingGranted: boolean) {
  if (typeof window.gtag !== "function") return;
  const analytics = analyticsGranted ? "granted" : "denied";
  const marketing = marketingGranted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
}

export default function CookieBanner() {
  console.log("[CookieBanner] component render");
  useEffect(() => {
    console.log("[CookieBanner] useEffect mount — vanilla-cookieconsent laden");
    import("vanilla-cookieconsent").then((cc) => {
      console.log("[CookieBanner] vanilla-cookieconsent geladen, cc.run() aanroepen");
      cc.run({
        guiOptions: { consentModal: { layout: "bar", position: "bottom center" } },
        cookie: {
          domain: ".uwontruimer.nl",
        },
        onConsent: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"), cookie.categories.includes("marketing"));
        },
        onFirstConsent: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"), cookie.categories.includes("marketing"));
        },
        onChange: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"), cookie.categories.includes("marketing"));
        },
        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {},
          marketing: {},
        },
        language: {
          default: "nl",
          translations: {
            nl: {
              consentModal: {
                title: "Wij gebruiken cookies",
                description: "We gebruiken analytische en marketingcookies om de website te verbeteren en relevante advertenties te tonen. U kiest zelf wat u accepteert.",
                acceptAllBtn: "Alles accepteren",
                acceptNecessaryBtn: "Alleen noodzakelijk",
                showPreferencesBtn: "Voorkeuren",
              },
              preferencesModal: {
                title: "Cookievoorkeuren",
                acceptAllBtn: "Alles accepteren",
                acceptNecessaryBtn: "Alleen noodzakelijk",
                savePreferencesBtn: "Opslaan",
                sections: [
                  {
                    title: "Noodzakelijke cookies",
                    description: "Deze cookies zijn nodig voor de werking van de website en kunnen niet worden uitgeschakeld.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Analytische cookies",
                    description: "Helpen ons het gebruik van de website te begrijpen via Google Analytics (GA4). Geen persoonlijke gegevens worden gedeeld.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Marketingcookies",
                    description: "Worden gebruikt om advertenties relevanter te maken via platforms zoals Meta (Facebook/Instagram). Uw gedrag op deze site kan worden gedeeld met Meta.",
                    linkedCategory: "marketing",
                  },
                ],
              },
            },
          },
        },
      });
    });
  }, []);
  return null;
}
