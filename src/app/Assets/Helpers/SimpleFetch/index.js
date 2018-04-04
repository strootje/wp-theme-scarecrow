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
};

const _hasInStore = ( plural ) => ({ store: { [plural]: { nodesById }}}, params) => {
	return isNaN(params) ? nodesById[params] : find(nodesById, params);
};

export const CreateContainer = ( view, styles, mappers = {}, ...hocs ) => {
	const {
		mapState = () => ({}),
		mapDispatch = () => ({}),
		mergeProps = ( state, dispatch, props ) => ({ ...state, ...dispatch, ...props })
	} = mappers;

	return compose(
		connect(
			( state, props ) => merge({}, { styles: styles }, mapState(state, props)),
			( dispatch, props ) => merge({}, mapDispatch(dispatch, props)),
			( state, dispatch, props ) => merge({}, state, dispatch, props, mergeProps(state, dispatch, props))
		),
		...hocs
	)(view)
};

export const BuildReducer = ( type, reducers ) => {
	const _defstate = {
		working: false,
		errored: false,

		pageInfo: {
			hasNextPage: true,
			hasPreviousPage: false,
			startCursor: '',
			endCursor: ''
		},

		nodesById: {
		}
	};

	return ( state, action ) => {
		if (!reducers[action.type]) {
			reducers[action.type] = state => state;
		}

		const _newstate = merge({}, _defstate, state);
		return merge({}, _newstate, reducers[action.type](_newstate, action));
	};
};

export const BuildActions = ( type, actions ) => {
	const {
		ucSingular, capSingural,
		plural, ucPlural
	} = names(type);

	const _fetch_request = `${ucSingular}_FETCH_REQUEST`;
	const _fetch_success = `${ucSingular}_FETCH_SUCCESS`;
	const _fetch_failure = `${ucSingular}_FETCH_FAILURE`;
	const _store_set_pageinfo = `${ucSingular}_ADD_PAGEINFO_TO_STORE`;
	const _store_add = `${ucSingular}_ADD_TO_STORE`;

	const _fetchRequest = ( params ) => ({
		type: _fetch_request,
		...params
	});

	const _fetchSuccess = ( params ) => ({
		type: _fetch_success,
		...params
	});

	const _fetchFailure = ( params ) => ({
		type: _fetch_failure,
		...params
	});

	const _storeSetPageInfo = ( params ) => ({
		type: _store_set_pageinfo,
		...params
	})

	const _storeAdd = ( params ) => ({
		type: _store_add,
		...params
	});

	const _actions = Object.keys(actions).map(key => ({ [key]: ( params ) => ( dispatch, getState, client ) => {
		const resolve = actions[key];

		if (!_canFetch(plural)(getState())) {
			return;
		}

		dispatch(_fetchRequest(params));
		return resolve({
			params: params,
			client: client,
			resolve: ({ pageInfo, nodes }) => {
				if (pageInfo) {
					dispatch(_storeSetPageInfo({ pageInfo: pageInfo }));
				}

				nodes.map(node => dispatch(_storeAdd({ node: node })));
				return dispatch(_fetchSuccess({ ...params, pageInfo: pageInfo, nodes: nodes }));
			},
			reject: ( reason ) => dispatch(_fetchFailure({ ...params, reason: reason }))
		});
	}}));

	return {
		[_fetch_request]: _fetch_request,
		[_fetch_success]: _fetch_success,
		[_fetch_failure]: _fetch_failure,
		[_store_set_pageinfo]: _store_set_pageinfo,
		[_store_add]: _store_add,
		...(_actions.reduce((cur, next) => ({ ...cur, ...next }), {}))
	};
};
