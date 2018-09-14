import * as React from 'react';

import { SettingsState } from 'Actions/Settings';
import Link from 'Controls/Link';
import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Logo> & {
};

type Props = OwnProps & {
	Settings: SettingsState
};

export default class Logo extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const {
			Settings
		} = this.props;

		return (
			<Link to='/'>{Settings.Title}</Link>
		);
	}
}
