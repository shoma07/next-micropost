import type { NextApiResponse } from "next";
import { app } from "../../../lib/middlewares/app";
import { getPosts } from "../../../queries/posts/getPosts";
import { getPostsInput } from "../../../validations/posts/getPostsInput";

const handler = app.get(
  async (
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    req: CustomNextApiRequest,
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    res: NextApiResponse<GetPostsResponse | ErrorResponse>
  ) => {
    const posts = await getPosts(req.db, getPostsInput.parse(req.body));

    res.status(200).json({ posts });
  }
);

export default handler;
