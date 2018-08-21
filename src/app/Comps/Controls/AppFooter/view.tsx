import * as React from 'react';
const style = require('./style');

import { FormattedMessage } from 'react-intl';
import { ViewDataState } from 'Actions/ViewData';
import { TagsState } from 'Actions/Tags';
import Link from 'Controls/Link';

interface OwnProps {
}

interface StateProps {
	ViewData: ViewDataState
	Tags: TagsState

	GetMenu: () => void
	GetTags: () => void
}

type Props = OwnProps & StateProps;

export default class extends React.Component<OwnProps, {}> {
	componentWillMount() {
		const {
			ViewData: { menus: { footer }},
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
			ViewData: { menus: { footer }},
			Tags: { tags }
		} = this.props as Props;

		return (
			<footer className={style.FooterMain}>
				<div className={style.FooterRow}>
					{tags && <div className={style.FooterTags}>
						<h5><FormattedMessage id='footer.tags.title' /></h5>
						<ul>{tags.map(item =>
							<li key={item.Key}>{item.Name}</li>
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
