import type { NextApiResponse } from "next";
import { app } from "../../lib/middlewares/app";

const handler = app.get(
  async (
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    req: CustomNextApiRequest,
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    res: NextApiResponse<GetCsrfResponse | ErrorResponse>
  ) => {
    req.authenticate();

    res.status(200).json({ token: req.csrfToken() });
  }
);

export default handler;
