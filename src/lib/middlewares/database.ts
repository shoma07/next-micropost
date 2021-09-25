import type { NextApiResponse } from "next";
import type { RequestHandler } from "next-connect";
import { db } from "../db";

export const connectDatabase =
  (): RequestHandler<CustomNextApiRequest, NextApiResponse> =>
  /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
  (req, res, next): void => {
    req.db = db;
    next();
  };
