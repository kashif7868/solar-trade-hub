import type { Metadata } from "next";

import Script from "next/script";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { Header } from "@/components/layout/Header/Header";

import { Footer } from "@/components/layout/Footer/Footer";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav/MobileBottomNav";

import { NavigationLoader } from "@/components/common/NavigationLoader/NavigationLoader";

import { Providers } from "@/providers/Providers";

import "./globals.css";

/* =========================================================
   FONTS
========================================================= */

const geistSans = Geist({
  variable:
    "--font-geist-sans",

  subsets: [
    "latin",
  ],
});

const geistMono =
  Geist_Mono({
    variable:
      "--font-geist-mono",

    subsets: [
      "latin",
    ],
  });

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata =
  {
    title: {
      default:
        "Solar Trade Hub",

      template:
        "%s | Solar Trade Hub",
    },

    description:
      "Pakistan's marketplace for solar products, suppliers, installers, pricing insights, and renewable energy solutions.",
  };

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* =================================================
            GOOGLE ADSENSE

            Global AdSense loader.

            Loaded once for the complete public website.

            Publisher:
            ca-pub-4990748076053357
        ================================================= */}

        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4990748076053357"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavigationLoader />

          <Header />

          <main>
            {children}
          </main>

          <Footer />

          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}