import * as React from "react"

// I don't have radix-label installed. I'll make a simple label or install it.
// The user prompt said: "use React Hook Form + Zod" but didn't explicitly forbid Radix.
// However, to keep it "lightweight" as per my "you can build your own" instruction, I'll build a simple one.
// If I use Radix, I have to install it. I'll stick to native label with cva for now to save install time/complexity.
// Wait, I already installed `cva`.
// I'll make a standard label component without Radix dependency for simplicity.

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
))
Label.displayName = "Label"

export { Label }
