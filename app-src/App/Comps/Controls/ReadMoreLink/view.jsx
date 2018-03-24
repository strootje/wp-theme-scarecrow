import { h, Component } from 'preact';
import types from 'prop-types';

class LinkView extends Component {
	static propTypes = {
		to: types.string.isRequired,
		label: types.string,
	}

	render({ styles, locale, to, label, ...props }) {
		return (
			<a href={to} class={styles.readmore} {...props}>{label || locale.button.text}</a>
		);
	}
}

export default LinkView;
