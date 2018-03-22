import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { RenderContent } from 'Assets/Helpers';

import FancyHeader from 'Comps/Controls/FancyHeader';
import Link from 'Comps/Controls/Link';
import ZoomImage from 'Comps/Controls/ZoomImage';

class RegularPostView extends Component {
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
							<Link to={`/posts/${item.slug}/`}>
								<ZoomImage title={item.title} src={item.thumbnail} />
							</Link>
						</div>

						<div class='columns eight'>
							<Link to={`/posts/${item.slug}/`}><FancyHeader label={item.title} /></Link>

							<div class={styles.content} dangerouslySetInnerHTML={{
								__html: RenderContent(item.content)
							}} />
						</div>
					</div>

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

export default RegularPostView;
