import type { NextApiResponse } from "next";
import { withIronSession } from "next-iron-session";
import {
  baseHandler,
  CustomNextApiRequest,
} from "../../lib/middlewares/baseHandler";

type ResponseData = Readonly<{
  token: string;
}>;

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = baseHandler.get(
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  async (req: CustomNextApiRequest, res: NextApiResponse<ResponseData>) => {
    await req.session.save();
    res.status(200).json({ token: req.csrfToken() });
  }
);

export default handler;
