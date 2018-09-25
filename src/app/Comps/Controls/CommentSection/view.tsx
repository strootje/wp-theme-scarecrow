import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import Section from 'Partials/Section/view';
import * as React from 'react';

import * as Styles from './style.scss';
import { bind } from 'decko';
import CommentsList from 'Controls/CommentsList';
import PostCommentForm from 'Controls/PostCommentForm/view';

export interface DispatchProps {
	PostCommentForPost: (postId: number, comment: any) => Promise<any>
}

type OwnProps = React.HTMLAttributes<CommentSection> & {
	post: Post
};

type Props = OwnProps & DispatchProps & {
};

export default class CommentSection extends BaseComponent<OwnProps, Props> {
	@bind
	private async submitComment(comment: { name: string, email: string, content: string }): Promise<void> {
		const { post, PostCommentForPost } = this.props;

		if (!comment) {
			return;
		}

		await PostCommentForPost(post.PostId, {
			author: comment.name,
			authorEmail: comment.email,
			date: new Date().toISOString(),
			content: comment.content
		});
	}

	render(): JSX.Element {
		const { post } = this.props;

		return (
			<Section className={Styles.CommentSection}>
				<Section.Row>
					<Section.Column>
						<PostCommentForm onPostComment={this.submitComment} />

						<CommentsList post={post} />
					</Section.Column>
				</Section.Row>
			</Section>
		);
	}
}
