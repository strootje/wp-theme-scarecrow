import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { RenderContent } from 'Assets/Helpers';

import Link from 'Comps/Controls/Link';
import ZoomImage from 'Comps/Controls/ZoomImage';

class HeroPostView extends Component {
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
					<Link to={`/posts/${item.slug}/`}>
						<ZoomImage header title={item.title} src={item.thumbnail_hero} />
					</Link>

					<div class={styles.content} dangerouslySetInnerHTML={{
						__html: RenderContent(item.content)
					}} />
					
					<footer>
						<Link to={`/posts/${item.slug}`} classname={styles.readmore} label='read more' />
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

export default HeroPostView;
