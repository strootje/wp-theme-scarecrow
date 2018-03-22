import merge from 'lodash.merge';

import {
	THEME_FETCH_SUCCESS
} from 'Assets/Actions/Theme';

const defaults = state => merge({}, {
	header: {
		name: '...',
		items: []
	},
	sidebar: {
		name: '...',
		items: []
	},
	footer: {
		name: '...',
		items: []
	}
}, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		case THEME_FETCH_SUCCESS:
			if (action.menus.header) {
				state.header = action.menus.header;
			}

			if (action.menus.sidebar) {
				state.sidebar = action.menus.sidebar;
			}

			if (action.menus.footer) {
				state.footer = action.menus.footer;
			}
			return state;

		default:
			return state;
	}
}
