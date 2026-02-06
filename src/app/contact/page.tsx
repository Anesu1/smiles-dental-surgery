import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata = {
    title: "Contact Us | Dentex",
    description: "Get in touch with us for appointments or inquiries.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600">
                        Have a question? We're here to help. Send us a message or visit our clinic.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <ScrollReveal direction="right" className="h-full">
                        <Card className="border-none shadow-lg h-full">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="Your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="your@email.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="What is this regarding?" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" />
                                    </div>
                                    <Button className="w-full text-lg h-12">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </ScrollReveal>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        <ScrollReveal direction="left" delay={0.2} className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="h-10 w-10 rounded-full bg-dental-100 flex items-center justify-center text-dental-600 mb-4">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                                <p className="text-slate-600">+263 77 123 4567</p>
                                <p className="text-slate-600">+263 242 123 456</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="h-10 w-10 rounded-full bg-dental-100 flex items-center justify-center text-dental-600 mb-4">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                <p className="text-slate-600">info@dentex.co.zw</p>
                                <p className="text-slate-600">appointments@dentex.co.zw</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.3} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="h-10 w-10 rounded-full bg-dental-100 flex items-center justify-center text-dental-600 mb-4">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-4">Opening Hours</h3>
                            <div className="space-y-2 text-slate-600">
                                <div className="flex justify-between border-b border-slate-50 pb-2">
                                    <span>Monday - Friday</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-50 pb-2">
                                    <span>Saturday</span>
                                    <span>9:00 AM - 3:00 PM</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Map Embed */}
                        <ScrollReveal direction="left" delay={0.4} className="h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.276274436576!2d31.0456!3d-17.8248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzI5LjMiUyAzMcKwMDInNDQuMiJF!5e0!3m2!1sen!2szw!4v1620000000000!5m2!1sen!2szw"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Clinic Location"
                            ></iframe>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </main>
    )
}
