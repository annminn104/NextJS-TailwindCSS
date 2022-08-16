import React from "react";

const Comments = ({ width, href, numPosts }) => {
  return (
    <React.Fragment>
      <div className="fb-comments" data-href={href} data-numposts={numPosts} data-width={width}></div>
    </React.Fragment>
  );
};

export { Comments };
