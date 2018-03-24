import { h, Component } from 'preact';
import types from 'prop-types';

import ReadMoreLink from 'Comps/Controls/ReadMoreLink';

class ContentView extends Component {
	static propTypes = {
		less: types.bool,
		more: types.bool,
		page: types.shape({
			content: types.string.isRequired,
			link: types.string
		}).isRequired
	}

	static defaultProps = {
		less: false,
		more: false
	}

	render({ styles, less, more, page }) {
		let content = page.content;

		if (less) {
			content = content.substring(0, content.indexOf('<!--more-->'));
		}

		return (
			<div>
				<div dangerouslySetInnerHTML={{ __html: content }} />
				{(less && more) && (<ReadMoreLink to={page.link} />)}
			</div>
		);
	}
}

export default ContentView;
