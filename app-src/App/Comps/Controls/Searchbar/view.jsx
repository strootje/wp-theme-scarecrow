import { h, Component } from 'preact';
import types from 'prop-types';
import { route } from 'preact-router';

class SearchbarView extends Component {
	static propTypes = {
		loading: types.bool.isRequired,
		query: types.string.isRequired
	}

	state = {
		delay: 600
	}

	handleChange = ( evt ) => {
		if (this.timer_search) {
			clearTimeout(this.timer_search);
		}

		const trigger = () => {
			route(`/search/${evt.target.value}`, true);
		};
		
		// if the <enter> key is pressed
		if (evt.keyCode == 13) trigger();
		// else this.timer_search = setTimeout(trigger, this.state.delay);
	}

	render({ styles, query }) {
		return (
			<input type='text' class='u-full-width' placeholder='search...'
				onFocus={this.showResults} onBlur={this.hideResults}
				value={query} onKeyDown={this.handleChange} />
		);
	}
}

export default SearchbarView;
