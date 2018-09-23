/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WP_CategoryFields
// ====================================================

export interface WP_CategoryFields {
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
