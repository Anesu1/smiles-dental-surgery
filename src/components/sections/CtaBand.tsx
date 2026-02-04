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
                        Join Our Dental Family
                    </h2>
                    <p className="text-xl text-dental-100 max-w-2xl mx-auto mb-10">
                        Stay updated on oral health and offers!
                    </p>

                    <div className="max-w-md mx-auto mb-10">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="flex h-12 w-full rounded-full border border-dental-700 bg-white/10 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dental-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                            />
                            <Button className="rounded-full px-6 h-12 bg-dental-600 hover:bg-dental-500 text-white">
                                Submit
                            </Button>
                        </div>
                    </div>

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

