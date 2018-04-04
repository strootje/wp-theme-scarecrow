import { Component, h } from 'preact';

import Section from 'Comps/Controls/Section';
import PostList from 'Comps/Partials/PostList';

export default class extends Component {
	render({ styles, posts, fetchPosts }) {
		return (
			<Section>
				<PostList heroItem source={posts} fetch={fetchPosts} />
			</Section>
		);
	}
}
