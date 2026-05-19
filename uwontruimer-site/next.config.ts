import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
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
    ];
  },
};
export default nextConfig;
