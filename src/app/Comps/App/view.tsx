import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import gql from "graphql-tag";

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		const { client } = this.props as { client: ApolloClient<{}> };
		client.query({
			query: gql`query {
				categories(first: 5) {
				  nodes {
					 id
					 name
				  }
				}
			 }`
		}).then(console.log).catch(console.error);

		return (<div>
			<p>test</p>
		</div>);
	}
}
