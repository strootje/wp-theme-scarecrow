import gql from 'graphql-tag';

export const NEWSLETTER_SUBSCRIBE_START = 'NEWSLETTER_SUBSCRIBE_START';
const _subscribeStart = ( email ) => ({
	type: NEWSLETTER_SUBSCRIBE_START,
	email: email
});

export const NEWSLETTER_SUBSCRIBE_SUCCESS = 'NEWSLETTER_SUBSCRIBE_SUCCESS';
const _subscribeSuccess = ( email ) => ({
	type: NEWSLETTER_SUBSCRIBE_SUCCESS,
	email: email
});

export const NEWSLETTER_SUBSCRIBE_FAILURE = 'NEWSLETTER_SUBSCRIBE_FAILURE';
const _subscribeFailure = ( email, reason ) => ({
	type: NEWSLETTER_SUBSCRIBE_FAILURE,
	email: email,
	reason: reason
});

export const Subscribe = ( email, member ) => ( dispatch, getState, client ) => {
	dispatch(_subscribeStart(email));
	return client.mutate({
		mutation: gql`mutation( $email: String!, $name: String! ) {
			newsletter {
				subscribe(email: $email, member: {
					name: $name
				})
			}
		}`,
		variables: {
			email: email,
			name: member.name
		}
	}).then(
		({ data: { newsletter } }) => dispatch(_subscribeSuccess(email)),
		({ message }) => dispatch(_subscribeFailure(email, message))
	);
};
