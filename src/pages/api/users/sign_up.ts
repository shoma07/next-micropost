import type { NextApiResponse } from "next";
import { app, CustomNextApiRequest } from "../../../lib/middlewares/app";

type ResponseData = Readonly<{
  success: boolean;
}>;

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = app.post(
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  async (req: CustomNextApiRequest, res: NextApiResponse<ResponseData>) => {
    // const { body } = req;
    res.status(201).json({ success: true });
  }
);

export default handler;
