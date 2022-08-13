import React from "react";
import { useRouter } from "next/router";

const Comments = ({ slug }) => {
  const router = useRouter();
  return <React.Fragment>{/* <div className="fb-comments" data-href={`http://localhost:3000${router.asPath}`} data-width="100%" data-numposts="5"></div> */}</React.Fragment>;
};

export { Comments };
