import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 301 redirects for non-stad legacy WordPress URLs
const REDIRECTS: Record<string, string> = {
  "/privacybeleid":                        "/privacy",
  "/formulier":                            "/offerte",
  "/seniorenverhuizing":                   "/diensten/verhuizen",
  "/woningbouwvereneging":                 "/woningbouwvereniging",
  "/sitemap":                              "/",
  "/over-uw-ontruimer":                    "/over-ons",
  "/werkgebied":                           "/",
  // Special stad cases
  "/woningontruiming-hilversum-2":         "/woningontruiming-hilversum",
  "/woningontruiming-coronavirus-covid-19": "/",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Strip trailing slash for lookup (but not for root)
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  // 1. Check non-stad 301 redirects first
  const dest = REDIRECTS[normalized];
  if (dest) {
    const url = request.nextUrl.clone();
    url.pathname = dest;
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Rewrite /woningontruiming-{slug} → /{slug} internally
  //    The public URL stays /woningontruiming-amsterdam/, content served from [stad] route
  const match = normalized.match(/^\/woningontruiming-(.+)$/);
  if (match) {
    const slug = match[1];
    const url = request.nextUrl.clone();
    url.pathname = `/${slug}`;
    return NextResponse.rewrite(url);
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
