import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { PostDetail } from "../../components/post-detail";
import { Author } from "../../components/author";
import { Comments } from "../../components/comments";
import { LikeShare } from "../../components/like-share";
import { Categories } from "../../components/categories";
import { PostWidget } from "../../components/post-widget";
import { Loader } from "../../components/loader";

import { getPosts, getPostDetails } from "../../services/graphql.service";
import { initFacebookSDK } from "../../services/facebookSDK.service";

const PostDetails = ({ post }) => {
  const router = useRouter();

  useEffect(() => {
    initFacebookSDK();
  });

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <NextSeo title={`Post ${post ? post?.title : ""}`} />
      <div className="container mx-auto px-4 lg:px-10 mb-4 lg:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post?.author} />
            {post && <LikeShare slug={post?.slug} />}
            {post && <Comments href={`https://blog-minh.vercel.app/post/${post?.slug}`} numPosts={5} width="100%" />}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="lg:sticky relative lg:top-24">
              <PostWidget slug={post?.slug} categories={post?.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostDetails;

export async function getServerSideProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();
//   return {
//     paths: posts.edges.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
