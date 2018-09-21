import { SettingsState } from 'Actions/Settings';
import Footer from 'App/Footer';
import Header from 'App/Header';
import Loader from 'Controls/Loader';
import CategoryDetail from 'Pages/CategoryDetail';
import HomePage from 'Pages/Home';
import PageDetail from 'Pages/PageDetail';
import PostDetail from 'Pages/PostDetail';
import TagDetail from 'Pages/TagDetail';
import BaseComponent from 'Partials/BaseComponent';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetSettings: () => Promise<any>
}

type OwnProps = React.HTMLAttributes<{}> & {
}

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
};

export default class extends BaseComponent<OwnProps, Props> {
	async componentWillMount() {
		const {
			GetSettings
		} = this.props;

		await GetSettings();
	}

	render(): JSX.Element {
		const {
			Settings
		} = this.props;

		const postPath = Settings.PermalinkStructure.replace('%postname%', ':postUri');
		const categoryPath = Settings.CategoryBase != '' ? `/${Settings.CategoryBase}/:categoryUri`
			: Settings.PermalinkStructure.replace('%postname%', ':categoryUri');
		const tagPath = Settings.TagBase != '' ? `/${Settings.TagBase}/:tagUri`
			: Settings.PermalinkStructure.replace('%postname%', ':tagUri');

		return (
			<div className={Styles.App}>
				<div className={Styles.App__Content}>
					<Header />

					<Switch>
						<Route path={postPath} component={PostDetail} />
						<Route path={categoryPath} component={CategoryDetail} />
						<Route path={tagPath} component={TagDetail} />
						<Route path='/:pageUri' component={PageDetail} />
						<Route path='/' component={HomePage} />
					</Switch>
				</div>

				<div className={Styles.App__Footer}>
					<Footer />
				</div>
			</div>
		);
	}
}
