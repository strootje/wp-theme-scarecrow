import * as React from 'react';
const style = require('./style');

import { Switch, Route } from 'react-router-dom';
import AppHeader from 'Controls/AppHeader';
import AppFooter from 'Controls/AppFooter';
import Page from 'Views/Page';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<div className={style.LayoutMain}>
				<div className={style.LayoutWrapper}>
					<AppHeader />

					<Switch>
						{/* <Route path='/:postId' component={Page} /> */}
						<Route path='/:pageSlug' component={Page} />
						<Route path='/' component={() => (<p>home page</p>)} />
					</Switch>
				</div>

				<div className={style.LayoutFooter}>
					<AppFooter />
				</div>
			</div>
		);
	}
}
