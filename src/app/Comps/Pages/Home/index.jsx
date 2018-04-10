import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchPosts } from 'Assets/Actions/Posts';
import { FetchCategories } from 'Assets/Actions/Categories';

export default CreateContainer(view, styles, {
	mapState: ({ state: { categoryIds }, store: { categories, posts }}) => ({
		caseId: categoryIds.cases,
		categories: categories,
		posts: posts
	}),

	mapDispatch: ( dispatch ) => ({
		fetchCategories: ( caseId ) => dispatch(FetchCategories({ caseId: caseId })),
		fetchPosts: () => dispatch(FetchPosts())
	}),

	mergeProps: ({ caseId }, { fetchCategories, fetchPosts }) => ({
		fetchCategories: () => fetchCategories(parseInt(caseId)),
	})
});
