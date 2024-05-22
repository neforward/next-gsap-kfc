import type { Metadata } from "next";
import "./globals.css";
import { Platypi, Londrina_Solid } from "next/font/google";

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],

  subsets: ["latin"],
});
// Barlow Condensed
const platypi = Platypi({
  subsets: ["latin"],
  variable: "--font-platypi",
  weight: "300",
});

export const metadata: Metadata = {
  title: "NextJS KFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={londrinaSolid.className}>{children}</body>
    </html>
  );
}
