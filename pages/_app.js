import React from "react";

import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import Script from "next/script";

import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="fb-root"></div>
      <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=1880759465463765&autoLogAppEvents=1" nonce="Jj2upiOi"></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
