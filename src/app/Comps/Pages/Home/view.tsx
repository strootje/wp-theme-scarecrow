import * as React from 'react';

import { SettingsState } from 'Actions/Settings';
import PostsList from 'Controls/PostsList';
import Sidebar from 'Controls/Sidebar';
import PageDetail from 'Pages/PageDetail';
import BaseComponent from 'Partials/BaseComponent';

import * as Styles from './style.scss';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<{}> & {
};

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
};

export default class extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const {
			Settings: { IsHomepageStatic, PageIdOnFront }
		} = this.props;

		return (
			<div className={Styles.Content}>
				<div className={Styles.Page}>{IsHomepageStatic
					? <PageDetail pageId={PageIdOnFront} />
					: <PostsList />
				}</div>

				<div className={Styles.Sidebar}>
					<Sidebar />
				</div>
			</div>
		);
	}
}
