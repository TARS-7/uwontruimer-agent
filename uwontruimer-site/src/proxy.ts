import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 301 redirects: old WordPress URLs → new Next.js URLs
const REDIRECTS: Record<string, string> = {
  // Stad-pagina's (woningontruiming-[stad] → /[stad])
  "/woningontruiming-amsterdam":              "/amsterdam",
  "/woningontruiming-amstelveen":             "/amstelveen",
  "/woningontruiming-haarlem":                "/haarlem",
  "/woningontruiming-rotterdam":              "/rotterdam",
  "/woningontruiming-utrecht":                "/utrecht",
  "/woningontruiming-den-haag":               "/den-haag",
  "/woningontruiming-leiden":                 "/leiden",
  "/woningontruiming-hoofddorp":              "/hoofddorp",
  "/woningontruiming-zaandam":                "/zaandam",
  "/woningontruiming-purmerend":              "/purmerend",
  "/woningontruiming-alkmaar":                "/alkmaar",
  "/woningontruiming-hoorn":                  "/hoorn",
  "/woningontruiming-hilversum":              "/hilversum",
  "/woningontruiming-hilversum-2":            "/hilversum",
  "/woningontruiming-amersfoort":             "/amersfoort",
  "/woningontruiming-zoetermeer":             "/zoetermeer",
  "/woningontruiming-delft":                  "/delft",
  "/woningontruiming-gouda":                  "/gouda",
  "/woningontruiming-schiedam":               "/schiedam",
  "/woningontruiming-vlaardingen":            "/vlaardingen",
  "/woningontruiming-capelle-aan-den-ijssel": "/capelle-aan-den-ijssel",
  // Nieuwe steden
  "/woningontruiming-aalsmeer":               "/aalsmeer",
  "/woningontruiming-aerdenhout":             "/aerdenhout",
  "/woningontruiming-alphen-aan-den-rijn":    "/alphen-aan-den-rijn",
  "/woningontruiming-baarn":                  "/baarn",
  "/woningontruiming-badhoevedorp":           "/badhoevedorp",
  "/woningontruiming-barendrecht":            "/barendrecht",
  "/woningontruiming-bergen":                 "/bergen",
  "/woningontruiming-beverwijk":              "/beverwijk",
  "/woningontruiming-blaricum":               "/blaricum",
  "/woningontruiming-bloemendaal":            "/bloemendaal",
  "/woningontruiming-bodegraven":             "/bodegraven",
  "/woningontruiming-bunnik":                 "/bunnik",
  "/woningontruiming-bussum":                 "/bussum",
  "/woningontruiming-castricum":              "/castricum",
  "/woningontruiming-culemborg":              "/culemborg",
  "/woningontruiming-den-helder":             "/den-helder",
  "/woningontruiming-diemen":                 "/diemen",
  "/woningontruiming-drechterland":           "/drechterland",
  "/woningontruiming-edam-volendam":          "/edam-volendam",
  "/woningontruiming-eemnes":                 "/eemnes",
  "/woningontruiming-enkhuizen":              "/enkhuizen",
  "/woningontruiming-gooi-en-vechtstreek":    "/gooi-en-vechtstreek",
  "/woningontruiming-gooise-meren":           "/gooise-meren",
  "/woningontruiming-graft-de-rijp":          "/graft-de-rijp",
  "/woningontruiming-haarlemmerliede":        "/haarlemmerliede",
  "/woningontruiming-haarlemmermeer":         "/haarlemmermeer",
  "/woningontruiming-heemskerk":              "/heemskerk",
  "/woningontruiming-heemstede":              "/heemstede",
  "/woningontruiming-heiloo":                 "/heiloo",
  "/woningontruiming-hillegom":               "/hillegom",
  "/woningontruiming-hollands-kroon":         "/hollands-kroon",
  "/woningontruiming-houten":                 "/houten",
  "/woningontruiming-huizen":                 "/huizen",
  "/woningontruiming-ijsselstein":            "/ijsselstein",
  "/woningontruiming-katwijk":                "/katwijk",
  "/woningontruiming-landsmeer":              "/landsmeer",
  "/woningontruiming-laren":                  "/laren",
  "/woningontruiming-leiderdorp":             "/leiderdorp",
  "/woningontruiming-leidschendam":           "/leidschendam",
  "/woningontruiming-leusden":                "/leusden",
  "/woningontruiming-lisse":                  "/lisse",
  "/woningontruiming-maassluis":              "/maassluis",
  "/woningontruiming-naarden":                "/naarden",
  "/woningontruiming-nieuw-vennep":           "/nieuw-vennep",
  "/woningontruiming-nieuwegein":             "/nieuwegein",
  "/woningontruiming-noord-holland":          "/noord-holland",
  "/woningontruiming-noordwijk":              "/noordwijk",
  "/woningontruiming-nootdorp":               "/nootdorp",
  "/woningontruiming-oegstgeest":             "/oegstgeest",
  "/woningontruiming-pijnacker":              "/pijnacker",
  "/woningontruiming-ridderkerk":             "/ridderkerk",
  "/woningontruiming-roelofarendsveen":       "/roelofarendsveen",
  "/woningontruiming-schagen":                "/schagen",
  "/woningontruiming-soest":                  "/soest",
  "/woningontruiming-stichtse-vecht":         "/stichtse-vecht",
  "/woningontruiming-uithoorn":               "/uithoorn",
  "/woningontruiming-veenendaal":             "/veenendaal",
  "/woningontruiming-vianen":                 "/vianen",
  "/woningontruiming-vijfheerenlanden":       "/vijfheerenlanden",
  "/woningontruiming-voorburg":               "/voorburg",
  "/woningontruiming-voorschoten":            "/voorschoten",
  "/woningontruiming-wassenaar":              "/wassenaar",
  "/woningontruiming-woerden":                "/woerden",
  "/woningontruiming-zaanstad":               "/zaanstad",
  "/woningontruiming-zeist":                  "/zeist",
  "/woningontruiming-zuid-holland":           "/zuid-holland",
  "/woningontruiming-coronavirus-covid-19":   "/",

  // Overige WordPress-pagina's → Next.js equivalenten
  "/privacybeleid":                           "/privacy",
  "/formulier":                               "/offerte",
  "/seniorenverhuizing":                      "/diensten/verhuizen",
  "/woningbouwvereneging":                    "/woningbouwvereniging",
  "/sitemap":                                 "/",
  "/over-uw-ontruimer":                       "/over-ons",
  "/werkgebied":                              "/",
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
    "/seniorenverhuizing",
    "/seniorenverhuizing/",
    "/woningbouwvereneging",
    "/woningbouwvereneging/",
    "/sitemap",
    "/sitemap/",
    "/over-uw-ontruimer",
    "/over-uw-ontruimer/",
    "/werkgebied",
    "/werkgebied/",
  ],
};
