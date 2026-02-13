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
const siteName = "Smile Dental Surgery";
const defaultOgImage = "/images/logo.png";
const clinicPhone = "+263717673355";
const clinicEmail = process.env.EMAIL_USER || "info@smilesdentalzw.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Smile Dental Surgery Bulawayo | Family and Cosmetic Dentist",
    template: "%s | Smile Dental Surgery Bulawayo",
  },
  description:
    "Smile Dental Surgery in Bulawayo provides dental check-ups, cleanings, fillings, root canal treatment, braces, clear aligners, tooth replacement, and teeth whitening.",
  keywords: [
    "dentist in Bulawayo",
    "Bulawayo dental clinic",
    "Smile Dental Surgery Bulawayo",
    "family dentist Bulawayo",
    "emergency dentist Bulawayo",
    "orthodontics Bulawayo",
    "braces Bulawayo",
    "clear aligners Bulawayo",
    "dental implants Bulawayo",
    "teeth whitening Bulawayo",
    "root canal Bulawayo",
    "dental check up Bulawayo",
    "tooth extraction Bulawayo",
    "dental fillings Bulawayo",
  ],
  category: "healthcare",
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_ZW",
    siteName,
    title: "Smile Dental Surgery Bulawayo | Family and Cosmetic Dentist",
    description:
      "Trusted dental care in Bulawayo with preventive, restorative, cosmetic, and orthodontic treatments.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Smile Dental Surgery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Dental Surgery Bulawayo | Family and Cosmetic Dentist",
    description:
      "Dental check-ups, braces, implants, whitening, and emergency-friendly oral care in Bulawayo.",
    images: [defaultOgImage],
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
                "@id": `${baseUrl}/#dentist`,
                name: "Smile Dental Surgery",
                alternateName: "Smiles Dental Surgery",
                url: baseUrl,
                telephone: clinicPhone,
                email: clinicEmail,
                image: [
                  `${baseUrl}/images/logo.png`,
                  `${baseUrl}/images/hjhh_converted.png`,
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bulawayo",
                  addressRegion: "Bulawayo",
                  addressCountry: "ZW",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -20.15395,
                  longitude: 28.58262,
                },
                hasMap:
                  "https://www.google.com/maps/search/?api=1&query=Smile+Dental+Surgery+Bulawayo",
                priceRange: "$$",
                areaServed: "Bulawayo",
                medicalSpecialty: "Dentistry",
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
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: clinicPhone,
                    email: clinicEmail,
                    areaServed: "ZW",
                    availableLanguage: ["English"],
                  },
                ],
                sameAs: [`${baseUrl}/contact`, `${baseUrl}/reviews`],
              }),
            }}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
