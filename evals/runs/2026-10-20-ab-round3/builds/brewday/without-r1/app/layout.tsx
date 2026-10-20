import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grainline: the brew-day log that builds the batch record",
  description:
    "Grainline is a brew-day log for small craft breweries. Readings go in on the brewhouse tablet and the batch record builds itself. Request early access.",
  icons: { icon: "/grainline-mark.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
