"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 -z-0 h-[600px] w-[600px] rounded-full bg-slate-50 blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 -z-0 h-[600px] w-[600px] rounded-full bg-dental-50 blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Success Stories
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Don't just take our word for it. Hear what our patients have to say about their experience.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} direction="up">
                            <Card className="h-full border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300 relative">
                                <div className="absolute top-6 right-6 text-dental-100">
                                    <Quote className="h-10 w-10 rotate-180 fill-current" />
                                </div>
                                <CardContent className="pt-8">
                                    <div className="flex mb-4 text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-slate-200"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">"{testimonial.content}"</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-lg">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{testimonial.name}</p>
                                            <p className="text-sm text-slate-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
