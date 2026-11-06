import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmic Chill Limited | Electronics, Industrial Equipment & Sourcing",
  description:
    "Electronics, industrial machinery, electrical components and automation equipment. Cosmic Chill Limited supports customers in Kenya and international markets with product sourcing and importation assistance.",
  openGraph: {
    title: "Cosmic Chill Limited",
    description: "Your partner in electronics, industrial equipment and global sourcing.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
