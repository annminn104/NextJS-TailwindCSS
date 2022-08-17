import React, { useState } from "react";
import { NextSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/index.scss";

import { Layout } from "../components/layout";

import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextSeo title="Blog" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools> */}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
