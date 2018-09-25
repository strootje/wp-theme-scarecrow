import Avatar from 'Controls/Avatar';
import Comment from 'Models/Comment';
import Paged from 'Models/Paged';
import Post from 'Models/Post';
import MoreList from 'Partials/MoreList';
import { Paging } from 'Types/Paging';
import * as React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetComments: (postId: number, vars: Paging) => Promise<any>
}

type OwnProps = React.HTMLAttributes<CommentsList> & {
	post: Post
};

type Props = OwnProps & DispatchProps & {
};

export default class CommentsList extends MoreList<Comment, OwnProps, Props> {
	protected get Sorted(): Paged<Comment>[] {
		const { post } = this.props;

		return post.Comments.sort((a, b) => b.node.Date.getTime() - a.node.Date.getTime());
	}

	protected async FetchPage(after?: string): Promise<void> {
		const { perPage, post, GetComments } = this.props;

		await GetComments(post.PostId, { first: perPage, after: after });
	}

	protected RenderItem(item: Comment): JSX.Element {
		return (
			<article key={item.Key} className={Styles.CommentsListItem}>
				<header>
					<Avatar author={item.Author} />
				</header>

				<div>
					<i><FormattedMessage id='commentslist.author.name.text' values={{
						date: item.Date,
						name: item.Author.Name
					}} /></i>
				</div>

				<div dangerouslySetInnerHTML={{
					__html: item.Content
				}} />
			</article>
		);
	}
}
