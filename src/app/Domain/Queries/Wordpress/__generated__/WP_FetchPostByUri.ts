/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchPostByUri
// ====================================================

export interface WP_FetchPostByUri_postBy_categories_nodes {
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

export interface WP_FetchPostByUri_postBy_categories {
  __typename: "PostCategoriesConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (WP_FetchPostByUri_postBy_categories_nodes | null)[] | null;
}

export interface WP_FetchPostByUri_postBy {
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
   * A collection of categories objects
   */
  categories: WP_FetchPostByUri_postBy_categories | null;
}

export interface WP_FetchPostByUri {
  /**
   * A post object
   */
  postBy: WP_FetchPostByUri_postBy | null;
}

export interface WP_FetchPostByUriVariables {
  uri: string;
}
