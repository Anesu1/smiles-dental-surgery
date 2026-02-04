"use client"

import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CtaBand() {
    return (
        <section className="py-24 bg-dental-900 text-white relative overflow-hidden">
            {/* Abstract background */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Ready to Transform Your Smile?
                    </h2>
                    <p className="text-xl text-dental-100 max-w-2xl mx-auto mb-10">
                        Book your appointment today and experience the difference of patient-centered dental care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-black/20 hover:shadow-black/40 transition-all hover:-translate-y-1">
                            <Link href="/appointment">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Online Now
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-dental-200 text-white hover:bg-white hover:text-dental-900 transition-all hover:-translate-y-1">
                            <Link href="/contact">
                                <Phone className="mr-2 h-5 w-5" />
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
