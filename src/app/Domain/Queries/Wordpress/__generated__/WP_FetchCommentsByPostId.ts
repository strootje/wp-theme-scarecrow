/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchCommentsByPostId
// ====================================================

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node_author_User {
  __typename: "User";
}

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node_author_CommentAuthor {
  __typename: "CommentAuthor";
  /**
   * The name for the comment author.
   */
  name: string | null;
  /**
   * The email for the comment author
   */
  email: string | null;
  /**
   * The url the comment author.
   */
  url: string | null;
}

export type WP_FetchCommentsByPostId_postBy_comments_edges_node_author = WP_FetchCommentsByPostId_postBy_comments_edges_node_author_User | WP_FetchCommentsByPostId_postBy_comments_edges_node_author_CommentAuthor;

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author_User {
  __typename: "User";
}

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author_CommentAuthor {
  __typename: "CommentAuthor";
  /**
   * The name for the comment author.
   */
  name: string | null;
  /**
   * The email for the comment author
   */
  email: string | null;
  /**
   * The url the comment author.
   */
  url: string | null;
}

export type WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author = WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author_User | WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author_CommentAuthor;

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node_parent {
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
  /**
   * The author of the comment
   */
  author: WP_FetchCommentsByPostId_postBy_comments_edges_node_parent_author | null;
}

export interface WP_FetchCommentsByPostId_postBy_comments_edges_node {
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
  /**
   * The author of the comment
   */
  author: WP_FetchCommentsByPostId_postBy_comments_edges_node_author | null;
  /**
   * Parent comment of current comment. This field is equivalent to the WP_Comment instance matching the WP_Comment-&gt;comment_parent ID.
   */
  parent: WP_FetchCommentsByPostId_postBy_comments_edges_node_parent | null;
}

export interface WP_FetchCommentsByPostId_postBy_comments_edges {
  __typename: "PostCommentsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: string;
  /**
   * The item at the end of the edge
   */
  node: WP_FetchCommentsByPostId_postBy_comments_edges_node | null;
}

export interface WP_FetchCommentsByPostId_postBy_comments {
  __typename: "PostCommentsConnection";
  /**
   * Information to aid in pagination
   */
  edges: (WP_FetchCommentsByPostId_postBy_comments_edges | null)[] | null;
}

export interface WP_FetchCommentsByPostId_postBy {
  __typename: "Post";
  /**
   * The globally unique ID for the object
   */
  id: string;
  /**
   * A collection of comment objects
   */
  comments: WP_FetchCommentsByPostId_postBy_comments | null;
}

export interface WP_FetchCommentsByPostId {
  /**
   * A post object
   */
  postBy: WP_FetchCommentsByPostId_postBy | null;
}

export interface WP_FetchCommentsByPostIdVariables {
  postId: number;
  first?: number | null;
  before?: string | null;
  last?: number | null;
  after?: string | null;
}
