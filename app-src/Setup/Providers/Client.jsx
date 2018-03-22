import { h, Component } from 'preact';
import { Children } from 'preact-compat';
import PropTypes from 'prop-types';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from as concat } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

class Client extends ApolloClient {
	constructor( endpoint ) {
		super({
			cache: new InMemoryCache({
			}),

			link: concat([
				createHttpLink({
					uri: `${endpoint}/graphql`,

					fetch: async ( uri, options ) => {
						// TODO: auto token call
						return await fetch(uri, options);
					}
				})
			])
		});
	}
}

class ProviderClient extends Component {
	static propTypes = {
		client: PropTypes.object.isRequired
	}

	static childContextTypes = {
		client: PropTypes.object
	}

	getChildContext() {
		const { client } = this.props;
		return { client: client };
	}

	render() {
		const { children } = this.props;
		return Children.only(children);
	}
}

export default Client;
export const ClientProvider = ProviderClient;
