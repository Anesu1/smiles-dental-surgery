import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

function getServiceBySlug(slug: string) {
    const normalized = decodeURIComponent(slug).trim().toLowerCase()
    return services.find((service) => service.slug === normalized)
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested dental service could not be found.",
        }
    }

    return {
        title: `${service.title} in Bulawayo`,
        description: `${service.description} Book ${service.title.toLowerCase()} at Smile Dental Surgery in Bulawayo.`,
        keywords: [
            `${service.title} Bulawayo`,
            `dentist Bulawayo`,
            `dental clinic Bulawayo`,
            `oral health Bulawayo`,
        ],
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen pb-24">
            {/* Hero Section */}
            <section className="bg-dental-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <ScrollReveal fullWidth className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            {service.description} {service.details?.intro}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <ScrollReveal delay={0.15}>
                            <div className="relative overflow-hidden rounded-3xl border border-dental-100 bg-white shadow-lg shadow-dental-100/60 aspect-[16/10]">
                                <Image
                                    src={service.image}
                                    alt={service.imageAlt || `${service.title} treatment`}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 66vw, 100vw"
                                    priority
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits of {service.title}</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {(service.details?.benefits || []).map((benefit) => (
                                    <div key={benefit} className="flex gap-3 items-start p-4 rounded-xl bg-white border border-slate-100">
                                        <CheckCircle2 className="h-5 w-5 text-dental-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-600">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h2>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                {(service.details?.expectations || []).map((paragraph) => (
                                    <p key={paragraph} className="mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <ScrollReveal direction="left" delay={0.4} className="rounded-2xl border border-dental-100 bg-white p-6 shadow-lg shadow-dental-100/50 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to book?</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Schedule your {service.title.toLowerCase()} appointment today.
                            </p>
                            <Button asChild size="lg" className="w-full h-12 text-base">
                                <Link href={`/appointment?service=${encodeURIComponent(service.title)}`}>
                                    Book This Service <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                Or call us at <a href="tel:+263717673355" className="underline hover:text-dental-600">+263 717 673 355</a>
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </main>
    )
}
