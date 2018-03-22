import { h, Component } from 'preact';
import pt from 'prop-types';

import Section from 'Components/Controls/Section';

class PageSearchView extends Component {
	static propTypes = {
		loading: pt.bool,
		results: pt.arrayOf(pt.shape({
			__typename: pt.string.isRequired
		}))
	}

	static defaultProps = {
		loading: false
	}

	static = {
		query: ''
	}

	searchIfNeeded = () => {
		const { search, matches: { query } } = this.props;

		if (query != this.query) {
			this.query = query;
			search(query);
		}
	}

	componentDidMount = () => {
		this.searchIfNeeded();
	}

	componentWillReceiveProps = () => {
		this.searchIfNeeded();
	}

	render({ styles, loading, results }) {
		return (
			<Section header='search results'>
				{(results.length > 0) ? (results.map(record => (
					<div>{record.typeId}</div>
				))) : (loading) ? (
					<pre>laoding...</pre>
				) : (
					<pre>no results</pre>
				)}
			</Section>
		);
	}
}

export default PageSearchView;
