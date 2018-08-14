import { h, Component } from 'preact';
import types from 'prop-types';

export default class extends Component {
	propTypes = {
		title: types.string.isRequired,
		tagline: types.string.isRequired
	}

	render({ styles, title, tagline }) {
		return (
			<div class={styles.ribbon}>
				<div class={styles.inner}>
					<span class={styles.title}>{title}</span>
					<span class={styles.tagline}>{tagline}</span>
				</div>
			</div>
		);
	}
}
