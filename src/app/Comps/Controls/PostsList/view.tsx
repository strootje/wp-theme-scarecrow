import * as React from 'react';
import { bind } from 'decko';
const style = require('./style');

import { Location, History } from 'history';
import { PostsState } from 'Actions/Posts';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import MoreList from 'Controls/MoreList';

interface OwnProps {
	perPage: number
}

export type DispatchProps = {
	GetPosts: ( vars: { first?: number, last?: number, before?: string, after?: string } ) => void
}

type Props = React.HTMLAttributes<{}> & OwnProps & DispatchProps & {
	location: Location,
	history: History,
	Posts: PostsState
};

export default class extends MoreList<Post, OwnProps, {}> {
	static defaultProps: OwnProps = {
		perPage: 2
	}

	protected get Sorted(): Paged<Post>[] {
		const {
			Posts: { posts }
		} = this.props as Props;

		return posts.sort((a, b) => b.node.Date.getTime() - a.node.Date.getTime());
	}

	protected FetchPage( after?: string ) {
		const {
			perPage,
			GetPosts
		} = this.props as Props;

		GetPosts({ first: perPage, after: after });
	}

	protected RenderItem( item: Post ): JSX.Element {
		return (
			<article key={item.Key}>
				<header>
					<h3>{item.Title}</h3>
				</header>

				<div dangerouslySetInnerHTML={{ __html: item.ShortContent }} />
			</article>
		);
	}
}
