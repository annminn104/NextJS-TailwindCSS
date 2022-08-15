/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { getRecentPosts, getSimilarPosts } from "../../services/graphql.service";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <React.Fragment>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-4 font-semibold border-b pb-4">{slug ? "Related Posts" : "Recent Posts"}</h3>
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 h-16 flex-none border-2 border-purple-500 rounded-full">
              <Image src={post.featuredImage.url} height="60px" width="60px" className="align-middle rounded-full" alt={post.title} />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <Link href={`/post/${encodeURIComponent(post.slug)}`} className="text-md" key={index}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { PostWidget };
