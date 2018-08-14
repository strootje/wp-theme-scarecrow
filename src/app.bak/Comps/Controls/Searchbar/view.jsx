import { h, Component } from 'preact';
import types from 'prop-types';
import { route } from 'preact-router';

export default class extends Component {
	static propTypes = {
		loading: types.bool.isRequired,
		query: types.string.isRequired
	}

	handleChange = ( evt ) => {
		const trigger = () => {
			route(`/search/${evt.target.value}`, true);
		};
		
		if (evt.keyCode == 13) {
			trigger();
		}
	}

	render({ styles, query }) {
		return (
			<input type='text' class='u-full-width' placeholder='search...'
				onFocus={this.showResults} onBlur={this.hideResults}
				value={query} onKeyDown={this.handleChange} />
		);
	}
}
