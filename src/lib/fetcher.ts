import { HttpError } from "./errors/HttpError";

export const fetcher = async (url: string): Promise<unknown> => {
  const res = await fetch(url);

  if (res.status < 200 || res.status >= 300) {
    const info = await res.json();
    throw new HttpError(
      res.status,
      info,
      "An error occurred while fetching the data."
    );
  }

  return res.json();
};
