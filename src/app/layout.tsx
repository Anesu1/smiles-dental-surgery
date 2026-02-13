import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MobileFloatingCTA } from "@/components/ui/mobile-floating-cta";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (siteUrl) return siteUrl.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Smile Dental Surgery Bulawayo | Dentist, Orthodontics, Implants",
    template: "%s | Smile Dental Surgery Bulawayo",
  },
  description:
    "Smile Dental Surgery in Bulawayo offers dental check-ups, teeth cleaning, fillings, extractions, root canal treatment, braces, clear aligners, implants, crowns, and teeth whitening.",
  keywords: [
    "dentist Bulawayo",
    "dental clinic Bulawayo",
    "Smile Dental Surgery",
    "orthodontics Bulawayo",
    "braces Bulawayo",
    "clear aligners Bulawayo",
    "dental implants Bulawayo",
    "teeth whitening Bulawayo",
    "root canal Bulawayo",
    "dental check up Bulawayo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Smile Dental Surgery",
    title: "Smile Dental Surgery Bulawayo | Dentist, Orthodontics, Implants",
    description:
      "Trusted dental care in Bulawayo with preventive, restorative, cosmetic, and orthodontic treatments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Dental Surgery Bulawayo",
    description:
      "Dental check-ups, braces, implants, whitening, and emergency-friendly oral care in Bulawayo.",
  },
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
          <WhatsAppFloatingButton />
          <script
            type="application/ld+json"
            // Local business schema improves local SEO relevance for "dentist near me" queries.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                name: "Smile Dental Surgery",
                url: baseUrl,
                telephone: "+263717673355",
                email: "info@dentex.co.zw",
                image: `${baseUrl}/images/logo.png`,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bulawayo",
                  addressCountry: "ZW",
                },
                areaServed: "Bulawayo",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "09:00",
                    closes: "15:00",
                  },
                ],
                sameAs: [`${baseUrl}/contact`],
              }),
            }}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
