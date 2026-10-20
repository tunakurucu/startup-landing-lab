import type { NextConfig } from "next";

// The marketing site is deployed as static files to our CDN.
// No API routes, server actions or request-time rendering.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
