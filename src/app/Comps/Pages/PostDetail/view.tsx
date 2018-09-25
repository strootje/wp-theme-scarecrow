import { PostsState } from 'Actions/Posts';
import CommentSection from 'Controls/CommentSection';
import Post from 'Models/Post';
import BaseComponent from 'Partials/BaseComponent';
import PageWithSidebar from 'Partials/PageWithSidebar';
import Loader from 'Utils/Loader';
import { find, includes } from 'lodash';
import * as React from 'react';
import { match } from 'react-router';

import * as Styles from './style.scss';
import DetailSection from 'Partials/DetailSection/view';

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
				<DetailSection title={Loader(post, post => post.Title)}>
					<div dangerouslySetInnerHTML={{ __html: Loader(post, post => post.Content) }} />

					<footer>
						{post && <CommentSection post={post} />}
					</footer>
				</DetailSection>
			</PageWithSidebar>
		);
	}
}
