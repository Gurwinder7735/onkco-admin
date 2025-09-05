import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
   eslint: {
    // ⚠️ WARNING: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ WARNING: This allows production builds to complete
    // even if your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
