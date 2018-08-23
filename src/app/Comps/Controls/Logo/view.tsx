import * as React from 'react';
const style = require('./style');

import { SettingsState } from 'Actions/Settings';
import Link from 'Controls/Link';

interface OwnProps {
}

type Props = OwnProps & {
	Settings: SettingsState
};

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			Settings: { settings }
		} = this.props as Props;

		return (
			<Link to='/'>{settings.Title}</Link>
		);
	}
}
