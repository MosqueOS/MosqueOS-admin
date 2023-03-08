import { prisma } from "@/prisma/client"

export async function getUserWithRoles(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      admins: true,
    },
  })
}
