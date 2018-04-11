import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('post', {
		'FetchPostBySlug': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($slug: String!) {
				postBy(slug: $slug) {
					postId
					date
					title
					slug
					link
					format
					content
					thumbnail
					thumbnail_hero
					
					featuredImage {
						sourceUrl
					 }
					
					categories(first: 1, where: { shouldOutputInFlatList: true }) {
						nodes {
							name
							link
						}
					}

					author {
						username
					}
				}
			}`
		}).then(
			({ data: { postBy } }) => resolve({ nodes: [ postBy ] }),
			({ message }) => reject(message)
		),

		'FetchPostById': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($postId: Int!) {
				postBy(postId: $postId) {
					postId
					date
					title
					slug
					link
					format
					content
					thumbnail
					thumbnail_hero
					
					featuredImage {
						sourceUrl
					 }
					
					categories(first: 1, where: { shouldOutputInFlatList: true }) {
						nodes {
							name
							link
						}
					}

					author {
						username
					}
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
				posts( where: { orderby: { field: DATE, order: DESC }}) {
					pageInfo {
						hasNextPage
						hasPreviousPage
						startCursor
						endCursor
					}
	
					nodes {
						postId
						date
						title
						slug
						link
						format
						content
						thumbnail
						thumbnail_hero
						
						featuredImage {
							sourceUrl
						 }
						
						categories(first: 1, where: { shouldOutputInFlatList: true }) {
							nodes {
								name
								link
							}
						}

						author {
							username
						}
					}
				}
			}`
		}).then(
			({ data: { posts: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		),

		// TODO: reimplement these
		// query: gql`query($after: String, $first: Int, $before: String, $last: Int) {
		// posts(after: $after, first: $first, $before: $before, last: $last) {
		'FetchPostsByCategory': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query( $categoryId: String! ) {
				posts( where: { categoryName: $categoryId, orderby: { field: DATE, order: DESC }}) {
					pageInfo {
						hasNextPage
						hasPreviousPage
						startCursor
						endCursor
					}
	
					nodes {
						postId
						date
						title
						slug
						link
						format
						content
						thumbnail
						thumbnail_hero
						
						featuredImage {
							sourceUrl
						 }
						
						categories(first: 1, where: { shouldOutputInFlatList: true }) {
							nodes {
								name
								link
							}
						}

						author {
							username
						}
					}
				}
			}`
		}).then(
			({ data: { posts: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
