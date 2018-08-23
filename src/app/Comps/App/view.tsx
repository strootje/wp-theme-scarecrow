import * as React from 'react';
const style = require('./style');

import { Switch, Route } from 'react-router-dom';
import AppHeader from 'Controls/AppHeader';
import AppFooter from 'Controls/AppFooter';
import GenericPage from 'Views/Page';
import HomePage from 'Pages/Home';

interface OwnProps {
}

type Props = OwnProps & {
	GetSettings: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			GetSettings
		} = this.props as Props;

		GetSettings();
	}

	render(): JSX.Element {
		return (
			<div className={style.LayoutMain}>
				<div className={style.LayoutWrapper}>
					<AppHeader />

					<Switch>
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
