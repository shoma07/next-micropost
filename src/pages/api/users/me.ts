import type { NextApiResponse } from "next";
import { app } from "../../../lib/middlewares/app";

const handler = app.get(
  async (
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    req: CustomNextApiRequest,
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    res: NextApiResponse<GetUserResponse | ErrorResponse>
  ) => {
    await req.authenticate();

    const user = await req.currentUser();

    if (user) {
      const { email } = user;
      res.status(200).json({ email });
    } else {
      res.status(401).json({ code: "Unauthorized", message: "" });
    }
  }
);

export default handler;
