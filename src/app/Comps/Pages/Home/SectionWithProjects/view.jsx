import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import Link from 'Components/Controls/Link';
import List from 'Components/Controls/List';
import ZoomImage from 'Components/Controls/ZoomImage';

class SectionWithProjectsView extends Component {
	static propTypes = {
		projects: types.shape({
			data: types.array.isRequired
		}).isRequired,
		fetchProjects: types.func.isRequired
	}

	render({ styles, projects, fetchProjects }) {
		return (
			<List classname={styles.projects} source={projects} fetch={fetchProjects} itemsPerPage={3} render={({ key, item }) => (
				<article class={styles.item} style={{ order: key ? (10 * key) : 15 }}>
					<div class={styles.inside}><Link to={`/projects/${item.slug}`}>
						<ZoomImage header title={item.title} src={key ? item.thumbnail_banner : item.thumbnail_banner_hero} />
					</Link></div>
				</article>
			)} />
		);
	}
}

export default SectionWithProjectsView;
