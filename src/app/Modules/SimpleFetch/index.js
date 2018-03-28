import merge from 'lodash.merge';
import find from 'lodash.find';
import { compose } from 'redux';
import { connect } from 'preact-redux';
import { OrderById } from 'Assets/Helpers';

const _capitalize = ( str ) => {
	return (str.charAt(0).toUpperCase() + str.slice(1))
};

const names = ( name ) => {
	const singular = name;
	const plural = `${name}s`;

	return {
		singular: singular,
		singularId: `${singular}Id`,
		capSingular: _capitalize(singular),
		ucSingular: singular.toUpperCase(),

		plural: plural,
		pluralById: `${plural}ById`,
		capPlural: _capitalize(plural),
		ucPlural: plural.toUpperCase()
	};
};

const _canFetch = ( plural ) => ({ store: { [plural]: { working, errored }}}) => {
	return !working && !errored;
};

const _hasNextPage = ( plural ) => ({ store: { [plural]: { pageInfo }}}, paging) => {
	return pageInfo.hasNextPage;
}

const _hasInStore = ( plural ) => ({ store: { [plural]: { [`${plural}ById`]: nodes }}}, nodeId) => {
	if (isNaN(nodeId)) {
		return nodes[nodeId];
	} else {
		return find(nodes, nodeId);
	}
};

export const SimpleFetch = ( typeName, resolve ) => {
	const {
		singular, singularId, capSingular, ucSingular,
		plural
	} = names(typeName);

	const FETCH_REQUEST = `${ucSingular}_FETCH_REQUEST`;
	const _fetchRequest = ( params ) => ({
		type: FETCH_REQUEST,
		params: params,
	});

	const FETCH_SUCCESS = `${ucSingular}_FETCH_SUCCESS`;
	const _fetchSuccess = ( params, node ) => ({
		type: FETCH_SUCCESS,
		params: params,
		[singular]: node
	});

	const FETCH_FAILURE = `${ucSingular}_FETCH_FAILURE`;
	const _fetchFailure = ( params, reason ) => ({
		type: FETCH_FAILURE,
		params: params,
		reason: reason
	});

	return {
		[FETCH_REQUEST]: FETCH_REQUEST,
		[FETCH_SUCCESS]: FETCH_SUCCESS,
		[FETCH_FAILURE]: FETCH_FAILURE,
		[`Fetch${capSingular}`]: ( params ) => ( dispatch, getState, client ) => {
			if (!_canFetch(plural)(getState()) || _hasInStore(plural)(getState(), params)) {
				return;
			}
			
			dispatch(_fetchRequest(params));
			return resolve({
				params: params,
				client: client,
				resolve: (node ) => dispatch(_fetchSuccess(params, node)),
				reject: ( reason ) => dispatch(_fetchFailure(params, reason))
			});
		}
	};
};

export const SimpleFetchById = ( typeName, resolve ) => {
	const {
		singular, singularId, capSingular, ucSingular,
		plural
	} = names(typeName);

	const FETCH_BY_ID_REQUEST = `${ucSingular}_FETCH_BY_ID_REQUEST`;
	const _fetchRequest = ( nodeId ) => ({
		type: FETCH_BY_ID_REQUEST,
		[singularId]: nodeId,
	});

	const FETCH_BY_ID_SUCCESS = `${ucSingular}_FETCH_BY_ID_SUCCESS`;
	const _fetchSuccess = ( nodeId, node ) => ({
		type: FETCH_BY_ID_SUCCESS,
		[singularId]: nodeId,
		[singular]: node
	});

	const FETCH_BY_ID_FAILURE = `${ucSingular}_FETCH_BY_ID_FAILURE`;
	const _fetchFailure = ( nodeId, reason ) => ({
		type: FETCH_BY_ID_FAILURE,
		[singularId]: nodeId,
		reason: reason
	});

	return {
		[FETCH_BY_ID_REQUEST]: FETCH_BY_ID_REQUEST,
		[FETCH_BY_ID_SUCCESS]: FETCH_BY_ID_SUCCESS,
		[FETCH_BY_ID_FAILURE]: FETCH_BY_ID_FAILURE,
		[`Fetch${capSingular}ById`]: ( nodeId ) => ( dispatch, getState, client ) => {
			nodeId = parseInt(nodeId);

			if (isNaN(nodeId)) {
				return dispatch(_fetchFailure(nodeId, `${singularId} is not a number`));
			}

			if (!_canFetch(plural)(getState()) || _hasInStore(plural)(getState(), nodeId)) {
				return;
			}
			
			dispatch(_fetchRequest(nodeId));
			return resolve({
				[singularId]: nodeId,
				client: client,
				resolve: (node ) => dispatch(_fetchSuccess(nodeId, node)),
				reject: ( reason ) => dispatch(_fetchFailure(nodeId, reason))
			});
		}
	};
};

