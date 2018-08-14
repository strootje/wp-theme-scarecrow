import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import ZoomImage from 'Comps/Controls/ZoomImage';

export default class extends Component {
	static propTypes = {
		heroItem: types.bool,
		itemsPerPage: types.number,
		source: types.object.isRequired,
		fetch: types.func.isRequired
	}

	static defaultProps = {
		heroItem: false,
		itemsPerPage: 12
	}

	render({ styles, heroItem, itemsPerPage, source, filter, fetch }) {
		return (
			<List source={source} filter={filter} fetch={fetch} itemsPerPage={itemsPerPage} render={({ renderItems }) => (
				<div class={styles.terms}>{renderItems(({ key, item }) => (
					<Link class={styles.item} to={item.link}>
						<ZoomImage header title={item.title} src={item.thumbnail_banner} />
					</Link>
				))}</div>
			)} />
		);
	}
}
