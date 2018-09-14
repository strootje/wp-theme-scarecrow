import * as React from 'react';

import WordpressClient from 'Clients/WordpressClient';

import { ApolloProvider } from 'react-apollo';

type OwnProps = React.HTMLAttributes<ApiProvider> & {
	endpoint: string,
}

export default class ApiProvider extends React.Component<OwnProps> {
	private readonly client: WordpressClient;

	constructor(props: OwnProps) {
		super(props);

		const endpoint = props.endpoint;
		this.client = new WordpressClient(endpoint);
	}

	render(): JSX.Element {
		return (
			<ApolloProvider client={this.client}>
				{this.props.children}
			</ApolloProvider>
		);
	}
}
