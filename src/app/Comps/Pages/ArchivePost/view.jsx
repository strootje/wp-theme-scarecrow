import { Component, h } from 'preact';

import Content from 'Comps/Controls/Content';
import Section from 'Comps/Controls/Section';
import Sidebar from 'Comps/Partials/Sidebar';

export default class extends Component {
	componentWillMount() {
		const { fetchPost } = this.props;
		fetchPost();
	}

	render({ styles, working, post }) {
		return (
			<Section>
				{post ? (<div class='columns nine'>
					<h1>{post.title}</h1>
					<Content page={post} />
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
