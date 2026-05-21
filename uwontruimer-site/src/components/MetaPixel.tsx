"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const PIXEL_ID = "2159057021337466";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

/** Leest de vanilla-cookieconsent cookie direct uit — geen extra module-import nodig. */
function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const raw = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("cc_cookie="));
    if (!raw) return false;
    const data = JSON.parse(
      decodeURIComponent(raw.trim().replace(/^cc_cookie=/, ""))
    );
    return Array.isArray(data.categories) && data.categories.includes("marketing");
  } catch {
    return false;
  }
}

export default function MetaPixel() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    function handleConsent() {
      const granted = hasAnalyticsConsent();
      setHasConsent(granted);
      // Revoke bij ingetrokken consent als Pixel al geladen is
      if (!granted && typeof window.fbq === "function") {
        window.fbq("consent", "revoke");
      }
    }

    // vanilla-cookieconsent dispatcht deze events op document
    document.addEventListener("cc:onConsent", handleConsent);
    document.addEventListener("cc:onChange", handleConsent);
    // Directe check: terugkerende bezoeker die al heeft ingestemd
    handleConsent();

    return () => {
      document.removeEventListener("cc:onConsent", handleConsent);
      document.removeEventListener("cc:onChange", handleConsent);
    };
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
