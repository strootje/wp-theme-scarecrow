import * as React from 'react';
const style = require('./style');

import { SettingsState } from 'Actions/Settings';
import { PostsState } from 'Actions/Posts';
import Page from 'Views/Page';

interface OwnProps {
}

type Props = OwnProps & {
	Settings: SettingsState
	Posts: PostsState

	GetPosts: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Settings,
			Posts: { posts },

			GetPosts
		} = this.props as Props;

		if (!Settings.IsHomepageStatic && posts.length == 0) {
			GetPosts();
		}
	}

	render(): JSX.Element {
		const {
			Settings,
			Posts: { posts },
		} = this.props as Props;

		if (Settings.IsHomepageStatic) {
			return (
				<Page pageId={Settings.PageIdOnFront} />
			);
		}

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
