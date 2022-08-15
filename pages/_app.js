import React from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/index.scss";

import { Layout } from "../components/layout";
import { useFacebook } from "../hooks/useFacebook";

function MyApp({ Component, pageProps }) {
  useFacebook({ addTrack: false });
  return (
    <>
      <Head>
        <title>Test Blog</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
