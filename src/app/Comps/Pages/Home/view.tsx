import * as React from 'react';

import { SettingsState } from 'Actions/Settings';
import Page from 'Views/Page';

interface OwnProps {
}

type Props = OwnProps & {
	Settings: SettingsState
};

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			Settings
		} = this.props as Props;

		if (Settings.IsHomepageStatic) {
			return (
				<Page pageId={Settings.PageIdOnFront} />
			);
		}

		return (
			<div>
				<p>/dynamic</p>
			</div>
		);
	}
}
