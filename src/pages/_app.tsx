import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";

/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Component {...pageProps} />
);

export default MyApp;
