import type { MetadataRoute } from "next"

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

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl()

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/admin/*"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
