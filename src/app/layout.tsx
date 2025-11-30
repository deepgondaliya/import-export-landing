import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobalTrade | Import Export Solutions",
  description: "Reliable sourcing, logistics & customs support worldwide",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    images: "/hero-logistics.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}