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

	parseUrl = ( baseUrl, to ) => {
		if (baseUrl == to) {
			return '/';
		}

		return to.replace(baseUrl, '');
	}

	render({ styles, baseUrl, to, label, children, ...props }) {

		return (
			<a href={this.parseUrl(baseUrl, to)} {...props}>{(children.length > 0 && children) || label}</a>
		);
	}
}

export default LinkView;
