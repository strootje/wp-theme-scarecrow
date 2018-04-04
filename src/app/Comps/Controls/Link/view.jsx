import { h, Component } from 'preact';
import types from 'prop-types';

const parse = ( baseUrl, to ) => {
	if (baseUrl == to) {
		return '/';
	}

	return to.replace(baseUrl, '');
};

export default class extends Component {
	static propTypes = {
		to: types.string,
		children: types.array.isRequired
	}

	static defaultProps = {
		to: '#'
	}

	render({ styles, baseUrl, to, label, children, ...props }) {
		return (
			<a href={parse(baseUrl, to)} {...props}>{children}</a>
		);
	}
}
