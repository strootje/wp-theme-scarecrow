import { Component, h } from 'preact';

import Section from 'Comps/Controls/Section';
import PostList from 'Comps/Partials/PostList';

export default class extends Component {
	state = {
		working: false,
		query: '',
		pageInfo: {},
		nodes: []
	}

	componentDidUpdate() {
		const { query: prop } = this.props;
		const { working, query: state } = this.state;

		if (!working && prop != state) {
			this.search(prop);
		}
	}

	search = ( query, pageInfo ) => {
		const { search } = this.props;
		const { working } = this.state;

		console.log(query);
		if (!working) {
			this.setState({ working: true });

			search(query).then(action => this.setState({
				working: false,
				query: action.query,
				pageInfo: action.pageInfo,
				nodes: action.nodes || []
			}));
		}
	}

	render({ styles, query }, { pageInfo, nodes }) {
		return (
			<Section>
				<h2>__Search Results for "{query}":</h2>
				<PostList source={nodes} filter={p => p} fetch={() => this.search(query)} />
			</Section>
		);
	}
}
