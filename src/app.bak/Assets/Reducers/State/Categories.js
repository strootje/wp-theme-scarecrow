import merge from 'lodash.merge';

const defaults = state => merge({}, {
	cases: false
}, theme.categories, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		default:
			return state;
	}
}
