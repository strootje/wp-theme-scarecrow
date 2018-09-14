import { Location } from 'history';
import * as React from 'react';

import { PagesState } from 'Actions/Pages';
import { SettingsState } from 'Actions/Settings';
import Page from 'Models/Page';

import Section from 'Partials/Section/view';

// import * as Styles from './style.scss';
const Styles = require('./style');

type OwnProps = React.HTMLAttributes<AboutSection> & {
}

export interface DispatchProps {
	GetPageById: (pageId: number) => void
}

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
	Pages: PagesState
	location: Location
};

export default class AboutSection extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages: { pages },

			GetPageById
		} = this.props as Props;

		if (!pages.some(page => page.PageId == PageIdForFooterAboutSection)) {
			GetPageById(PageIdForFooterAboutSection);
		}
	}

	render(): JSX.Element | null {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages: { pages },
			location
		} = this.props as Props;

		let page: null | Page = null;
		if (pages.some(page => page.PageId == PageIdForFooterAboutSection && location.pathname.search(page.Uri) < 0)) {
			page = pages.filter(page => page.PageId == PageIdForFooterAboutSection)[0];
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
