import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <React.Fragment>
      {author ? (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
          <div className="absolute left-0 right-0 -top-14">
            <Image src={author?.photo.url} width="100px" height="100px" className="align-middle rounded-full" alt={author?.name} />
          </div>
          <h3 className="text-white my-4 text-xl font-bold">{author?.name}</h3>
          <p className="text-white tetx-lg">{author?.bio}</p>
        </div>
      ) : (
        <h3 className="uppercase text-xl">Data Not Found</h3>
      )}
    </React.Fragment>
  );
};

export { Author };
