import * as React from 'react';
import * as Styles from './style.scss';

import Paged from 'Models/Paged';
import Post from 'Models/Post';
import { PostsState } from 'Actions/Posts';
import { FormattedMessage, FormattedDate } from 'react-intl';
import MoreList from 'Controls/MoreList';
import Link from 'Controls/Link';

interface OwnProps {
	perPage: number
}

export type DispatchProps = {
	GetPosts: ( vars: { first?: number, last?: number, before?: string, after?: string } ) => void
}

type Props = React.HTMLAttributes<{}> & OwnProps & DispatchProps & {
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
