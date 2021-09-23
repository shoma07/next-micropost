import type { NextApiResponse } from "next";
import {
  baseHandler,
  CustomNextApiRequest,
} from "../../../lib/middlewares/baseHandler";

type ResponseData = Readonly<{
  success: boolean;
}>;

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = baseHandler.post(
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  (req: CustomNextApiRequest, res: NextApiResponse<ResponseData>) => {
    const { body } = req;
    console.log(req.body);
    res.status(201).json({ success: true });
  }
);

export default handler;
