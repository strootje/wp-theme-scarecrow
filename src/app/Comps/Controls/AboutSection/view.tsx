import { Location } from 'history';
import * as React from 'react';

import { PagesState } from 'Actions/Pages';
import { SettingsState } from 'Actions/Settings';
import Page from 'Models/Page';
import BaseComponent from 'Partials/BaseComponent';

import Section from 'Partials/Section/view';

// import * as Styles from './style.scss';
const Styles = require('./style');

export interface DispatchProps {
	GetPageById: (pageId: number) => Promise<any>
}

type OwnProps = React.HTMLAttributes<AboutSection> & {
};

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
	Pages: PagesState
	location: Location
};

export default class AboutSection extends BaseComponent<OwnProps, Props> {
	async componentWillMount(): Promise<void> {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages,

			GetPageById
		} = this.props;

		if (!Pages.some(page => page.PageId == PageIdForFooterAboutSection)) {
			await GetPageById(PageIdForFooterAboutSection);
		}
	}

	render(): JSX.Element | null {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages,
			location
		} = this.props;

		let page: null | Page = null;
		if (Pages.some(page => page.PageId == PageIdForFooterAboutSection && location.pathname.search(page.Uri) < 0)) {
			page = Pages.filter(page => page.PageId == PageIdForFooterAboutSection)[0];
		}

		if (!page) {
			return null;
		}

		return (
			<Section className={Styles.AboutSection} hero>
				<Section.Row>
					<article>
						<header><h3>{page.Title}</h3></header>

						<div dangerouslySetInnerHTML={{ __html: page.Content }} />

						<footer></footer>
					</article>
				</Section.Row>
			</Section>
		);
	}
}
