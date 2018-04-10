import { h, Component } from 'preact';
import { Children } from 'preact-compat';
import PropTypes from 'prop-types';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from as concat } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

const createSetHeaderLink = ( callback ) => new ApolloLink(( operation, forward ) => {
	operation.setContext(({ headers = {} }) => ({
		headers: { ...headers, ...callback() }
	}));

	return forward(operation);
});

class Client extends ApolloClient {
	constructor( endpoint ) {
		super({
			cache: new InMemoryCache({
			}),

			link: concat([
				createHttpLink({
					uri: `${endpoint}/graphql`
				})
			])
		});

		this.github = new ApolloClient({
			cache: new InMemoryCache({
			}),

			link: concat([
				createSetHeaderLink(() => {
					const token = '48da4cba612dad9c412f835f4c8219c68d4e3ba9';
					return {
						authorization: (token ? `Bearer ${token}` : null)
					};
				}),

				createHttpLink({
					uri: `https://api.github.com/graphql`
				})
			])
		});
	}

	githubQuery = ( ...args ) => {
		return this.github.query(...args);
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
