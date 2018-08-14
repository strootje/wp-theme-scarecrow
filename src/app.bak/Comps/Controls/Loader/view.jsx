import { h, Component } from 'preact';
import types from 'prop-types';

export default class extends Component {
	render({ styles, errored }) {
		return (
			<pre>{errored ? 'error' : 'loading'} ... </pre>
		);
	}
}
