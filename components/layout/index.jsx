import React from "react";
import { Header } from "../header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-20 lg:mt-24">{children}</div>
    </React.Fragment>
  );
};

export { Layout };
