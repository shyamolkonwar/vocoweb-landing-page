import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vocoweb.in'),
  title: {
    default: "VocoWeb: The Business Operating System for AI Startups",
    template: "%s | VocoWeb"
  },
  description: "Stop building Frankenstein apps. VocoWeb is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
  keywords: ["VocoWeb", "SaaS", "app builder", "no-code", "business automation", "AI builder", "startup tools"],
  authors: [{ name: "VocoWeb Team" }],
  openGraph: {
    title: "VocoWeb: The Business Operating System for AI Startups",
    description: "Stop building Frankenstein apps. VocoWeb is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
    url: 'https://vocoweb.in',
    siteName: 'VocoWeb',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VocoWeb: The Business Operating System for AI Startups",
    description: "Stop building Frankenstein apps. VocoWeb is the first end-to-end platform to validate ideas, generate production code, and operate sustainable companies.",
    creator: '@vocoweb', // Placeholder or real handle if known
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icons/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-144.png', sizes: '144x144', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
