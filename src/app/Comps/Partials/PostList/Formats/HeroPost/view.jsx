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
							<span data-prefix='Posted in'><Link label={'devlog'} /></span>
							<span data-prefix='by'>bas@strootje.com</span>
							<span data-prefix='on'>15/03/18</span>
							<span data-prefix='at'>09:00</span>
						</div>
					</footer>
				</div>
			</article>
		);
	}
}
