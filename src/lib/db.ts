import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

export const db: PrismaClient = ((): PrismaClient => {
  if (process.env.NODE_ENV === "production") {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
    return new PrismaClient();
  }
  if (!global.db) {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
    global.db = new PrismaClient({
      log: ["query", "error", "info", "warn"],
    });
  }
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
  return global.db;
})();
