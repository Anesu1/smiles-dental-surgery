"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, MessageSquare, Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { appointmentSchema, AppointmentFormData } from "@/lib/schemas"
import { createAppointment } from "@/actions/appointment"

const SERVICES = [
    "Teeth Cleaning",
    "Professional Whitening",
    "Braces",
    "Clear Aligners",
    "Root Canal",
    "Veneers",
    "Tooth Replacements",
    "Emergency Consultation",
]

const TIME_SLOTS = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00"
]

export function AppointmentBooking() {
    const searchParams = useSearchParams()
    const preselectedService = searchParams.get("service")

    const [step, setStep] = React.useState<"form" | "confirmation">("form")
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [bookingData, setBookingData] = React.useState<AppointmentFormData | null>(null)
    const [bookingId, setBookingId] = React.useState<string | null>(null)

    const defaultService = preselectedService && SERVICES.includes(preselectedService)
        ? preselectedService
        : ""

    const form = useForm<AppointmentFormData>({
        resolver: zodResolver(appointmentSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            service: defaultService,
            date: "",
            time: "",
            notes: "",
        },
    })

    // Update default service if searchParams change specifically
    React.useEffect(() => {
        if (preselectedService && SERVICES.includes(preselectedService)) {
            form.setValue("service", preselectedService)
        }
    }, [preselectedService, form])

    const onSubmit = async (data: AppointmentFormData) => {
        setBookingData(data)
        setStep("confirmation")
    }

    const handleWhatsAppConfirm = () => {
        if (!bookingData) return

        const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "263717673355" // Fallback for demo
        const message = `Hello, I'd like to book an appointment.%0A%0A*Name:* ${bookingData.fullName}%0A*Service:* ${bookingData.service}%0A*Date:* ${bookingData.date}%0A*Time:* ${bookingData.time}%0A*Phone:* ${bookingData.phone}%0A*Notes:* ${bookingData.notes || "None"}`

        window.open(`https://wa.me/${number}?text=${message}`, "_blank")
    }

    const handleSubmitRequest = async () => {
        if (!bookingData) return
        setIsSubmitting(true)

        const result = await createAppointment(bookingData)

        if (result.success) {
            setBookingId(result.id || "REF-12345") // Fallback ID just in case
            // Keep them on confirmation screen but show success state
            // We'll handle this purely visually
        } else {
            alert("Something went wrong. Please try again.") // Simple callback for now
        }
        setIsSubmitting(false)
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {step === "form" ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-dental-100 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-dental-900">Book Your Visit</CardTitle>
                                <CardDescription>Fill in your details below to schedule a consultation.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input id="fullName" placeholder="John Doe" {...form.register("fullName")} />
                                        {form.formState.errors.fullName && (
                                            <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" placeholder="+263 717 673 355" {...form.register("phone")} />
                                            {form.formState.errors.phone && (
                                                <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email (Optional)</Label>
                                            <Input id="email" placeholder="you@example.com" {...form.register("email")} />
                                            {form.formState.errors.email && (
                                                <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service">Service</Label>
                                        <select
                                            id="service"
                                            className="flex h-11 w-full rounded-xl border border-dental-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500"
                                            {...form.register("service")}
                                        >
                                            <option value="">Select a service...</option>
                                            {SERVICES.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        {form.formState.errors.service && (
                                            <p className="text-sm text-red-500">{form.formState.errors.service.message}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="date">Preferred Date</Label>
                                            <Input id="date" type="date" {...form.register("date")} />
                                            {form.formState.errors.date && (
                                                <p className="text-sm text-red-500">{form.formState.errors.date.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="time">Preferred Time</Label>
                                            <select
                                                id="time"
                                                className="flex h-11 w-full rounded-xl border border-dental-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-500"
                                                {...form.register("time")}
                                            >
                                                <option value="">Select time...</option>
                                                {TIME_SLOTS.map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            {form.formState.errors.time && (
                                                <p className="text-sm text-red-500">{form.formState.errors.time.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="notes">Additional Notes</Label>
                                        <Textarea id="notes" placeholder="Any specific concerns?" {...form.register("notes")} />
                                    </div>

                                    <Button type="submit" className="w-full text-lg h-12">
                                        Review Details
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        key="confirmation"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-dental-100 shadow-lg overflow-hidden">
                            <div className="bg-dental-50 p-6 border-b border-dental-100 text-center">
                                {bookingId ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <CheckCircle2 className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-dental-900">Request Sent!</h2>
                                            <p className="text-slate-600">Reference ID: <span className="font-mono font-medium">{bookingId}</span></p>
                                        </div>
                                    </div>
                                ) : (
                                    <h2 className="text-xl font-bold text-dental-900">Confirm Booking</h2>
                                )}
                            </div>
                            <CardContent className="p-6 space-y-6">
                                {!bookingId && (
                                    <div className="rounded-lg bg-slate-50 p-4 space-y-3 text-sm border border-slate-100">
                                        <div className="grid grid-cols-3 gap-2">
                                            <span className="text-slate-500">Service:</span>
                                            <span className="col-span-2 font-medium text-slate-900">{bookingData?.service}</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <span className="text-slate-500">Date & Time:</span>
                                            <span className="col-span-2 font-medium text-slate-900">{bookingData?.date} at {bookingData?.time}</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <span className="text-slate-500">Name:</span>
                                            <span className="col-span-2 font-medium text-slate-900">{bookingData?.fullName}</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <span className="text-slate-500">Contact:</span>
                                            <span className="col-span-2 font-medium text-slate-900">{bookingData?.phone}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <Button
                                        onClick={handleWhatsAppConfirm}
                                        className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md"
                                    >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Confirm via WhatsApp
                                    </Button>
                                    <p className="text-xs text-center text-slate-400">Fastest response time (Recommended)</p>

                                    {!bookingId && (
                                        <>
                                            <div className="relative my-4">
                                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Or</span></div>
                                            </div>

                                            <Button
                                                variant="outline"
                                                onClick={handleSubmitRequest}
                                                className="w-full h-12"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    "Submit Request Only"
                                                )}
                                            </Button>
                                        </>
                                    )}

                                    {bookingId && (
                                        <Button
                                            variant="ghost"
                                            onClick={() => { setStep("form"); setBookingData(null); setBookingId(null); form.reset() }}
                                            className="w-full mt-4"
                                        >
                                            Book Another Appointment
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
