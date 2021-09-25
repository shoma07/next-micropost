import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import csurf from "csurf";
import { connectSession } from "./session";
import { connectDatabase } from "./database";
import { connectAuthentication } from "./authentication";

export const app = nextConnect<NextApiRequest, NextApiResponse>()
  .use(connectSession())
  .use(csurf())
  .use(connectDatabase())
  .use(connectAuthentication());
