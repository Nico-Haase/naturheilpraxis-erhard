import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url),
  title: {
    default: "Naturheilpraxis Erhard | Hormonbalance & ganzheitliche Analyse",
    template: "%s | Naturheilpraxis Erhard",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Naturheilpraxis Erhard",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/praxis-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Naturheilpraxis Erhard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturheilpraxis Erhard",
    description: siteConfig.description,
    images: ["/images/praxis-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${geist.variable} ${cormorant.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}