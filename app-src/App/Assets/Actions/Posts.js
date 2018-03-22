import gql from 'graphql-tag';
import { SimpleFetch, SimpleFetchAll } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...SimpleFetch('post', ({ postId, client, resolve, reject }) => client.query({
		query: gql`query( $postId: Int! ) {
			postBy(postId: $postId) {
				postId
				title
				link
				content
				thumbnail
				thumbnail_hero
			}
		}`,
		variables: {
			postId: postId
		}
	}).then(
		({ data: { postBy } }) => resolve(postBy),
		({ message }) => reject(message)
	)),

	...SimpleFetchAll('post', ({ params, client, resolve, reject }) => client.query({
		query: gql`query {
			posts {
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
		}`,
		variables: {
			...params
		}
	}).then(
		({ data: { posts: { pageInfo, nodes } } }) => resolve(pageInfo, nodes),
		({ message }) => reject(message)
	))
};
