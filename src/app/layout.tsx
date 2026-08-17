import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Providers } from "@/providers/Providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Solar Trade Hub",
    template: "%s | Solar Trade Hub",
  },
  description:
    "Pakistan's marketplace for solar products, suppliers, installers, and energy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />

          <main>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}