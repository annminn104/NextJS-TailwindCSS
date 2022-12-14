import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <React.Fragment>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-8 lg:pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md pb-96 mb-8">
          <Image src={post.featuredImage.url} layout="fill" alt="" className="object-top absolute h-80 w-full object-contains shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <h1 className="transition duration-700 text-center mb-4 lg:mb-8 cursor-pointer text-am-mcolor hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-4 lg:mb-8 w-full">
          <div className="flex justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8 items-center">
            <Image src={post.author.photo.url} height="30px" width="30px" className="align-middle rounded-full" alt={post.author.name} />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-am-mcolor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-4 lg:mb-8">{post.excerpt}</p>
        <div className="text-center">
          <Link href={`/post/${encodeURIComponent(post.slug)}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 hover:opacity-80 shadow-lg hover:shadow-am-mcolor/50 inline-block bg-am-mcolor text-lg font-medium rounded-lg text-white px-8 py-3 cursor-pointer">Continue Reading</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export { PostCard };
