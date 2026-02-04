"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function MobileFloatingCTA() {
    const pathname = usePathname()

    // Don't show on appointment page itself or admin
    if (pathname.includes("/appointment") || pathname.includes("/admin")) {
        return null
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 lg:hidden z-50">
            <Button asChild className="w-full shadow-lg h-12 text-lg font-medium bg-dental-600 hover:bg-dental-700">
                <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                </Link>
            </Button>
        </div>
    )
}
