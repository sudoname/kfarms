import { NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { notifyTeam } from "@/lib/notify"

const enquirySchema = z.object({
  type: z.string().trim().min(1).max(120),
  productSlug: z.string().trim().max(80).optional().or(z.literal("")),
  productName: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().max(120).optional().or(z.literal("")),
  deliveryLocation: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please enter a message.").max(4000),
})

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const isAdmin = session.user.role === "ADMIN"
  const enquiries = await prisma.enquiry.findMany({
    where: isAdmin ? undefined : { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: isAdmin
      ? { user: { select: { name: true, email: true, phone: true, organization: true } } }
      : undefined,
  })

  return NextResponse.json({ enquiries })
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = enquirySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    )
  }

  const d = parsed.data
  const enquiry = await prisma.enquiry.create({
    data: {
      userId: session.user.id,
      type: d.type,
      productSlug: d.productSlug || null,
      productName: d.productName || null,
      quantity: d.quantity || null,
      deliveryLocation: d.deliveryLocation || null,
      message: d.message,
    },
  })

  await notifyTeam(`New enquiry: ${d.type}`, [
    `From: ${session.user.name ?? "Unknown"} (${session.user.email ?? "no email"})`,
    `Type: ${d.type}`,
    d.productName ? `Product: ${d.productName}` : "",
    d.quantity ? `Quantity: ${d.quantity}` : "",
    d.deliveryLocation ? `Delivery: ${d.deliveryLocation}` : "",
    "",
    "Message:",
    d.message,
  ])

  return NextResponse.json({ enquiry }, { status: 201 })
}
