import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <link rel="preload" href="/logo.svg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1.5rem 2rem 1rem'}}>
          <img src="/logo.svg" alt="GateFlux Logo" style={{height:'2.5rem',width:'auto'}} />
          <span style={{fontWeight:700,fontSize:'1.5rem',letterSpacing:'0.02em'}}>GateFlux User Guides</span>
        </header>
        {children}
      </body>
    </html>
  );
}
