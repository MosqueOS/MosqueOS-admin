import { prisma } from "@/prisma/client"

export async function getPrayerTimesForMosque(mosqueId: string) {
  return await prisma.prayerTime.findMany({
    where: {
      mosqueId,
    },
  })
}
