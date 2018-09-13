import Link from 'Controls/Link';
import * as React from 'react';

export default class extends React.Component<{}, {}> {
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
