"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Testimonials() {
    return (
        <section className="py-32 bg-dental-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 -z-0 h-[600px] w-[600px] rounded-full bg-white blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 -z-0 h-[600px] w-[600px] rounded-full bg-dental-100 blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-dental-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-dental-950 mb-6">
                        Stories of <span className="text-dental-500">Success</span>
                    </h2>
                    <p className="text-xl text-dental-700/70 font-light">
                        Don't just take our word for it. Hear what our patients have to say about their experience.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} direction="up" className="h-full">
                            <Card className="h-full border-none bg-white/80 backdrop-blur-sm shadow-xl shadow-dental-900/5 hover:shadow-2xl hover:shadow-dental-900/10 transition-all duration-500 relative hover:-translate-y-1 group">
                                <div className="absolute top-8 right-8 text-dental-200 group-hover:text-dental-300 transition-colors">
                                    <Quote className="h-12 w-12 rotate-180 fill-current" />
                                </div>
                                <CardContent className="pt-10 px-8 pb-10 flex flex-col h-full">
                                    <div className="flex mb-6 text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < testimonial.rating ? "fill-current" : "text-dental-100"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-dental-800 text-lg italic mb-8 leading-relaxed relative z-10 font-light flex-grow">"{testimonial.content}"</p>
                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-dental-50">
                                        <div className="h-14 w-14 rounded-full bg-dental-50 flex items-center justify-center font-bold text-dental-500 text-xl border border-dental-100 shadow-sm">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-dental-950 text-lg">{testimonial.name}</p>
                                            <p className="text-sm text-dental-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
