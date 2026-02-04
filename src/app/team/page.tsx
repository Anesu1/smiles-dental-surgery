
import { Card } from "@/components/ui/card"
import { team } from "@/data/team"
import { User2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function TeamPage() {
    return (
        <main className="min-h-screen pt-12 pb-24 bg-white">
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
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-100 group-hover:bg-dental-50 transition-colors duration-300">
                                        <User2 className="h-24 w-24 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-dental-600 transition-colors">{member.name}</h3>
                                    <p className="font-medium text-dental-500">{member.role}</p>
                                    <p className="text-sm text-slate-600 pt-2 leading-relaxed">{member.bio}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </main>
    )
}
