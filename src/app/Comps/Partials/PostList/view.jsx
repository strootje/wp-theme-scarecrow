import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import List from 'Comps/Controls/List';
import HeroPost from './Formats/HeroPost';
import RegularPost from './Formats/RegularPost';

export default class extends Component {
	static propTypes = {
		heroItem: types.bool,
		itemsPerPage: types.number,
		posts: types.object.isRequired,
		fetchPosts: types.func.isRequired
	}

	static defaultProps = {
		heroItem: false,
		itemsPerPage: 12
	}

	render({ styles, heroItem, itemsPerPage, source, filter, fetch }) {
		return (
			<List source={source} filter={filter} fetch={fetch} itemsPerPage={itemsPerPage} render={({ renderItems }) => (
				<div class={styles.posts}>{renderItems(({ key, item }) => (
					(heroItem && !key) ? (
						<HeroPost item={item} />
					) : (
						<RegularPost item={item} />
					)
				))}</div>
			)} />
		);
	}
}
