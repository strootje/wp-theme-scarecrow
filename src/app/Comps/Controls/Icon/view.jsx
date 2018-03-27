import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

class IconView extends Component {
	static propTypes = {
		tag: types.string.isRequired
	}

	render({ styles, tag }) {
		return (
			<i class={tag}></i>
		);
	}
}

export default IconView;
