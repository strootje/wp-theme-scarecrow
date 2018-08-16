import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from as concat } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

const createSetHeaderLink = ( callback: () => {} ) => new ApolloLink(( operation, forward ) => {
	operation.setContext(({ headers = {} }) => ({
		headers: { ...headers, ...callback() }
	}));

	if (!forward) {
		return null;
	}

	return forward(operation);
});

export default class extends ApolloClient<{}> {
	constructor( endpoint: string = 'https://api.github.com', token: string ) {
		super({
			cache: new InMemoryCache({
			}),

			link: concat([
				createSetHeaderLink(() => ({
					authorization: `Bearer ${token}`
				})),

				createHttpLink({
					uri: `${endpoint}/graphql`
				})
			])
		});
	}
}
