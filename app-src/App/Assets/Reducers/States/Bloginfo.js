import merge from 'lodash.merge';

import {
	THEME_FETCH_SUCCESS
} from 'Assets/Actions/Theme';

const defaults = state => merge({}, {
	title: '...',
	tagline: '...',
	logo: false,

	support: {
		newsletter: {
			enabled: false,
			configured: false
		}
	}
}, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		case THEME_FETCH_SUCCESS:
			state.title = action.info.title;
			state.tagline = action.info.tagline;
			state.logo = action.info.logo;
			state.support = action.info.support;
			return state;

		default:
			return state;
	}
}
