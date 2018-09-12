import * as React from 'react';
const style = require('./style');

import Page from 'Models/Page';
import { FormattedMessage } from 'react-intl';
import { SettingsState } from 'Actions/Settings';
import { PagesState } from 'Actions/Pages';
import { TagsState } from 'Actions/Tags';
import { MenuState } from 'Actions/Menus';
import Link from 'Controls/Link';
import { Location } from 'history';

interface OwnProps {
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
	Settings: SettingsState
	Pages: PagesState
	Tags: TagsState
	Menus: MenuState
	location: Location

	GetPageById: ( pageId: number ) => void
	GetTags: () => void
	GetSitemap: () => void
	GetSocialLinks: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages: { pages },
			Tags: { tags },
			Menus: { sitemap, footer },

			GetPageById,
			GetTags,
			GetSitemap,
			GetSocialLinks
		} = this.props as Props;

		if (!pages.some(page => page.PageId == PageIdForFooterAboutSection)) {
			GetPageById(PageIdForFooterAboutSection);
		}

		if (tags.length == 0) {
			GetTags();
		}

		if (!sitemap) {
			GetSitemap();
		}

		if (!footer) {
			GetSocialLinks();
		}
	}

	render(): JSX.Element {
		const {
			Settings: { PageIdForFooterAboutSection },
			Pages: { pages },
			Tags: { tags },
			Menus: { sitemap, footer },
			location
		} = this.props as Props;

		let page: null | Page = null;
		if (pages.some(page => page.PageId == PageIdForFooterAboutSection && location.pathname.search(page.Uri) < 0)) {
			page = pages.filter(page => page.PageId == PageIdForFooterAboutSection)[0];
		}

		return (
			<div>
				{page && <section className={style.FooterAbout}>
					<div className={style.FooterMain}>
						<article className={style.FooterRow}>
							<header>
								<h3>{page.Title}</h3>
							</header>

							<div dangerouslySetInnerHTML={{ __html: page.Content }} />

							<footer>
							</footer>
						</article>
					</div>
				</section>}

				<footer className={style.FooterMain}>
					<div className={style.FooterRow}>
						{tags && <div className={style.FooterTags}>
							<h5><FormattedMessage id='footer.tags.title' /></h5>
							<ul className={style.FooterTagsList}>{tags.sort((a, b) => a.Count - b.Count).map(item =>
								<li className={style.FooterTagsListItem} key={item.Key}><Link to={item.Link}><code>{item.Name}</code></Link></li>
							)}</ul>
						</div>}

						{footer && <div className={style.FooterSocial}>
							<h5>{footer.Name}</h5>
							<ul className='fa-ul'>{footer.Items.map(item =>
								<li key={item.Key}>
									<span className='fa-li'><i className={item.CssClasses}></i></span>
									<Link to={item.Link} target={item.Target}>{item.Label}</Link>
								</li>
							)}</ul>
						</div>}
					</div>

					<div className={style.FooterRow}>
						<div className={style.FooterLegal}>
							{sitemap && sitemap.Items.map(item => (
								<span key={item.Key}><Link to={item.Link} target={item.Target}>{item.Label}</Link></span>
							))}
							<span>Bas Stroosnijder &copy; 2018</span>
							<span>Powered by <a href='https://wordpress.org/' target='blank'>Wordpress</a> &amp; <a href='https://github.com/strootje/wp-theme-scarecrow/' target='blank'>Scarecrow</a></span>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
