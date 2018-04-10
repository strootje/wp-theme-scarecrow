import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchCategories } from 'Assets/Actions/Categories';

export default CreateContainer(view, styles, {
	mapState: ({ state: { categoryIds }, store: { categories }}) => ({
		caseId: categoryIds.cases,
		categories: categories
	}),

	mapDispatch: ( dispatch ) => ({
		fetchCategories: ( caseId ) => dispatch(FetchCategories({ caseId: caseId }))
	}),

	mergeProps: ({ caseId }, { fetchCategories }) => ({
		fetchCategories: () => fetchCategories(parseInt(caseId))
	})
});
