import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { IsMobile } from 'Assets/Helpers';

import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import ZoomImage from 'Comps/Controls/ZoomImage';

export default class extends Component {
	static propTypes = {
		source: types.shape({
			data: types.array.isRequired
		}).isRequired,
		fetch: types.func.isRequired
	}

	render({ styles, source, fetch, caseId }) {
		const filter = p => Object.values(p.nodesById).filter(p => p.categoryId != caseId).slice(0, 3);

		return (
			<List source={source} filter={filter} fetch={fetch} itemsPerPage={3} render={({ renderItems }) => (
				<div class={styles.projects}>{renderItems(({ key, item }) => (
					<article class={names(styles.item, styles[`n${key+1}`])}>
						<Link to={item.link}>
							<ZoomImage header title={item.title} src={(IsMobile() || key) ? item.thumbnail_banner : item.thumbnail_banner_hero} />
						</Link>
					</article>
				))}</div>
			)} />
		);
	}
}
