import type { Metadata, Viewport } from "next";
import tailwindConfig from "../tailwind.config";
import "./globals.css";

// The site's public origin. Absolute share-card URLs are built from it; change it when the domain is known.
const SITE_URL = "https://grainline.example";

const TITLE = "Brew-day log for small craft breweries · Grainline";
const DESCRIPTION =
  "Grainline is a brew-day log for small craft breweries. Tap each reading on the brewhouse tablet as you take it, and the batch record builds itself by knockout.";

const brand = (tailwindConfig.theme?.extend?.colors ?? {}) as Record<string, string>;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Grainline",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Grainline: the brew sheet that fills itself in as you brew." }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: "/grainline-mark.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: brand.foam,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className="min-h-screen font-sans text-body">{children}</body>
    </html>
  );
}
