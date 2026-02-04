import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dental Care Clinic",
  description: "Expert dental care for a lifetime of smiles.",
};

import { MobileFloatingCTA } from "@/components/ui/mobile-floating-cta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased text-slate-600 bg-slate-50")}>
        <Header />
        {children}
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
