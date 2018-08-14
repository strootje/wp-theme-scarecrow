import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import List from 'Comps/Controls/List';
import HeroPost from './Formats/HeroPost';
import ImagePost from './Formats/ImagePost';
import RegularPost from './Formats/RegularPost';

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
				<div class={styles.posts}>{renderItems(({ key, item }) => (
					(heroItem && !key) ? (
						<HeroPost item={item} />
					) : (
						(item.format == 'image') ? (
							<ImagePost item={item} />
						) : (
							<RegularPost item={item} />
						)
					)
				))}</div>
			)} />
		);
	}
}
