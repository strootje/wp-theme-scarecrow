import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import FancyHeader from 'Comps/Controls/FancyHeader';

class ZoomImageView extends Component {
	static propTypes = {
		classes: types.shape({
			wrapperClass: types.string,
			imageClass: types.string
		}),
		header: types.bool,
		title: types.string,
		src: types.string.isRequired
	}

	static defaultProps = {
		classes: {
			wrapperClass: '',
			imageClass: ''
		},
		header: false,
		title: ''
	}

	render({ styles, classes: { wrapperClass, imgClass }, header, title, src }) {
		return (
			<div class={names(styles.zoomWrapper, wrapperClass)}>
				<div class={styles.viewport}>
					{header && (<FancyHeader position='bottomright' label={title} />)}

					<img class={names(imgClass)} src={src} title={title} />
				</div>
			</div>
		);
	}
}

export default ZoomImageView;
