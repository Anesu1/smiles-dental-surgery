import { z } from "zod"

export const appointmentSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be valid"),
    email: z.string().email("Invalid email address").optional().or(z.literal("")),
    service: z.string().min(1, "Please select a service"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date",
    }),
    time: z.string().min(1, "Please select a time"),
    notes: z.string().optional(),
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

export type AppointmentRecord = AppointmentFormData & {
    id: string
    createdAt: string
    status: "pending" | "confirmed" | "cancelled"
}
