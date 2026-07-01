import { Inter, Playfair_Display, Cairo } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: {
    default: "Shadow Lighting",
    template: "%s | Shadow Lighting",
  },
  description:
    "Premium lighting solutions for hotels, villas, resorts, and large-scale projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cairo.variable} h-full antialiased`}
    >
      <body
        className={`${inter.variable} ${playfair.variable} ${cairo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
