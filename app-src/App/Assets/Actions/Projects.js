import gql from 'graphql-tag';
import { SimpleFetch, SimpleFetchAll } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...SimpleFetch('project', ({ projectId, client, resolve, reject }) => client.query({
		query: gql`query( $projectId: Int! ) {
			projectBy(projectId: $projectId) {
				projectId
				title
				link
				content
			}
		}`,
		variables: {
			projectId: projectId
		}
	}).then(
		({ data: { projectBy } }) => resolve(projectBy),
		({ message }) => reject(message)
	)),

	...SimpleFetchAll('project', ({ params, client, resolve, reject }) => client.query({
		query: gql`query {
			projects {
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}

				nodes {
					projectId
					title
					link
					thumbnail_banner
					thumbnail_banner_hero
				}
			}
		}`,
		variables: {
			...params
		}
	}).then(
		({ data: { projects: { pageInfo, nodes } } }) => resolve(pageInfo, nodes),
		({ message }) => reject(message)
	))
};
