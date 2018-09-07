/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchPosts
// ====================================================

export interface WP_FetchPosts_posts_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
}

export interface WP_FetchPosts_posts_edges_node_categories_nodes {
  __typename: "Category";
  /**
   * The id field matches the WP_Post-&gt;ID field.
   */
  categoryId: number | null;
  /**
   * The human friendly name of the object.
   */
  name: string | null;
  /**
   * The link to the term
   */
  link: string | null;
  /**
   * The number of objects connected to the object
   */
  count: number | null;
}

export interface WP_FetchPosts_posts_edges_node_categories {
  __typename: "PostCategoriesConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (WP_FetchPosts_posts_edges_node_categories_nodes | null)[] | null;
}

export interface WP_FetchPosts_posts_edges_node {
  __typename: "Post";
  /**
   * The globally unique ID for the object
   */
  id: string;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   */
  postId: number;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * URI path for the resource
   */
  uri: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  thumbnail: string | null;
  /**
   * A collection of categories objects
   */
  categories: WP_FetchPosts_posts_edges_node_categories | null;
}

export interface WP_FetchPosts_posts_edges {
  __typename: "RootPostsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: string;
  /**
   * The item at the end of the edge
   */
  node: WP_FetchPosts_posts_edges_node | null;
}

export interface WP_FetchPosts_posts {
  __typename: "RootPostsConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: WP_FetchPosts_posts_pageInfo;
  /**
   * Information to aid in pagination
   */
  edges: (WP_FetchPosts_posts_edges | null)[] | null;
}

export interface WP_FetchPosts {
  /**
   * A collection of posts objects
   */
  posts: WP_FetchPosts_posts | null;
}

export interface WP_FetchPostsVariables {
  first?: number | null;
  before?: string | null;
  last?: number | null;
  after?: string | null;
}
