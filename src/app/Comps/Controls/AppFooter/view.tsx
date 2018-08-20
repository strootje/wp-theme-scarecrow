import * as React from 'react';
const style = require('./style');

import { FormattedMessage } from 'react-intl';
import { ViewDataState } from 'Actions/ViewData';

interface OwnProps {
}

interface StateProps {
	GetMenu: () => void,
	ViewData: ViewDataState
}

type Props = OwnProps & StateProps;

export default class extends React.Component<OwnProps, {}> {
	componentWillMount() {
		const {
			GetMenu
		} = this.props as Props

		GetMenu();
	}

	render(): JSX.Element {
		const {
			ViewData: { menus: { footer }}
		} = this.props as Props;

		return (
			<footer className={style.FooterMain}>
				<div className={style.FooterRow}>
					<div className={style.FooterTags}>
						<h5><FormattedMessage id='footer.tags.title' /></h5>
					</div>

					{footer && <div className={style.FooterSocial}>
						<h5><FormattedMessage id={footer.Name} /></h5>
						<ul>{footer.Items.map(item =>
							<li key={item.Key}>{item.Label}</li>
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
