import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "solarsupply.co.za",
      },
      {
        protocol: "https",
        hostname: "solarstepza.co.za",
      },
      {
        protocol: "https",
        hostname: "solarbatteryquotesfinder.com.au",
      },
      {
        protocol: "https",
        hostname: "sunpronapenergia.hu",
      },
      {
        protocol: "https",
        hostname: "img.yfisher.com",
      },
      {
        protocol: "https",
        hostname: "www.truenav.com",
      },
      {
        protocol: "https",
        hostname: "www.alpselectrical.com",
      },
    ],
  },
};

export default nextConfig;