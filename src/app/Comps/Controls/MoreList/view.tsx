import * as React from 'react';
import { bind } from 'decko';
const style = require('./style');

import Paged from 'Models/Paged';
import { FormattedMessage } from 'react-intl';

interface OwnProps {
}

interface OwnState {
}

export default abstract class<PagedType, TypedProps = {}, TypedState = {}> extends React.Component<OwnProps & TypedProps, OwnState & TypedState> {
	protected abstract get Sorted(): Paged<PagedType>[];
	protected abstract FetchPage( after?: string ): void;
	protected abstract RenderItem( item: PagedType ): JSX.Element;

	@bind
	private OnNextPageClick(): void {
		this.FetchPage(this.Sorted[this.Sorted.length - 1].cursor);
	}

	componentWillMount(): void {
		this.FetchPage();
	}

	render(): JSX.Element {
		return (
			<section className={style.ItemContainer}>
				<div>{this.Sorted.map(post =>
					this.RenderItem(post.node)
				)}</div>

				<footer>
					<button onClick={this.OnNextPageClick}><FormattedMessage id='morelist.showmore.title' /></button>
				</footer>
			</section>
		);
	}
}
