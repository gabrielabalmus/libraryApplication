import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  var db: PrismaClient | undefined;
}

if (!global.db) {
  global.db = new PrismaClient();
  global.db.$connect();
}
prisma = global.db;

export { prisma };
