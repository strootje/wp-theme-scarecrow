import BaseComponent from 'Partials/BaseComponent';
import { bind } from 'decko';
import LinkState from 'linkstate';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as Styles from './style.scss';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<PostCommentForm> & {
	onPostComment: (comment: { name: string, email: string, content: string }) => Promise<void>
};

type Props = OwnProps & DispatchProps & {
};

type State = {
	focussed: boolean
	focusTimer?: NodeJS.Timer

	comment?: {
		name: string
		email: string
		content: string
	}
};

export default class PostCommentForm extends BaseComponent<OwnProps, Props, State> {
	state: State = {
		focussed: false
	};

	@bind
	HandleFormOnFocus(): void {
		const { focusTimer } = this.state;

		if (focusTimer != undefined) {
			clearTimeout(focusTimer);
		}

		this.setState({
			focussed: true,
			focusTimer: undefined
		});
	}

	@bind
	HandleFormOnBlur(): void {
		this.setState({ focusTimer: setTimeout(() => this.setState({ focussed: false }), 200) });
	}

	@bind
	async HandleFormSubmit(event: React.FormEvent<HTMLFormElement>): Promise<boolean> {
		const { onPostComment } = this.props;
		const { comment } = this.state;
		event.preventDefault();

		if (!comment) {
			return false;
		}

		await onPostComment({
			...comment
		});

		this.setState({ comment: { name: '',email: '', content: '' }});

		return true;
	}

	render(): JSX.Element {
		const { focussed } = this.state;

		return (
			<form className={Styles.PostCommentForm} onSubmit={this.HandleFormSubmit} onFocus={this.HandleFormOnFocus} onBlur={this.HandleFormOnBlur}>
				{focussed && <FormattedMessage id='postcommentform.name.placeholder'>{(txt) => (
					<input className={Styles.uFullWidth} onChange={LinkState(this, 'comment.name')} placeholder={txt.toString()} />
				)}</FormattedMessage>}

				{focussed && <FormattedMessage id='postcommentform.email.placeholder'>{(txt) => (
					<input className={Styles.uFullWidth} onChange={LinkState(this, 'comment.email')} placeholder={txt.toString()} />
				)}</FormattedMessage>}

				<FormattedMessage id='postcommentform.content.placeholder'>{(txt) => (
					<textarea className={Styles.uFullWidth} onChange={LinkState(this, 'comment.content')} placeholder={txt.toString()} />
				)}</FormattedMessage>

				{focussed && <FormattedMessage id='postcommentform.submit.text'>{(txt) => (
					<input type='submit' value={txt.toString()} />
				)}</FormattedMessage>}
			</form>
		);
	}
}
