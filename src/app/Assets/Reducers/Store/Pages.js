import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	PAGE_FETCH_REQUEST,
	PAGE_FETCH_SUCCESS,
	PAGE_FETCH_FAILURE,
	PAGE_ADD_PAGEINFO_TO_STORE,
	PAGE_ADD_TO_STORE
} from 'Assets/Actions/Pages';

export default BuildReducer('page', {
	[PAGE_FETCH_REQUEST]: state => ({ loading: true }),
	[PAGE_FETCH_SUCCESS]: state => ({ loading: false, errored: false }),
	[PAGE_FETCH_FAILURE]: state => ({ loading: false, errored: true }),
	[PAGE_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[PAGE_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.pageId]: node } })
});
