"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = React.useState(false);
    const prefersReducedMotion = useReducedMotion();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    React.useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    React.useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={prefersReducedMotion ? false : { y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className={cn(
                            "flex items-center justify-between rounded-full px-6 transition-all duration-500",
                            scrolled
                                ? "bg-white/0 backdrop-blur-xl shadow-lg shadow-dental-900/5 h-16 border border-white/40"
                                : "bg-transparent h-20"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-50 rounded-full">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={120}
                                height={60}
                                className="w-auto h-10 object-contain drop-shadow-sm"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md rounded-full border border-white/20 shadow-sm mx-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                                        pathname === link.href
                                            ? "text-dental-950"
                                            : "text-dental-600 hover:text-dental-900"
                                    )}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-white shadow-sm rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: prefersReducedMotion ? 0 : 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="hidden xl:flex items-center gap-2 text-sm font-medium text-dental-800">
                                <Phone className="h-4 w-4 text-dental-500" />
                                <span>+263 717 673 355</span>
                            </div>
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-dental-900 text-white hover:bg-dental-800 shadow-lg shadow-dental-900/20 hover:shadow-dental-900/30 transition-all hover:-translate-y-0.5"
                            >
                                <Link href="/appointment">
                                    Book Now
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-dental-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-50 rounded-full"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <X />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <Menu />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-dental-50/95 backdrop-blur-3xl pt-28 lg:hidden flex flex-col items-center justify-start space-y-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        id="mobile-menu"
                    >
                        <nav aria-label="Mobile" className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: prefersReducedMotion ? 0 : 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-3xl font-bold tracking-tight transition-colors flex items-center gap-2 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-50 rounded-full",
                                            pathname === link.href
                                                ? "text-dental-500"
                                                : "text-dental-950"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={pathname === link.href ? "page" : undefined}
                                    >
                                        {link.label}
                                        {pathname === link.href && <ArrowUpRight className="w-6 h-6" />}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                            className="flex flex-col gap-4 w-full px-8"
                        >
                            <Button asChild size="lg" className="w-full text-lg h-14 rounded-full bg-dental-500 text-white shadow-xl shadow-dental-500/30">
                                <Link href="/appointment">Book Appointment</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
