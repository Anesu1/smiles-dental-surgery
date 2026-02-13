import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "263717673355"
const WHATSAPP_TEXT = "Hi Smile Dental, I would like to make an appointment."

export function WhatsAppFloatingButton() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed right-5 bottom-24 md:bottom-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    )
}
