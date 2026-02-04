"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Stethoscope, Sparkles, Smile, Hammer, Activity, Baby } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/data/services"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const IconMap: Record<string, any> = {
    Stethoscope,
    Sparkles,
    Smile,
    Hammer,
    Activity,
    Baby
}

export function ServicesGrid() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-5">
                <img
                    src="/images/Whisk_6b93d3ccfd9b40d83bf4e442baa438adeg.png"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Comprehensive Dental Services
                        </h2>
                        <p className="text-lg text-slate-600">
                            Personalized treatments designed to maintain and restore your oral health.
                        </p>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center font-medium text-dental-600 hover:text-dental-700 transition-colors group">
                        View all services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </ScrollReveal>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = IconMap[service.icon] || Stethoscope
                        return (
                            <motion.div key={service.slug} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <Link href={`/services/${service.slug}`} className="group h-full block">
                                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-slate-200 overflow-hidden relative">
                                        {/* Decorative gradient blob on hover */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-dental-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <CardHeader>
                                            <div className="h-14 w-14 rounded-2xl bg-dental-50 text-dental-600 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-dental-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                                <Icon className="h-7 w-7" />
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-dental-700 transition-colors">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base mb-6 leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                            <div className="flex items-center text-sm font-bold text-dental-600 opacity-60 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        )
                    })}
                </ScrollReveal>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/services" className="inline-flex items-center font-medium text-dental-600">
                        View all services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
