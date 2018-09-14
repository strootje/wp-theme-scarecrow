import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

import { FormattedMessage } from 'react-intl';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<SearchBar> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class SearchBar extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<FormattedMessage id='searchbar.input.placeholder'>{(txt) => (
				<input type='search' placeholder={txt.toString()} />
			)}</FormattedMessage>
		);
	}
}
