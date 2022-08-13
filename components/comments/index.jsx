import React from "react";
import { useRouter } from "next/router";

const Comments = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="fb-comments" data-href={`https://blog-minh.vercel.app${router.asPath}`} data-width="100%" data-numposts="5"></div>
    </React.Fragment>
  );
};

export { Comments };
