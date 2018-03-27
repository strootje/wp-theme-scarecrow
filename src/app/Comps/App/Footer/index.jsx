import AppFooterView from './view';
import AppFooterStyle from './style';
import { FetchPage } from 'Assets/Actions/Pages';
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
	fetchPage: ( pageId ) => dispatch(FetchPage(pageId)),
	fetchTags: () => dispatch(FetchTags())
});

const mapStateDispatch = ({ aboutPageId, ...props }, { fetchPage, ...dispatches }) => {
	return {
		...props, ...dispatches,
		fetchPage: () => fetchPage(aboutPageId)
	};
}

export default compose(
	connect(mapState, mapDispatch, mapStateDispatch)
)(AppFooterView);
