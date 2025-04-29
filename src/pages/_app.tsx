import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";

import Head from "next/head";
import "../styles/index.css";
import "../styles/App.css";

// 1. Extend types to support `getLayout`
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// 2. Your main App
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>ACTION BOARD</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
