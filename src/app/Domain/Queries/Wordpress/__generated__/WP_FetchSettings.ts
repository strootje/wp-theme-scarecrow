/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WP_FetchSettings
// ====================================================

export interface WP_FetchSettings_allSettings {
  __typename: "Settings";
  /**
   * Site title.
   */
  generalSettingsTitle: string | null;
  /**
   * Site tagline.
   */
  generalSettingsDescription: string | null;
  /**
   * Site URL.
   */
  generalSettingsUrl: string | null;
  readingSettingsIsStaticHomepage: boolean | null;
  readingSettingsPageOnFront: number | null;
  readingSettingsPageForPosts: number | null;
  permalinkSettingsPermalinkStructure: string | null;
  permalinkSettingsCategoryBase: string | null;
  permalinkSettingsTagBase: string | null;
  scarecrowSettingsImageProvider: string | null;
  scarecrowSettingsFooterAbout: number | null;
}

export interface WP_FetchSettings {
  allSettings: WP_FetchSettings_allSettings | null;
}
