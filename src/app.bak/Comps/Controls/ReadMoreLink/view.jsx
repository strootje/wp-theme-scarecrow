import { h, Component } from 'preact';
import types from 'prop-types';

import Link from 'Comps/Controls/Link';

export default class extends Component {
	static propTypes = {
		to: types.string.isRequired,
		label: types.string,
	}

	render({ styles, locale, to, label, ...props }) {
		return (
			<Link to={to} class={styles.readmore} {...props}>{label || locale.button.text}</Link>
		);
	}
}
