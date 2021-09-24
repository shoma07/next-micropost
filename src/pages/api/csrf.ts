import type { NextApiResponse } from "next";
import { app, CustomNextApiRequest } from "../../lib/middlewares/app";

type ResponseData = Readonly<{
  token: string;
}>;

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = app.get(
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  async (req: CustomNextApiRequest, res: NextApiResponse<ResponseData>) => {
    res.status(200).json({ token: req.csrfToken() });
  }
);

export default handler;
