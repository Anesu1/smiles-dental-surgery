"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormState = {
    name: string
    email: string
    subject: string
    message: string
}

const initialFormState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

export function ContactForm() {
    const [form, setForm] = useState<FormState>(initialFormState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    function onFieldChange(field: keyof FormState, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)
        setSuccess(null)
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const result = await response.json()
            if (!response.ok || !result.success) {
                setError(result.error || "Unable to send message right now.")
                return
            }

            setSuccess("Message sent successfully. We will get back to you soon.")
            setForm(initialFormState)
        } catch {
            setError("Unable to send message right now.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(event) => onFieldChange("name", event.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(event) => onFieldChange("email", event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={form.subject}
                    onChange={(event) => onFieldChange("subject", event.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px]"
                    value={form.message}
                    onChange={(event) => onFieldChange("message", event.target.value)}
                    required
                />
            </div>
            {error ? <p className="text-sm text-red-500">{error}</p> : null}
            {success ? <p className="text-sm text-green-600">{success}</p> : null}
            <Button className="w-full text-lg h-12" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    )
}
