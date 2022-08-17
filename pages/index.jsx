import React, { useState } from "react";
import { useRouter } from "next/router";

import { Categories } from "../components/categories";
import { PostCard } from "../components/post-card";
import { PostWidget } from "../components/post-widget";
import { getPosts, getPostsPagination } from "../services/graphql.service";
import { CarouselPosts } from "../components/carousel-posts";

import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

const limit = 5;
export default function Home() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery("infiniteCharacters", async ({ pageParam = 1 }) => await getPostsPagination(limit, (pageParam - 1) * limit), {
    getNextPageParam: (pageInfo, page) => {
      if (pageInfo.pageInfo.hasNextPage) {
        return page.length + 1;
      }
    },
  });

  return (
    <div className="container mx-auto px-4 mb-4 lg:px-10 lg:mb-8">
      <CarouselPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 col-span-1">
          {status === "success" && (
            <InfiniteScroll dataLength={data?.pages.length} next={fetchNextPage} hasMore={hasNextPage} loader={<h4>Loading...</h4>}>
              {data?.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.edges.map((post, index) => (
                    <PostCard post={post.node} key={index} />
                  ))}
                </React.Fragment>
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
