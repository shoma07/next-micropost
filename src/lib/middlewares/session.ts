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
