import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import find from 'lodash.find';
import { FetchPageByUri } from 'Assets/Actions/Pages';

export default CreateContainer(view, styles, {
	mapState: ({ store: { pages: { nodesById }}}, { pageId }) => ({
		page: find(Object.values(nodesById), { uri: pageId })
	}),

	mapDispatch: ( dispatch, { pageId }) => ({
		fetchPage: () => dispatch(FetchPageByUri({ uri: pageId }))
	})
});
