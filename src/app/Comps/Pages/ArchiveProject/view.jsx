import { Component, h } from 'preact';

import Content from 'Comps/Controls/Content';
import Section from 'Comps/Controls/Section';
import Sidebar from 'Comps/Partials/Sidebar';

export default class extends Component {
	componentWillMount() {
		const { fetchProject } = this.props;
		fetchProject();
	}

	render({ styles, working, project }) {
		return (
			<Section>
				{project ? (<div class='columns nine'>
					<h1>{project.title}</h1>
					<Content page={project} />
				</div>) : (
					<div class='columns nine'>testing</div>
				)}

				<div class='columns three'>
					<Sidebar />
				</div>
			</Section>
		);
	}
}
