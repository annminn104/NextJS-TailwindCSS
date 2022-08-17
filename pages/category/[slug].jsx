import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { getCategoryPost } from "../../services/graphql.service";
import { PostCard } from "../../components/post-card";
import { Categories } from "../../components/categories";
import { Loader } from "../../components/loader";

import InfiniteScroll from "react-infinite-scroll-component";

const limit = 1;

const CategoryPost = ({ slug, data }) => {
  console.log(data);
  const [categoryPost, setCategoryPost] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const getMorePosts = async () => {
    const newDataCategoryPost = await getCategoryPost(slug, limit, categoryPost.length);

    // setCategoryPost((categoryPost) => [...categoryPost, ...newDataCategoryPost]);
    console.log(categoryPost);
  };

  useEffect(() => {
    setHasMore(data.aggregate.count > categoryPost.length ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryPost]);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <NextSeo title={"Caterory"} />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-1 lg:col-span-8">
            {/* {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))} */}
            {/* <InfiniteScroll dataLength={categoryPost.length} next={getMorePosts} hasMore={hasMore} loader={<h4>Loading...</h4>}>
              {categoryPost.map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            </InfiniteScroll> */}
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
  const offset = 0;
  const data = await getCategoryPost(params.slug, limit, offset);
  const slug = params.slug;
  return {
    props: { data, slug },
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
