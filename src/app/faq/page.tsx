import Link from "next/link"
import { faqs } from "@/data/faqs"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "FAQ | Dentex",
    description: "Frequently Asked Questions about our services and policies.",
}

export default function FAQPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about our clinic and services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-dental-200 hover:shadow-sm">
                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-slate-900 list-none">
                                    {faq.question}
                                    <span className="transition-transform group-open:rotate-180 bg-white rounded-full p-1 border border-slate-200">
                                        <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed group-open:animate-in group-open:fade-in-20">
                                    {faq.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-dental-50 rounded-2xl p-8 border border-dental-100">
                    <h3 className="text-xl font-bold text-dental-900 mb-2">Still have questions?</h3>
                    <p className="text-slate-600 mb-6">Cannot find the answer you're looking for? Please chat to our friendly team.</p>
                    <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
