import { SimpleContainer } from 'Modules/SimpleFetch';
import view from './view';
import styles from './styles';
import { FetchPage } from 'Assets/Actions/Pages';
export default SimpleContainer(view, styles, {
	mapState: ({ store: { pages: { pagesById } } }, { pageSlug }) => ({
		page: Object.values(pagesById).find(p => p.slug = pageSlug)
	}),

	mapDispatch: ( dispatch, { pageSlug } ) => ({
		fetchPage: () => dispatch(FetchPage({ slug: pageSlug }))
	})
});
