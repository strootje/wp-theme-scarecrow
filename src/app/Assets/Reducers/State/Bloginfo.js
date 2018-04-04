import merge from 'lodash.merge';

const defaults = state => merge({}, {
	title: '...',
	tagline: '...',
	baseurl: '',
	logo: false,

	support: {
		newsletter: {
			enabled: false,
			configured: false
		}
	}
}, theme.info, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		default:
			return state;
	}
}
