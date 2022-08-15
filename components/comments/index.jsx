import React from "react";
import { useFacebook } from "../../hooks/useFacebook";

const Comments = ({ width, href, numPosts }) => {
  useFacebook({ addTrack: true });

  return (
    <React.Fragment>
      <div className="fb-comments" data-href={href} data-numposts={numPosts} data-width={width}></div>
    </React.Fragment>
  );
};

export { Comments };
