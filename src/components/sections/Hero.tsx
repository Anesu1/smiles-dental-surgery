"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const prefersReducedMotion = useReducedMotion();
    const y1 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -150]);

    return (
        <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center pb-12 lg:pb-0 bg-white/0">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-dental-200/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-dental-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Column */}
                    <div className="space-y-10 relative">
                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-dental-200 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-dental-800"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className={prefersReducedMotion ? "absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75" : "animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75"}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-dental-500"></span>
                            </span>
                            Accepting New Patients
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight text-dental-950 leading-[0.9]">
                                <span className="block overflow-hidden">
                                    <motion.span
                                        initial={prefersReducedMotion ? false : { y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.3 }}
                                        className="block"
                                    >
                                        Care crafted
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden text-dental-500">
                                    <motion.span
                                        initial={prefersReducedMotion ? false : { y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.4 }}
                                        className="block"
                                    >
                                        for your smile
                                    </motion.span>
                                </span>
                            </h1>
                            <motion.p
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.6 }}
                                className="text-xl text-dental-700/80 max-w-lg leading-relaxed font-light"
                            >
                                Experience modern dentistry where precision meets compassion. Designed for comfort, styled for confidence.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.7 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg bg-dental-900 text-white hover:bg-dental-800 hover:scale-105 transition-all shadow-xl shadow-dental-900/20">
                                <Link href="/appointment">
                                    Book Appointment
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="h-14 px-8 rounded-full text-lg text-dental-900 hover:bg-white/50 backdrop-blur-sm border border-transparent hover:border-dental-200">
                                <Link href="/services" className="group">
                                    Our Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1 }}
                            className="pt-8 flex items-center gap-8 border-t border-dental-200/50"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-dental-200" />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-dental-950 text-white flex items-center justify-center text-xs font-bold">
                                    500+
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center text-orange-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-current h-4 w-4" />)}
                                </div>
                                <span className="text-sm font-medium text-dental-700">Happy Patients</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Column - Parallax Composition */}
                    <div className="relative h-[600px] hidden lg:block perspective-1000">
                        {/* Main Card */}
                        <motion.div style={{ y: y1 }} className="absolute right-0 top-10 w-3/4 h-[500px] z-10">
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-dental-900/10 border-4 border-white">
                                <Image
                                    src="/images/Whisk_2a25f2e53067f3b9c534e1fe7a2de025dr.jpeg"
                                    alt="Modern dental clinic interior"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(min-width: 1024px) 60vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dental-900/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-lg font-bold">Dr. Sarah & Team</p>
                                    <p className="opacity-80">Leading Specialists</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute left-0 bottom-20 z-20 bg-white p-6 rounded-2xl shadow-xl shadow-dental-900/5 max-w-[260px] border border-dental-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-dental-50 flex items-center justify-center text-dental-500 shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dental-900">Certified Care</h4>
                                    <p className="text-sm text-dental-600 mt-1 leading-snug">State-of-the-art equipment and standardized procedures.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                            transition={prefersReducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute right-10 top-0 w-32 h-32 rounded-full border border-dashed border-dental-300 z-0 opacity-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
