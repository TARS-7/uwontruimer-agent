import type { MetadataRoute } from "next";

const BASE = "https://www.uwontruimer.nl";
const now = new Date();

const steden = [
  "amsterdam", "amstelveen", "haarlem", "rotterdam", "utrecht",
  "den-haag", "leiden", "hoofddorp", "zaandam", "purmerend",
  "alkmaar", "hoorn", "hilversum", "amersfoort", "zoetermeer",
  "delft", "gouda", "schiedam", "vlaardingen", "capelle-aan-den-ijssel",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/diensten/woningontruiming`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/diensten/bedrijfsontruiming`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/diensten/spoedontruiming`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/diensten/vloerverwijdering`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diensten/opkopen-inboedel`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diensten/taxatie`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diensten/inboedel-veilen`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diensten/verhuizen`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/huisontruiming`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/huis-laten-ontruimen`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/huis-ontruimen-na-overlijden`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/notaris`,                       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/makelaar`,                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/bewindvoerder`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/woningbouwvereniging`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/over-ons`,                      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/werkwijze`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`,                           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/duurzaam`,                      lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/opleveringsgarantie`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/offerte`,                       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,                       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`,                          lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${BASE}/privacy`,                       lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/algemene-voorwaarden`,          lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const stadPages: MetadataRoute.Sitemap = steden.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...stadPages];
}
