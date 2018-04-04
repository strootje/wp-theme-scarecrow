import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	TAG_FETCH_REQUEST,
	TAG_FETCH_SUCCESS,
	TAG_FETCH_FAILURE,
	TAG_ADD_PAGEINFO_TO_STORE,
	TAG_ADD_TO_STORE
} from 'Assets/Actions/Tags';

export default BuildReducer('tag', {
	[TAG_FETCH_REQUEST]: state => ({ loading: true }),
	[TAG_FETCH_SUCCESS]: state => ({ loading: false, errored: false }),
	[TAG_FETCH_FAILURE]: state => ({ loading: false, errored: true }),
	[TAG_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[TAG_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.tagId]: node } })
});
