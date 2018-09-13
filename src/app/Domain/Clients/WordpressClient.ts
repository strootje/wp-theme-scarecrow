import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { from as concat } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

export default class extends ApolloClient<{}> {
	constructor(endpoint: string) {
		super({
			cache: new InMemoryCache({
			}),

			link: concat([
				createHttpLink({
					uri: `//${endpoint}/graphql`
				})
			])
		});
	}
}
