import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ispnpp.kiev.ua", pathname: "/**" },
      { protocol: "https", hostname: "www.ispnpp.kiev.ua", pathname: "/**" },
    ],
  },
};

export default withNextIntl(nextConfig);
