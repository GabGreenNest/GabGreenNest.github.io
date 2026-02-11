import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // No basePath needed for username.github.io repos!
};

export default nextConfig;