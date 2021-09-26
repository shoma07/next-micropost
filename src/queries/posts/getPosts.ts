import type { PrismaClient } from "@prisma/client";
import { GetPostsInputType } from "../../validations/posts/getPostsInput";

export const getPosts = async (db: PrismaClient, input: GetPostsInputType) => {
  const { prevId } = input;

  return await db.post.findMany({
    take: 10,
    orderBy: { id: "desc" },
    ...(prevId ? { where: { id: { lt: prevId } } } : {}),
  });
};
