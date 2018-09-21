import * as React from 'react';

import { MenuState } from 'Actions/Menus';
import { TagsState } from 'Actions/Tags';
import Link from 'Controls/Link';
import BaseComponent from 'Partials/BaseComponent';

import Section from 'Partials/Section/view';
import { FormattedDate, FormattedMessage } from 'react-intl';

import * as Styles from './style.scss';

export interface DispatchProps {
	GetTags: () => Promise<any>
	GetSitemap: () => Promise<any>
	GetSocialLinks: () => Promise<any>
}

type OwnProps = React.HTMLAttributes<Footer> & {
}

type Props = OwnProps & DispatchProps & {
	Tags: TagsState
	Menus: MenuState
};

export default class Footer extends BaseComponent<OwnProps, Props> {
	async componentWillMount(): Promise<void> {
		const {
			Tags,
			Menus: { sitemap, footer },

			GetTags,
			GetSitemap,
			GetSocialLinks
		} = this.props;

		const tasks: Promise<any>[] = [];

		if (Tags.length == 0) {
			tasks.push(GetTags());
		}

		if (!sitemap) {
			tasks.push(GetSitemap());
		}

		if (!footer) {
			tasks.push(GetSocialLinks());
		}

		await Promise.all(tasks);
	}

	render(): JSX.Element {
		const {
			Tags,
			Menus: { sitemap, footer },
		} = this.props;

		return (
			<footer>
				<Section hero>
					<Section.Row>
						<Section.Column columns='eight'>
							{Tags && <div>
								<h5><FormattedMessage id='footer.tags.title' /></h5>
								<ul className={Styles.Footer__TagsList}>{Tags.sort((a, b) => a.Count - b.Count).map(item =>
									<li key={item.Key}><Link to={item.Link}><code>{item.Name}</code></Link></li>
								)}</ul>
							</div>}
						</Section.Column>

						<Section.Column columns='four'>
							{footer && <div>
								<h5>{footer.Name}</h5>
								<ul className='fa-ul'>{footer.Items.map(item =>
									<li key={item.Key}>
										<span className='fa-li'><i className={item.CssClasses}></i></span>
										<Link to={item.Link} target={item.Target}>{item.Label}</Link>
									</li>
								)}</ul>
							</div>}
						</Section.Column>
					</Section.Row>
				</Section>

				<Section>
					<Section.Row>
						<Section.Column className={Styles.Footer__Legal}>
							{sitemap && sitemap.Items.map(item => (
								<span key={item.Key}><Link to={item.Link} target={item.Target}>{item.Label}</Link></span>
							))}

							{/* TODO: Fetch username via graphql */}
							<span>Bas Stroosnijder &copy; <FormattedDate value={new Date()} year='numeric' /></span>

							<span><FormattedMessage id='footer.legal.powered.text' values={{
								wordpress: <a href='https://wordpress.org/' target='blank'>Wordpress</a>,
								theme: <a href='https://github.com/strootje/wp-theme-scarecrow/' target='blank'>Scarecrow</a>
							}} /></span>
						</Section.Column>
					</Section.Row>
				</Section>
			</footer>
		);
	}
}
