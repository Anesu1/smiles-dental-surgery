"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faqs";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-dental-50/50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute -left-20 top-40 w-80 h-80 bg-dental-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-2">
                        <ScrollReveal direction="right" className="sticky top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dental-100 text-dental-600 text-sm font-semibold mb-6">
                                <HelpCircle className="h-4 w-4" />
                                FAQ
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-dental-950 leading-tight mb-6">
                                Common <br /> <span className="text-dental-500">Questions</span>
                            </h2>
                            <p className="text-lg text-dental-700/70 mb-8 leading-relaxed font-light">
                                Got questions about your visit? We have answers. If you don't see your question here, feel free to contact us directly.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-dental-900 text-white hover:bg-dental-800 shadow-lg shadow-dental-900/10">
                                <Link href="/contact">Ask a Question</Link>
                            </Button>
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-3 w-full">
                        <ScrollReveal direction="left" delay={0.2} className="space-y-4">
                            {faqs.slice(0, 5).map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={false}
                                    className={cn(
                                        "rounded-2xl border transition-all duration-300 overflow-hidden",
                                        openIndex === i
                                            ? "bg-white border-dental-200 shadow-xl shadow-dental-900/5 ring-1 ring-dental-100"
                                            : "bg-white/50 border-transparent hover:bg-white hover:border-dental-100"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="flex items-center justify-between w-full p-6 text-left"
                                    >
                                        <span className={cn(
                                            "text-lg font-semibold transition-colors",
                                            openIndex === i ? "text-dental-900" : "text-dental-700"
                                        )}>
                                            {faq.question}
                                        </span>
                                        <div className={cn(
                                            "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300",
                                            openIndex === i ? "bg-dental-500 text-white rotate-180" : "bg-dental-50 text-dental-500"
                                        )}>
                                            {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                        </div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="px-6 pb-6 pt-0 text-dental-600 leading-relaxed font-light">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
