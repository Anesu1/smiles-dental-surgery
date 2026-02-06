"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Stethoscope, Sparkles, Smile, Hammer, Activity, Baby } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

const IconMap: Record<string, any> = {
    Stethoscope,
    Sparkles,
    Smile,
    Hammer,
    Activity,
    Baby
};

export function ServicesGrid() {
    return (
        <section className="py-32 bg-dental-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-dental-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-dental-950 mb-6">
                            Comprehensive <br /> <span className="text-dental-500">Dental Solutions</span>
                        </h2>
                        <p className="text-xl text-dental-700/70 font-light">
                            Personalized treatments designed to maintain and restore your oral health with precision and care.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-dental-200 text-dental-950 hover:bg-dental-950 hover:text-white transition-all duration-300 group"
                    >
                        <ArrowRight className="h-6 w-6 -rotate-45 transition-transform group-hover:rotate-0" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <ServiceCard key={service.slug} service={service} index={i} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/services" className="inline-flex items-center font-medium text-dental-600">
                        View all services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const Icon = IconMap[service.icon] || Stethoscope;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-dental-900/5 transition-all duration-500 border border-dental-100/50 hover:-translate-y-2 relative overflow-hidden">

                    {/* Hover Gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dental-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-8 flex justify-between items-start">
                            <div className="h-16 w-16 rounded-2xl bg-dental-50 text-dental-600 flex items-center justify-center transition-all duration-500 group-hover:bg-dental-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                <Icon className="h-8 w-8" />
                            </div>
                            <span className="h-10 w-10 rounded-full border border-dental-100 flex items-center justify-center text-dental-400 group-hover:border-dental-500 group-hover:bg-dental-500 group-hover:text-white transition-all duration-300">
                                <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-dental-950 mb-3 group-hover:text-dental-600 transition-colors">{service.title}</h3>
                        <p className="text-dental-700/70 leading-relaxed mb-6 flex-grow font-light">
                            {service.description}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
