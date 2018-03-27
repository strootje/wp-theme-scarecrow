import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

class FancyHeaderView extends Component {
	static propTypes = {
		position: types.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
		label: types.string
	}

	static defaultProps = {
		position: false,
		label: ''
	}

	render({ styles, position, label }) {
		return (
			<header class={names(styles.header, styles.fancy, (position && styles.backdrop), (position && (styles[position])))}>
				<h3 class={styles.label}>{label}</h3>
			</header>
		);
	}
}

export default FancyHeaderView;
