import * as React from 'react';
import { SettingsState } from 'Actions/Settings';

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
			<div>
				{settings.IsHomepageStatic
					? <p>/static</p>
					: <p>/dynamic</p>}
			</div>
		);
	}
}
