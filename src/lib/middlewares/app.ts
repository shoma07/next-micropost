import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import csurf from "csurf";
import { connectSession } from "./session";

export type CustomNextApiRequest = NextApiRequest &
  Readonly<{
    csrfToken: () => string;
  }>;

export const app = nextConnect<NextApiRequest, NextApiResponse>()
  .use(connectSession())
  .use(csurf());
