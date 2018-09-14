import * as React from 'react';

import { PagesState } from 'Actions/Pages';
import { SettingsState } from 'Actions/Settings';
import Loader from 'Controls/Loader';
import Page from 'Models/Page';
import PostsPage from 'Pages/Posts';
import BaseComponent from 'Partials/BaseComponent';

import { match } from 'react-router';

export interface DispatchProps {
	GetPageByPageId: (pageId: number) => void
	GetPageByUri: (uri: string) => void
}

type OwnProps = React.HTMLAttributes<Home> & {
	pageId?: number
	match?: match<{ pageUri: string }>
};

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState,
	Pages: PagesState
};

export default class Home extends BaseComponent<OwnProps, Props> {
	componentWillMount(): void {
		const {
			Pages: { pages },
			pageId, match,

			GetPageByPageId,
			GetPageByUri
		} = this.props;

		if (pageId && !pages.some(page => page.PageId == pageId)) {
			GetPageByPageId(pageId);
		} else if (match && !pages.some(page => match.url.search(page.Uri) >= 0)) {
			GetPageByUri(match.url);
		}
	}

	render(): JSX.Element {
		const {
			Settings: { IsHomepageStatic, PageIdForPosts },
			Pages: { loading, pages },
			pageId, match
		} = this.props;

		if (loading) {
			return (<Loader />);
		}

		let page: Page;
		if (pageId && pages.some(page => page.PageId == pageId)) {
			page = pages.filter(page => page.PageId == pageId)[0];
		} else if (match && pages.some(page => match.url.search(page.Uri) >= 0)) {
			page = pages.filter(page => match.url.search(page.Uri) >= 0)[0];
		} else {
			return (
				<p>no page found</p>
			);
		}

		if (IsHomepageStatic && page.PageId == PageIdForPosts) {
			return (<PostsPage />);
		}

		return (
			<p>{page.Title}</p>
		);
	}
}
