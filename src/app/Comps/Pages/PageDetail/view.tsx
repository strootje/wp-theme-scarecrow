import { PagesState } from 'Actions/Pages';
import { SettingsState } from 'Actions/Settings';
import Loader from 'Controls/Loader';
import Page from 'Models/Page';
import PostsPage from 'Pages/Posts';
import BaseComponent from 'Partials/BaseComponent';
import PageWithSidebar from 'Partials/PageWithSidebar';
import { find, includes } from 'lodash';
import * as React from 'react';
import { match } from 'react-router';
import Post from 'Models/Post';
import DetailSection from 'Partials/DetailSection/view';

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

type State = {
	page?: Page
};

export default class Home extends BaseComponent<OwnProps, Props, State> {
	state: State = {
	};

	async componentDidMount(): Promise<void> {
		const {
			Pages,
			pageId, match,

			GetPageByPageId,
			GetPageByUri
		} = this.props;

		if (pageId && !find(Pages, page => page.PageId == pageId)) {
			const data = await GetPageByPageId(pageId);
			this.setState({ page: data.page });
		} else if (match && !find(Pages, page => includes(match.url, page.Uri))) {
			const data = await GetPageByUri(match.url);
			this.setState({ page: data.page });
		} else {
			throw Error('missing pageId or match`url`');
		}
	}

	render(): JSX.Element {
		const { Settings: { IsHomepageStatic, PageIdForPosts } } = this.props;
		const { page } = this.state;

		if (!page) {
			return (<p>no page found</p>);
		}

		return ((IsHomepageStatic && page.PageId == PageIdForPosts) ? <PostsPage /> : (
			<PageWithSidebar>
				<DetailSection title={page.Title}>
					<div dangerouslySetInnerHTML={{ __html: page.Content }} />
				</DetailSection>
			</PageWithSidebar>
		));
	}
}
