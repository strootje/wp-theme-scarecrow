import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	PROJECT_FETCH_REQUEST,
	PROJECT_FETCH_SUCCESS,
	PROJECT_FETCH_FAILURE,
	PROJECT_ADD_PAGEINFO_TO_STORE,
	PROJECT_ADD_TO_STORE
} from 'Assets/Actions/Projects';

export default BuildReducer('post', {
	[PROJECT_FETCH_REQUEST]: state => ({ loading: true }),
	[PROJECT_FETCH_SUCCESS]: state => ({ loading: false, errored: false }),
	[PROJECT_FETCH_FAILURE]: state => ({ loading: false, errored: true }),
	[PROJECT_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[PROJECT_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.projectId]: node } })
});
