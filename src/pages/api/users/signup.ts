import type { NextApiResponse } from "next";
import { app } from "../../../lib/middlewares/app";
import { regenerateSessionId } from "../../../lib/middlewares/session";
import { signup } from "../../../mutations/users/signup";

const handler = app.post(
  async (
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    req: CustomNextApiRequest,
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    res: NextApiResponse<GetUserResponse | ErrorResponse>
  ) => {
    const { id, email } = await signup(req.db, req.body);
    regenerateSessionId(req);
    req.session.userId = id;
    res.status(201).json({ email });
  }
);

export default handler;
