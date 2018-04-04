import merge from 'lodash.merge';
const _defval = '__TRANSLATE_ME__';

const defaults = state => merge({}, {
	sidebar: {
		newsletter: {
			header: _defval
		}
	},

	readMoreLink: {
		button: {
			text: _defval
		}
	},

	footer: {
		tags: {
			header: _defval
		}
	}
}, locale, state);

export default ( oldstate, action ) => {
	let state = defaults(oldstate);

	switch(action.type) {
		default:
			return state;
	}
}
