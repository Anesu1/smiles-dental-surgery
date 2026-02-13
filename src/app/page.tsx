import { Hero } from "@/components/sections/Hero"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { CtaBand } from "@/components/sections/CtaBand"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dentist in Bulawayo for Family, Cosmetic, and Restorative Care",
    description:
        "Book with Smile Dental Surgery, a Bulawayo dentist for dental examinations, cleanings, fillings, braces, aligners, root canal therapy, and whitening.",
}

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <WhyChooseUs />
            <ServicesGrid />
            <Testimonials />
            <FAQSection />
            <GallerySection />
            <CtaBand />
        </main>
    )
}
