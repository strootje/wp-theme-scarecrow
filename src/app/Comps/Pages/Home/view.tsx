import { SettingsState } from 'Actions/Settings';
import PostsList from 'Controls/PostsList';
import PageDetail from 'Pages/PageDetail';
import BaseComponent from 'Partials/BaseComponent';
import PageWithSidebar from 'Partials/PageWithSidebar';
import * as React from 'react';

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
			<PageWithSidebar>{IsHomepageStatic
				? <PageDetail pageId={PageIdOnFront} />
				: <PostsList />
			}</PageWithSidebar>
		);
	}
}
