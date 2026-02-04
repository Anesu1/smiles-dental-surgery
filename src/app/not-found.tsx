import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 px-4 text-center">
            <div className="h-24 w-24 rounded-full bg-dental-100 flex items-center justify-center text-dental-500 mb-8">
                <span className="text-4xl font-bold">404</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <Button asChild size="lg">
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    )
}
