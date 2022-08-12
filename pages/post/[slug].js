import React from "react";
import Head from "next/head";

import { getPosts, getPostDetails } from "../../services/graphql.service";

import { PostDetail } from "../../components/post-detail";
import { Author } from "../../components/author";
import { Comments } from "../../components/comments";
import { CommentsForm } from "../../components/comments-form";
import { Categories } from "../../components/categories";
import { PostWidget } from "../../components/post-widget";

const PostDetails = ({ post, paths }) => {
  // const router = useRouter();

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 lg:px-10 mb-4 lg:mb-8">
        <Head>
          <title>Post: {post.title}</title>
          <link rel="icon" href="favicon.ico"></link>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <Comments slug={post.slug} />
            <CommentsForm slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="lg:sticky relative top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
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
  const posts = await getPosts();
  return {
    props: {
      post: data,
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    },
  };
}