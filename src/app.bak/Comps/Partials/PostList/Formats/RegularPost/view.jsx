import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { RenderContent } from 'Assets/Helpers';

import Content from 'Comps/Controls/Content';
import FancyHeader from 'Comps/Controls/FancyHeader';
import Link from 'Comps/Controls/Link';
import ReadMoreLink from 'Comps/Controls/ReadMoreLink';
import ZoomImage from 'Comps/Controls/ZoomImage';

export default class extends Component {
	static propTypes = {
		item: types.shape({
			title: types.string.isRequired,
			slug: types.string.isRequired,
			content: types.string.isRequired,
			featuredImage: types.object.isRequired
		}).isRequired
	}

	static defaultProps = {
	}

	render({ styles, item }) {
		return (
			<article class={styles.postItemRegular}>
				<div class={styles.inside}>
					<div class='row'>
						<div class='columns four'>
							<Link to={item.link}>
								<ZoomImage title={item.title} src={item.thumbnail} />
							</Link>
						</div>

						<div class='columns eight'>
							<Link to={item.link}><FancyHeader label={item.title} /></Link>
							<Content page={item} less />
						</div>
					</div>

					<footer>
						<ReadMoreLink to={item.link} />
						<div class={styles.postinfo}>
							<span data-prefix='Posted'></span>
							<span data-prefix='in'><Link to={item.categories.nodes[0].link}>{item.categories.nodes[0].name}</Link></span>
							<span data-prefix='by'>{item.author.username}</span>
							<span data-prefix='on'>{item.date}</span>
						</div>
					</footer>
				</div>
			</article>
		);
	}
}
