import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/data/services"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata = {
    title: "Our Services | Dentex",
    description: "Explore our comprehensive range of dental treatments and services.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-slate-50/0">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        World-Class Dental Treatments
                    </h1>
                    <p className="text-lg text-slate-600">
                        From routine checkups to specialized surgical procedures, we offer a full spectrum of dental care designed for your comfort and health.
                    </p>
                </ScrollReveal>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.slug} className="flex flex-col h-full border-dental-100/50 shadow-sm transition-all hover:shadow-md hover:border-dental-200">
                            <CardHeader>
                                <CardTitle className="text-xl text-dental-900">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                                <Button asChild variant="outline" className="w-full justify-between group">
                                    <Link href={`/services/${service.slug}`}>
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </ScrollReveal>
            </div>
        </main>
    )
}
