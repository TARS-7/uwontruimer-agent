import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async headers() {
    return [
      // Prevent search engines from indexing preview and staging deployments.
      // next.config headers run before redirects and middleware, so this fires on every
      // response — including the 308 redirect response itself — for *.vercel.app hosts.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect all *.vercel.app requests (staging alias + preview URLs) to the canonical domain.
      // next.config redirects run before middleware, so this fires before proxy.ts rewrites.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://www.uwontruimer.nl/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "uwontruimer.nl" }],
        destination: "https://www.uwontruimer.nl/:path*",
        permanent: true,
      },
      { source: "/categorie/nieuws/", destination: "/blog/", permanent: true },
      // Legacy /nieuws/* → /blog/* lives here (not in proxy.ts) so it runs in the
      // same phase as trailingSlash normalization. Destination keeps the trailing
      // slash explicitly (Next 16 does not auto-append it), so the canonical legacy
      // URL /nieuws/[slug]/ redirects with a single 301 straight to /blog/[slug]/
      // with no intermediate hop.
      { source: "/nieuws/:path*", destination: "/blog/:path*/", statusCode: 301 },
      { source: "/bereken-uw-ontruiming/", destination: "/offerte/", permanent: true },
      { source: "/werkgebied-noord-holland/", destination: "/woningontruiming-amsterdam/", permanent: true },
      { source: "/wp-content/themes/saleswizard-theme/:path*", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
