/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: WP_PostCommentWithPostId
// ====================================================

export interface WP_PostCommentWithPostId_createComment_comment {
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

export interface WP_PostCommentWithPostId_createComment {
  __typename: "CreateCommentPayload";
  comment: WP_PostCommentWithPostId_createComment_comment | null;
}

export interface WP_PostCommentWithPostId {
  createComment: WP_PostCommentWithPostId_createComment | null;
}

export interface WP_PostCommentWithPostIdVariables {
  postId?: number | null;
  date?: string | null;
  author?: string | null;
  authorEmail?: string | null;
  content?: string | null;
}
