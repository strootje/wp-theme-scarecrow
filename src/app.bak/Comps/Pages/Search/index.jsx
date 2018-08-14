import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { Search } from 'Assets/Actions/Search';

export default CreateContainer(view, styles, {
	mapState: ({}, { query }) => ({
		query: query
	}),

	mapDispatch: ( dispatch ) => ({
		search: ( query ) => dispatch(Search({ query: query }))
	})
});
