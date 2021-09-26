import type { NextApiResponse } from "next";
import { app } from "../../../lib/middlewares/app";
import { regenerateSessionId } from "../../../lib/middlewares/session";
import { getUserByEmailAndPassword } from "../../../queries/users/getUserByEmailAndPassword";

const handler = app.post(
  async (
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    req: CustomNextApiRequest,
    /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
    res: NextApiResponse<GetUserResponse | ErrorResponse>
  ) => {
    const currentUser = await req.currentUser();
    if (currentUser) {
      res
        .status(400)
        .json({ code: "Bad Request", message: "Already signedIn." });
      return;
    }

    const user = await getUserByEmailAndPassword(req.db, req.body);
    if (!user) {
      res.status(401).json({ code: "Unauthorized", message: "" });
      return;
    }

    const { id, email } = user;

    regenerateSessionId(req);
    req.session.userId = id;
    res.status(201).json({ email });
  }
);

export default handler;
