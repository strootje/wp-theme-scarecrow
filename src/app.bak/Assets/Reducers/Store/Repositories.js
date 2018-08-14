import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	REPOSITORY_FETCH_REQUEST,
	REPOSITORY_FETCH_SUCCESS,
	REPOSITORY_FETCH_FAILURE,
	REPOSITORY_ADD_PAGEINFO_TO_STORE,
	REPOSITORY_ADD_TO_STORE
} from 'Assets/Actions/Repositories';

export default BuildReducer({ singular: 'repository', plural: 'repositories' }, {
	[REPOSITORY_FETCH_REQUEST]: state => ({ working: true }),
	[REPOSITORY_FETCH_SUCCESS]: state => ({ working: false, errored: false }),
	[REPOSITORY_FETCH_FAILURE]: state => ({ working: false, errored: true }),
	[REPOSITORY_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[REPOSITORY_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.id]: node } })
});
