import BaseComponent from 'Partials/BaseComponent';
import { url as Gravatar } from 'gravatar';
import * as React from 'react';
import CommentAuthor from 'Models/CommentAuthor';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Avatar> & {
	author: CommentAuthor
};

type Props = OwnProps & DispatchProps & {
};

export default class Avatar extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const { author } = this.props;
		const url = Gravatar(author.Email || author.Name, {
			default: 'retro',
			size: '48'
		});

		return (<img src={url} />);
	}
}
