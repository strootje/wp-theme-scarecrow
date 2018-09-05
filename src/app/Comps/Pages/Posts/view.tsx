import * as React from 'react';
const style = require('./style');

import { PostsState } from 'Actions/Posts';
import Page from 'Views/Page';

interface OwnProps {
}

type Props = OwnProps & {
	Posts: PostsState

	GetPosts: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Posts: { posts },

			GetPosts
		} = this.props as Props;

		if (posts.length == 0) {
			GetPosts();
		}
	}

	render(): JSX.Element {
		const {
			Posts: { posts },
		} = this.props as Props;

		return (
			<div className={style.posts}>
				{posts.map(post => (
					<div key={post.Key} className={style.postRow}>
						<article key={post.Key} className={style.item}>
							<header>
								<h3>{post.Title}</h3>
								{post.Thumbnails.Normal}
							</header>
						</article>
					</div>
				))}
			</div>
		);
	}
}
