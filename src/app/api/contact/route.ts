import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import dns from "node:dns"
import { contactMessageSchema } from "@/lib/schemas"

export const runtime = "nodejs"

dns.setDefaultResultOrder("ipv4first")

const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com"
const smtpPortRaw = process.env.SMTP_PORT
const smtpPort = smtpPortRaw ? Number(smtpPortRaw) : undefined
const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465
const smtpRejectUnauthorized = process.env.SMTP_TLS_REJECT_UNAUTHORIZED
    ? process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "true"
    : process.env.NODE_ENV === "production"
const smtpForceIpv4 = process.env.SMTP_FORCE_IPV4 ? process.env.SMTP_FORCE_IPV4 === "true" : true
const smtpUser = process.env.EMAIL_USER
const smtpPass = process.env.EMAIL_PASS
const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser

function buildTransport(port: number, secure: boolean) {
    return nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        requireTLS: !secure,
        auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
        ...(smtpForceIpv4 ? { family: 4 } : {}),
        tls: {
            servername: smtpHost,
            rejectUnauthorized: smtpRejectUnauthorized,
        },
    })
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
}

function buildContactEmailHtml(data: { name: string; email: string; subject: string; message: string }) {
    const safeName = escapeHtml(data.name)
    const safeEmail = escapeHtml(data.email)
    const safeSubject = escapeHtml(data.subject)
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>")
    const replyLink = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: ${data.subject}`)}`

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smiles Dental Surgery - New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding: 28px 24px 12px 24px; border-top: 6px solid #2E3192;">
                            <h1 style="color: #2E3192; font-size: 26px; margin: 0; font-weight: 700;">Smiles Dental Surgery</h1>
                            <p style="color: #5f6b72; font-size: 14px; margin: 8px 0 0 0;">New website contact message received</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 20px 28px 8px 28px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="50%" style="padding-right: 8px; vertical-align: top;">
                                        <div style="border: 1px solid #e1e8ed; padding: 14px; border-radius: 8px;">
                                            <p style="margin: 0 0 6px 0; color: #74818a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Name</p>
                                            <p style="margin: 0; color: #1f2933; font-size: 16px; font-weight: 600;">${safeName}</p>
                                        </div>
                                    </td>
                                    <td width="50%" style="padding-left: 8px; vertical-align: top;">
                                        <div style="border: 1px solid #e1e8ed; padding: 14px; border-radius: 8px;">
                                            <p style="margin: 0 0 6px 0; color: #74818a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Email</p>
                                            <p style="margin: 0; color: #1f2933; font-size: 16px; font-weight: 600;">${safeEmail}</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 8px 28px 0 28px;">
                            <div style="border: 1px solid #e1e8ed; padding: 14px; border-radius: 8px;">
                                <p style="margin: 0 0 6px 0; color: #74818a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Subject</p>
                                <p style="margin: 0; color: #1f2933; font-size: 16px; font-weight: 600;">${safeSubject}</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 16px 28px 0 28px;">
                            <div style="border: 1px solid #e1e8ed; padding: 16px; border-radius: 8px; background-color: #fafcfd;">
                                <p style="margin: 0 0 8px 0; color: #74818a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Message</p>
                                <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.7;">${safeMessage}</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 24px 0 28px 0;">
                            <a href="${replyLink}" style="background-color: #00AEEF; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 999px; font-weight: 700; font-size: 15px; display: inline-block;">
                                Reply to ${safeName}
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #f9f9f9; padding: 20px 28px; text-align: center;">
                            <p style="color: #8a96a0; font-size: 12px; line-height: 1.6; margin: 0;">
                                Smiles Dental Surgery<br>
                                Contact form notification email
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`
}

export async function POST(request: Request) {
    try {
        if (!smtpUser || !smtpPass || !contactToEmail) {
            return NextResponse.json(
                { success: false, error: "Email transport is not configured" },
                { status: 500 },
            )
        }

        const body = await request.json()
        const data = contactMessageSchema.parse(body)
        const html = buildContactEmailHtml(data)

        const mailOptions = {
            from: `"Smile Dental Website" <${smtpUser}>`,
            to: contactToEmail,
            replyTo: data.email,
            subject: `Contact Form: ${data.subject}`,
            text: [
                `Name: ${data.name}`,
                `Email: ${data.email}`,
                `Subject: ${data.subject}`,
                "",
                "Message:",
                data.message,
            ].join("\n"),
            html,
        }

        const fallbackPorts: Array<{ port: number; secure: boolean }> = []
        if (smtpPort && Number.isFinite(smtpPort)) {
            fallbackPorts.push({ port: smtpPort, secure: smtpSecure })
        }
        fallbackPorts.push({ port: 465, secure: true }, { port: 587, secure: false })

        const dedupedFallbackPorts = fallbackPorts.filter(
            (option, index, list) =>
                index === list.findIndex((item) => item.port === option.port && item.secure === option.secure),
        )

        let sendError: unknown = null
        for (const option of dedupedFallbackPorts) {
            try {
                const transporter = buildTransport(option.port, option.secure)
                await transporter.sendMail(mailOptions)
                sendError = null
                break
            } catch (error) {
                sendError = error
                console.error(`Contact email failed on ${smtpHost}:${option.port}`, error)
            }
        }

        if (sendError) {
            throw sendError
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Failed to send contact email:", error)
        return NextResponse.json(
            { success: false, error: "Unable to send message right now" },
            { status: 500 },
        )
    }
}
