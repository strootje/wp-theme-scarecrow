import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

class ListView extends Component {
	static propTypes = {
		source: types.shape({
			working: types.bool,
			errored: types.bool
		}).isRequired,
		itemsPerPage: types.number,
		render: types.func.isRequired,

		fetch: types.func,
		filter: types.func
	}

	static defaultProps = {
		source: {
			working: false,
			errored: false
		},
		itemsPerPage: 12,
		fetch: () => {},
		filter: ( source ) => source.nodes,
	}

	getFirstPage = () => {
		const { fetch, itemsPerPage } = this.props;
		fetch({}, { first: itemsPerPage });
	}

	getPreviousPage = () => {
		const { fetch, source: { page }, itemsPerPage } = this.props;
		fetch({}, { last: itemsPerPage, before: page.startCursor });
	}

	getNextPage = () => {
		const { fetch, source: { page }, itemsPerPage } = this.props;
		fetch({}, { first: itemsPerPage, after: page.endCursor });
	}

	getLastPage = () => {
		const { fetch, itemsPerPage } = this.props;
		fetch({}, { last: itemsPerPage });
	}

	componentDidMount = () => {
		this.getFirstPage();
	}

	render({ styles, source, filter, render }) {
		const { working, errored } = source;

		if (working) {
			return (<pre>loading...</pre>);
		}

		if (errored) {
			return (<pre>errored...</pre>);
		}

		return render({
			items: filter(source),
			renderItems: ( renderItem ) => filter(source).map(( item, index ) => renderItem({ key: index, item: item }))
		});
	}
}

export default ListView;
