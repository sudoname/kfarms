import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Promotes the user identified by ADMIN_EMAIL to ADMIN.
// Run after that user has registered/logged in at least once.
//   npx prisma db seed
async function main() {
  const email = process.env.ADMIN_EMAIL
  if (!email) {
    console.warn("[seed] ADMIN_EMAIL not set — skipping admin promotion.")
    return
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.warn(
      `[seed] No user found for ${email}. Register/log in with that email first, then re-run the seed.`,
    )
    return
  }

  await prisma.user.update({ where: { email }, data: { role: "ADMIN" } })
  console.log(`[seed] ${email} is now an ADMIN.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
