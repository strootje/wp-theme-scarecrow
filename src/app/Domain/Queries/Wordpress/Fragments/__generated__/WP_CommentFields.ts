/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WP_CommentFields
// ====================================================

export interface WP_CommentFields_author_User {
  __typename: "User";
}

export interface WP_CommentFields_author_CommentAuthor {
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

export type WP_CommentFields_author = WP_CommentFields_author_User | WP_CommentFields_author_CommentAuthor;

export interface WP_CommentFields {
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
  author: WP_CommentFields_author | null;
}
