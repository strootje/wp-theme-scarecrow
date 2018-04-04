import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('post', {
		'FetchPostBySlug': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($slug: String!) {
				postBy(slug: $slug) {
					postId
					slug
					title
					link
					content
				}
			}`
		}).then(
			({ data: { postBy } }) => resolve({ nodes: [ postBy ] }),
			({ message }) => reject(message)
		),

		'FetchPostById': ({ params, client, resolve, reject }) => client.query({
			variables: { pageId: parseInt(params.pageId) },
			query: gql`query($postId: Int!) {
				postBy(postId: $postId) {
					postId
					title
					link
					uri
					content
				}
			}`
		}).then(
			({ data: { postBy } }) => resolve({ nodes: [ postBy ] }),
			({ message }) => reject(message)
		),

		// TODO: reimplement these
		// query: gql`query($after: String, $first: Int, $before: String, $last: Int) {
		// posts(after: $after, first: $first, $before: $before, last: $last) {
		'FetchPosts': ({ params, client, resolve, reject }) => client.query({
			variables: params,
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
			}`
		}).then(
			({ data: { posts: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
