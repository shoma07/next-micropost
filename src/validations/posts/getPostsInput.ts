import * as z from "zod";

export const getPostsInput = z.object({
  prevId: z.number().gte(0).nullable(),
});

export type GetPostsInputType = z.infer<typeof getPostsInput>;
