import type { NextApiResponse } from "next";
import session from "express-session";
import { createClient } from "redis";
import connectRedis from "connect-redis";

const RedisStore = connectRedis(session);

const redis = createClient({ url: String(process.env.SESSION_STORE_URL) });

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type */
export const connectSession = () =>
  session({
    name: "next_micropost",
    saveUninitialized: true,
    secret: String(process.env.SECRET_COOKIE_PASSWORD),
    resave: false,
    store: new RedisStore({ client: redis }),
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    },
    proxy: true,
  });

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
export const regenerateSessionId = (req: CustomNextApiRequest): void => {
  const { userId } = req.session;

  req.session.regenerate((error: unknown) => {
    if (error) {
      return;
    }

    req.session.userId = userId;
  });
};

export const resetSession = (
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  req: CustomNextApiRequest,
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  res: NextApiResponse
): void => {
  req.session.regenerate(() => {
    res.end();
  });
};
