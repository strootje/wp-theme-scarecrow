import * as React from 'react';
const style = require('./style');

import AppHeader from 'Controls/AppHeader';
import AppFooter from 'Controls/AppFooter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<div className={style.LayoutMain}>
				<div className={style.LayoutWrapper}>
					<AppHeader />

					<Switch>
						<Route component={() => (<p>first route</p>)} />
					</Switch>
				</div>

				<div className={style.LayoutFooter}>
					<AppFooter />
				</div>
			</div>
		);
	}
}
