import * as React from 'react';
const style = require('./style');

import { MenuState } from 'Actions/Menus';
import { FormattedMessage } from 'react-intl';
import { TagsState } from 'Actions/Tags';
import Link from 'Controls/Link';

interface OwnProps {
}

type Props = OwnProps & {
	Menus: MenuState
	Tags: TagsState

	GetMenu: () => void
	GetTags: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Menus: { footer },
			Tags: { tags },

			GetMenu,
			GetTags
		} = this.props as Props

		if (!footer) {
			GetMenu();
		}

		if (tags.length == 0) {
			GetTags();
		}
	}

	render(): JSX.Element {
		const {
			Menus: { footer },
			Tags: { tags }
		} = this.props as Props;

		return (
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
						Bas Stroosnijder &copy; 2018 -
						Powered by <a href='https://wordpress.org/' target='blank'>Wordpress</a> &amp; <a href='https://github.com/strootje/wp-theme-scarecrow/' target='blank'>Scarecrow</a>
					</div>
				</div>
			</footer>
		);
	}
}
