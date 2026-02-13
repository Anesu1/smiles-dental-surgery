
import { Card } from "@/components/ui/card"
import { team } from "@/data/team"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Meet Our Dental Team in Bulawayo",
    description: "Get to know the dentists and support team at Smile Dental Surgery in Bulawayo.",
    alternates: {
        canonical: "/team",
    },
    openGraph: {
        title: "Dental Team | Smile Dental Surgery Bulawayo",
        description: "Meet the experienced dental team at Smile Dental Surgery in Bulawayo.",
        url: "/team",
        type: "website",
    },
}

export default function TeamPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        Meet Our Specialists
                    </h1>
                    <p className="text-lg text-slate-600">
                        A diverse team of experienced professionals dedicated to your smile.
                    </p>
                </ScrollReveal>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="group">
                            <Card className="overflow-hidden border-none shadow-none">
                                <div className="aspect-[4/5] bg-slate-100 rounded-2xl relative overflow-hidden mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-dental-600 transition-colors">{member.name}</h3>
                                    <p className="font-medium text-dental-500">{member.role}</p>
                                    {member.qualifications ? (
                                        <p className="text-xs text-slate-500 pt-2 leading-relaxed border-t border-slate-200">
                                            {member.qualifications}
                                        </p>
                                    ) : null}
                                </div>
                            </Card>
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </main>
    )
}
