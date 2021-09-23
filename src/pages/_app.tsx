import React from "react";
import "../../styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/prefer-readonly-parameter-types */
    value={{ fetcher: (url: string) => fetch(url).then((res) => res.json) }}
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </SWRConfig>
);

export default MyApp;
