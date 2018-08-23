import gql from "graphql-tag";

export default gql`query WP_FetchSettings {
	allSettings {
		generalSettingsTitle
		generalSettingsDescription
		generalSettingsUrl

		readingSettingsIsStaticHomepage
	}
}`;
