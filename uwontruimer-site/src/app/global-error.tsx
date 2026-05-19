"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Er is iets misgegaan | UwOntruimer.nl</title>
        {/* DM Sans via Google Fonts — root layout unavailable in global-error */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif", margin: 0, padding: 0, backgroundColor: "#ffffff", color: "#0f172a" }}>
        {/* Minimal header */}
        <header style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", height: 64, display: "flex", alignItems: "center", padding: "0 24px" }}>
          <a href="/" style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", textDecoration: "none" }}>
            UwOntruimer.nl
          </a>
        </header>

        <main style={{ minHeight: "calc(100vh - 64px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          {/* Icon */}
          <div style={{ width: 64, height: 64, backgroundColor: "#eff6ff", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>

          <p style={{ fontSize: 11, fontWeight: 500, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, marginTop: 0 }}>
            500
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: "#0f172a", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 0 }}>
            Er is iets misgegaan
          </h1>
          <p style={{ color: "#64748b", fontWeight: 300, fontSize: 14, lineHeight: 1.75, maxWidth: 384, marginBottom: 40, marginTop: 0 }}>
            Er is een kritieke fout opgetreden. Vernieuw de pagina of ga terug naar de homepage.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <button
              onClick={reset}
              style={{ background: "#2563eb", color: "#ffffff", fontWeight: 500, padding: "12px 24px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}
            >
              Probeer opnieuw
            </button>
            <a
              href="/"
              style={{ border: "1px solid #e2e8f0", color: "#475569", fontWeight: 500, padding: "12px 24px", borderRadius: 8, fontSize: 14, textDecoration: "none", backgroundColor: "#ffffff" }}
            >
              Terug naar homepage
            </a>
            <a
              href="tel:0853035894"
              style={{ border: "1px solid #e2e8f0", color: "#475569", fontWeight: 500, padding: "12px 24px", borderRadius: 8, fontSize: 14, textDecoration: "none", backgroundColor: "#ffffff" }}
            >
              Bel 085-303 58 94
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
