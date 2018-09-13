import { PostsState } from 'Actions/Posts';
import Loader from 'Controls/Loader';
import Post from 'Models/Post';
import * as React from 'react';
import { match } from 'react-router';

const style = require('./style');

interface OwnProps {
}

export interface DispatchProps {
	GetPostByUri: (postTitle: string) => void
}

type Props = React.HTMLAttributes<{}> & OwnProps & DispatchProps & {
	match: match<{ postUri: string }>
	Posts: PostsState
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			match,
			Posts: { posts },
			GetPostByUri
		} = this.props as Props;

		if (!posts.some(post => post.node.Link.search(match.params.postUri) >= 0)) {
			GetPostByUri(match.params.postUri);
		}
	}

	render(): JSX.Element {
		const {
			match,
			Posts: { loading, posts }
		} = this.props as Props;

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
			<section className={style.PostSection}>
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
