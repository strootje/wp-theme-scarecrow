import { Component, h } from 'preact';

import Content from 'Comps/Controls/Content';
import Loader from 'Comps/Controls/Loader';
import Section from 'Comps/Controls/Section';
import ZoomImage from 'Comps/Controls/ZoomImage';
import Sidebar from 'Comps/Partials/Sidebar';

export default class extends Component {
	componentWillMount() {
		const { fetchPost } = this.props;
		fetchPost();
	}

	render({ styles, working, post }) {
		const content = ((!post) ? (<Loader />) : (<div>
			<h1>{post.title}</h1>
			{(post.format == 'image' ? (
				<ZoomImage src={post.featuredImage.sourceUrl} />
			) : (
				<Content page={post} />
			))}
		</div>));

		return (
			<Section>
				<div class='columns nine'>
					{content}
				</div>

				<div class='columns three'>
					<Sidebar />
				</div>
			</Section>
		);
	}
}
