import gql from "graphql-tag";

export default gql`query WP_FetchTags {
	tags {
		nodes {
			id
			name,
			link,
			count
		}
	}
}`;
