import * as React from 'react';
import { bind } from 'decko';
const style = require('./style');

import { PostsState } from 'Actions/Posts';

interface OwnProps {
	perPage: number
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
	Posts: PostsState

	GetPosts: () => void
};

export default class extends React.Component<OwnProps, {}> {
	static defaultProps: OwnProps = {
		perPage: 1
	}

	@bind
	FirstPage(): void {
	}

	@bind
	PreviousPage(): void {
	}

	@bind
	NextPage(): void {
	}

	@bind
	LastPage(): void {
	}

	componentWillMount(): void {
		this.FirstPage();
	}

	render(): JSX.Element {
		const {
			perPage,
			Posts: { posts },
		} = this.props as Props;

		return (
			<section className={style.Posts}>
				<div>{posts.map(( post, index ) => (
					<article key={post.Key} className={style.Item}>
						<header>
							<h3>{post.Title}</h3>
							{post.Thumbnails.Normal}
						</header>

						<div dangerouslySetInnerHTML={{ __html: post.ShortContent }} />

						<footer>
						</footer>
					</article>
				))}</div>

				<footer>
					<button onClick={this.FirstPage}>first</button>
					<button onClick={this.PreviousPage}>previous</button>
					<button onClick={this.NextPage}>next</button>
					<button onClick={this.LastPage}>last</button>
				</footer>
			</section>
		);
	}
}
