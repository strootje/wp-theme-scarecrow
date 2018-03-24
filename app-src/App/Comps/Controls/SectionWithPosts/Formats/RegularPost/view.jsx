import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { RenderContent } from 'Assets/Helpers';

import Content from 'Comps/Controls/Content';
import FancyHeader from 'Comps/Controls/FancyHeader';
import Link from 'Comps/Controls/Link';
import ReadMoreLink from 'Comps/Controls/ReadMoreLink';
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
