import { h, Component } from 'preact';
import types from 'prop-types';

import List from 'Comps/Controls/List';
import NavItem from 'Comps/Controls/NavItem';
import Section from 'Comps/Controls/Section';
import SectionWithPosts from 'Comps/Controls/SectionWithPosts';
import Sidebar from 'Comps/Controls/Sidebar';

class PagePostsView extends Component {
	static propTypes = {
	}

	render({ styles }) {
		return (
			<Section>
				<div className="row">
					<div className="columns nine">
						<SectionWithPosts />
					</div>

					<div className="columns three">
						<Sidebar />
					</div>
				</div>
			</Section>
		);
	}
}

export default PagePostsView;
