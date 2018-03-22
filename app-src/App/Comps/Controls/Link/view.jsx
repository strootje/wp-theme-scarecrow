import { h, Component } from 'preact';
import types from 'prop-types';

class LinkView extends Component {
	static propTypes = {
		to: types.string,
		label: types.string.isRequired
	}

	static defaultProps = {
		to: '#'
	}

	render({ styles, to, label, children, ...props }) {
		return (
			<a href={to} {...props}>{(children.length > 0 && children) || label}</a>
		);
	}
}

export default LinkView;
