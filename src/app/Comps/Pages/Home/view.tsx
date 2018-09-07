import * as React from 'react';
const style = require('./style');

import { SettingsState } from 'Actions/Settings';
import Page from 'Views/Page';
import PostsList from 'Controls/PostsList';

interface OwnProps {
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
	Settings: SettingsState
};

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			Settings: { IsHomepageStatic, PageIdOnFront }
		} = this.props as Props;

		return (
			<div className={style.Content}>
				<div className={style.Page}>{IsHomepageStatic
					? <Page pageId={PageIdOnFront} />
					: <PostsList />
				}</div>

				<div className={style.Sidebar}>
					i are Sidebar
				</div>
			</div>
		);
	}
}
