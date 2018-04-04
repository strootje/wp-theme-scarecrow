import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	POST_FETCH_REQUEST,
	POST_FETCH_SUCCESS,
	POST_FETCH_FAILURE,
	POST_ADD_PAGEINFO_TO_STORE,
	POST_ADD_TO_STORE
} from 'Assets/Actions/Posts';

export default BuildReducer('post', {
	[POST_FETCH_REQUEST]: state => ({ loading: true }),
	[POST_FETCH_SUCCESS]: state => ({ loading: false, errored: false }),
	[POST_FETCH_FAILURE]: state => ({ loading: false, errored: true }),
	[POST_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[POST_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.postId]: node } })
});
