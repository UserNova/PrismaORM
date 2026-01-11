import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Utilisateur Test",
    },
  });

  console.log("Utilisateur créé :", newUser);

  const users = await prisma.user.findMany();
  console.log("Tous les utilisateurs :", users);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
