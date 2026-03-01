import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import BackToTop from "./BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GateFlux User Guides",
  description: "Documentation and guides for GateFlux platform.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="theme-color" content="#1c153e" />
        <meta name="msapplication-TileColor" content="#1c153e" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="preload" href="/logo-dark.svg" as="image" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Fixed floating header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center gap-3 border-b border-white/10 bg-primary-900/95 px-6 backdrop-blur-md shadow-enterprise">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image src="/logo.svg" alt="GateFlux" width={128} height={32} style={{ height: '2rem', width: 'auto' }} priority />
            <span className="font-bold text-lg tracking-wide text-white">User Guides</span>
          </Link>
        </header>

        {/* Push content below fixed header */}
        <div className="pt-16">
          {children}
        </div>

        <BackToTop />
      </body>
    </html>
  );
}
