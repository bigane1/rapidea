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
  metadataBase: new URL("https://rapidea.biganeway.fr"),
  title: {
    default: "Rapidea — L’assistant IA qui prend vos commandes sur WhatsApp",
    template: "%s — Rapidea",
  },
  description:
    "Rapidea comprend les messages texte et vocaux de vos clients sur WhatsApp, répond instantanément, prend les commandes et les transmet à votre établissement.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rapidea.biganeway.fr/",
    title: "Rapidea — Assistant IA pour commandes WhatsApp",
    description:
      "Automatisez la prise de commandes sur WhatsApp grâce à l’intelligence artificielle.",
    images: [
      {
        url: "https://rapidea.biganeway.fr/og.png",
        width: 1200,
        height: 630,
        alt: "Rapidea — Assistant IA sur WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapidea — Assistant IA pour commandes WhatsApp",
    description:
      "Automatisez la prise de commandes sur WhatsApp grâce à l’intelligence artificielle.",
    images: ["https://rapidea.biganeway.fr/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
