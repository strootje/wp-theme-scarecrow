import * as React from 'react';
const style = require('./style');

import { SettingsState } from 'Actions/Settings';
import { Switch, Route } from 'react-router-dom';
import Loader from 'Controls/Loader';
import AppHeader from 'Controls/AppHeader';
import AppFooter from 'Controls/AppFooter';
import GenericPage from 'Views/Page';
import HomePage from 'Pages/Home';

interface OwnProps {
}

type Props = OwnProps & {
	Settings: SettingsState
	GetSettings: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount() {
		const {
			GetSettings
		} = this.props as Props;

		GetSettings();
	}

	render(): JSX.Element {
		const {
			Settings,
		} = this.props as Props;

		if (Settings.loading) {
			return (<Loader />);
		}

		return (
			<div className={style.LayoutMain}>
				<div className={style.LayoutWrapper}>
					<AppHeader />

					<Switch>
						{/* todo: fix path */}
						{/* <Route path='/:postId' component={Page} /> */}
						<Route path='/:pageSlug' component={GenericPage} />
						<Route path='/' component={HomePage} />
					</Switch>
				</div>

				<div className={style.LayoutFooter}>
					<AppFooter />
				</div>
			</div>
		);
	}
}
