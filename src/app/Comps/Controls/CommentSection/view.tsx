import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import Section from 'Partials/Section/view';
import * as React from 'react';
import LinkedState from 'linkstate';

import * as Styles from './style.scss';
import { bind } from 'decko';

export interface DispatchProps {
	GetCommentsForPost: (postId: number) => Promise<any>
	PostCommentForPost: (postId: number, comment: any) => Promise<any>
}

type OwnProps = React.HTMLAttributes<CommentSection> & {
	post: Post
};

type Props = OwnProps & DispatchProps & {
};

type State = {
	comment?: {
		name: string
		email: string
		text: string
	}
}

export default class CommentSection extends BaseComponent<OwnProps, Props, State> {
	state: State = {};

	async componentWillMount(): Promise<void> {
		const { post, GetCommentsForPost } = this.props;

		if (post.Comments.length < 1) {
			await GetCommentsForPost(post.PostId);
		}
	}

	@bind
	private async submitComment(): Promise<void> {
		const { post, PostCommentForPost } = this.props;
		const { comment } = this.state;

		if (!comment) {
			return;
		}

		await PostCommentForPost(post.PostId, {
			author: comment.name,
			authorEmail: comment.email,
			date: new Date().toISOString(),
			content: comment.text
		});
	}

	render(): JSX.Element {
		const { post } = this.props;

		return (
			<Section className={Styles.CommentSection}>
				<Section.Row>
					<Section.Column>
						<article>
							<input className={Styles.uFullWidth} onChange={LinkedState(this, 'comment.name')} />
							<textarea className={Styles.uFullWidth} onChange={LinkedState(this, 'comment.text')}></textarea>
							<input type='button' onClick={this.submitComment} value='post' />
						</article>

						{post.Comments.map(comment => (<article key={comment.node.Key}>
							<div dangerouslySetInnerHTML={{ __html: comment.node.Content }} />
						</article>))}
					</Section.Column>
				</Section.Row>
			</Section>
		);
	}
}
