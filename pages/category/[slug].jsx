import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { getCategories, getCategoryPost } from "../../services/graphql.service";
import { PostCard } from "../../components/post-card";
import { Categories } from "../../components/categories";
import { Loader } from "../../components/loader";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <NextSeo title={`Category ${posts[0] ? posts[0].node?.categories[0].name : ""}`} />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-24">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CategoryPost;

export async function getServerSideProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// export async function getStaticProps({ params }) {
//   const posts = await getCategoryPost(params.slug);

//   return {
//     props: { posts },
//   };
// }

// export async function getStaticPaths() {
//   const categories = await getCategories();
//   return {
//     paths: categories.map(({ slug }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
