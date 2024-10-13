import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clearDb() {
  prisma.request.deleteMany();
}
