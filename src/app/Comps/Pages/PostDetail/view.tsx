import * as React from 'react';

import { PostsState } from 'Actions/Posts';
import Loader from 'Controls/Loader';
import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';

import { match } from 'react-router';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetPostByUri: (postTitle: string) => void
}

type OwnProps = React.HTMLAttributes<PostDetail> & {
};

type Props = OwnProps & DispatchProps & {
	match: match<{ postUri: string }>
	Posts: PostsState
};

export default class PostDetail extends BaseComponent<OwnProps, Props> {
	componentWillMount(): void {
		const {
			match,
			Posts: { posts },
			GetPostByUri
		} = this.props;

		if (!posts.some(post => post.node.Link.search(match.params.postUri) >= 0)) {
			GetPostByUri(match.params.postUri);
		}
	}

	render(): JSX.Element {
		const {
			match,
			Posts: { loading, posts }
		} = this.props;

		let post: Post;
		if (loading) {
			return (<Loader />)
		} else if (posts.some(post => post.node.Link.search(match.params.postUri) >= 0)) {
			post = posts.filter(post => post.node.Link.search(match.params.postUri))[0].node;
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
