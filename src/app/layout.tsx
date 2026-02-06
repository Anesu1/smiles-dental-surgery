import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MobileFloatingCTA } from "@/components/ui/mobile-floating-cta";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dental Care Clinic",
  description: "Expert dental care for a lifetime of smiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased text-dental-900 bg-dental-50")}>
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dental-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-dental-500"
          >
            Skip to content
          </a>
          <Header />
          <div id="main-content" className="outline-none pt-24 lg:pt-28">
            {children}
          </div>
          <Footer />
          <MobileFloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
