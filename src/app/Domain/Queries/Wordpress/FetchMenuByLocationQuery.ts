import gql from "graphql-tag";

export default gql`query WP_FetchMenuByLocation( $location: MenuLocation! ) {
	menus( first: 1, where: { location: $location }) {
		nodes {
			id
			name
			menuItems {
				nodes {
					id
					label
					url
					target
					cssClasses
				}
			}
		}
	}
}`;
