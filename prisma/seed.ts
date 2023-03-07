import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  
    const alice = await prisma.user.upsert({
        where: { email: "alice@prisma.io" },
        update: {},
        create: {
          email: "alice@prisma.io",
          firstName: "Alice",
          lastName: "Smith"
        },
      })
    
      const bob = await prisma.user.upsert({
        where: { email: "bob@prisma.io" },
        update: {},
        create: {
          email: "bob@prisma.io",
          firstName: "Bob",
          lastName: "Smith"
        },
      })
  
  console.log(alice, bob)

  const mosque = await prisma.mosque.create({
    data: {
      name: 'Mosque 1',
      address: {
        addressLineOne: '123 East St',
        city: 'London',
        postcode: 'E1',
      },
      email: 'mosque1@example.com',
      phoneNumber: '555-555-1234',
    },
  });

  const prayerTime = await prisma.prayerTime.create({
    data: {
      day: 1,
      month: 3,
      prayerTimes: {
        fajr: {
          start: '5:30 am',
          jamaah: '6:00 am',
        },
        sunrise: '6:30 am',
        zuhr: {
          start: '12:00 pm',
          jamaah: '1:00 pm',
        },
        asr: {
          start: '3:30 pm',
          jamaah: '4:00 pm',
        },
        maghrib: {
          start: '6:00 pm',
          jamaah: '6:15 pm',
        },
        isha: {
          start: '8:00 pm',
          jamaah: '8:30 pm',
        },
      },
      Mosque: {
        connect: {
          id: mosque.id,
        },
      },
    },
  });

  console.log(prayerTime);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })