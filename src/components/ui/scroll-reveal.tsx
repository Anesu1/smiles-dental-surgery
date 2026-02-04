"use client"

import { motion, useInView, UseInViewOptions } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right" | "none"
    delay?: number
    duration?: number
    fullWidth?: boolean
    viewport?: UseInViewOptions
    staggerChildren?: number
}

export function ScrollReveal({
    children,
    className,
    direction = "up",
    delay = 0,
    duration = 0.5,
    fullWidth = false,
    viewport = { once: true, margin: "-10%" },
    staggerChildren = 0,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    const directionOffset = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {},
    }

    const initial = {
        opacity: 0,
        ...directionOffset[direction],
    }

    const animate = isInView
        ? {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as const, // Custom spring-ish curve
            },
        }
        : initial

    // If staggering is needed for direct children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delay,
            },
        },
    }

    if (staggerChildren > 0) {
        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className={cn(fullWidth ? "w-full" : "", className)}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            className={cn(fullWidth ? "w-full" : "", className)}
        >
            {children}
        </motion.div>
    )
}
