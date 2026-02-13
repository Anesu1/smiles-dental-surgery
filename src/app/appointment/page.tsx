import { Suspense } from "react"
import { AppointmentBooking } from "@/components/sections/AppointmentBooking"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book a Dental Appointment in Bulawayo",
    description: "Book your dental appointment at Smile Dental Surgery in Bulawayo for check-ups, cleanings, braces, and more.",
    alternates: {
        canonical: "/appointment",
    },
    openGraph: {
        title: "Book Appointment | Smile Dental Surgery Bulawayo",
        description: "Book your visit with Smile Dental Surgery in Bulawayo.",
        url: "/appointment",
        type: "website",
    },
}

export default function AppointmentPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-dental-900">
                        Schedule Your Visit
                    </h1>
                    <p className="text-lg text-slate-600">
                        We make booking easy. Choose your service and preferred time, or chat with us directly via WhatsApp.
                    </p>
                </div>

                <Suspense fallback={<div className="text-center p-12 text-slate-500">Loading booking form...</div>}>
                    <AppointmentBooking />
                </Suspense>
            </div>
        </main>
    )
}
