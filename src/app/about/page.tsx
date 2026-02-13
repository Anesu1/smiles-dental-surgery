
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TeamSection } from "@/components/sections/TeamSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Smile Dental Surgery in Bulawayo",
    description: "Learn about Smile Dental Surgery, our approach to patient care, and our commitment to modern dentistry in Bulawayo.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Smile Dental Surgery Bulawayo",
        description: "Meet the clinic and values behind Smile Dental Surgery in Bulawayo.",
        url: "/about",
        type: "website",
    },
}

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6">
                {/* Intro */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <ScrollReveal direction="right" className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                            About Smiles Dental Surgery
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At Smiles Dental Surgery, we transform oral health with compassionate care and modern technology, ensuring a personalized, comfortable experience for every patient.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our philosophy focuses on creating confident smiles through clinical excellence and a commitment to patient well-being.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/appointment">Book Your Visit</Link>
                        </Button>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.2} className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="/images/Whisk_190a6a527e4a5ddacfb4f2ad7facaaaddr.png"
                            alt="Dental Team"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="inline-block px-3 py-1 rounded-full bg-dental-500/90 text-xs font-bold mb-2">Since 2024</div>
                            <h3 className="text-2xl font-semibold">150+</h3>
                            <p className="text-white/80">Patient Satisfaction</p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Team Section */}
                <div className="mb-24">
                    <TeamSection />
                </div>

                {/* Values */}
                <div className="mb-24">
                    <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Core Values</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We provide honest recommendations and transparent pricing." },
                            { title: "Excellence", desc: "We are committed to continuous learning and clinical precision." },
                            { title: "Empathy", desc: "We listen to your concerns and treat you with genuine care." },
                        ].map((val, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Facility */}
                <ScrollReveal className="bg-dental-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">State-of-the-Art Facility</h2>
                            <p className="text-dental-100 text-lg">
                                Our clinic is equipped with modern diagnostic tools, comfortable treatment chairs, and sterile environments to ensure your safety and comfort.
                            </p>
                            <ul className="space-y-3">
                                {["Digital X-Rays", "Intraoral Cameras", "Sterilization Bay", "Comfort Sedation Options"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-dental-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden relative shadow-lg group">
                            <img
                                src="/images/Whisk_2319484eb3eedb4b32c47e1314a08297eg.png"
                                alt="State of the art facility"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-dental-900/10 group-hover:bg-transparent transition-colors" />
                        </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-dental-500 blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3" />
                </ScrollReveal>

            </div>
        </main>
    )
}
