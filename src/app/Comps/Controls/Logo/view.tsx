import * as React from 'react';
const style = require('./style');

import Link from 'Controls/Link';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<Link to='/'>STROOTJE</Link>
		);
	}
}
