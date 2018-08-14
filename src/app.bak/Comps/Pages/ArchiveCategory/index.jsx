import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import find from 'lodash.find';
import { FetchCategoryBySlug } from 'Assets/Actions/Categories';
import { FetchRepository } from 'Assets/Actions/Repositories';
import { FetchPostsByCategory } from 'Assets/Actions/Posts';

export default CreateContainer(view, styles, {
	mapState: ({ state: { locales, categoryIds }, store: { categories: { working, nodesById }, posts }}, { categoryId }) => ({
		locale: locales.archive,
		caseId: categoryIds.cases,
		working: working,
		category: find(Object.values(nodesById), { slug: categoryId }),
		posts: posts
	}),

	mapDispatch: ( dispatch, { categoryId }) => ({
		fetchCategory: ( caseId ) => dispatch(FetchCategoryBySlug({ caseId: caseId, slug: categoryId })),
		fetchRepository: () => dispatch(FetchRepository({ owner: 'strootje', repo: 'wp-theme-scarecrow' })),
		fetchPosts: () => dispatch(FetchPostsByCategory({ categoryId: categoryId }))
	}),

	mergeProps: ({ caseId }, { fetchCategory, fetchPosts }) => ({
		fetchCategory: () => fetchCategory(parseInt(caseId))
	})
});
