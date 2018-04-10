import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { RenderContent } from 'Assets/Helpers';

import Content from 'Comps/Controls/Content';
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
			<article class={names(styles.postItemHero)}>
				<div class={styles.inside}>
					<Link to={item.link}>
						<ZoomImage header title={item.title} src={item.thumbnail_hero} />
					</Link>

					<Content page={item} less />
					
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
