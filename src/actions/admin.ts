"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
    const password = formData.get("password")

    if (password === process.env.ADMIN_PASSWORD) {
        (await cookies()).set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 // 1 day
        })
        return { success: true }
    }

    return { success: false, error: "Invalid password" }
}

export async function logout() {
    (await cookies()).delete("admin_session")
    redirect("/admin")
}
