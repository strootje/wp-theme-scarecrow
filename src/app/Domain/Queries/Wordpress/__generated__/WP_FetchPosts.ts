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

export interface WP_FetchPosts_posts_edges_node_author {
  __typename: "User";
  /**
   * The globally unique identifier for the user
   */
  id: string;
  /**
   * The Id of the user. Equivelant to WP_User-&gt;ID
   */
  userId: number | null;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   */
  name: string | null;
  /**
   * Email of the user. This is equivalent to the WP_User-&gt;user_email property.
   */
  email: string | null;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  nicename: string | null;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  slug: string | null;
  /**
   * A website url that is associated with the user.
   */
  url: string | null;
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
   * Post publishing date.
   */
  date: string | null;
  /**
   * The permalink of the post
   */
  link: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  thumbnail: string | null;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   */
  author: WP_FetchPosts_posts_edges_node_author | null;
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
