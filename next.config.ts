import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.snkisk.com",
        port: "",
        pathname: "/lmp.snkisk.com/images/**",
      },
    ],
  },
};

export default nextConfig;
