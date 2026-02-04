"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, ShieldCheck, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-28 lg:pb-36">
            {/* Background Decorative Elements - Pulse Animation */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-dental-50 blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="space-y-8 relative z-10">
                        <ScrollReveal direction="down" delay={0.1}>
                            <div className="inline-flex items-center rounded-full border border-dental-100 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-dental-600 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-dental-500"></span>
                                </span>
                                Accepting New Patients
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                                Expert care for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-500 to-dental-700">lifetime of smiles</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                Experience modern dentistry in a calm, comfortable environment. From routine checkups to cosmetic makeovers, our team is dedicated to your oral health.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-dental-500/20 hover:shadow-xl hover:shadow-dental-500/30 transition-all hover:-translate-y-0.5">
                                <Link href="/appointment">
                                    Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white transition-all hover:-translate-y-0.5">
                                <Link href="/services">Browse Services</Link>
                            </Button>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5} className="pt-8 flex items-center gap-8 border-t border-slate-100/50">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-current h-5 w-5" />)}
                                </div>
                                <span className="text-sm font-medium text-slate-600">5.0 Star Rating</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold text-dental-900 leading-none">2k+</span>
                                <span className="text-sm font-medium text-slate-600">Happy Patients</span>
                            </div>
                        </ScrollReveal>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[650px] hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-dental-50 to-white rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                            <div className="absolute inset-0 flex items-center justify-center text-dental-200">
                                {/* Abstract Pattern Background */}
                                <svg className="absolute inset-0 w-full h-full opacity-30" width="100%" height="100%">
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>

                                <div className="relative z-10 p-12 text-center space-y-4">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="mx-auto w-32 h-32 rounded-full border-4 border-dashed border-dental-300 flex items-center justify-center"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-dental-100 flex items-center justify-center">
                                            <span className="text-4xl">🦷</span>
                                        </div>
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-dental-800">Advanced Dental Care</h3>
                                    <p className="text-dental-600">Using the latest technology for your smile.</p>
                                </div>
                            </div>

                            {/* Floating Elements - More dynamic */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                transition={{
                                    opacity: { delay: 0.8 },
                                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                                }}
                                className="absolute top-24 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px] border border-white"
                            >
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Certified Experts</p>
                                    <p className="text-xs text-slate-500">Board Certified Specialists</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                                transition={{
                                    opacity: { delay: 1 },
                                    y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
                                }}
                                className="absolute bottom-32 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white"
                            >
                                <div className="h-12 w-12 rounded-full bg-dental-100 flex items-center justify-center text-dental-600 shrink-0">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Open Saturdays</p>
                                    <p className="text-xs text-slate-500">Weekend appointments available</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, type: "spring" }}
                                className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2"
                            >
                                <CheckCircle className="h-4 w-4 text-dental-500" />
                                <span className="text-xs font-semibold text-dental-900">15+ Years Experience</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
