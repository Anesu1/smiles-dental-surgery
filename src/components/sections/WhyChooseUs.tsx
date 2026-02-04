import { ShieldCheck, Heart, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

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
]

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Content */}
                    <div>
                        <ScrollReveal className="mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Your Smile, Our Commitment
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                Experience Clinical Excellence. We offer a wide range of dental services, including exams, cleanings, fillings, extractions, implants, crowns, dentures, and cosmetic treatments, all designed to promote lasting health and confident smiles.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="group flex gap-6 items-start">
                                        <div className="shrink-0 p-4 rounded-2xl bg-dental-50 text-dental-600 ring-1 ring-dental-100 transition-colors group-hover:bg-dental-500 group-hover:text-white group-hover:ring-dental-500">
                                            <benefit.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <ScrollReveal delay={0.3} className="relative lg:h-[600px] h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img
                            src="/images/Whisk_10a6aa5f71fcf2a81804cea4685f7474eg.png"
                            alt="Dentist treating patient"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                            <p className="text-slate-900 font-medium italic">
                                "The most comfortable dental experience I've ever had. Highly recommended!"
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-dental-100 flex items-center justify-center font-bold text-dental-700">SP</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Sarah P.</p>
                                    <p className="text-xs text-slate-500">Regular Patient</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
