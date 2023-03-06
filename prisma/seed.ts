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