import { PostsState } from 'Actions/Posts';
import CommentSection from 'Controls/CommentSection';
import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import PageWithSidebar from 'Partials/PageWithSidebar';
import { find, includes } from 'lodash';
import * as React from 'react';
import { match } from 'react-router';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetPostByUri: (postTitle: string) => Promise<any>
}

type OwnProps = React.HTMLAttributes<PostDetail> & {
};

type Props = OwnProps & DispatchProps & {
	match: match<{ postUri: string }>
	Posts: PostsState
};

type State = {
	post?: Post
};

const rempty = function <Type>(item: (Type | undefined), getter: (item: Type) => any) {
	if (item != null) { return getter(item); }
	return (<span>___empty___</span>);
}

export default class PostDetail extends BaseComponent<OwnProps, Props, State> {
	state: State = {
	};

	async componentDidMount(): Promise<void> {
		const {
			match,
			Posts,
			GetPostByUri
		} = this.props;

		if (!find(Posts, post => includes(post.node.Link, match.params.postUri))) {
			const data = await GetPostByUri(match.params.postUri);
			this.setState({ post: data.post.node });
		}
	}

	render(): JSX.Element {
		const { post } = this.state;

		return (
			<PageWithSidebar>
				<section className={Styles.PostSection}>
					<article>
						<header>
							<h3>{rempty(post, post => post.Title)}</h3>
						</header>

						<div dangerouslySetInnerHTML={{ __html: rempty(post, post => post.Content) }} />

						<footer>
							{post && <CommentSection post={post} />}
						</footer>
					</article>
				</section>
			</PageWithSidebar>
		);
	}
}
