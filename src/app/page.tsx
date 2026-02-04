import { Hero } from "@/components/sections/Hero"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { CtaBand } from "@/components/sections/CtaBand"

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
