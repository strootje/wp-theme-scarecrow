import * as React from 'react';
import { match } from 'react-router';

import Page from 'Models/Page';
import { SettingsState } from 'Actions/Settings';
import { PagesState } from 'Actions/Pages';
import PostsPage from 'Pages/Posts';
import Loader from 'Controls/Loader';

interface OwnProps {
	pageId?: number
	match?: match<{ pageSlug: string }>
}

type Props = OwnProps & {
	Settings: SettingsState,
	Pages: PagesState

	GetPageByPageId: ( pageId: number ) => void
	GetPageByUri: ( uri: string ) => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Pages: { pages },
			pageId, match,

			GetPageByPageId,
			GetPageByUri
		} = this.props as Props;

		if (pageId && !pages.some(page => page.PageId == pageId)) {
			GetPageByPageId(pageId);
		} else if(match && !pages.some(page => match.url.search(page.Uri) >= 0)) {
			GetPageByUri(match.url);
		}
	}

	render(): JSX.Element {
		const {
			Settings: { PageIdForPosts },
			Pages: { loading, pages },
			pageId, match
		} = this.props as Props;

		if (loading) {
			return (<Loader />);
		}

		let page: Page;
		if (pageId && pages.some(page => page.PageId == pageId)) {
			page = pages.filter(page => page.PageId == pageId)[0];
		} else if(match && pages.some(page => match.url.search(page.Uri) >= 0)) {
			page = pages.filter(page => match.url.search(page.Uri) >= 0)[0];
		} else {
			return (
				<p>no page found</p>
			);
		}

		if (page.PageId == PageIdForPosts) {
			return (<PostsPage />);
		}

		return (
			<p>{page.Title}</p>
		);
	}
}
