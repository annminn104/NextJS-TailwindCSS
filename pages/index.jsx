import React, { useState, useEffect } from "react";

import { Categories } from "../components/categories";
import { PostCard } from "../components/post-card";
import { PostWidget } from "../components/post-widget";
import { getPosts } from "../services/graphql.service";
import { CarouselPosts } from "../components/carousel-posts";

import InfiniteScroll from "react-infinite-scroll-component";

const limit = 5;
export default function Home({ data }) {
  const [posts, setPosts] = useState(data.edges);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const newPosts = await getPosts(limit, posts.length);

    setPosts((posts) => [...posts, ...newPosts.edges]);
  };

  useEffect(() => {
    setHasMore(data.aggregate.count > posts.length ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <div className="container mx-auto px-4 mb-4 lg:px-10 lg:mb-8">
      <CarouselPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 col-span-1">
          {posts && (
            <InfiniteScroll dataLength={posts.length} next={getMorePosts} hasMore={hasMore} loader={<h4>Loading...</h4>}>
              {posts.map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            </InfiniteScroll>
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative lg:top-24">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getPosts(limit, 0);
  return {
    props: {
      data,
    },
  };
}
