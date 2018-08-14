import merge from 'lodash.merge';

const defaults = state => merge({}, {
	about: false
}, theme.pages, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		default:
			return state;
	}
}
