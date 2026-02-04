"use server"

import { z } from "zod"
import fs from "fs"
import path from "path"
import { appointmentSchema, AppointmentRecord } from "@/lib/schemas"

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "appointments.json")

export async function createAppointment(data: z.infer<typeof appointmentSchema>) {
    try {
        // 1. Validate data
        const validatedData = appointmentSchema.parse(data)

        // 2. Prepare record
        const newAppointment: AppointmentRecord = {
            id: Math.random().toString(36).substring(2, 10),
            createdAt: new Date().toISOString(),
            status: "pending",
            ...validatedData,
        }

        // 3. Read existing data
        let appointments: AppointmentRecord[] = []

        // Ensure directory exists
        const dir = path.dirname(DATA_FILE_PATH)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        if (fs.existsSync(DATA_FILE_PATH)) {
            const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8")
            try {
                appointments = JSON.parse(fileContent)
            } catch (error) {
                // If file is empty or invalid JSON, start fresh
                appointments = []
            }
        }

        // 4. Append new appointment
        appointments.push(newAppointment)

        // 5. Save file
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(appointments, null, 2))

        return { success: true, id: newAppointment.id }
    } catch (error) {
        console.error("Failed to create appointment:", error)
        if (error instanceof z.ZodError) {
            return { success: false, error: "Validation failed" } // Simplified for security
        }
        return { success: false, error: "Failed to save appointment" }
    }
}
