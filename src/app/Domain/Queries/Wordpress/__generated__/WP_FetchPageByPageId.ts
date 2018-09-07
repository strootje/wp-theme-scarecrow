/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchPageByPageId
// ====================================================

export interface WP_FetchPageByPageId_pageBy {
  __typename: "Page";
  /**
   * The globally unique ID for the object
   */
  id: string;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   */
  pageId: number;
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
}

export interface WP_FetchPageByPageId {
  /**
   * A page object
   */
  pageBy: WP_FetchPageByPageId_pageBy | null;
}

export interface WP_FetchPageByPageIdVariables {
  pageId: number;
}
