// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void =>
  res.status(200).json({ name: "John Doe" });

export default handler;
