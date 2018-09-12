import * as React from 'react';
const style = require('./style');

import { SettingsState } from 'Actions/Settings';
import { Switch, Route } from 'react-router-dom';
import Loader from 'Controls/Loader';
import AppHeader from 'Controls/AppHeader';
import AppFooter from 'Controls/AppFooter';
import HomePage from 'Pages/Home';
import PostDetail from 'Pages/PostDetail';
import CategoryDetail from 'Pages/CategoryDetail';
import TagDetail from 'Pages/TagDetail';
import PageDetail from 'Pages/PageDetail';

interface OwnProps {
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
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

		const postPath = Settings.PermalinkStructure.replace('%postname%', ':postName');
		const categoryPath = Settings.CategoryBase != '' ? `/${Settings.CategoryBase}/:categoryName`
			: Settings.PermalinkStructure.replace('%postname%', ':categoryName');
		const tagPath = Settings.TagBase != '' ? `/${Settings.TagBase}/:tagName`
			: Settings.PermalinkStructure.replace('%postname%', ':tagName');

		return (
			<div className={style.LayoutMain}>
				<div className={style.LayoutWrapper}>
					<AppHeader />

					<Switch>
						<Route path={postPath} component={PostDetail} />
						<Route path={categoryPath} component={CategoryDetail} />
						<Route path={tagPath} component={TagDetail} />
						<Route path='/:pageSlug' component={PageDetail} />
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
