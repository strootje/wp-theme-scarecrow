import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const style = require('./style');

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<FormattedMessage id='searchbar.input.placeholder'>{(txt) => (
				<input type='search' placeholder={txt.toString()} />
			)}</FormattedMessage>
		);
	}
}
