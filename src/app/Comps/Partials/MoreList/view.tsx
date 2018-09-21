import Paged from 'Models/Paged';
import BaseComponent from 'Partials/BaseComponent';
import { bind } from 'decko';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as Styles from './style.scss';

interface OwnProps {
};

interface OwnState {
}

export default abstract class MoreList<PagedType, TypedOwnProps = {}, TypedProps extends TypedOwnProps = TypedOwnProps, TypedState = {}> extends BaseComponent<OwnProps & TypedOwnProps, TypedOwnProps & TypedProps, OwnState & TypedState> {
	protected abstract get Sorted(): Paged<PagedType>[];
	protected abstract FetchPage(after?: string): Promise<void>;
	protected abstract RenderItem(item: PagedType): JSX.Element;

	@bind
	private OnNextPageClick(): void {
		this.FetchPage(this.Sorted[this.Sorted.length - 1].cursor);
	}

	async componentWillMount(): Promise<void> {
		await this.FetchPage();
	}

	render(): JSX.Element {
		return (
			<section className={Styles.MoreList}>
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
