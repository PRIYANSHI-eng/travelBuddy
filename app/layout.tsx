import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelBuddy - Your Personal Travel Planning Companion",
  description: "Premium, stress-free travel planning made personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: inter.style.fontFamily }}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', color: '#171717', fontFamily: inter.style.fontFamily }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
