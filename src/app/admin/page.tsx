import { cookies } from "next/headers"
import fs from "fs"
import path from "path"
import { redirect } from "next/navigation"
import { login, logout } from "@/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AppointmentRecord } from "@/lib/schemas"

export default async function AdminPage() {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get("admin_session")?.value === "true"

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Admin Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action={async (formData) => {
                            "use server"
                            const result = await login(formData)
                            if (result.success) {
                                redirect("/admin")
                            }
                        }}>
                            <div className="space-y-4">
                                <Input type="password" name="password" placeholder="Enter password" required />
                                <Button type="submit" className="w-full">Login</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Read appointments
    const filePath = path.join(process.cwd(), "src", "data", "appointments.json")
    let appointments: AppointmentRecord[] = []
    if (fs.existsSync(filePath)) {
        try {
            appointments = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        } catch (e) {
            console.error("Failed to read appointments", e)
        }
    }

    // Reverse to show newest first
    appointments.reverse()

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-6xl space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-slate-900">Appointments ({appointments.length})</h1>
                    <form action={logout}>
                        <Button variant="outline">Logout</Button>
                    </form>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Date & Time</th>
                                    <th className="px-6 py-4">Patient</th>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Contact</th>
                                    <th className="px-6 py-4">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {appointments.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-slate-400">No appointments found.</td>
                                    </tr>
                                ) : (
                                    appointments.map((apt) => (
                                        <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                    {apt.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-slate-900">
                                                {apt.date} <span className="text-slate-400">at</span> {apt.time}
                                            </td>
                                            <td className="px-6 py-4">{apt.fullName}</td>
                                            <td className="px-6 py-4 text-dental-600">{apt.service}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span>{apt.phone}</span>
                                                    <span className="text-xs text-slate-400">{apt.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 max-w-xs truncate text-slate-500" title={apt.notes}>
                                                {apt.notes || "-"}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
