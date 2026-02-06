import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"

export const metadata = {
    title: "Patient Reviews | Dentex",
    description: "See what our happy patients have to say about their experience.",
}

export default function ReviewsPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-slate-50/0">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        Patient Stories
                    </h1>
                    <p className="text-lg text-slate-600">
                        We are proud to have served thousands of happy patients. Here's what they say about us.
                    </p>
                    <Button asChild size="lg" className="mt-4">
                        <Link href="/appointment">Book Your Experience</Link>
                    </Button>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="break-inside-avoid bg-white border-slate-100 shadow-sm transition-all hover:shadow-md">
                            <CardContent className="pt-6">
                                <div className="flex mb-4 text-yellow-400">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-slate-300"}`}
                                        />
                                    ))}
                                </div>
                                {testimonial.content ? (
                                    <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                                ) : (
                                    <p className="text-slate-500 italic mb-6 leading-relaxed">Rating only</p>
                                )}
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
