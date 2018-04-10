import { Component, h } from 'preact';

import Content from 'Comps/Controls/Content';
import Loader from 'Comps/Controls/Loader';
import Section from 'Comps/Controls/Section';
import PostList from 'Comps/Partials/PostList';
import Sidebar from 'Comps/Partials/Sidebar';

export default class extends Component {
	componentWillMount() {
		const { fetchCategory, fetchRepository } = this.props;
		fetchCategory();
		fetchRepository();
	}

	render({ styles, locale, working, category, posts, fetchPosts }) {
		return (
			<Section>
				<div class='columns nine'>
					{category ? (
						<h2>{category.title}</h2>
					) : (
						<Loader />
					)}

					<h4>{locale.posts.header}</h4>
					<PostList source={posts} fetch={fetchPosts} />
				</div>

				<div class='columns three'>
					<Sidebar />
				</div>
			</Section>
		);
	}
}
