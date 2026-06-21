import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kingofspiceskhanna.com"),
  title: {
    default: "King Of Spices - Best Restaurant & Cafe in Khanna",
    template: "%s | King Of Spices Khanna",
  },
  description:
    "Experience authentic flavours, warm ambience, signature North Indian, Mughlai, Chinese, pasta, rolls, biryani and cafe favourites at King Of Spices in Khanna.",
  keywords: [
    "King Of Spices Khanna",
    "best restaurant in Khanna",
    "cafe in Khanna",
    "North Indian restaurant Khanna",
    "Mughlai restaurant Khanna",
    "GTB Market Khanna restaurant",
  ],
  openGraph: {
    title: "King Of Spices - Best Restaurant & Cafe in Khanna",
    description:
      "Authentic flavours, warm ambience and memorable dining moments in Khanna.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
