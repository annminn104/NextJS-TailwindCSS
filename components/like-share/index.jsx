import React from "react";
import { useRouter } from "next/router";

const LikeShare = ({ slug }) => {
  const router = useRouter();
  return <React.Fragment>{/* <div className="fb-like" data-href={`https://blog-minh.vercel.app${router.asPath}`} data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div> */}</React.Fragment>;
};

export { LikeShare };
