"use client";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

        // Skip custom smooth scrolling on touch devices for better mobile stability.
        if (prefersReducedMotion || hasCoarsePointer) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            lenisRef.current = null;
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <div className="contents">{children}</div>;
};
