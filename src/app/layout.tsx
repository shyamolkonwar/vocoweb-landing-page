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
  title: "VocoWeb - Stop Building Frankenstein Apps",
  description: "VocoWeb doesn't just write code. We run the business. Build apps that won't get banned by Stripe.",
  keywords: ["VocoWeb", "SaaS", "app builder", "no-code", "business automation"],
  authors: [{ name: "VocoWeb" }],
  openGraph: {
    title: "VocoWeb - Stop Building Frankenstein Apps",
    description: "VocoWeb doesn't just write code. We run the business.",
    type: "website",
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
        {children}
        <GoogleAnalytics gaId="G-P1C260K8KW" />
      </body>
    </html>
  );
}
