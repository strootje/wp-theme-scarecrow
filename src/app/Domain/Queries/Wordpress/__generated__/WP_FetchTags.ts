/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchTags
// ====================================================

export interface WP_FetchTags_tags_nodes {
  __typename: "Tag";
  /**
   * The global ID for the post_tag
   */
  id: string;
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

export interface WP_FetchTags_tags {
  __typename: "RootTagsConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (WP_FetchTags_tags_nodes | null)[] | null;
}

export interface WP_FetchTags {
  /**
   * A collection of tags objects
   */
  tags: WP_FetchTags_tags | null;
}
