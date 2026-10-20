import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grainline",
  description: "Grainline is a brew-day log for small craft breweries.",
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
