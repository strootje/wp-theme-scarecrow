import { BuildReducer } from 'Assets/Helpers/SimpleFetch';

import {
	CATEGORY_FETCH_REQUEST,
	CATEGORY_FETCH_SUCCESS,
	CATEGORY_FETCH_FAILURE,
	CATEGORY_ADD_PAGEINFO_TO_STORE,
	CATEGORY_ADD_TO_STORE
} from 'Assets/Actions/Categories';

export default BuildReducer({ singular: 'category', plural: 'categories' }, {
	[CATEGORY_FETCH_REQUEST]: state => ({ working: true }),
	[CATEGORY_FETCH_SUCCESS]: state => ({ working: false, errored: false }),
	[CATEGORY_FETCH_FAILURE]: state => ({ working: false, errored: true }),
	[CATEGORY_ADD_PAGEINFO_TO_STORE]: ( state, { pageInfo }) => ({ pageInfo: pageInfo }),
	[CATEGORY_ADD_TO_STORE]: ({ nodesById }, { node }) => ({ nodesById: { ...nodesById, [node.categoryId]: node } })
});
