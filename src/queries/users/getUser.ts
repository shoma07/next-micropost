import type { PrismaClient } from "@prisma/client";

export const getUser = async (db: PrismaClient, userId?: number) => {
  return userId
    ? await db.user.findFirst({
        where: { id: userId },
      })
    : null;
};
