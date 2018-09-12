import * as React from 'react';
const style = require('./style');

import { FormattedMessage } from 'react-intl';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<FormattedMessage id='searchbar.input.placeholder'>{( txt ) => (
				<input type='search' placeholder={txt.toString()} />
			)}</FormattedMessage>
		);
	}
}
