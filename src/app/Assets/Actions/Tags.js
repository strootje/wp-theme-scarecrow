import gql from 'graphql-tag';
import { SimpleFetchAll } from 'Modules/SimpleFetch';

module.exports = {
	...SimpleFetchAll('tag', ({ params, client, resolve, reject }) => client.query({
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
					count
					link
				}
			}
		}`,
		variables: {
			...params
		}
	}).then(
		({ data: { tags: { pageInfo, nodes } } }) => resolve(pageInfo, nodes),
		({ message }) => reject(message)
	))
};
