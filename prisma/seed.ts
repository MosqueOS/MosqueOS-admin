import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      firstName: "Alice",
      lastName: "Smith",
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      firstName: "Bob",
      lastName: "Smith",
    },
  })

  console.log(alice, bob)

  const mosque = await prisma.mosque.create({
    data: {
      name: `${faker.address.cityName()} Mosque`,
      address: {
        addressLineOne: faker.address.streetAddress(),
        addressLineTwo: faker.address.street(),
        city: faker.address.city(),
        town: faker.address.cityName(),
        postcode: faker.address.zipCode(),
      },
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    },
  })

  console.log(`New Mosque added: ${mosque.name}`)
  console.log(mosque)

  console.log(`Starting prayer time generation for ${mosque.name}...`)

  const monthPrayerConfigs = [
    { name: "January", numberOfDays: 31 },
    { name: "February", numberOfDays: 29 },
    { name: "March", numberOfDays: 31 },
    { name: "April", numberOfDays: 30 },
    { name: "May", numberOfDays: 31 },
    { name: "June", numberOfDays: 30 },
    { name: "July", numberOfDays: 31 },
    { name: "August", numberOfDays: 31 },
    { name: "September", numberOfDays: 30 },
    { name: "October", numberOfDays: 31 },
    { name: "November", numberOfDays: 30 },
    { name: "December", numberOfDays: 31 },
  ]

  monthPrayerConfigs.forEach((month, index) => {
    const monthIndex = index + 1

    Array.from({ length: month.numberOfDays }, (_, i) => i + 1).forEach(
      async (dayIndex) => {
        prisma.prayerTime
          .create({
            data: {
              day: dayIndex,
              month: monthIndex,
              prayerTimes: {
                fajr: {
                  start: "5:30 am",
                  jamaah: "6:00 am",
                },
                sunrise: "6:30 am",
                zuhr: {
                  start: "12:00 pm",
                  jamaah: "1:00 pm",
                },
                asr: {
                  start: "3:30 pm",
                  jamaah: "4:00 pm",
                },
                maghrib: {
                  start: "6:00 pm",
                  jamaah: "6:15 pm",
                },
                isha: {
                  start: "8:00 pm",
                  jamaah: "8:30 pm",
                },
              },
              Mosque: {
                connect: {
                  id: mosque.id,
                },
              },
            },
          })
          .then(() => {
            console.log(`Added ${mosque.name} ${month.name}/${dayIndex}`)
          })
      },
    )
  })
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
