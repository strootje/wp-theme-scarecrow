import AppFooterView from './view';
import AppFooterStyle from './style';
import { FetchPageById } from 'Assets/Actions/Pages';
import { FetchTags } from 'Assets/Actions/Tags';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ state: { locales, menus, pageIds }, store: { pages, tags } }) => ({
	styles: AppFooterStyle,
	locales: locales.footer,
	aboutPageId: pageIds.about,
	aboutPage: pages.pagesById[pageIds.about],
	tags: tags,
	menu: menus.footer
});

const mapDispatch = ( dispatch ) => ({
	fetchPage: ( pageId ) => dispatch(FetchPageById(pageId)),
	fetchTags: () => dispatch(FetchTags())
});

const mapStateDispatch = ({ aboutPageId, ...props }, { fetchPage, ...dispatches }, ownprops) => {
	return {
		...props, ...dispatches, ...ownprops,
		fetchPage: () => fetchPage(aboutPageId)
	};
}

export default compose(
	connect(mapState, mapDispatch, mapStateDispatch)
)(AppFooterView);
