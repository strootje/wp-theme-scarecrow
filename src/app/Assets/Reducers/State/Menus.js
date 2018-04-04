import merge from 'lodash.merge';

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
}, theme.menus, state);

export default ( oldstate, action ) => {
	const state = defaults(oldstate);

	switch(action.type) {
		default:
			return state;
	}
}
