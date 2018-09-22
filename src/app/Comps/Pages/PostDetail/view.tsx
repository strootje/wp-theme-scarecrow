import { PostsState } from 'Actions/Posts';
import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import { bind } from 'decko';
import linkedState from 'linkstate';
import { find, includes } from 'lodash';
import * as React from 'react';
import { match } from 'react-router';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetPostByUri: (postTitle: string) => Promise<any>
	GetCommentsForPost: (postUri: string) => Promise<any>
	PostCommentForPost: (postId: number, comment: any) => Promise<any>
}

type OwnProps = React.HTMLAttributes<PostDetail> & {
};

type Props = OwnProps & DispatchProps & {
	match: match<{ postUri: string }>
	Posts: PostsState
};

type State = {
	post: Post,
	comment: {
		text: string
	}
};

export default class PostDetail extends BaseComponent<OwnProps, Props, State> {
	async componentDidMount(): Promise<void> {
		const {
			match,
			Posts,
			GetPostByUri,
			GetCommentsForPost
		} = this.props;

		if (!find(Posts, post => includes(post.node.Link, match.params.postUri))) {
			const data = await GetPostByUri(match.params.postUri);
			this.setState({ post: data.post.node });
			await GetCommentsForPost(match.params.postUri);
		}
	}

	@bind
	private async submitComment(): Promise<void> {
		const {
			PostCommentForPost
		} = this.props;

		const {
			post,
			comment
		} = this.state;

		if (!post) {
			return;
		}

		console.debug('submitting a comment... /// TODO ///', this.state);
		await PostCommentForPost(post.PostId, {
			author: 'test',
			authorEmail: 'test@example.com',
			date: new Date().toISOString(),
			content: comment.text
		});
	}

	render(): JSX.Element {
		const {
			match,
			Posts
		} = this.props;

		let post = find(Posts, post => includes(post.node.Link, match.params.postUri));
		if (!post) {
			return (
				<p>no post</p>
			);
		}

		return (
			<section className={Styles.PostSection}>
				<article>
					<header>
						<h3>{post.node.Title}</h3>
					</header>

					<div dangerouslySetInnerHTML={{ __html: post.node.Content }} />

					<footer>
						<section>
							<section>
								<textarea onChange={linkedState(this, 'comment.text')}></textarea>
								<input type='button' value='submit' onClick={this.submitComment} />
							</section>

							{post.node.Comments.map(comment => (
								<article key={comment.node.Key}>
									<div dangerouslySetInnerHTML={{ __html: comment.node.Content }} />
								</article>
							))}</section>
					</footer>
				</article>
			</section>
		);
	}
}
