import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { IsMobile } from 'Assets/Helpers';

import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import ZoomImage from 'Comps/Controls/ZoomImage';

class SectionWithProjectsView extends Component {
	static propTypes = {
		projects: types.shape({
			data: types.array.isRequired
		}).isRequired,
		fetchProjects: types.func.isRequired
	}

	render({ styles, projects, fetchProjects }) {
		return (
			<List source={projects} filter={p => Object.values(p.projectsById)} fetch={fetchProjects} itemsPerPage={3} render={({ renderItems }) => (
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

export default SectionWithProjectsView;
