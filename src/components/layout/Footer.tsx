import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-dental-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dental-500 text-white">
                                {/* Reusing the simple icon from header conceptually */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M12 2C7.03 2 3 6.03 3 11c0 1.66.41 3.2 1.13 4.54L3 22l6.46-1.13A8.97 8.97 0 0 0 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                                    <path d="M7 12c1 2.5 3 4 5 4s4-1.5 5-4" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight">Dentex</span>
                        </Link>
                        <p className="text-dental-200 leading-relaxed">
                            Providing expert dental care with a gentle touch. Your smile is our top priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-dental-200 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-dental-200 hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/team" className="text-dental-200 hover:text-white transition-colors">Meet the Doctors</Link></li>
                            <li><Link href="/appointment" className="text-dental-200 hover:text-white transition-colors">Book Appointment</Link></li>
                            <li><Link href="/faq" className="text-dental-200 hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-dental-200">
                                <MapPin className="h-5 w-5 mt-1 shrink-0 text-dental-400" />
                                <span>123 Medical Centre,<br />Harare, Zimbabwe</span>
                            </li>
                            <li className="flex items-center gap-3 text-dental-200">
                                <Phone className="h-5 w-5 shrink-0 text-dental-400" />
                                <span>+263 77 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-dental-200">
                                <Mail className="h-5 w-5 shrink-0 text-dental-400" />
                                <span>info@dentex.co.zw</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Opening Hours</h3>
                        <ul className="space-y-4 text-dental-200">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span>8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>9:00 AM - 3:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-dental-400">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dental-400">
                    <p>&copy; {new Date().getFullYear()} Dentex. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
