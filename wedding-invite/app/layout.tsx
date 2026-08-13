import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaiPavan & Roshni — Wedding Invitation",
  description:
    "Join us in celebrating the sacred union of SaiPavan and Roshni on Tuesday, 18 August 2026 at Sai Madhura Banquet Hall, Hyderabad.",
  keywords: ["wedding", "invitation", "Roshni", "SaiPavan", "Hyderabad", "South Indian wedding"],
  openGraph: {
    title: "SaiPavan & Roshni — Wedding Invitation",
    description: "We joyfully invite you to celebrate our wedding on 18 August 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6D1628",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Cormorant Garamond — headings */}
        {/* Inter — body */}
        {/* Cinzel Decorative — display accents */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&family=Cinzel+Decorative:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-temple-cream text-temple-text antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
