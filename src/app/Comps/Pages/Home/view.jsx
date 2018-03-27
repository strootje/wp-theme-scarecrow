import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import Section from 'Comps/Controls/Section';
import SectionWithPosts from 'Comps/Controls/SectionWithPosts';
import SectionWithProjects from 'Comps/Controls/SectionWithProjects';
import Sidebar from 'Comps/Controls/Sidebar';

class PageHomeView extends Component {
	static propTypes = {
	}

	render({ styles }) {
		return (
			<div>
				<Section hero>
					<SectionWithProjects />
				</Section>

				<Section>
					<div className="row">
						<div className="columns nine">
							<SectionWithPosts heroItem={true} itemsPerPage={4} />
						</div>

						<div className="columns three">
							<Sidebar />
						</div>
					</div>
				</Section>
			</div>
		);
	}
}

export default PageHomeView;
