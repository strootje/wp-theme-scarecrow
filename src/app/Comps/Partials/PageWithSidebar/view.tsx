import { SettingsState } from 'Actions/Settings';
import Sidebar from 'Controls/Sidebar';
import BaseComponent from 'Partials/BaseComponent';
import * as React from 'react';

import * as Styles from './style.scss';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<PageWithSidebar> & {
};

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
};

export default class PageWithSidebar extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const { children } = this.props;

		return (
			<div className={Styles.Content}>
				<div className={Styles.Page}>
					{children}
				</div>

				<div className={Styles.Sidebar}>
					<Sidebar />
				</div>
			</div>
		);
	}
}
