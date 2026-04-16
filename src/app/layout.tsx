import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.niskalahub.com'),
  title: "Agung Hermawan — Portfolio",
  description: "Vocational High School Graduate in Software Engineering. IT Support, Graphic Design & Web Development.",
  openGraph: {
    title: "Agung Hermawan — Portfolio",
    description: "Vocational High School Graduate in Software Engineering. IT Support, Graphic Design & Web Development.",
    url: 'https://portfolio.niskalahub.com',
    siteName: 'Agung Hermawan Portfolio',
    images: [{ url: '/profile.jpg', width: 800, height: 1000, alt: 'Agung Hermawan Profile' }],
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white selection:text-black md:cursor-none relative">
        <CustomCursor />
        {/* SVG Global Noise Overlay */}
        <div className="fixed inset-0 z-[9998] opacity-[0.025] pointer-events-none mix-blend-overlay">
          <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        <Navbar />
        <SmoothScroller>{children}</SmoothScroller>
        <SiteFooter />
        <GoogleAnalytics gaId="G-XXXXXX" />
      </body>
    </html>
  );
}
