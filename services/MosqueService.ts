import { prisma } from "@/prisma/client"

export async function getMosque(id: string) {
  return await prisma.mosque.findFirst({
    where: {
      id: id,
    },
  })
}
