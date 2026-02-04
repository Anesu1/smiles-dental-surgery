"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

const team = [
    {
        name: "Dr Brian Mbayiwa",
        role: "Dental Surgeon",
        qualifications: "BDS (UKR) IMPLANTOLOGY (INDIA) ORTHODONTICS (INDIA)",
        image: "/images/Whisk_31b3ae92fd6b0019cf1460620012e8dadr.jpeg" // Assigned based on available assets, user can swap
    },
    {
        name: "Nontokozo Ncube",
        role: "Dental Assistant",
        image: "/images/Whisk_2b587a554512097ae6e466ea90e6b839dr.jpeg"
    },
    {
        name: "Elton Machikiza",
        role: "Dental Assistant",
        image: "/images/Whisk_33d24c00954b9138e174d67ab47c8331eg.png"
    },
    {
        name: "Tafadzwa Athena Mukwasi",
        role: "Receptionist",
        image: "/images/Whisk_388d481d793abcfa105453eda4df66c4dr.jpeg"
    }
]

export function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Our Team
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Meet the dedicated professionals committed to your smile.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden bg-slate-200">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-dental-600 font-medium">{member.role}</p>
                                    {member.qualifications && (
                                        <p className="mt-2 text-xs text-slate-500 border-t border-slate-200 pt-2">
                                            {member.qualifications}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
