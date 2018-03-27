import { h, Component } from 'preact';
import types from 'prop-types';

import List from 'Components/Controls/List';
import NavItem from 'Components/Controls/NavItem';
import Section from 'Components/Controls/Section';
import Sidebar from 'Components/Controls/Sidebar';
import ZoomImage from 'Components/Controls/ZoomImage';

class PagePostDetailsView extends Component {
	static propTypes = {
		posts: types.object.isRequired,
		fetchPosts: types.func.isRequired
	}

	componentDidMount = () => {
		const { fetchPostDetails, matches: { postId } } = this.props;
		fetchPostDetails(postId).then(
			({ data }) => this.setState({ post: data })
		);
	}

	render({ styles }, { post }) {
		return post && (
			<div>
				<Section>
					<div className="row">
						<div className="columns nine">
							<ZoomImage header title={post.title} src={post.thumbnail_hero} />

							<div class={styles.content} dangerouslySetInnerHTML={{
								__html: post.content
							}} />
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

export default PagePostDetailsView;
