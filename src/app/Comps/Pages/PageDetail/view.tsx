import { PagesState } from 'Actions/Pages';
import { SettingsState } from 'Actions/Settings';
import Loader from 'Controls/Loader';
import Page from 'Models/Page';
import PostsPage from 'Pages/Posts';
import BaseComponent from 'Partials/BaseComponent';
import * as React from 'react';
import { match } from 'react-router';

export interface DispatchProps {
	GetPageByPageId: (pageId: number) => Promise<any>
	GetPageByUri: (uri: string) => Promise<any>
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
	async componentWillMount(): Promise<void> {
		const {
			Pages,
			pageId, match,

			GetPageByPageId,
			GetPageByUri
		} = this.props;

		if (pageId && !Pages.some(page => page.PageId == pageId)) {
			await GetPageByPageId(pageId);
		} else if (match && !Pages.some(page => match.url.search(page.Uri) >= 0)) {
			await GetPageByUri(match.url);
		}
	}

	render(): JSX.Element {
		const {
			Settings: { IsHomepageStatic, PageIdForPosts },
			Pages,
			pageId, match
		} = this.props;

		let page: Page;
		if (pageId && Pages.some(page => page.PageId == pageId)) {
			page = Pages.filter(page => page.PageId == pageId)[0];
		} else if (match && Pages.some(page => match.url.search(page.Uri) >= 0)) {
			page = Pages.filter(page => match.url.search(page.Uri) >= 0)[0];
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
