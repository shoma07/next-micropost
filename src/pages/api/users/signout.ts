import type { NextApiResponse } from "next";
import { app } from "../../../lib/middlewares/app";
import { resetSession } from "../../../lib/middlewares/session";

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = app.post(
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  async (req: CustomNextApiRequest, res: NextApiResponse<GenericResponse>) => {
    req.authenticate();

    resetSession(req, res);
    res.status(200).json({ code: "Ok", message: "" });
  }
);

export default handler;
