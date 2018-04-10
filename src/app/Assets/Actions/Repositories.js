import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions({ singular: 'repository', plural: 'repositories' }, {
		FetchRepository: ({ params, client, resolve, reject }) => client.githubQuery({
			variables: params,
			query: gql`query( $owner: String!, $repo: String! ) {
				repository(owner: $owner, name: $repo) {
					id
					name
				}
			}`
		}).then(
			console.log,
			console.error
		)
	})
};
