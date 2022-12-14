import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (limit, offset) => {
  const query = gql`
    query MyQuery($limit: Int!, $offset: Int!) {
      postsConnection(first: $limit, skip: $offset) {
        edges {
          node {
            id
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
        aggregate {
          count
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query, { limit, offset });
  return results.postsConnection;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });
  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getCategoryPost = async (slug, limit, offset) => {
  const query = gql`
    query GetCategoryPost($slug: String!, $limit: Int!, $offset: Int!) {
      postsConnection(where: { categories_some: { slug: $slug } }, first: $limit, skip: $offset) {
        edges {
          node {
            categories {
              name
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          pageSize
          startCursor
        }
        aggregate {
          count
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, limit, offset });
  return result.postsConnection;
};

export const getFeaturedPosts = async (slug) => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
