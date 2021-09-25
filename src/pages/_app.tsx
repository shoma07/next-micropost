import React from "react";
import "../../styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (res.status < 200 || res.status >= 300) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/prefer-readonly-parameter-types */
    value={{ fetcher }}
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </SWRConfig>
);

export default MyApp;
