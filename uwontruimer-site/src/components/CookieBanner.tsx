"use client";
import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookieBanner() {
  useEffect(() => {
    import("vanilla-cookieconsent").then((cc) => {
      cc.run({
        guiOptions: { consentModal: { layout: "bar", position: "bottom center" } },
        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {},
        },
        language: {
          default: "nl",
          translations: {
            nl: {
              consentModal: {
                title: "Wij gebruiken cookies",
                description: "We gebruiken cookies om het gebruik van de website te analyseren en de ervaring te verbeteren.",
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
                  { title: "Noodzakelijke cookies", description: "Deze cookies zijn nodig voor de werking van de website.", linkedCategory: "necessary" },
                  { title: "Analytische cookies", description: "Helpen ons het gebruik van de website te begrijpen (Google Analytics).", linkedCategory: "analytics" },
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
