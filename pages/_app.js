import React from "react";
import { NextSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/index.scss";

import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo title="Blog" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
