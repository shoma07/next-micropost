import type { NextApiResponse } from "next";
import type { User } from "@prisma/client";
import type { RequestHandler } from "next-connect";
import { getUser } from "../../queries/users/getUser";

export const connectAuthentication =
  (): RequestHandler<CustomNextApiRequest, NextApiResponse> =>
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  (req, res, next): void => {
    req.currentUser = async (): Promise<User | null> => {
      if (!req.memolizedCurrentUser) {
        req.memolizedCurrentUser = { loaded: false, data: null };
      }

      if (req.memolizedCurrentUser.loaded) {
        return req.memolizedCurrentUser.data;
      }

      const user = await getUser(req.db, req.session.userId);
      req.memolizedCurrentUser = { loaded: true, data: user };

      return req.memolizedCurrentUser.data;
    };

    req.authenticate = async (): Promise<void> => {
      const user = await req.currentUser();
      if (!user) {
        res.status(401).json({ code: "Unauthorized", message: "" });
      }
    };

    next();
  };
