import WordpressClient from 'Clients/WordpressClient';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

interface OwnProps {
	endpoint: string,
	children: any
}

export default class extends React.Component<OwnProps, {}> {
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
