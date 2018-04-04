import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import Match from 'preact-router/match';
import Link from 'Comps/Controls/Link';

export default class extends Component {
	static propTypes = {
		to: types.string,
		activeClass: types.string
	}

	static defaultProps = {
		to: '#',
		activeClass: false
	}

	render({ styles, to, class: classes, active, ...props }) {
		return (
			<Match path={to}>{({ matches }) => (
				<Link to={to} class={names(classes, (matches && active))} {...props} />
			)}</Match>
		);
	}
}
