"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { faqs } from "@/data/faqs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function FAQSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <ScrollReveal direction="right" className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Common Questions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Got questions about your visit? We have answers. If you don't see your question here, feel free to contact us.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/faq">View All FAQs</Link>
                        </Button>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.2} className="w-full">
                        <div className="space-y-4">
                            {faqs.slice(0, 4).map((faq, i) => (
                                <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-dental-200 hover:shadow-md">
                                    <details className="group">
                                        <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 list-none">
                                            {faq.question}
                                            <span className="transition group-open:rotate-180 text-dental-500">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
                                            <div className="overflow-hidden">
                                                <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
