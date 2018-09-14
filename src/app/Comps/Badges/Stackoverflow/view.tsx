import * as React from 'react';

import Link from 'Controls/Link';
import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<StackoverflowBadge> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class StackoverflowBadge extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<Link to={'https://stackoverflow.com/users/9943786/strootje'}>
				<img src="https://stackoverflow.com/users/flair/9943786.png" width="208" height="58"
					alt="profile for strootje at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
					title="profile for strootje at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
			</Link>
		);
	}
}
