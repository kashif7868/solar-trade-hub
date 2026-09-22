import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* =========================================================
     STATIC EXPORT

     npm run build ke baad:
     frontend/out/
  ========================================================= */

  output: "export",

  /* =========================================================
     IMAGES

     Static export mein Next image optimization server
     available nahi hota, isliye unoptimized required hai.
  ========================================================= */

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;