import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('search', {
		'Search': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($after: String, $first: Int, $before: String, $last: Int, $query: String!) {
				posts(after: $after, first: $first, before: $before, last: $last, where: { search: $query, typeIn: [ "post", "project" ] }) {
					pageInfo {
						hasNextPage
						hasPreviousPage
						startCursor
						endCursor
					}
					
					nodes {
						postId
						title
						link
						content
						thumbnail
						thumbnail_hero
					}
				}
			 }`
		}).then(
			({ data: { posts: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
