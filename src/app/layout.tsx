import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pigeon World - Discover All Pigeon Species",
  description: "Explore the beautiful diversity of pigeons and doves from around the world. From the common Rock Dove to the majestic Victoria Crowned Pigeon.",
  keywords: ["pigeons", "doves", "birds", "species", "wildlife", "conservation"],
  openGraph: {
    title: "Pigeon World 🕊️",
    description: "Discover all the beautiful pigeon species from around the world",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
