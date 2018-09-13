import { SettingsState } from 'Actions/Settings';
import PostsList from 'Controls/PostsList';
import Sidebar from 'Controls/Sidebar';
import PageDetail from 'Pages/PageDetail';
import * as React from 'react';

const style = require('./style');

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
					? <PageDetail pageId={PageIdOnFront} />
					: <PostsList />
				}</div>

				<div className={style.Sidebar}>
					<Sidebar />
				</div>
			</div>
		);
	}
}
