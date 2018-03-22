import merge from 'lodash.merge';

import {
	THEME_FETCH_SUCCESS
} from 'Assets/Actions/Theme';

const defaults = state => merge({}, {
	about: false
}, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		case THEME_FETCH_SUCCESS:
			state.about = action.pages.about;
			return state;

		default:
			return state;
	}
}
