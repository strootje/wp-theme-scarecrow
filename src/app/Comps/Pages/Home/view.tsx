import { SettingsState } from 'Actions/Settings';
import PageDetail from 'Pages/PageDetail';
import PostsPage from 'Pages/Posts';
import BaseComponent from 'Partials/BaseComponent';
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

		return (IsHomepageStatic
			? <PageDetail pageId={PageIdOnFront} />
			: <PostsPage />
		);
	}
}
