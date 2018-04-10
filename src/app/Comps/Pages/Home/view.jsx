import { Component, h } from 'preact';
import types from 'prop-types';

import ProjectList from 'Comps/Controls/ProjectList';
import Section from 'Comps/Controls/Section';
import PostList from 'Comps/Partials/PostList';
import Sidebar from 'Comps/Partials/Sidebar';

export default class extends Component {
	render({ styles, categories, fetchCategories, posts, fetchPosts }) {
		return (
			<div>
				<Section hero>
					<ProjectList source={categories} fetch={fetchCategories} />
				</Section>

				<Section>
					<div class='columns nine'>
						<PostList heroItem source={posts} fetch={fetchPosts} />
					</div>

					<div class='columns three'>
						<Sidebar />
					</div>
				</Section>
			</div>
		);
	}
}
