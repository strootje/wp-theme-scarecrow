import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import WordpressClient from 'Clients/WordpressClient';

interface OwnProps {
	children: any
}

export default class extends React.Component<OwnProps, {}> {
	private readonly client: WordpressClient;

	constructor( props: OwnProps ) {
		super(props);

		const endpoint = 'localhost:8080';
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
