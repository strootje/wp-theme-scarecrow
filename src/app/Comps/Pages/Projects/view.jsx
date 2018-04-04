import { Component, h } from 'preact';

import Section from 'Comps/Controls/Section';
import PostList from 'Comps/Partials/PostList';

export default class extends Component {
	render({ styles, projects, fetchProjects }) {
		return (
			<Section>
				<PostList heroItem source={projects} fetch={fetchProjects} />
			</Section>
		);
	}
}
