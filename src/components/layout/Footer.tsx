import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-dental-950 text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dental-900/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 mb-20 border-b border-dental-900 pb-20">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block">
                            <Image src="/images/logo-1.png" alt="Logo" width={140} height={70} className="w-auto h-12 object-contain brightness-0 invert" />
                        </Link>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
                            Ready to start your journey to a better smile?
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="rounded-full bg-white text-dental-950 hover:bg-dental-50 h-14 px-8 text-lg">
                                <Link href="/appointment">Book Appointment</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full border-dental-800 text-white hover:bg-dental-900 hover:text-white h-14 px-8 text-lg bg-transparent">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-dental-500 font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-lg font-light text-dental-100">
                                    <MapPin className="h-6 w-6 mt-1 shrink-0 text-dental-500" />
                                    <span>ZimPost suite 78c . Joshua Mqabuko Nkomo st. (opp fazak), Byo</span>
                                </li>
                                <li className="flex items-center gap-4 text-lg font-light text-dental-100">
                                    <Phone className="h-6 w-6 shrink-0 text-dental-500" />
                                    <span>+263 717 673 355 (WhatsApp)</span>
                                </li>
                                <li className="flex items-center gap-4 text-lg font-light text-dental-100">
                                    <Mail className="h-6 w-6 shrink-0 text-dental-500" />
                                    <span>info@smilesdentalzw.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-dental-500 font-semibold mb-6 uppercase tracking-wider text-sm">Sitemap</h3>
                            <ul className="space-y-3">
                                {['About', 'Services', 'Team', 'Reviews', 'FAQ'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase()}`} className="text-xl font-medium hover:text-dental-400 transition-colors flex items-center gap-2 group">
                                            {item}
                                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-dental-400 text-sm font-light">
                    <p>&copy; {new Date().getFullYear()} Smiles Dental Surgery. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
