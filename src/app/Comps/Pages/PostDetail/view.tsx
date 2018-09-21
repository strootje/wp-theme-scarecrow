import { PostsState } from 'Actions/Posts';
import Loader from 'Controls/Loader';
import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import * as React from 'react';
import { match } from 'react-router';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetPostByUri: (postTitle: string) => Promise<any>
	GetCommentsForPost: (postUri: string) => Promise<any>
}

type OwnProps = React.HTMLAttributes<PostDetail> & {
};

type Props = OwnProps & DispatchProps & {
	match: match<{ postUri: string }>
	Posts: PostsState
};

export default class PostDetail extends BaseComponent<OwnProps, Props> {
	async componentWillMount(): Promise<void> {
		const {
			match,
			Posts,
			GetPostByUri,
			GetCommentsForPost
		} = this.props;

		if (!Posts.some(post => post.node.Link.search(match.params.postUri) >= 0)) {
			await GetPostByUri(match.params.postUri);
			await GetCommentsForPost(match.params.postUri);
		}
	}

	render(): JSX.Element {
		const {
			match,
			Posts
		} = this.props;

		let post: Post;
		if (Posts.some(post => post.node.Link.search(match.params.postUri) >= 0)) {
			post = Posts.filter(post => post.node.Link.search(match.params.postUri))[0].node;
		} else {
			return (
				<p>no post</p>
			);
		}

		return (
			<section className={Styles.PostSection}>
				<article>
					<header>
						<h3>{post.Title}</h3>
					</header>

					<div dangerouslySetInnerHTML={{ __html: post.Content }} />
				</article>
			</section>
		);
	}
}
