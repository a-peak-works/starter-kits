import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "@a-peak-works/untitledui-icons",
      "motion",
      "recharts",
    ],
  },
};

export default withNextIntl(nextConfig);
