import React from "react";

import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import Script from "next/script";

import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="fb-root"></div>
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=1880759465463765&autoLogAppEvents=1" nonce="EypwUzcR" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
