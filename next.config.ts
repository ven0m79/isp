import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ispnpp.kiev.ua",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ispnpp.kiev.ua",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
