import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 301 redirects: old WordPress URLs → new Next.js URLs
const REDIRECTS: Record<string, string> = {
  // Stad-pagina's (woningontruiming-[stad] → /[stad])
  "/woningontruiming-amsterdam":            "/amsterdam",
  "/woningontruiming-amstelveen":           "/amstelveen",
  "/woningontruiming-haarlem":              "/haarlem",
  "/woningontruiming-rotterdam":            "/rotterdam",
  "/woningontruiming-utrecht":              "/utrecht",
  "/woningontruiming-den-haag":             "/den-haag",
  "/woningontruiming-leiden":               "/leiden",
  "/woningontruiming-hoofddorp":            "/hoofddorp",
  "/woningontruiming-zaandam":              "/zaandam",
  "/woningontruiming-purmerend":            "/purmerend",
  "/woningontruiming-alkmaar":              "/alkmaar",
  "/woningontruiming-hoorn":                "/hoorn",
  "/woningontruiming-hilversum":            "/hilversum",
  "/woningontruiming-hilversum-2":          "/hilversum",
  "/woningontruiming-amersfoort":           "/amersfoort",
  "/woningontruiming-zoetermeer":           "/zoetermeer",
  "/woningontruiming-delft":                "/delft",
  "/woningontruiming-gouda":                "/gouda",
  "/woningontruiming-schiedam":             "/schiedam",
  "/woningontruiming-vlaardingen":          "/vlaardingen",
  "/woningontruiming-capelle-aan-den-ijssel": "/capelle-aan-den-ijssel",

  // Overige WordPress-pagina's → Next.js equivalenten
  "/privacybeleid":                         "/privacy",
  "/formulier":                             "/offerte",
  "/huis-leegmaken":                        "/huis-laten-ontruimen",
  "/seniorenverhuizing":                    "/diensten/verhuizen",
  "/woningbouwvereneging":                  "/woningbouwvereniging",
  "/sitemap":                               "/",
  "/bedankt":                               "/",
  "/diensten":                              "/diensten/woningontruiming",
  "/boedelbeheer":                          "/diensten/opkopen-inboedel",
  "/oplevering-huurwoning":                "/opleveringsgarantie",
  "/over-uw-ontruimer":                    "/over-ons",
  "/zakelijk":                              "/notaris",
  "/werkgebied":                            "/",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Strip trailing slash for lookup (but not for root)
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  const destination = REDIRECTS[normalized];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/woningontruiming-:path*",
    "/privacybeleid",
    "/privacybeleid/",
    "/formulier",
    "/formulier/",
    "/huis-leegmaken",
    "/huis-leegmaken/",
    "/seniorenverhuizing",
    "/seniorenverhuizing/",
    "/woningbouwvereneging",
    "/woningbouwvereneging/",
    "/sitemap",
    "/sitemap/",
    "/bedankt",
    "/bedankt/",
    "/diensten",
    "/diensten/",
    "/boedelbeheer",
    "/boedelbeheer/",
    "/oplevering-huurwoning",
    "/oplevering-huurwoning/",
    "/over-uw-ontruimer",
    "/over-uw-ontruimer/",
    "/zakelijk",
    "/zakelijk/",
    "/werkgebied",
    "/werkgebied/",
  ],
};
