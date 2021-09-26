import React from "react";
import "../../styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { fetcher } from "../lib/fetcher";

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={{ fetcher }}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </SWRConfig>
);

export default MyApp;
