import Head from "next/head";
import { Categories } from "../components/categories";
import { PostCard } from "../components/post-card";
import { PostWidget } from "../components/post-widget";
import { getPosts } from "../services/graphql.service";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 mb-4 lg:px-10 lg:mb-8">
      <Head>
        <title>Test Blog</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
