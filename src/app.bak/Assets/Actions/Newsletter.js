import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

module.exports = {
	...BuildActions('newsletter', {
		'Subscribe': ({ params, client, resolve, reject }) => client.mutate({
			variables: params,
			mutation: gql`mutation( $email: String!, $name: String! ) {
				newsletter {
					subscribe(email: $email, member: {
						name: $name
					})
				}
			}`
		}).then(
			({ data: { newsletter }}) => resolve({ email: email }),
			({ message }) => reject(message)
		)
	})
};
