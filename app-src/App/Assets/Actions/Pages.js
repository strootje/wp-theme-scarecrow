import gql from 'graphql-tag';
import { SimpleFetch, SimpleFetchAll } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...SimpleFetch('page', ({ pageId, client, resolve, reject }) => client.query({
		query: gql`query( $pageId: Int! ) {
			pageBy(pageId: $pageId) {
				pageId
				title
				slug
				content
			}
		}`,
		variables: {
			pageId: pageId
		}
	}).then(
		({ data: { pageBy } }) => resolve(pageBy),
		({ message }) => reject(message)
	))
};
