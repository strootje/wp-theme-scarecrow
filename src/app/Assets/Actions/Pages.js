import gql from 'graphql-tag';
import { SimpleFetch, SimpleFetchById, SimpleFetchAll } from 'Modules/SimpleFetch';

module.exports = {
	...SimpleFetch('page', ({ params, client, resolve, reject }) => client.query({
		query: gql`query( $slug: String! ) {
			pageBy(uri: $slug) {
				pageId
				title
				link
				content
			}
		}`,
		variables: {
			slug: params.slug
		}
	}).then(
		({ data: { pageBy } }) => resolve(pageBy),
		({ message }) => reject(message)
	)),

	...SimpleFetchById('page', ({ pageId, client, resolve, reject }) => client.query({
		query: gql`query( $pageId: Int! ) {
			pageBy(pageId: $pageId) {
				pageId
				title
				link
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
