"use client";

import { ShieldCheck, Heart, Clock, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Advanced Technology",
        description: "We use the latest dental equipment for precise and comfortable treatments.",
    },
    {
        icon: Heart,
        title: "Compassionate Care",
        description: "Our friendly team is dedicated to making your visit as stress-free as possible.",
    },
    {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "Early morning, evening, and weekend appointments to fit your busy lifestyle.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dental-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
                    <div>
                        <ScrollReveal className="mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dental-50 text-dental-600 text-sm font-semibold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-dental-500"></span>
                                </span>
                                Why Smile With Us
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-dental-950 leading-tight">
                                Your Comfort, <br /> <span className="text-dental-500">Our Commitment</span>
                            </h2>
                            <p className="mt-6 text-xl text-dental-700/80 leading-relaxed font-light">
                                Experience Clinical Excellence. We combine modernized techniques with a gentle touch to provide dental care that feels less like a procedure and more like a spa visit.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="group flex gap-6 items-start p-4 rounded-2xl hover:bg-dental-50/50 transition-colors">
                                        <div className="shrink-0 h-12 w-12 rounded-xl bg-dental-100 text-dental-600 flex items-center justify-center ring-1 ring-dental-200 group-hover:bg-dental-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-md">
                                            <benefit.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-dental-900 mb-2 group-hover:text-dental-600 transition-colors">{benefit.title}</h3>
                                            <p className="text-dental-600 leading-relaxed font-light">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <ScrollReveal delay={0.3} className="relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-dental-900/10 border-[8px] border-white aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                            <img
                                src="/images/Whisk_10a6aa5f71fcf2a81804cea4685f7474eg.png"
                                alt="Dentist treating patient"
                                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dental-900/60 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                                    <p className="text-lg font-medium italic leading-relaxed text-white/90">
                                        "Loved the experience. Had a tooth extraction today and the dentist was so good and he explains everything patiently, the whole staff is welcoming and friendly.The fees are reasonable as well.
Keep it up guys. God bless🙏 …"
                                    </p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white text-dental-900 flex items-center justify-center font-bold shadow-lg">HM</div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Hillary T Mabubu</p>
                                            <p className="text-xs text-dental-100">Regular Patient</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-24 h-24 bg-dental-100 rounded-full blur-2xl -z-10"
                        />
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-12 -left-12 w-32 h-32 bg-dental-200 rounded-full blur-3xl -z-10"
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

