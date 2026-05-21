"use client";
import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieBanner() {
  useEffect(() => {
    import("vanilla-cookieconsent").then((cc) => {
      cc.run({
        guiOptions: { consentModal: { layout: "bar", position: "bottom center" } },
        onConsent: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"));
        },
        onFirstConsent: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"));
        },
        onChange: ({ cookie }) => {
          updateConsent(cookie.categories.includes("analytics"));
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
