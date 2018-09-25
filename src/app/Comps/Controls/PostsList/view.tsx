import { PostsState } from 'Actions/Posts';
import Link from 'Controls/Link';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import MoreList from 'Partials/MoreList';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetPosts: (vars: { first?: number, last?: number, before?: string, after?: string }) => Promise<any>
}

type OwnProps = React.HTMLAttributes<PostsList> & {
};

type Props = OwnProps & DispatchProps & {
	Posts: PostsState
};

export default class PostsList extends MoreList<Post, OwnProps, Props> {
	protected get Sorted(): Paged<Post>[] {
		const {
			Posts
		} = this.props;

		return Posts.sort((a, b) => b.node.Date.getTime() - a.node.Date.getTime());
	}

	protected async FetchPage(after?: string): Promise<void> {
		const {
			perPage,
			GetPosts
		} = this.props;

		await GetPosts({ first: perPage, after: after });
	}

	protected RenderItem(item: Post): JSX.Element {
		return (
			<article key={item.Key} className={Styles.PostListItem}>
				<div className={Styles.PostListItem__Content}>
					<aside>
						<span className="fa-stack fa-2x">
							<i className="fas fa-comment-alt fa-stack-2x"></i>
							<i className="fa-stack-1x fa-inverse">20</i>
						</span>


						<span className="fa-stack fa-2x">
							<i className="fas fa-calendar fa-stack-2x"></i>
							<i className="fa-stack-1x fa-inverse down-99">14</i>
						</span>
					</aside>

					<img />

					<header><Link to={item.Link}><h3>{item.Title}</h3></Link></header>

					<div dangerouslySetInnerHTML={{ __html: item.Content }} />
				</div>

				<footer>
					<div className={Styles.PostListItem__ReadMore}>
						<Link to={item.Link}><FormattedMessage id='postlist.readmore.title' /></Link>
					</div>

					<div className={Styles.PostListItem__Stats}>
						<FormattedMessage id='postlist.stats.text' values={{
							category: 'category-1',
							author: 'author-1',
							date: item.Date
						}} />
					</div>
				</footer>
			</article>
		);
	}
}
