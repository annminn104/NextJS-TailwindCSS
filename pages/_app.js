import React from "react";

import "tailwindcss/tailwind.css";
import "../styles/index.scss";

import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;