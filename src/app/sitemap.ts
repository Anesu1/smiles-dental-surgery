import type { MetadataRoute } from "next"
import { services } from "@/data/services"

function getBaseUrl() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
    if (siteUrl) {
        return siteUrl.replace(/\/$/, "")
    }

    const vercelUrl = process.env.VERCEL_URL?.trim()
    if (vercelUrl) {
        return `https://${vercelUrl}`
    }

    return "https://smilesdentalzw.com/"
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl()
    const now = new Date()

    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/team",
        "/reviews",
        "/faq",
        "/contact",
        "/appointment",
        "/privacy",
    ]

    const staticEntries = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
        priority: route === "" ? 1 : 0.8,
    }))

    const serviceEntries = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }))

    return [...staticEntries, ...serviceEntries]
}
