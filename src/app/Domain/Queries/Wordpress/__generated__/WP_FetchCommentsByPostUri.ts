/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchCommentsByPostUri
// ====================================================

export interface WP_FetchCommentsByPostUri_postBy_comments_edges_node {
  __typename: "Comment";
  /**
   * The globally unique identifier for the user
   */
  id: string;
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the `date` column in SQL.
   */
  date: string | null;
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the `comment_content` column in SQL.
   */
  content: string | null;
}

export interface WP_FetchCommentsByPostUri_postBy_comments_edges {
  __typename: "PostCommentsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: string;
  /**
   * The item at the end of the edge
   */
  node: WP_FetchCommentsByPostUri_postBy_comments_edges_node | null;
}

export interface WP_FetchCommentsByPostUri_postBy_comments {
  __typename: "PostCommentsConnection";
  /**
   * Information to aid in pagination
   */
  edges: (WP_FetchCommentsByPostUri_postBy_comments_edges | null)[] | null;
}

export interface WP_FetchCommentsByPostUri_postBy {
  __typename: "Post";
  /**
   * The globally unique ID for the object
   */
  id: string;
  /**
   * A collection of comment objects
   */
  comments: WP_FetchCommentsByPostUri_postBy_comments | null;
}

export interface WP_FetchCommentsByPostUri {
  /**
   * A post object
   */
  postBy: WP_FetchCommentsByPostUri_postBy | null;
}

export interface WP_FetchCommentsByPostUriVariables {
  uri: string;
}
