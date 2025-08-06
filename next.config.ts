import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // add any experimental features you use
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        {
          'next-seo': 'next-seo',
        },
      ];
    }

    return config;
  },
};

export default nextConfig;
