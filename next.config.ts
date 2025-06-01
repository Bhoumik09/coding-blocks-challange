import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.w3.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'enhancv.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '"cdn.enhancv.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
