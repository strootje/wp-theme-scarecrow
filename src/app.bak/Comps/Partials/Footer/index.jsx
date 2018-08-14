import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchPageById } from 'Assets/Actions/Pages';
import { FetchTags } from 'Assets/Actions/Tags';

export default CreateContainer(view, styles, {
	mapState: ({ state: { locales, pageIds, menus: { footer }}, store: { tags, pages: { nodesById }}}) => ({
		locale: locales.footer,
		aboutPageId: pageIds.about,
		aboutPage: nodesById[pageIds.about],
		tags: tags,
		menu: footer,
	}),

	mapDispatch: ( dispatch ) => ({
		fetchPage: ( pageId ) => dispatch(FetchPageById({ pageId: pageId })),
		fetchTags: () => dispatch(FetchTags())
	}),

	mergeProps: ({ aboutPageId }, { fetchPage }) => ({
		fetchPage: () => fetchPage(aboutPageId)
	})
});
