/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WP_UserFields
// ====================================================

export interface WP_UserFields {
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
