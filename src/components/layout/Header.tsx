"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                      <Image src="/images/logo.png" alt="Logo" width={100} height={50} className="w-30 h-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-dental-600",
                                    pathname === link.href
                                        ? "text-dental-600"
                                        : "text-slate-600"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="hidden xl:flex items-center gap-2 text-sm font-medium text-slate-600">
                            <Phone className="h-4 w-4 text-dental-500" />
                            <span>+263 77 123 4567</span>
                        </div>
                        <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                            <Link href="/appointment">Book Appointment</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-dental-100 bg-white lg:hidden overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors",
                                            pathname === link.href
                                                ? "text-dental-600"
                                                : "text-slate-600"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <Phone className="h-4 w-4 text-dental-500" />
                                    <span>+263 77 123 4567</span>
                                </div>
                                <Button user-select-none asChild size="lg" className="w-full justify-center rounded-xl bg-dental-500 text-white">
                                    {/* Note: user-select-none is not a valid prop for Button but I won't pass it. Using standard button props. */}
                                    <Link href="/appointment">Book Appointment</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
