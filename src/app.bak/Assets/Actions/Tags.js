import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('tag', {
		// TODO: reimplement these
		// query: gql`query($after: String, $first: Int, $before: String, $last: Int) {
		// posts(after: $after, first: $first, $before: $before, last: $last) {
		'FetchTags': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query {
				tags {
					pageInfo {
						hasNextPage
						hasPreviousPage
						startCursor
						endCursor
					}
	
					nodes {
						tagId
						name
						link
						count
					}
				}
			}`
		}).then(
			({ data: { tags: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
