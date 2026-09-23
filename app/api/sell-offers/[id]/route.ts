import { NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

const patchSchema = z.object({
  status: z.enum(["NEW", "IN_REVIEW", "RESPONDED", "CLOSED"]),
})

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = patchSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 })
  }

  const offer = await prisma.sellOffer.update({
    where: { id: params.id },
    data: { status: parsed.data.status },
  })

  return NextResponse.json({ offer })
}
