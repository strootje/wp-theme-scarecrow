import * as React from 'react';
import { bind } from 'decko';
const style = require('./style');

import { Location, History } from 'history';
import { PostsState } from 'Actions/Posts';
import Paged from 'Models/Paged';
import Post from 'Models/Post';

interface OwnProps {
	perPage: number
}

export type DispatchProps = {
	GetPosts: ( pageInfo: { first?: number, last?: number, before?: string, after?: string } ) => void
}

type Props = React.HTMLAttributes<{}> & OwnProps & DispatchProps & {
	location: Location,
	history: History,
	Posts: PostsState
};

export default class extends React.Component<OwnProps, {}> {
	static defaultProps: OwnProps = {
		perPage: 1
	}

	get Sorted(): Paged<Post>[] {
		const {
			Posts: { posts }
		} = this.props as Props;

		return posts.sort((a, b) => b.node.Date.getTime() - a.node.Date.getTime());
	}

	@bind
	FirstPage(): void {
		const {
			perPage,
			GetPosts
		} = this.props as Props;

		GetPosts({ first: perPage });
	}

	@bind
	NextPage(): void {
		const {
			perPage,
			GetPosts
		} = this.props as Props;

		const current = this.Sorted[this.Sorted.length - 1].cursor;
		GetPosts({ first: perPage, after: current });
	}

	@bind
	PreviousPage(): void {
		const {
			perPage,
			GetPosts
		} = this.props as Props;

		const current = this.Sorted[this.Sorted.length - 1].cursor;
		GetPosts({ last: perPage, before: current });
	}

	@bind
	LastPage(): void {
		const {
			perPage,
			GetPosts
		} = this.props as Props;

		GetPosts({ last: perPage });
	}

	componentWillMount(): void {
		this.FirstPage();
	}

	render(): JSX.Element {
		const {
			perPage,
			Posts: { posts }
		} = this.props as Props;

		let index = 0;//sorted.indexOf(posts[this.state.current]);
		if (index < 0) { index = 0; }
		const slice = this.Sorted.map(paged => paged.node).slice(index, index + perPage);

		return (
			<section className={style.Posts}>
				<div>{slice.map(post => (
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