export const SimpleFetchAll = ( typeName, resolve ) => {
	const {
		singular, singularId, ucSingular,
		plural, pluralById, capPlural
	} = names(typeName);

	const FETCH_REQUEST = `${ucSingular}_FETCH_ALL_REQUEST`;
	const _fetchRequest = ( params ) => ({
		type: FETCH_REQUEST,
		params: params
	});

	const FETCH_SUCCESS = `${ucSingular}_FETCH_ALL_SUCCESS`;
	const _fetchSuccess = ( params, pageInfo, nodes ) => ({
		type: FETCH_SUCCESS,
		params: params,
		pageInfo: pageInfo,
		[pluralById]: OrderById(nodes, p => p[singularId])
	});

	const FETCH_FAILURE = `${ucSingular}_FETCH_ALL_FAILURE`;
	const _fetchFailure = ( params, reason ) => ({
		type: FETCH_FAILURE,
		params: params,
		reason: reason
	});

	return {
		[FETCH_REQUEST]: FETCH_REQUEST,
		[FETCH_SUCCESS]: FETCH_SUCCESS,
		[FETCH_FAILURE]: FETCH_FAILURE,
		[`Fetch${capPlural}`]: ( query, paging ) => ( dispatch, getState, client ) => {
			const params = { ... query, ...paging };

			if (!_canFetch(plural)(getState()) || !_hasNextPage(plural)(getState(), paging)) {
				return;
			}
			
			dispatch(_fetchRequest(params));
			return resolve({
				params: params,
				client: client,
				resolve: ( pageInfo, nodes ) => dispatch(_fetchSuccess(params, pageInfo, nodes)),
				reject: ( reason ) => dispatch(_fetchFailure(params, reason))
			});
		}
	};
};

export const SimpleReducer = ( typeName, defstate, actions ) => {
	const {
		pluralById
	} = names(typeName);

	if (actions == null && defstate instanceof Object) {
		actions = defstate;
		defstate = {};
	}

	if (!actions.default) {
		actions['default'] = state => state;
	}

	const _defstate = merge({
		working: false,
		errored: false,
		[pluralById]: {},
		pageInfo: {
			hasNextPage: true,
			hasPreviousPage: false,
			startCursor: '',
			endCursor: ''
		}
	}, {}, defstate);

	return ( state, action ) => {
		const _state = merge({}, _defstate, state);
		const hasAction = actions.hasOwnProperty(action.type);

		return hasAction
			? actions[action.type](_state, action)
			: actions['default'](_state, action);
	}
};

export const SimpleStore = ( typeName ) => {
	const {
		singular, singularId, ucSingular,
		pluralById
	} = names(typeName);

	const FETCH_REQUEST = `${ucSingular}_FETCH_REQUEST`;
	const FETCH_SUCCESS = `${ucSingular}_FETCH_SUCCESS`;
	const FETCH_FAILURE = `${ucSingular}_FETCH_FAILURE`;

	return {
		[FETCH_REQUEST]: ( state, action ) => {
			state.working = true;
			return state;
		},

		[FETCH_SUCCESS]: ( state, action ) => {
			state.working = false;
			state.errored = false;
			state[pluralById][action[singularId]] = { ...state[pluralById][action[singularId]], ...action[singular] };
			return state;
		},

		[FETCH_FAILURE]: ( state, action ) => {
			state.working = false;
			state.errored = true;
			return state;
		}
	};
};

export const SimpleStoreById = ( typeName ) => {
	const {
		singular, singularId, ucSingular,
		pluralById
	} = names(typeName);

	const FETCH_REQUEST = `${ucSingular}_FETCH_BY_ID_REQUEST`;
	const FETCH_SUCCESS = `${ucSingular}_FETCH_BY_ID_SUCCESS`;
	const FETCH_FAILURE = `${ucSingular}_FETCH_BY_ID_FAILURE`;

	return {
		[FETCH_REQUEST]: ( state, action ) => {
			state.working = true;
			return state;
		},

		[FETCH_SUCCESS]: ( state, action ) => {
			state.working = false;
			state.errored = false;
			state[pluralById][action[singularId]] = { ...state[pluralById][action[singularId]], ...action[singular] };
			return state;
		},

		[FETCH_FAILURE]: ( state, action ) => {
			state.working = false;
			state.errored = true;
			return state;
		}
	};
};

export const SimpleStoreAll = ( typeName ) => {
	const {
		ucSingular,
		pluralById
	} = names(typeName);

	const FETCH_REQUEST = `${ucSingular}_FETCH_ALL_REQUEST`;
	const FETCH_SUCCESS = `${ucSingular}_FETCH_ALL_SUCCESS`;
	const FETCH_FAILURE = `${ucSingular}_FETCH_ALL_FAILURE`;

	return {
		[FETCH_REQUEST]: ( state, action ) => {
			state.working = true;
			return state;
		},

		[FETCH_SUCCESS]: ( state, action ) => {
			state.working = false;
			state.errored = false;
			state[pluralById] = { ...state[pluralById], ...action[pluralById] };
			return state;
		},

		[FETCH_FAILURE]: ( state, action ) => {
			state.working = false;
			state.errored = true;
			return state;
		}
	};
};

export const SimpleContainer = ( view, styles, args = {} ) => {
	const {
		mapState = () => ({}),
		mapDispatch = () => ({}),
		mapStateDispatch = () => ({})
	} = args;

	return compose(connect(
		( ...args ) => merge({}, { styles: styles }, mapState(...args)),
		( ...args ) => merge({}, mapDispatch(...args)),
		( state, dispatch, props ) => merge({}, state, dispatch, props, mapStateDispatch(state, dispatch, props))
	))(view);
};
