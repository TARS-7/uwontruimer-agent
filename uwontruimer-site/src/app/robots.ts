import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Takaros-branding niet als zoekresultaat-thumbnail; dekt ook /_next/image?url=... varianten
        userAgent: "Googlebot-Image",
        disallow: "/*hero-main-takaros*",
      },
    ],
    sitemap: "https://www.uwontruimer.nl/sitemap.xml",
  };
}
