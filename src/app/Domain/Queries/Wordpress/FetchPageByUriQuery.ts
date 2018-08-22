import gql from 'graphql-tag';

export default gql`query WP_FetchPageByUri( $uri: String! ) {
	pageBy( uri: $uri ) {
		id
		title
	}
}`;
