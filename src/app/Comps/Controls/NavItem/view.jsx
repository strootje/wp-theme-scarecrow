import { h, Component } from 'preact';
import types from 'prop-types';
import Match from 'preact-router/match';
import Link from 'Comps/Controls/Link';

class NavItemView extends Component {
	static propTypes = {
		to: types.string,
		activeClass: types.string,
		label: types.string.isRequired
	}

	static defaultProps = {
		to: '#',
		activeClass: false
	}

	render({ styles, to, activeClass, simple, label, children }) {
		return (
			<Match path={to}>{({ matches }) => (
				<Link to={to} classname={matches && activeClass}>{(children.length > 0 && children) || label}</Link>
			)}</Match>
		);
	}
}

export default NavItemView;
