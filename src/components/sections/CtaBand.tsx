"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function CtaBand() {
    return (
        <section className="py-24 bg-dental-950 text-white relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,100,158,0.2)_0%,rgba(23,35,54,0)_70%)]" />

            {/* Abstract background shapes */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-dental-800/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-dental-500/10 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">
                        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-200 to-dental-500">Dental Family</span>
                    </h2>
                    <p className="text-xl text-dental-100/80 max-w-2xl mx-auto mb-12 font-light">
                        Experience the difference of dental care that puts you first. Book your appointment today and start your journey to a healthier smile.
                    </p>

                    <div className="max-w-md mx-auto mb-12 relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-dental-400 to-dental-600 opacity-20 blur-lg transition duration-200 group-hover:opacity-40"></div>
                        <div className="flex gap-2 relative bg-white/5 backdrop-blur-sm p-2 rounded-full border border-white/10 shadow-2xl">
                            <input
                                type="email"
                                placeholder="Enter your email to subscribe"
                                className="flex-1 h-12 bg-transparent px-4 py-2 text-sm text-white placeholder:text-dental-300 focus:outline-none"
                            />
                            <Button className="rounded-full px-8 h-12 bg-white text-dental-950 hover:bg-dental-50 font-medium transition-all hover:scale-105 active:scale-95 shadow-lg">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-dental-400 mt-4">We respect your inbox. No spam, ever.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg font-bold bg-dental-500 text-white hover:bg-dental-400 shadow-[0_0_40px_-10px_rgba(78,124,192,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_-15px_rgba(78,124,192,0.6)]">
                            <Link href="/appointment">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Online Now
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-medium bg-transparent border-dental-700 text-dental-100 hover:bg-white/5 hover:text-white hover:border-white/50 transition-all hover:-translate-y-1">
                            <Link href="/contact">
                                <Phone className="mr-2 h-5 w-5" />
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

