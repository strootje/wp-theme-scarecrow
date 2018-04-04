import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('project', {
		'FetchProjectBySlug': ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query($slug: String!) {
				projectBy(slug: $slug) {
					projectId
					slug
					title
					link
					content
				}
			}`
		}).then(
			({ data: { projectBy } }) => resolve({ nodes: [ projectBy ] }),
			({ message }) => reject(message)
		),

		'FetchProjectById': ({ params, client, resolve, reject }) => client.query({
			variables: { pageId: parseInt(params.pageId) },
			query: gql`query($projectId: Int!) {
				projectBy(projectId: $projectId) {
					projectId
					title
					link
					uri
					content
				}
			}`
		}).then(
			({ data: { projectBy } }) => resolve({ nodes: [ projectBy ] }),
			({ message }) => reject(message)
		),

		// TODO: reimplement these
		// query: gql`query($after: String, $first: Int, $before: String, $last: Int) {
		// posts(after: $after, first: $first, $before: $before, last: $last) {
		'FetchProjects': ({ params, client, resolve, reject }) => client.query({
			variables: params,
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
						content
						thumbnail
						thumbnail_hero
						thumbnail_banner
						thumbnail_banner_hero
					}
				}
			}`
		}).then(
			({ data: { projects: { pageInfo, nodes } }}) => resolve({ pageInfo: pageInfo, nodes: nodes }),
			({ message }) => reject(message)
		)
	})
};
