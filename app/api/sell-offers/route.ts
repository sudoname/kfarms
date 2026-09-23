import { NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { notifyTeam } from "@/lib/notify"

const sellOfferSchema = z.object({
  productName: z.string().trim().min(1, "Please enter the product.").max(120),
  category: z.string().trim().max(80).optional().or(z.literal("")),
  quantity: z.string().trim().min(1, "Please enter a quantity.").max(120),
  unit: z.string().trim().max(40).optional().or(z.literal("")),
  askingPrice: z.string().trim().max(80).optional().or(z.literal("")),
  location: z.string().trim().min(1, "Please enter your location.").max(160),
  availableFrom: z.string().trim().optional().or(z.literal("")),
  notes: z.string().trim().max(4000).optional().or(z.literal("")),
})

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const isAdmin = session.user.role === "ADMIN"
  const offers = await prisma.sellOffer.findMany({
    where: isAdmin ? undefined : { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: isAdmin
      ? { user: { select: { name: true, email: true, phone: true, organization: true } } }
      : undefined,
  })

  return NextResponse.json({ offers })
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

  const parsed = sellOfferSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    )
  }

  const d = parsed.data
  const availableFrom = d.availableFrom ? new Date(d.availableFrom) : null

  const offer = await prisma.sellOffer.create({
    data: {
      userId: session.user.id,
      productName: d.productName,
      category: d.category || null,
      quantity: d.quantity,
      unit: d.unit || null,
      askingPrice: d.askingPrice || null,
      location: d.location,
      availableFrom: availableFrom && !isNaN(availableFrom.getTime()) ? availableFrom : null,
      notes: d.notes || null,
    },
  })

  await notifyTeam(`New supplier offer: ${d.productName}`, [
    `From: ${session.user.name ?? "Unknown"} (${session.user.email ?? "no email"})`,
    `Product: ${d.productName}`,
    `Quantity: ${d.quantity}${d.unit ? ` ${d.unit}` : ""}`,
    d.askingPrice ? `Asking price: ${d.askingPrice}` : "",
    `Location: ${d.location}`,
    d.availableFrom ? `Available from: ${d.availableFrom}` : "",
    d.notes ? `\nNotes:\n${d.notes}` : "",
  ])

  return NextResponse.json({ offer }, { status: 201 })
}
