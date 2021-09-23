import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { ironSession, Session } from "next-iron-session";
import csurf from "csurf";

export type CustomNextApiRequest = NextApiRequest &
  Readonly<{
    csrfToken: () => string;
    session: Session;
  }>;

const session = ironSession({
  cookieName: "next_micropost",
  password: String(process.env.SECRET_COOKIE_PASSWORD),
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'strict',
    path: "/"
  }
});

const csrfProtection = csurf();

export const baseHandler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(session)
  .use(csrfProtection);
