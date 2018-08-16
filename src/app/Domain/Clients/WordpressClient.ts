import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { from as concat } from 'apollo-link';

export default class extends ApolloClient<{}> {
	constructor( endpoint: string ) {
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
