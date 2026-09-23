import { Resend } from "resend"
import { COMPANY } from "@/lib/farm-data"

// Sends internal notification emails. No-ops (logs) if RESEND_API_KEY is unset
// so local development works without email configured.
const apiKey = process.env.RESEND_API_KEY
const resend = apiKey ? new Resend(apiKey) : null

const FROM = process.env.EMAIL_FROM ?? "Khan Farms <onboarding@resend.dev>"
const TO = process.env.ENQUIRY_NOTIFY_EMAIL ?? COMPANY.email

export async function notifyTeam(subject: string, lines: string[]) {
  const text = lines.filter(Boolean).join("\n")

  if (!resend) {
    console.info(`[notify] (email disabled) ${subject}\n${text}`)
    return
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      text,
    })
  } catch (err) {
    // Never let a notification failure break the request.
    console.error("[notify] failed to send email:", err)
  }
}
