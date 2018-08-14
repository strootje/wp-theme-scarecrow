import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('page', {
		'FetchPageByUri': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($uri: String!) {
				pageBy(uri: $uri) {
					pageId
					title
					link
					uri
					content
				}
			}`
		}).then(
			({ data: { pageBy } }) => resolve({ nodes: [ pageBy ] }),
			({ message }) => reject(message)
		),

		'FetchPageById': ({ params, client, resolve, reject }) => client.query({
			variables: { pageId: parseInt(params.pageId) },
			query: gql`query($pageId: Int!) {
				pageBy(pageId: $pageId) {
					pageId
					title
					link
					uri
					content
				}
			}`
		}).then(
			({ data: { pageBy } }) => resolve({ nodes: [ pageBy ] }),
			({ message }) => reject(message)
		),

		'FetchPages': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($after: String, $first: Int, $before: String, $last: Int) {
				pages(after: $after, first: $first, $before: $before, last: $last) {
					pageInfo {
						hasNextPage
						hasPreviousPage
						startCursor
						endCursor
					}
	
					nodes {
						pageId
						title
						uri
					}
				}
			}`
		}).then(
			({ data: { pages: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
